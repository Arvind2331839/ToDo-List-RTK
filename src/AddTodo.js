import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "./features/todo/toDoSlider";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [content, setcontent] = useState("");
  
  const handleChange = (e) => {
    setcontent({
      ...content,
      [e.target.name]: e.target.value,
      [`${e.target.name}Error`]: null,
    });
  };
  const add = () => {
    if (content === "") {
      setcontent({ ...content, contentError: "You must write something!" });
      return;
    }
    dispatch(addToDo({ newContent: content }));
    setcontent({ ...content, content: "" });
  };
  // const { content, contentError } = state;

  return (
    <div className="container">
      <h2>Enter your Name</h2>
      <div className="form">
        <input type="text" value={content} name="content"onChange={handleChange}></input>
        <button type="button" className="button" onClick={add}>Add</button>
        {/* {contentError ? <div className="error">{contentError}</div> : null} */}
      </div>
    </div>
  );
};
export default AddTodo;
