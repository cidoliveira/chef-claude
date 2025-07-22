import { useState, useRef } from "react";

export default function Form() {
  const [ingredients, setIngredients] = useState([]);
  const [inputIngredient, setInputIngredient] = useState("");
  const textInput = useRef("");

  function submitIngredient() {
    if (inputIngredient != "") {
      setIngredients([...ingredients, inputIngredient]);
      setInputIngredient("");
      textInput.current.value = "";
    }
  }

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="ingredient-input"
          name="ingredient"
          placeholder="e.g. oregano"
          type="text"
          ref={textInput}
          onChange={(event) => {
            setInputIngredient(event.target.value);
          }}
        />
        <button
          type="button"
          onClick={submitIngredient}
          className="add-ingredient"
        >
          + Add Item
        </button>
      </form>
      <ul className="ingredient-list">
        {ingredients.map((i) => {
          return <li className="list-item">{i}</li>;
        })}
      </ul>
    </>
  );
}
