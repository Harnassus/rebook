import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "'Bai Jamjuree', sans-serif"
  },
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: 'white',
            borderRadius: '20px',
            "&.Mui-focusVisible": { backgroundColor: 'pink' }
          },
            
        }
      }
    }
  }
})

export default theme;