import { Route, Switch } from "wouter";
import { ThemeProvider } from "next-themes";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import Services from "./pages/Services/Services.jsx";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/servicios" component={Services} />
        </Switch>
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
