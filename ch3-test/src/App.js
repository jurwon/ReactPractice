import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Body from "./Component/Body";
import Count from "./Component/Count";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Count />
      <Footer />
    </div>
  );
}

export default App;
