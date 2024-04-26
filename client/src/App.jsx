import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Search from './pages/Search'
import Header from './components/Header';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (

    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/search' element={<Search />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/dashboard' element={<Dashboard/>} />

      


    </Routes>
    <Footer />
    </BrowserRouter>

  );
}
