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
        <Route path="/aess" element={<CommitteePage
          props={committees.aess}
        />} />
        <Route path="/comsoc" element={<CommitteePage
          props={committees.comsoc}
        />} />

        <Route path="/cs" element={<CommitteePage
          props={committees.cs}
        />} />

        <Route path="/ea" element={<CommitteePage
          props={committees.ea}
        />} />

        <Route path="/embs" element={<CommitteePage
          props={committees.embs}
        />} />

        <Route path="/pes" element={<CommitteePage
          props={committees.pes}
        />} />

        <Route path="/ras" element={<CommitteePage
          props={committees.ras}
        />} />

        <Route path="/wie" element={<CommitteePage
          props={committees.wie}
        />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
