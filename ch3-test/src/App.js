import logo from "./logo.svg";
import "./App.css";
import FuncTest from "./Component/FuncTest";
import ClassTest from "./Component/ClassTest";
import Test from "./Component/test";

const Header = () => {
  return (
    <header>
      <h1>header</h1>
    </header>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
      <FuncTest />
      <ClassTest />
      <Test />
    </div>
  );
}

export default App;
