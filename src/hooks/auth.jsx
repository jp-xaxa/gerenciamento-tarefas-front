import { createContext, useContext, useState, useEffect } from "react"
import { api } from "../services/api"
import { usePopup } from "./PopupContext"

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  const { showPopup } = usePopup()

  async function signIn({ email, password }) {
    try {
      const response = await api.post(
        "/sessions",
        { email, password },
        { withCredentials: true }
      )
      const { user } = response.data

      localStorage.setItem("@taskease:user", JSON.stringify(user))

      setData({ user })
    } catch (error) {
      if (error.response?.data?.message) {
        showPopup(error.response.data.message)
      } else {
        showPopup("Não foi possível entrar! ", "Tente mais tarde.")
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@taskease:user")
    setData({})
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append("avatar", avatarFile)

        const response = await api.patch("/users/avatar", fileUploadForm, {
          withCredentials: true,
        })
        user.avatar = response.data.avatar
      }

      await api.put("/users", user, { withCredentials: true })

      localStorage.setItem("@taskease:user", JSON.stringify(user))

      setData({ user })
      showPopup("Perfil atualizado! ✅")
    } catch (error) {
      if (error.response?.data?.message) {
        showPopup(error.response.data.message)
      } else {
        showPopup("Não foi possível atualizar perfil.  ❌")
      }
    }
  }

  async function userDelete() {
    try {
      const userConfirmation = confirm("Deseja excluir a conta mesmo?")

      if (userConfirmation) {
        await api.delete("/users", { withCredentials: true })
        showPopup("Conta excluido com sucesso! ✅")
      }
    } catch (error) {
      if (error.response?.data?.message) {
        showPopup(error.response.data.message)
      } else {
        showPopup("Não foi possível atualizar perfil.  ❌")
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("@taskease:user")

    if (user) {
      setData({
        user: JSON.parse(user),
      })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, updateProfile, userDelete, user: data.user }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }

  return context
}

export { AuthProvider, useAuth }
