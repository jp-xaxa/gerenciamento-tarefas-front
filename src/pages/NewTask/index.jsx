import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { usePopup } from "../../hooks/PopupContext"
import { api } from "../../services/api"

import { FiArrowLeft, FiPlus, FiX } from "react-icons/fi"

import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { Button } from "../../components/Button"

import {
  Container,
  Content,
  Form,
  Field,
  Wrapper,
  InputDate,
  Add,
  List,
} from "./styles"

export function NewTask() {
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")

  const [listSubTask, setListSubTask] = useState([])
  const [newSubTask, setNewSubTask] = useState("")

  const navigate = useNavigate()
  const { showPopup } = usePopup()

  function handleBack() {
    navigate(-1)
  }

  function handleAddSubTask(event) {
    event.preventDefault()

    if (newSubTask.trim().length === 0) {
      return showPopup("Preencha alguma informação para adicionar na lista!")
    }

    setListSubTask((prevState) => [...prevState, newSubTask])
    setNewSubTask("")
  }

  function handleRemoveSubTask(deleted) {
    event.preventDefault()

    setListSubTask((prevState) => prevState.filter((task) => task !== deleted))
  }

  function handleSalveTask() {
    event.preventDefault()

    const currentDate = new Date()
    const taskDate = new Date(`${date}T00:00:00`)
    currentDate.setHours(0, 0, 0, 0)

    if (!title) {
      return showPopup("Você esqueceu de preencher o campo título!")
    }

    if (taskDate < currentDate) {
      return showPopup("Data inválida, esse dia já foi passado!")
    }

    if (!description) {
      return showPopup("Você esqueceu de preencher o campo descrição!")
    }

    if (newSubTask) {
      return showPopup(
        "O campo de subtarefas está preenchido!",
        "Remova o valor preenchido ou adicione na lista!"
      )
    }

    api
      .post(
        "/tasks",
        { title, date, description, listSubTask },
        {
          withCredentials: true,
        }
      )
      .then(() => {
        showPopup(
          "Tarefa salva com sucesso! 👍",
          "Você voltará para a página Home."
        )

        navigate("/")
      })
      .catch((error) => {
        if (error.response) {
          showPopup(error.response.data.message)
        } else {
          showPopup("Não foi possível cadastrar! ❌")
        }
      })
  }

  return (
    <Container>
      <Content>
        <ButtonText title="voltar" icon={FiArrowLeft} onClick={handleBack} />

        <Form>
          <h1>Nova tarefa</h1>

          <Field>
            <legend>Informações da tarefa</legend>

            <Wrapper>
              <div>
                <label htmlFor="title">Título da tarefa:</label>

                <Input
                  placeholder="Exemplo: organizar garagem"
                  id="title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div style={{ flex: "1" }}>
                <label htmlFor="data">Prazo para realização:</label>

                <InputDate
                  placeholder="Exemplo: 01/05/2024"
                  id="data"
                  type="date"
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </Wrapper>

            <Wrapper>
              <div>
                <label htmlFor="description">Descrição:</label>

                <Textarea
                  placeholder="Exemplo: Urgente"
                  id="description"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </Wrapper>
          </Field>

          <Field>
            <legend>Detalhamento</legend>

            <Wrapper style={{ alignItems: "end" }}>
              <div>
                <label htmlFor="step-by-step">
                  Sub-tarefas: <span>(opcional)</span>
                </label>

                <Input
                  placeholder="Digite sub-tarefas que possa ter..."
                  value={newSubTask}
                  onChange={(e) => setNewSubTask(e.target.value)}
                />
              </div>

              <Add onClick={handleAddSubTask}>
                <FiPlus />
              </Add>
            </Wrapper>

            {listSubTask && (
              <List>
                <ol>
                  {listSubTask.map((item, index) => (
                    <li>
                      <p>
                        <span>{index + 1}. </span> {item}
                      </p>
                      <ButtonText
                        icon={FiX}
                        onClick={(e) => handleRemoveSubTask(item)}
                      />
                    </li>
                  ))}
                </ol>
              </List>
            )}
          </Field>

          <Button title="Salvar" onClick={handleSalveTask} />
        </Form>
      </Content>
    </Container>
  )
}
