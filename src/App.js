import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';

function App() {
  return (
    <Routes>
      <Route exact path="/login" element={<LogIn />}/>
      <Route exact path="/" element={<SignUp />}/>
    </Routes>
  );
}

export default App;
