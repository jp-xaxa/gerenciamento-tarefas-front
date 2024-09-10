import { useEffect, useState } from "react"

import { TbEye, TbEyeClosed } from "react-icons/tb"
//import { Spin } from "../Spin"

import { Container } from "./styles"

export function Input({ icon: Icon, isLoading = false, ...rest }) {
  const [controlViewPassword, setControlViewPassword] = useState(false)
  const [controlTypeInput, setControlTypeInput] = useState(rest.type)

  function handleControlPassword() {
    setControlViewPassword(!controlViewPassword)
  }

  useEffect(() => {
    function fetchType() {
      if (controlViewPassword && rest.type === "password") {
        setControlTypeInput("text")
      } else {
        setControlTypeInput(rest.type)
      }
    }

    fetchType()
  }, [controlViewPassword])

  return (
    <Container>
      {Icon && <Icon />}
      <input {...rest} type={controlTypeInput} />

      {rest.type === "password" &&
        (controlViewPassword ? (
          <TbEyeClosed
            className="controlPassword"
            onClick={handleControlPassword}
          />
        ) : (
          <TbEye className="controlPassword" onClick={handleControlPassword} />
        ))}

      {/*isLoading && <Spin />*/}
    </Container>
  )
}
