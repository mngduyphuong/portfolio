import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter as Router } from "react-router-dom";

//components
import WebHeader from "./components/WebHeader";
import PageTransition from "./components/PageTransition";
import StairTransition from "./components/StairTransition";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router basename="/portfolio">
        <WebHeader></WebHeader>
        <StairTransition></StairTransition>
        <PageTransition></PageTransition>
      </Router>
    </ThemeProvider>
  );
}

export default App;
