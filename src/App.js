import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Main from './components/Main';
import { Routes, Route } from 'react-router-dom'
import CommitteePage from './components/committees/CommitteePage';
import committees from './components/committees/committees.json';
import DeveloperTeam from './components/DeveloperTeam';
import NotFound from './components/NotFound';
import Crew from './components/Crew';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} /> 
        <Route path='/developers' element={<DeveloperTeam />} /> 
        <Route path='/ekibimiz' element={<Crew />} /> 
        <Route path='*' element={<NotFound />} />
        {
          Object.values(committees).map(committee => {
            if(!committee.isCommittee) return null;
            return (
              <Route path={committee.path} element={<CommitteePage
                props={committee}
              />} />
            ) 
          })
        }
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
