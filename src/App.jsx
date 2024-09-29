import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CardDetail from './components/CardDetail';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:cardId" element={<CardDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
