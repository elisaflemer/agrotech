import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home
 from './pages/Home'
function App() {

  return (
    <div>
      <Router> {/* Define o roteador */}
        <Routes> 
          <Route path='/' element={<Home />} /> {/* Define a rota inicial */}
        
        </Routes>
      </Router>

    </div>
  )
}

export default App
