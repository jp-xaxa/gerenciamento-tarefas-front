import { Routes, Route } from "react-router-dom"

import { Home } from "../pages/Home"
import { Profile } from "../pages/Profile"
import { NewTask } from "../pages/NewTask"
import { PreviewTask } from "../pages/PreviewTask"
import { EditTask } from "../pages/EditTask"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/new-task" element={<NewTask />} />
      <Route path="/preview-task/:id" element={<PreviewTask />} />
      <Route path="/edit-task/:id" element={<EditTask />} />

      <Route path="*" element={<Home />} />
    </Routes>
  )
}
