import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Questions = ({ title, info }) => {
  const [showinfo, setshowinfo] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setshowinfo(!showinfo)}>
          {" "}
          {showinfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>

      {showinfo && <p>{info}</p>}
    </article>
  );
};

export default Questions;
