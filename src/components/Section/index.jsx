import { useNavigate } from "react-router-dom"

import { formatDate, capitalizeFirstLetter } from "../../utils/dayConversion"

import { CardTask } from "../CardTask"

import { Container } from "./styles"

export function Section({ data }) {
  const title = capitalizeFirstLetter(formatDate(data.date))

  return (
    <Container>
      <h2>{title}</h2>

      <div>
        {data &&
          data.tasks.map((task) => (
            <CardTask key={String(task.id)} data={task} />
          ))}
      </div>
    </Container>
  )
}
