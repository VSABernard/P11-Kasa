import logo from '../assets/logo.png'

function Banner({ children }) {
    const accueil = 'Accueil'
    const apropos = "A Propos"
    return <div className='kasa-header'>
        <img src={logo} alt='Kasa' className='kasa-logo'/>
        <nav className='kasa-acueil'>{accueil}</nav>
        <nav className='kasa-apropos'>{apropos}</nav>
    </div>
}

export default Banner