import Login from './Pages/Login';
import StartGame from './Pages/StartGame';
import HomePage from './Pages/Home';
import './styles/App.css';
import { Route, Routes } from "react-router-dom";
import Play from './Pages/Play';
import Finish from './Pages/Finish';
import History from './Pages/History';

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" exact element={ <Login /> } />
      <Route path="/start" exact element={ <StartGame /> } />
      <Route element={ <HomePage /> } path='/home' />
      <Route path="/play" element={ <Play /> } />
      <Route path="/finish" element={ <Finish /> } />
      <Route path="/history" element={ <History /> } />
    </Routes>
    </div>
  );
}

export default App;
