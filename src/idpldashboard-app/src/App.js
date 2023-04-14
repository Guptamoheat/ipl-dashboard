import './App.scss';
import { MatchPage } from './pages/MatchPage';

import { TeamPage } from './pages/TeamPage';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { HashRouter } from 'react-router-dom';
function App() {

  return (
    <div className="App">

      <HashRouter>
      <Routes>
          <Route path="/teams/:teamName" element = {<TeamPage></TeamPage>}/>
          <Route path="/teams/:teamName/matches/:year" element = {<MatchPage></MatchPage>}/>
          <Route path="/teams" element = {<HomePage></HomePage>}/>
          <Route path="/" element = {<HomePage></HomePage>}/>
      </Routes>
      </HashRouter>
      
    </div>
  );
}

export default App;
