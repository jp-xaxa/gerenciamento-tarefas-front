import React, { useState } from "react"
import PopupContext from "./PopupContext"
import { Popups } from "../components/Popups"

export const PopupProvider = ({ children }) => {
  const [popups, setPopups] = useState([])

  const showPopup = (message, secondMessage = "") => {
    const id = new Date().getTime()
    setPopups((prevPopups) => [...prevPopups, { id, message, secondMessage }])

    setTimeout(() => {
      hidePopup(id)
    }, 4000)
  }

  const hidePopup = (id) => {
    setPopups((prevPopups) => prevPopups.filter((popup) => popup.id !== id))
  }

  return (
    <PopupContext.Provider value={{ showPopup, hidePopup }}>
      {children}
      {popups && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            alignContent: "center",
            justifyContent: "start",
            position: "fixed",
            top: "5%",
            left: "5%",
          }}
        >
          {popups.map((popup, index) => (
            <Popups
              key={index}
              message={popup.message}
              secondMessage={popup.secondMessage}
              onClose={() => hidePopup(popup.id)}
            />
          ))}
        </div>
      )}
    </PopupContext.Provider>
  )
}
