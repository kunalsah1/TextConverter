
import React from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <Router>

        <Navbar />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <React.Fragment>
                  <TextForm />
                </React.Fragment>
              }
            />
            <Route
              path="/about"
              element={
                <React.Fragment>
                  <About />
                </React.Fragment>
              }
            />
          </Routes>
        </div>
      </Router >
    </>
  )
}

export default App
