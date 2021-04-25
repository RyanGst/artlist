import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Routes from "./routes/routes";

function App() {
  return (
    <BrowserRouter >
      <Header/>
      <Routes/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;