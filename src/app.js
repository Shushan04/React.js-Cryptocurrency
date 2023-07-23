import Header from './components/header';
import CryptoCurrencyList from './pages/cryptoCurrencyList';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function About() {
    return (
        <div>
            About
        </div>
    )
}

function Contact() {
    return (
        <div>
            Contact
        </div>
    )
}

function App() {
    return (
        <div>
            <Header />
            {/* <CryptoCurrencyList /> */}

            <BrowserRouter>
                <Link to="/">Home</Link>
                <Link to="/about">about</Link>
                <Link to="/contact">contact</Link>

                <Routes>
                    <Route path='/' element={<CryptoCurrencyList/>}/>
                    <Route path='/about' element={<About />}/>
                    <Route path='/contact' element={<Contact />}/>

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App