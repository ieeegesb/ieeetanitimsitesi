import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Main from './components/Main';
import { Routes, Route } from 'react-router-dom'
import CommitteePage from './components/committees/CommitteePage';
import committees from './components/committees/committees.json';
import DeveloperTeam from './components/DeveloperTeam';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} /> 
        <Route path='/developers' element={<DeveloperTeam />} /> 
        <Route path="/aess" element={<CommitteePage
          props={committees.aess}
        />} />

        <Route path="/cs" element={<CommitteePage
          props={committees.cs}
        />} />

        <Route path="/ea" element={<CommitteePage
          props={committees.ea}
        />} />

        <Route path="/edsoc" element={<CommitteePage
          props={committees.edsoc}
        />} />

        <Route path="/embs" element={<CommitteePage
          props={committees.embs}
        />} />

        <Route path="/enet" element={<CommitteePage
          props={committees.enet}
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
