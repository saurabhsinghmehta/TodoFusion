import React from "react";
import "./checklist.css";
const checklist = ({ updatedTodo }) => {
  return (
    <div className="checklist section__padding">
      {/* BEM :-> block element modifier */}
      <input type="checkbox" />
      <p>{updatedTodo}</p>
    </div>
  );
};

export default checklist;
