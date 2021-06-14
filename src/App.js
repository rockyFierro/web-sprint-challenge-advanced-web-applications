import React from "react";
import {BrowserRouter as Router, Route, useHistory} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage";

function App() {
    const history = useHistory();
    const handleLogout = (event) => {
        localStorage.clear()
    }

    return (
        <Router>
            <div className="App">
                <header>
                    Color Picker Sprint Challenge
                    <a data-testid="logoutButton" onClick={handleLogout} href="#">logout</a>
                </header>
                <PrivateRoute path={'/bubbles-page'} component={BubblePage}/>
                <Route exact path="/" component={Login}/>
            </div>
        </Router>
    );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.