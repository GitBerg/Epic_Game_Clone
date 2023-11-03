import './App.css'
import Footer from './components/Footer'
import MainSection from './components/MainSection'
import SearchBar from './components/SearchBar'
import TopBar from './components/TopBar'

function App() {
  return (
    <div style={{overflowX: 'hidden'}}>
      <TopBar/>
      <SearchBar/>
      <MainSection/>
      <Footer/>
    </div>
  )
}

export default App
