import { extendTheme } from "@chakra-ui/react"
import { ButtonStyles as Button, TextStyles as Text } from "./components/button"

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const customTheme = extendTheme({
  config,
  // Whatever you pass here will be added to the colors not replace it
  colors: {
    primary: "#845EC2",
    secondary: "#FF6F91",
    highlight: "#00C9A7",
    warning: "#FFC75F",
    danger: "#C34A36",
  },
  components: {
    Button,
    Text,
  },
})

export default customTheme
