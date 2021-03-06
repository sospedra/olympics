import { flag } from "country-emoji"

export const createFlag = (name: string) => {
  switch (name) {
    case "ROC":
      return "๐ท๐บ"
    case "Republic of Korea":
      return "๐ฐ๐ท"
    case "Great Britain":
      return "๐ฌ๐ง"
    case "Chinese Taipei":
      return "๐น๐ผ"
    case "Hong Kong, China":
      return "๐ญ๐ฐ"
    case "Cรดte d'Ivoire":
      return "๐จ๐ฎ"
    default:
      return flag(name)
  }
}
