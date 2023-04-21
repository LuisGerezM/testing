import { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [text, setText] = useState("");

  const handleTextChange = (newtext) => {
    setText(newtext);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Texto: {text}</p>
      <ChildComponent onTextChange={handleTextChange} />
    </div>
  );
};
export default ParentComponent;
