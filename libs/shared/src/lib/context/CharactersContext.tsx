import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  FC,
} from 'react';

interface Character {
  id: number;
  name: string;
  species: string;
  image: string;
}

interface CharactersContextProps {
  characters: Character[];
  setCharacters: Dispatch<SetStateAction<Character[]>>;
}

const CharactersContext = createContext<CharactersContextProps | undefined>(
  undefined
);

interface CharactersProviderProps {
  children: ReactNode;
}

export const CharactersProvider: FC<CharactersProviderProps> = ({
  children,
}) => {
  const [characters, setCharacters] = useState<Character[]>([]);

  return (
    <CharactersContext.Provider value={{ characters, setCharacters }}>
      {children}
    </CharactersContext.Provider>
  );
};

export const useCharactersContext = (): CharactersContextProps => {
  const context = useContext(CharactersContext);
  if (!context) {
    throw new Error(
      'useCharactersContext must be used within a CharactersProvider'
    );
  }
  return context;
};
