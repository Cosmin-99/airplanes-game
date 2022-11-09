import './App.css';
import { Board } from './components/board/board';
import { GameHistoryContextProvider } from './contexts/games-history-context';

function App() {
  return (
    <GameHistoryContextProvider>
      <Board />
    </GameHistoryContextProvider>
  );
}

export default App;
