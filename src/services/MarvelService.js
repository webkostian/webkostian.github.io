import md5 from "js-md5";
import useHttp from "../hooks/http.hooks";

const useMarvelService = () => {
  const { loading, error, request, clearError } = useHttp();

  const _apiBase = "https://gateway.marvel.com:443/v1/public/";
  const _baseOffset = 210;
  const _charLimit = 9;

  const getTemporaryKey = (url) => {
    const publickey = process.env.REACT_APP_PUB_KEY;
    const privatekey = process.env.REACT_APP_PRV_KEY;
    const ts = new Date().getTime();
    const stringToHash = ts + privatekey + publickey;
    const hash = md5(stringToHash);
    const prefix = url.indexOf("?") === -1 ? "?" : "&";
    return `${prefix}ts=${ts}&apikey=${publickey}&hash=${hash}`;
  };

  const getAllCharacters = async (offset = _baseOffset) => {
    const url = `characters?orderBy=name&limit=${_charLimit}&offset=${offset}`;
    const tempKey = getTemporaryKey(url);
    const res = await request(`${_apiBase}${url}${tempKey}`);
    return res.data.results.map(_transformCharacter);
  };

  const getCharacter = async (id) => {
    const url = `characters/${id}`;
    const tempKey = getTemporaryKey(url);
    const res = await request(`${_apiBase}${url}${tempKey}`);
    return _transformCharacter(res.data.results[0]);
  };

  const getAllComics = async (offset = 0, limit = 8) => {
    const url = `comics?limit=${limit}&offset=${offset}`;
    const tempKey = getTemporaryKey(url);
    const res = await request(`${_apiBase}${url}${tempKey}`);
    return res.data.results.map(_transformComics);
  };

  const getComic = async (id) => {
    const url = `comics/${id}`;
    const tempKey = getTemporaryKey(url);
    const res = await request(`${_apiBase}${url}${tempKey}`);
    return _transformComics(res.data.results[0]);
}

  const _transformCharacter = (char) => {
    return {
      id: char.id,
      name: char.name,
      description: char.description
        ? `${char.description.slice(0, 210)}...`
        : "There is no description for this character",
      thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics: char.comics.items,
    };
  };

  const _transformComics = (comics, i) => {
    return {
      id: comics.id,      
      title: comics.title,
      description: comics.description || "There is no description",
      pageCount: comics.pageCount
        ? `${comics.pageCount} p.`
        : "No information about the number of pages",
      thumbnail: comics.thumbnail.path + "." + comics.thumbnail.extension,
      language: comics.textObjects.language || "en-us",
      price: comics.prices.price ? `${comics.prices.price}$` : "not available",
    };
  };

  return {
    loading,
    error,
    getAllCharacters,
    getCharacter,
    clearError,
    getAllComics,
    getComic,
  };
};

export default useMarvelService;
