import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route>
              <div className="App">
                <Route path="/" component={HomePage} exact />
              </div>
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;