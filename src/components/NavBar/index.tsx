import logo from "../../assets/images/logo-meteora.png";
import NavItem from "./NavItem";

const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-md bg-black navbar-dark">
            <div className="container-fluid">
                <div className="navbar-brand">
                    <h1 className="m-0">
                        <img
                            className="d-block"
                            src={logo}
                            alt="Logo da loja Meteora"
                        />
                    </h1>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                        <NavItem anchorClass={"nav-link active"}>
                            Home
                        </NavItem>
                        <NavItem anchorClass={"nav-link"}>
                            Lojas
                        </NavItem>
                        <NavItem anchorClass={"nav-link"}>
                            Novidades
                        </NavItem>
                        <NavItem anchorClass={"nav-link"}>
                            Promoção
                        </NavItem>
                    </ul>
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2 rounded-0"
                            type="search"
                            placeholder="Digite o produto"
                            aria-label="Pesquisar"
                        />
                        <button
                            className="btn btn-outline-light rounded-0"
                            type="reset"
                        >Buscar
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    )
};

export default NavBar