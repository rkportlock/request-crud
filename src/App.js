import React, { Component } from 'react';
import { HousesList } from './components/HousesList';
import NavBar from "./components/NavBar";


class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <HousesList />
            </div>
        )
    }
}

export default App;