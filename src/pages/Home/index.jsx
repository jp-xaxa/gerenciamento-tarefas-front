import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"

import { FiSearch, FiPlus } from "react-icons/fi"

import { Menu } from "../../components/Menu"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"

import { Container, Content, Header, List } from "./styles"

export function Home() {
  const [search, setSearch] = useState("")
  const [tasks, setTasks] = useState([])

  const navigate = useNavigate()

  function handleNewTask() {
    navigate("/new-task")
  }

  useEffect(() => {
    async function fetchTasks() {
      const response = await api.get(`/tasks?title=${search}`, {
        withCredentials: true,
      })
      setTasks(response.data)
    }

    fetchTasks()
  }, [search])

  return (
    <Container>
      <Menu />

      <Content>
        <Header>
          <h1>Minhas tarefas</h1>

          <div>
            <Input
              icon={FiSearch}
              placeholder="Pesquisar tarefa..."
              onChange={(e) => setSearch(e.target.value)}
            />

            <Button title="Nova tarefa" icon={FiPlus} onClick={handleNewTask} />
          </div>
        </Header>

        <List>
          {tasks &&
            tasks.map((task, index) => (
              <Section key={String(index)} data={task} />
            ))}
        </List>
      </Content>
    </Container>
  )
}
