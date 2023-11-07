import logo from "./logo.svg";
import "./App.css";
import FuncTest from "./Component/FuncTest";
import ClassTest from "./Component/ClassTest";
import Test from "./Component/test";
import MyComp from "./Component/MyComp";

const Header = () => {
  return (
    <header>
      <h1>Header</h1>
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
      {/* 자식컴포넌트에게 props.name전달 */}
      <MyComp name="sjw" pw="1234" />
    </div>
  );
}

export default App;
