import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Main from './components/Main';
import { Routes, Route } from 'react-router-dom'
import CommitteesPage from './components/committees/CommitteesPage';
import CommitteePage from './components/committees/CommitteePage';
import committees from './components/committees/committees.json';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/komitelerimiz' element={<CommitteesPage />} />

        <Route path="/komitelerimiz/aess" element={<CommitteePage
          fullname={committees.aess.fullname}
          imgSrc={committees.aess.imgSrc}
          about={committees.aess.about}
          idariKurul={committees.aess.idariKurul}
        />} />

        <Route path="/komitelerimiz/cs" element={<CommitteePage
          fullname={committees.cs.fullname}
          imgSrc={committees.cs.imgSrc}
          about={committees.cs.about}
          idariKurul={committees.cs.idariKurul}
        />} />

        <Route path="/komitelerimiz/ea" element={<CommitteePage
          fullname={committees.ea.fullname}
          imgSrc={committees.ea.imgSrc}
          about={committees.ea.about}
          idariKurul={committees.ea.idariKurul}
        />} />

        <Route path="/komitelerimiz/edsoc" element={<CommitteePage
          fullname={committees.edsoc.fullname}
          imgSrc={committees.edsoc.imgSrc}
          about={committees.edsoc.about}
          idariKurul={committees.edsoc.idariKurul}
        />} />

        <Route path="/komitelerimiz/embs" element={<CommitteePage
          fullname={committees.embs.fullname}
          imgSrc={committees.embs.imgSrc}
          about={committees.embs.about}
          idariKurul={committees.embs.idariKurul}
        />} />

        <Route path="/komitelerimiz/enet" element={<CommitteePage
          fullname={committees.enet.fullname}
          imgSrc={committees.enet.imgSrc}
          about={committees.enet.about}
          idariKurul={committees.enet.idariKurul}
        />} />

        <Route path="/komitelerimiz/pes" element={<CommitteePage
          fullname={committees.pes.fullname}
          imgSrc={committees.pes.imgSrc}
          about={committees.pes.about}
          idariKurul={committees.pes.idariKurul}
        />} />

        <Route path="/komitelerimiz/ras" element={<CommitteePage
          fullname={committees.ras.fullname}
          imgSrc={committees.ras.imgSrc}
          about={committees.ras.about}
          idariKurul={committees.ras.idariKurul}
        />} />

        <Route path="/komitelerimiz/wie" element={<CommitteePage
          fullname={committees.wie.fullname}
          imgSrc={committees.wie.imgSrc}
          about={committees.wie.about}
          idariKurul={committees.wie.idariKurul}
        />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
