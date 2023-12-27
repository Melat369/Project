import React from 'react'
import Navbar from './Components/NavBar/Navbar'
import Search from './Components/Search/Search'
import Jobs from './Components/JobDiv/Jobs'
import Value from './Components/ValueDiv/Value'
import Footer from './Components/FooterDiv/Footer'

const App = () => {
  return (
    <div>
      <Navbar /> 
      <Search />
      <Jobs />
      <Value />
      <Footer />
    </div>
  )
}

export default App
