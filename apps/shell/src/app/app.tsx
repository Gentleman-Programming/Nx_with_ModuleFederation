import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';
import { useCharactersContext } from '@hagamos-un-microfront/shared';

const Characters = React.lazy(() => import('characters/Module'));

export function App() {
  const { characters } = useCharactersContext();

  return (
    <React.Suspense fallback={null}>
      {!characters.length ? (
        <h2>No Characters</h2>
      ) : (
        <h2>Characters: {JSON.stringify(characters)}</h2>
      )}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/characters">Characters</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="shell" />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
