import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { CharacterGrid } from "./components/characters/CharacterGrid";
import { Search } from "./components/ui/Search";
import { URL } from "./enums/index";

function App() {
  const [characters, setCharacters] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  let offset = 2;

  const appBckg = {
    backgroundColor: "#F5F5F5"
  }

  useEffect(() => {
    setIsLoading(true);
    try {
      const fetchCharacters = async (url: string) => {
        const {
          data: { results },
        } = await axios(`${url}`);
        setCharacters(results);
        setIsLoading(false);
      };

      query === ""
        ? fetchCharacters(`${URL.urlByPage}`)
        : fetchCharacters(`${URL.urlByName}${query}`);
    } catch (error) {
      return;
    }
  }, [query]);

  const fetchCharactersMore = async () => {
    try {
      const {
        data: { results },
      } = await axios(
        `https://rickandmortyapi.com/api/character/?page=${offset}`
      );
      const newCharacters: Object[] = [];
      results.forEach((character: Object) => newCharacters.push(character));
      setCharacters((prevState: Object[]) => [
        ...new Set([...prevState, ...newCharacters]),
      ]);
      offset++;
    } catch (error) {}
  };

  const handleScroll = useCallback((e: any) => {
    window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight && fetchCharactersMore();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {};
  }, [handleScroll]);

  return (
    <>
      <Search getQuery={(query: string) => setQuery(query)} />
      <div style={appBckg}>
        <CharacterGrid isLoading={isLoading} characters={characters} />
      </div>
    </>
  );
}

export default App;
