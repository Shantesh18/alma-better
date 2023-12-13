
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Community from './Components/Community/Community';
import Feed from './Components/Feed/Feed';
import Footer from './Components/Footer';
import Doubts from './Components/FullStack/Doubts';
import Navbar from './Components/Navbar';
import Fullstack from './Components/FullStack/Fullstack';

function App() {
 
  return (
   <>
   <Router>
    <Navbar/> 
    <Routes>
      <Route path='/' element={<Feed/>}></Route>
      <Route path='/community' element={<Community/>}></Route>
      <Route path='/full-stack-webdevolopment' element={<Fullstack/>}></Route>
    </Routes>
    <Footer/>
   </Router>
   


   {/* 
    <Doubts/>
    <Community/> */}

   
   </>
  );
}

export default App;
