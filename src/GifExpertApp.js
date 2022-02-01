import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One punch"]);

  // const handleAdd = () => {
  //   setCategories([...categories, "new"]);
  // };
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {categories.map((categori, i) => {
          return <GifGrid key={categori} category={categori} />;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
