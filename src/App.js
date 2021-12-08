import './App.css';
import Navbar from './components/Layout/Navbar';
import Home from './components/pages/Home';
import Jobs from './components/pages/Jobs';
import Register from './components/pages/Register';
import Details from './components/pages/Details';
import Contract from './components/pages/Contract';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
// import firebase from './Data/firebase.js';

function App() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/Register" element={<Register/>} />
            <Route exact path="/Jobs" element={<Jobs/>} />
            <Route exact path="/Details/:id" element={<Details/>} />
            <Route exact path="/Contract" element={<Contract/>} />
            <Route exact path="/Dashboard" element={<Dashboard/>} />
          </Routes>
          
        </div>
      </Router>
    );
  }

export default App;
