<<<<<<< HEAD
import React from "react";

const Options = ({ options, onOptionClick }) => {
  return (
    <div className="options-container">
      {options.map((option, index) => (
        <button key={index} onClick={() => onOptionClick(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
=======
import React from "react";

const Options = ({ options, onOptionClick }) => {
  return (
    <div className="options-container">
      {options.map((option, index) => (
        <button key={index} onClick={() => onOptionClick(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
>>>>>>> 5cf559b14b54d8d51c043b612066d1264aca4594
