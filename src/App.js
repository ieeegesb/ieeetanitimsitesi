import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header.js';
import DenemeContent from './components/DenemeContent.js';
import Footer from './components/Footer.js';
import Main from './components/Main';
import { Routes, Route } from 'react-router-dom'
import CommitteesPage from './committees/CommitteesPage';
import CS from "./committees/CS";
import AESS from "./committees/AESS";
import WIE from "./committees/WIE";
import EdSoc from "./committees/EdSoc";
import EA from "./committees/EA";
import EMBS from "./committees/EMBS";
import ENET from "./committees/ENET";
import RAS from "./committees/RAS";
import PES from "./committees/PES";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/komitelerimiz' element={<CommitteesPage />}/>
        <Route path="/komitelerimiz/aess" element={<AESS />} />
        <Route path="/komitelerimiz/cs" element={<CS />} />
        <Route path="/komitelerimiz/ea" element={<EA />} />
        <Route path="/komitelerimiz/edsoc" element={<EdSoc />} />
        <Route path="/komitelerimiz/embs" element={<EMBS />} />
        <Route path="/komitelerimiz/enet" element={<ENET />} />
        <Route path="/komitelerimiz/pes" element={<PES />} />
        <Route path="/komitelerimiz/ras" element={<RAS />} />
        <Route path="/komitelerimiz/wie" element={<WIE />} />
        <Route path='/deneme' element={<DenemeContent />}/>
      </Routes>
      <Footer /> 
    </div>
  );
}

export default App;
