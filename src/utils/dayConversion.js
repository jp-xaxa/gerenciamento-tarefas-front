import dayjs from "dayjs"
import "dayjs/locale/pt-br"
import relativeTime from "dayjs/plugin/relativeTime"
import localizedFormat from "dayjs/plugin/localizedFormat"

dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)
dayjs.locale("pt-br")

export function formatDate(dateString) {
  const date = dayjs(dateString).startOf("day")
  const now = dayjs().startOf("day")
  const tomorrow = now.add(1, "day")
  const nextWeek = now.add(7, "day")

  if (date.isSame(now, "day")) {
    return "Hoje"
  } else if (date.isSame(tomorrow, "day")) {
    return "Amanhã"
  } else if (date.isAfter(now) && date.isBefore(nextWeek)) {
    return `Em ${date.diff(now, "day")} dias`
  } else if (date.isBefore(now)) {
    return `Já passou ${now.diff(date, "day")} dias`
  } else {
    return date.fromNow()
  }
}

export function capitalizeFirstLetter(string) {
  if (!string) return ""
  return string.charAt(0).toUpperCase() + string.slice(1)
}
