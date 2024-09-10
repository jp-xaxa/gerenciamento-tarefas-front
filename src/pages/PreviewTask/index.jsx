import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { api } from "../../services/api"

import { Menu } from "../../components/Menu"
import { Content } from "../../components/Content"
import { Button } from "../../components/Button"

import { Container, Task, Options } from "./styles"

export function PreviewTask() {
  const [task, setTask] = useState(null)

  const params = useParams()
  const navigate = useNavigate()

  function handleEdit(id) {
    navigate(`/edit-task/${id}`)
  }

  async function handleRemoveTask() {
    try {
      const userConfirmation = confirm("Deseja excluir a tarefa mesmo?")

      if (userConfirmation) {
        await api.delete(`/tasks/${params.id}`, {
          withCredentials: true,
        })
        navigate("/")
      }
    } catch (error) {
      if (error.response.data.message) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível deletar essa nota.")
      }
    }
  }

  useEffect(() => {
    async function fetchTask() {
      const response = await api.get(`/tasks/${params.id}`, {
        withCredentials: true,
      })
      setTask(response.data)
      console.log(response.data)
    }

    fetchTask()
  }, [])

  return (
    <Container>
      <Menu />
      <Content title="Página de visualização da task" back>
        {task && (
          <Task>
            <div>
              <h1>Título:</h1>
              <p>{task.title}</p>
            </div>

            <div>
              <h1>Data final:</h1>
              <p>{task.date}</p>
            </div>

            <div>
              <h1>Descrição:</h1>
              <p>{task.description}</p>
            </div>

            {task.subTasks.length > 0 && (
              <div>
                <h1>Sub-Tarefas:</h1>

                {task.subTasks.map((task, index) => (
                  <p key={String(index)}>{task.description}</p>
                ))}
              </div>
            )}

            <Options>
              <Button title="Editar" onClick={() => handleEdit(params.id)} />
              <Button title="Excluir" onClick={handleRemoveTask} />
            </Options>
          </Task>
        )}
      </Content>
    </Container>
  )
}
