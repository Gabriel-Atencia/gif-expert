import React from "react";
import PropTypes from "prop-types";
import useFetchGifs from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
// import { getGifs } from "../helpers/getGifs";

const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);

  const { data, loading } = useFetchGifs(category);

  // useEffect(() => {
  //   getGifs(category).then((imgs) => setImages(imgs));
  // }, []);

  return (
    <>
      <h2>{category}</h2>
      {loading ? "Cargando...." : "cargado"}
      <div className="card-grid">
        {data.map((i) => (
          <GifGridItem key={i.id} {...i} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string,
};
export default GifGrid;
