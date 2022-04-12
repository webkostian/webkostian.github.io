import md5 from "js-md5";

export default class MarvelService {
  _apiBase = "https://gateway.marvel.com:443/v1/public/";
  _baseOffset = 210;
  _charLimit = 9;

  getTemporaryKey = (url) => {
    const publickey = process.env.REACT_APP_PUB_KEY;
    const privatekey = process.env.REACT_APP_PRV_KEY;
    const ts = new Date().getTime();
    const stringToHash = ts + privatekey + publickey;
    const hash = md5(stringToHash);
    const prefix = url.indexOf("?") === -1 ? "?" : "&";
    return `${prefix}ts=${ts}&apikey=${publickey}&hash=${hash}`;
  };

  getResource = async (url) => {
    const tempKey = this.getTemporaryKey(url);
    let res = await fetch(`${this._apiBase}${url}${tempKey}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  getAllCharacters = async (offset = this._baseOffset) => {
    const res = await this.getResource(
      `characters?orderBy=name&limit=${this._charLimit}&offset=${offset}`
    );
    console.dir(res.data.results);
    return res.data.results.map(this._transformCharacter);
  };

  getCharacter = async (id) => {
    const res = await this.getResource(`characters/${id}`);
    return this._transformCharacter(res.data.results[0]);
  };

  _transformCharacter = (char) => {
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
}
