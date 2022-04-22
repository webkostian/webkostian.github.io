import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useMarvelService from "../../../services/MarvelService";
import Spinner from "../../spinner/Spinner";
import ErrorMessage from "../../errorMessage/ErrorMessage";
import "./singleComicPage.scss";

const SingleComicPage = () => {
  const [comic, setComic] = useState(null);
  const { loading, error, getComic, clearError } = useMarvelService();
  const { comicId } = useParams();

  useEffect(() => {
    updateComic();
  }, [comicId]);

  const updateComic = () => {
    if (!comicId) {
      return;
    }
    clearError();
    getComic(comicId).then(onComicLoaded);
  };

  const onComicLoaded = (comic) => {
    setComic(comic);
  };
  
  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !comic) ? <View comic={comic} /> : null;

  return (
    <>
      {errorMessage}
      {spinner}
      {content}
    </>
  );
};

const View = ({comic}) => {
  const { name, description, thumbnail, pageCount, language, price } = comic;
  let imgStyle = { objectFit: "cover" };

  if (
    thumbnail ===
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ||
    "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif"
  ) {
    imgStyle = { objectFit: "contain" };
  }

  return (
    <div className="single-comic">
      <img
        src={thumbnail}
        alt={name}
        className="single-comic__img"
        style={imgStyle}
      />
      <div className="single-comic__info">
        <h2 className="single-comic__name">name</h2>
        <p className="single-comic__descr">{description}</p>
        <p className="single-comic__descr">{pageCount}</p>
        <p className="single-comic__descr">Language: {language}</p>
        <div className="single-comic__price">{price}</div>
      </div>
      <Link to="/comics" className="single-comic__back">
        Back to all
      </Link>
    </div>
  );
};

export default SingleComicPage;
