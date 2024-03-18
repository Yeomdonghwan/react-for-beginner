import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Movie({ id, title, coverImg, summary, genres }) {
  return (
    <div key={id}>
      <Link to={`/movie/${id}`}>
        <h2>{title}</h2>
      </Link>
      <img src={coverImg} alt={title} />
      <p>{summary}</p>
      <ul>
        {genres !== null ? genres.map((g) => <li key={g}>{g}</li>) : null}
      </ul>
    </div>
  );
}
Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.number.isRequired,
};
export default Movie;
