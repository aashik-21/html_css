import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container"></div>
      </BrowserRouter>
    </>
  );
}

export default App;
