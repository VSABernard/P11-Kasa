import { Link } from "react-router-dom"
import Header from "../../components/Header/Header"
import "../Error404/Error404.css"

function Error404() {
  return (
    <div>
        <Header />     
        <section className="error__section">
            <h1 className="error__title">404</h1>
            <p className="error__content">
                Oups! La page que vous demandez n'existe pas.
            </p>
            <Link to="/">                                                       {/* Link to Homepage */}
                <p className="error__link">Retourner sur la page d’accueil</p>
            </Link>
        </section>
    </div>
  )
}

export default Error404