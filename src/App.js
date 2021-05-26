import "./App.css";
import EmailAddress from "./components/EmailAddress";
import Home from "./components/Home";
import Container from "./components/Container";

function App() {
  return (
    <div className="App">
      <Container />
      <Home />
      <EmailAddress />
    </div>
  );
}

export default App;
