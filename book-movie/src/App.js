import React from 'react';
import './App.css';
import Navbar from './components/Menubar/Navbar';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Showtimes from './pages/Showtimes';
import Cinema from './pages/Cinema';
import Introduce from './pages/Introduce';
import Login from './pages/Login';
function App() {
  return (
    <div className="App">
 
  
  <BrowserRouter>
      <Header/>
    {/* <Home/> */}
    {/* <Detail/> */}

	    <Navbar />
  
	<Routes>
		<Route path="/" exact element={<Home/>} />
		<Route path="/showtimes" element={<Showtimes/>} />
		<Route path="/cinema" element={<Cinema/>} />
		<Route path="/introduce" element={<Introduce/>} />

	</Routes>
	</BrowserRouter>
    
  
   </div>
  );
}

export default App;
