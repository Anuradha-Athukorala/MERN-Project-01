import React,{ Component } from 'react';
import {BrowserRouter as Router, Route} from'react-router-dom';
import './App.css';

import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import Home from './components/Home';
import NavBar from './components/NavBar';
import PostDetails from './components/PostDetails';
//import Button from './components/Button';

class App extends Component{
    render(){
        return (
            <Router>
            <div className="container">
            <NavBar/>
                <Route exact path="/" component ={Home} />
                <Route path="/add" exact component ={CreatePost} />
                <Route path="/edit/:id" exact component ={EditPost} />
                <Route path="/post/:id" exact component ={PostDetails} /> 
              </div>
            </Router>
        );
        }
}
 export default App;