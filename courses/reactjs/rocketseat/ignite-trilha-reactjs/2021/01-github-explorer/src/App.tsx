import { Counter } from './components/Counter';
import { RepositoryList } from './components/RepositoryList';

import './styles/globals.scss';

export function App() {
  return (
    // <></> Fragment
    <> 
      <RepositoryList />
      <Counter />
    </>
  )
}