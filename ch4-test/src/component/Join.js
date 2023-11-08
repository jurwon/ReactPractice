import React from "react";
import { Avatar } from "antd";
import { useState, useRef } from "react";

const Join = () => {
  const [Image, setImage] = useState("");
  const [File, setFile] = useState("");

  //input태그 접근 위한 ref속성
  const fileInput = useRef(null);

  //이벤트 핸들러 추가, 사진 변경시 동작
  const onChangeImage = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    } else {
      //취소됐다면 -> 기본 프로필 사진
      setImage(
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      );
      return;
    }

    //선택된 사진을 결과 뷰에 출력
    const reader = new FileReader();
    reader.onload = () => {
      //reader.readyState
      //0:비어있는 상태
      //1:로딩 중
      //2:로딩 완료
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    //파일 데이터를 url로 읽어오는 함수
    reader.readAsDataURL(e.target.files[0]);
  };

  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    gender: "",
    birth: "",
  });

  // 비구조화 할당
  const { email, password, name, gender, birth } = form;

  const onChangeForm = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(
      "email: " +
        email +
        ", password : " +
        password +
        "name: " +
        name +
        ", gender : " +
        gender +
        ", birth : " +
        birth
    );
    setForm({
      email: "",
      password: "",
      name: "",
      gender: "",
      birth: "",
    });
  };

  // 키보드에서 엔터 키 입력시, 클릭 이벤트 호출 연결 확인.
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>프로필 이미지 아바타 뷰 사용</h1>
      <Avatar
        src={Image}
        size={200}
        onClick={() => fileInput.current.Click()}
      />
      <input
        type="file"
        style={{ display: "none" }}
        accept="image/jpg, image/png, image/jpeg"
        name="profileImg"
        onChange={onChangeImage}
        ref={fileInput}
      />

      <h2>이메일 : {email}</h2>
      <h2>패스워드 : {password}</h2>
      <h2>이름 : {name}</h2>
      <h2>성별 : {gender}</h2>
      <h2>생일 : {birth}</h2>

      <div>
        <input
          type="text"
          name="email"
          value={email}
          onChange={onChangeForm}
          onKeyPress={onKeyPress}
          placeholder="email"
        />
      </div>
      <div>
        <input
          name="password"
          value={password}
          onChange={onChangeForm}
          onKeyPress={onKeyPress}
          type="password"
          placeholder="password"
        />
      </div>
      <div>
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChangeForm}
          onKeyPress={onKeyPress}
          placeholder="name"
        />
      </div>

      <div>
        <select name="gender" value={gender} onChange={onChangeForm}>
          <option key={""}></option>
          <option key={"남성"}>남성</option>
          <option key={"여성"}>여성</option>
        </select>
      </div>

      <input name="birth" type="date" value={birth} onChange={onChangeForm} />

      <div>
        <button onClick={onClick}>확인</button>
      </div>
    </div>
  );
};

export default Join;
