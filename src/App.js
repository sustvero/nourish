import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import Recipes from './pages/recipes';
import AddPage from './pages/addPage';
import LoginPage from './pages/login';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <HomePage /> }></Route>
        <Route path="/meals" element={ <Recipes /> }></Route>
        <Route path="/mymeals" element={ <AddPage /> }></Route>
        <Route path="/login" element={ <LoginPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
