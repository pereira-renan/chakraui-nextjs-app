import { extendTheme } from "@chakra-ui/react"

const tables = extendTheme({
  components: {
    Text: {
      baseStyle: {
        fontWeight: "bold",
      },
      // Two sizes: sm and md
      sizes: {
        md: {
          fontSize: "md",
          px: 6, // <-- these values are tokens from the design system
          py: 4, // <-- these values are tokens from the design system
          textAlign: "center",
        },
      },
      variants: {
        solid: {
          bg: "red.500",
          color: "white",
        },
      },
      // The default size and variant values
      defaultProps: {
        size: "md",
        variant: "solid",
      },
    },
  },
})

export default tables
