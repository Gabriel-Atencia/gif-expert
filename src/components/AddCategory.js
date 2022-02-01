import { useState } from "react";
import PropTypes from "prop-types";
const AddCategory = ({ setCategories }) => {
  const [useValue, setUseValue] = useState("");

  const handleInputChange = (e) => {
    setUseValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (useValue.trim() !== "") {
      setCategories((c) => [useValue, ...c]);
      setUseValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type={"text"}
        value={useValue}
        onChange={handleInputChange}
      ></input>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
