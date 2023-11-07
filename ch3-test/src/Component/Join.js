import { useState } from "react";

const Join = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [birth, setBirth] = useState("");

  const [state, setState] = useState({
    email: "",
    password: "",
    name: "",
    gender: "",
    birth: "",
  });

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onGenderChange = (e) => {
    setGender(e.target.value);
  };

  const onBirthChange = (e) => {
    setBirth(e.target.value);
  };

  const handleOnChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <input value={email} onChange={onEmailChange} placeholder="email" />
      </div>
      <div>
        <input
          value={password}
          onChange={onPasswordChange}
          type="password"
          placeholder="password"
        />
      </div>
      <div>
        <input value={name} onChange={onNameChange} placeholder="name" />
      </div>

      <div>
        <select value={gender} onChange={onGenderChange}>
          <option key={""}></option>
          <option key={"남성"}>남성</option>
          <option key={"여성"}>여성</option>
        </select>
      </div>

      <input type="date" value={birth} onChange={onBirthChange} />

      <div>
        <button>로그인</button>
      </div>
    </div>
  );
};

export default Join;
