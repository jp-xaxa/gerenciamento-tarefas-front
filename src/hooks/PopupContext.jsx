import { createContext, useContext } from "react"

const PopupContext = createContext()

export const usePopup = () => useContext(PopupContext)

export default PopupContext
