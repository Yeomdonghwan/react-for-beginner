import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const getMoive = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data);
    console.log(json);
  };
  useEffect(() => {
    getMoive();
  }, []);
  return <h1>detail</h1>;
}
export default Detail;
