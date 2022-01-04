import { extendTheme } from "@chakra-ui/react"
import { mode, darken, whiten } from "@chakra-ui/theme-tools"

export const ButtonStyles = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    main: (props) => ({
      bg: mode("red", "red")(props),
    }),
    navbar: (props) => ({
      bg: mode("gray.200", "black")(props),
      color: mode("black", "white")(props),
      _hover: {
        bg: mode(whiten("red", 20), darken("black", 20))(props),
        boxShadow: "md",
      },
    }),
    primary: (props) => ({
      bg: "primary",
      color: mode("white", "black")(props),
      _hover: {
        bg: mode(whiten("primary", 20), darken("primary", 20))(props),
        boxShadow: "md",
      },
    }),
    secondary: (props) => ({
      bg: "secondary",
      color: mode("white", "black")(props),
      _hover: {
        bg: mode(whiten("secondary", 20), darken("secondary", 20))(props),
        boxShadow: "md",
      },
    }),
    secondaryOutline: (props) => ({
      bg: "transparent",
      border: "1px solid",
      borderColor: "secondary",
      color: "secondary",
      transition: "all 200ms ease",
      _hover: {
        boxShadow: "md",
        transform: "scale(1.02)",
      },
    }),

    // default values for `size` and `variant`
    defaultProps: {},
  },
}
