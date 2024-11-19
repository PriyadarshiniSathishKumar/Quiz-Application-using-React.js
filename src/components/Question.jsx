<<<<<<< HEAD
import React from "react";
import Options from "./Options";

const Question = ({ data, onOptionClick }) => {
  return (
    <div className="question-container">
      <h2>{data.question}</h2>
      <Options options={data.options} onOptionClick={onOptionClick} />
    </div>
  );
};

export default Question;
=======
import React from "react";
import Options from "./Options";

const Question = ({ data, onOptionClick }) => {
  return (
    <div className="question-container">
      <h2>{data.question}</h2>
      <Options options={data.options} onOptionClick={onOptionClick} />
    </div>
  );
};

export default Question;
>>>>>>> 5cf559b14b54d8d51c043b612066d1264aca4594
