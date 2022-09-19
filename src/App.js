import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreateTemplate from './components/NewTamplate/CreateTemplate';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/create-template" element={<CreateTemplate />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
