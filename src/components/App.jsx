// import Home from './Home'
import Header from './Header'
import logo from '../assets/logo.png'
import '../style/Header.css'

function App() {
    return (
        <div>
            <Header>
                <img src={logo} alt='Kasa' className='kasa-logo'/>
            </Header>
        </div>
    );
}

export default App