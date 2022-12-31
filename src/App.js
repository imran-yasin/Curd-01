import MyApp from "./Component/Create";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <MyApp />
      </div>
    </ThemeProvider>
  );
}

export default App;
