import React from "react";
import Axios from "axios";

export default function Dropdown({ categoryList, clickHandler }) {
  return (
    <div>
      <ul style={{ listStyleType: "none", color: "white" }}>
        {categoryList.map(e => {
          return (
            <p onClick={evt => clickHandler(e)} key={e}>
              {e}
            </p>
          );
        })}
      </ul>
    </div>
  );
}
