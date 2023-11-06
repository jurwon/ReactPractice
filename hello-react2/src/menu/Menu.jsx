import React from "react";
import "./Menu.css";

function Menu({ data }) {
  return (
    <div>
      <h2>메뉴</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}원
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
