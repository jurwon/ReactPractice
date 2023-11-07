import logo from "./logo.svg";
import "./App.css";
import FuncTest from "./Component/FuncTest";
import ClassTest from "./Component/ClassTest";
import Test from "./Component/test";
import MyComp from "./Component/MyComp";
import MyCompPublicFunction from "./Component/MyCompPublicFunction";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Body from "./Component/Body";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <FuncTest />
      <ClassTest />
      <Test />
      {/* 자식컴포넌트에게 props.name전달 */}
      {/* <MyComp name="sjw" pw="1234" /> */}
      <MyComp name="sjw" pw="1234">
        여긴 MyComp
      </MyComp>

      <MyCompPublicFunction name="sjw" pw="1234">
        여긴 MyCompPublicFunction
      </MyCompPublicFunction>
      <Footer />
    </div>
  );
}

export default App;
