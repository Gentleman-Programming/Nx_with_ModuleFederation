import { CharactersList } from './components';

export function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Personajes de Rick y Morty
      </h1>
      <CharactersList />
    </div>
  );
}

export default App;
