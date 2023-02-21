
import './App.css';
import Main from './containers/Main';
import DogPage from './containers/DogPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (

  <Router>
    <Routes>
      <Route path={`/breeds/:imageId`} element={<DogPage/>}></Route> 
      <Route path="/" element={<Main />}></Route>
    </Routes>
  </Router>
    
    
  );
}
export default App;
