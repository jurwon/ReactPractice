import { useState } from "react";

const EventHandler = () => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");

  const handleOnNameChange = (e) => {
    setName(e.target.value);
  };

  const handleOnTextChange = (e) => {
    setText(e.target.value);
  };
  const handleOnDateChange = (e) => {
    setDate(e.target.value);
  };
  const handleOnDropChange = (e) => {
    setGender(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={handleOnNameChange} placeholder="이름" />
      </div>

      <input type="date" value={date} onChange={handleOnDateChange} />

      <div>
        <select value={gender} onChange={handleOnDropChange}>
          <option key={""}></option>
          <option key={"남성"}>남성</option>
          <option key={"여성"}>여성</option>
        </select>
      </div>

      <textarea value={text} onChange={handleOnTextChange} />
      <div>{text}</div>
    </div>
  );
};

export default EventHandler;
