import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import Recipes from './pages/recipes';
import MyMeals from './pages/myMeals';
import LoginPage from './pages/login';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <HomePage /> }></Route>
        <Route path="/meals" element={ <Recipes /> }></Route>
        <Route path="/mymeals" element={ <MyMeals /> }></Route>
        <Route path="/login" element={ <LoginPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
