import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import Header from './components/Header';



const App = () => {

  
  return (
   <>
   <BrowserRouter>
   <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/users" element={<Users />}/>
      </Routes>
     </BrowserRouter>
   </>
  );
}

export default App;
