import Header from "./components/others/Header";
import { ThemeProvider } from "./components/ui/theme-provider";

function App() {
  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
      </ThemeProvider>
    </div>
  );
}

export default App;
