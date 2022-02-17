import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header.js';
import DenemeContent from './components/DenemeContent.js';
import Footer from './components/Footer.js';
import Main from './components/Main';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/deneme' element={<DenemeContent/>}/>
      </Routes>
      <Footer /> 
    </div>
  );
}

export default App;
