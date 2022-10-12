import React, {useState, useEffect} from 'react'
import List from './components/List'
import WaitlistForm from './components/WaitlistForm'
import { BrowserRouter as Router, Routes, Route, Link, Navigate, } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div id="app" className="bg-purple-100 flex flex-col items-center justify-center">
        <header className=" mb-4 rounded-t-md">
          <h1 className='text-4xl font-bold mt-4'>Firebase Waitlist</h1>
        </header>
        <Link 
          id="button" 
          to='/waitlist-form'
          // navigate to form
          className="py-2 px-8 mt-2 mb-8 bg-green-400  hover:bg-green-500 shadow-md hover:shadow-lg rounded-full text-lg uppercase tracking-widest text-gray-100 font-bold">Join
        </Link>
        <Routes>
          <Route path='/' element={<List/>}/>
          <Route path='/waitlist-form' element={<WaitlistForm/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
