import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"
import { usePopup } from "../../hooks/PopupContext"
import dayjs from "dayjs"
import "dayjs/locale/pt-br"
import localizedFormat from "dayjs/plugin/localizedFormat"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { FaCheck } from "react-icons/fa"
import { ButtonText } from "../ButtonText"
import { Container, InfosTask, ListSubTasks, Check } from "./styles"

dayjs.extend(localizedFormat)

export function CardTask({ data }) {
  const [openSubTasks, setOpenSubTasks] = useState(false)
  const [finished, setFinished] = useState(data.finished)
  const formattedDate = dayjs(data.date).format("DD-MM-YYYY")
  const navigate = useNavigate()
  const { showPopup } = usePopup()

  function handleMenuSubTasks() {
    setOpenSubTasks(!openSubTasks)
  }

  function handlePreviewTask(id) {
    navigate(`/preview-task/${id}`)
  }

  async function handleToggleTask() {
    setFinished((prevFinished) => {
      const newFinished = prevFinished === 0 ? 1 : 0

      api
        .patch(
          `/tasks/finished/${data.id}`,
          {
            finished: newFinished,
          },
          {
            withCredentials: true,
          }
        )
        .then(() => {
          showPopup("Tarefa finalizada!")
        })
        .catch((error) => {
          showPopup("Erro ao atualizar o status da tarefa:", error)
        })

      return newFinished
    })
  }

  return (
    <Container $finished={finished === 1}>
      <div className="main">
        <InfosTask>
          <Check onClick={handleToggleTask} $finished={finished === 1}>
            {finished === 1 && <FaCheck />}
          </Check>

          <div onClick={() => handlePreviewTask(data.id)}>
            <p className="title">{data.title}</p>

            <footer>
              <p className="date">{formattedDate}</p> <span>-</span>
              {data.subTasks && data.subTasks.length > 0 ? (
                <p>0 de {data.subTasks.length}</p>
              ) : (
                <p>Sem sub-tarefas</p>
              )}
            </footer>
          </div>
        </InfosTask>

        {data.subTasks.length > 0 && (
          <div>
            {openSubTasks ? (
              <ButtonText icon={FiChevronUp} onClick={handleMenuSubTasks} />
            ) : (
              <ButtonText icon={FiChevronDown} onClick={handleMenuSubTasks} />
            )}
          </div>
        )}
      </div>

      {openSubTasks && (
        <ListSubTasks>
          {data.subTasks.map((task, index) => (
            <ol key={String(index)}>
              <li>
                <p>{task.description}</p>
              </li>
            </ol>
          ))}
        </ListSubTasks>
      )}
    </Container>
  )
}
