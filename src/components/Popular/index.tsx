import camisetaMobile from "../../assets/images/Mobile/produtos/camiseta.png";
import camisetaTablet from "../../assets/images/Tablet/produtos/camiseta.png";
import camisetaDesktop from "../../assets/images/Desktop/produtos/camiseta.png";

import calcaMobile from "../../assets/images/Mobile/produtos/calca.png";
import calcaTablet from "../../assets/images/Tablet/produtos/calca.png";
import calcaDesktop from "../../assets/images/Desktop/produtos/calca.png";

import tenisMobile from "../../assets/images/Mobile/produtos/tenis.png";
import tenisTablet from "../../assets/images/Tablet/produtos/tenis.png";
import tenisDesktop from "../../assets/images/Desktop/produtos/tenis.png";

import jaquetaMobile from "../../assets/images/Mobile/produtos/jaqueta-jeans.png";
import jaquetaTablet from "../../assets/images/Tablet/produtos/jaqueta-jeans.png";
import jaquetaDesktop from "../../assets/images/Desktop/produtos/jaqueta-jeans.png";

import oculosMobile from "../../assets/images/Mobile/produtos/oculos.png";
import oculosTablet from "../../assets/images/Tablet/produtos/oculos.png";
import oculosDesktop from "../../assets/images/Desktop/produtos/oculos.png";

import bolsaMobile from "../../assets/images/Mobile/produtos/bolsa.png";
import bolsaTablet from "../../assets/images/Tablet/produtos/bolsa.png";
import bolsaDesktop from "../../assets/images/Desktop/produtos/bolsa.png";

const Popular = () => {

    return (
        <div className="container row mx-auto teste">
            <div className="col-12 col-md-6 col-xl-4 pb-4">
                <div className="card">
                    <img
                        className="d-block d-md-none"
                        src={camisetaMobile}
                        alt="camiseta em tom pastel básica"
                    />
                    <img
                        className="d-none d-md-block d-xl-none"
                        src={camisetaTablet}
                        alt="camiseta em tom pastel básica"
                    />
                    <img
                        className="d-none d-xl-block"
                        src={camisetaDesktop}
                        alt="camiseta em tom pastel básica"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Camiseta Conforto</h5>
                        <p className="card-text">
                            Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão.
                            Modelagem unissex.
                        </p>
                        <p className="fw-bold">R$ 70,00</p>
                        <a href="#" className="btn more rounded-0 text-light">Ver mais</a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-xl-4 pb-4">
                <div className="card">
                    <img
                        className="d-block d-md-none"
                        src={calcaMobile}
                        alt="calça bege clara e com cintura alta"
                    />
                    <img
                        className="d-none d-md-block d-xl-none"
                        src={calcaTablet}
                        alt="calça bege clara e com cintura alta"
                    />
                    <img
                        className="d-none d-xl-block"
                        src={calcaDesktop}
                        alt="calça bege clara e com cintura alta"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Calça Alfaiataria</h5>
                        <p className="card-text">
                            Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!
                        </p>
                        <p className="fw-bold">R$ 180,00</p>
                        <a href="#" className="btn more rounded-0 text-light">Ver mais</a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-xl-4 pb-4">
                <div className="card">
                    <img
                        className="d-block d-md-none"
                        src={tenisMobile}
                        alt="tenis totalmente branco e com solado alto"
                    />
                    <img
                        className="d-none d-md-block d-xl-none"
                        src={tenisTablet}
                        alt="tenis totalmente branco e com solado alto"
                    />
                    <img
                        className="d-none d-xl-block"
                        src={tenisDesktop}
                        alt="tenis totalmente branco e com solado alto"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Tênis Chunky</h5>
                        <p className="card-text">
                            Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.
                        </p>
                        <p className="fw-bold">R$ 250,00</p>
                        <a href="#" className="btn more rounded-0 text-light">Ver mais</a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-xl-4 pb-4">
                <div className="card">
                    <img
                        className="d-block d-md-none"
                        src={jaquetaMobile}
                        alt="jaqueta jeans com dois bolsos e botões para fechar"
                    />
                    <img
                        className="d-none d-md-block d-xl-none"
                        src={jaquetaTablet}
                        alt="jaqueta jeans com dois bolsos e botões para fechar"
                    />
                    <img
                        className="d-none d-xl-block"
                        src={jaquetaDesktop}
                        alt="jaqueta jeans com dois bolsos e botões para fechar"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Jaqueta Jeans</h5>
                        <p className="card-text">
                            Modelo unissex oversized com gola de camurça. Atemporal e autêntica!
                        </p>
                        <p className="fw-bold">R$ 150,00</p>
                        <a href="#" className="btn more rounded-0 text-light">Ver mais</a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-xl-4 pb-4">
                <div className="card">
                    <img
                        className="d-block d-md-none"
                        src={oculosMobile}
                        alt="oculos arredondado com armação fina e escura"
                    />
                    <img
                        className="d-none d-md-block d-xl-none"
                        src={oculosTablet}
                        alt="oculos arredondado com armação fina e escura"
                    />
                    <img

                        className="d-none d-xl-block"
                        src={oculosDesktop}
                        alt="oculos arredondado com armação fina e escura"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Óculos Redondo</h5>
                        <p className="card-text">
                            Armação metálica em grafite com lentes arredondadas. Sem erro!
                        </p>
                        <p className="fw-bold">R$ 120,00</p>
                        <a href="#" className="btn more rounded-0 text-light">Ver mais</a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-xl-4 pb-4">
                <div className="card">
                    <img
                        className="d-block d-md-none"
                        src={bolsaMobile}
                        alt="bolsa marrom com dois zíperes na parte inferior"
                    />
                    <img
                        className="d-none d-md-block d-xl-none"
                        src={bolsaTablet}
                        alt="bolsa marrom com dois zíperes na parte inferior"
                    />
                    <img
                        className="d-none d-xl-block"
                        src={bolsaDesktop}
                        alt="bolsa marrom com dois zíperes na parte inferior"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Bolsa coringa</h5>
                        <p className="card-text">
                            Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!
                        </p>
                        <p className="fw-bold">R$ 120,00</p>
                        <a href="#" className="btn more rounded-0 text-light">Ver mais</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Popular