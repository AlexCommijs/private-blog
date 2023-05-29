import React, {useState} from 'react';
import './App.css';
import {Navigate} from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Navigation from './components/navigation/Navigation';
import Blogposts from './pages/Blogposts';
import Login from './pages/Login';
import BlogItem from "./pages/BlogItem";


function App() {

    const [isAuth, toggleIsAuth] = useState(false);

    return (
        <div>
            <Navigation isAuth={isAuth} toggleAuth={toggleIsAuth}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login toggleAuth={toggleIsAuth}/>}/>
                <Route path="/blogposts" element={isAuth ? <Blogposts/> : <Navigate to="/login"/>}/>
                <Route path="/blogItem/:itemId" element={isAuth ? <BlogItem/> : <Navigate to="/login"/>}/>
            </Routes>
        </div>
    );
}

export default App;