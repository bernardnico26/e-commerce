import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Purchases from './Pages/Purchases'
import ArticleDetails from './pages/ArticleDetails'
import BarrNav from './components/BarrNav'
import Container from 'react-bootstrap/Container';
import Loader from './components/Loader'
import { useSelector } from 'react-redux/es/hooks/useSelector'

function App() {

  const isLoading = useSelector (state => state.isLoading)

  return (
    <HashRouter>
      <BarrNav/>
      <Container>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/purchases' element={<Purchases/>}/>
          <Route path='/articles/:id' element={ <ArticleDetails/>}/>
        </Routes>
      </Container>
      {isLoading && <Loader/>}
    </HashRouter>
  )
}

export default App
