import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './components/pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'
import AboutIconlink from './components/AboutIconlink'

function App(){

   
    return (
      <FeedbackProvider>
        <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                   <FeedbackForm />
                   <FeedbackStats />
                    <FeedbackList/>
                </>
              }
            >

            </Route>

            <Route path='/about' element={<AboutPage />} />
          </Routes>

          <AboutIconlink />
        </div>
      </Router>
      </FeedbackProvider>

    )
}

export default App