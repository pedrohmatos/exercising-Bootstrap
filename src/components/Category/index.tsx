import camisetaImgMobile from "../../assets/images/Mobile/categorias/categoria-camiseta.png";
import camisetaImgTablet from "../../assets/images/Tablet/categorias/categoria-camiseta.png";
import camisetaImgDesktop from "../../assets/images/Desktop/categorias/categoria-camiseta.png"

import bolsaImgMobile from "../../assets/images/Mobile/categorias/categoria-bolsas.png";
import bolsaImgTablet from "../../assets/images/Tablet/categorias/categoria-bolsas.png";
import bolsaImgDesktop from "../../assets/images/Desktop/categorias/categoria-bolsa.png";

import calcadoImgMobile from "../../assets/images/Mobile/categorias/categoria-calcados.png";
import calcadoImgTablet from "../../assets/images/Tablet/categorias/categoria-calcados.png";
import calcadoImgDesktop from "../../assets/images/Desktop/categorias/categoria-calcados.png";

import calcaImgMobile from "../../assets/images/Mobile/categorias/categoria-calcas.png";
import calcaImgTablet from "../../assets/images/Tablet/categorias/categoria-calcas.png";
import calcaImgDesktop from "../../assets/images/Desktop/categorias/categoria-calcas.png";

import casacoImgMobile from "../../assets/images/Mobile/categorias/categoria-casacos.png";
import casacoImgTablet from "../../assets/images/Tablet/categorias/categoria-casacos.png";
import casacoImgDesktop from "../../assets/images/Desktop/categorias/categoria-casacos.png";

import oculosImgMobile from "../../assets/images/Mobile/categorias/categoria-oculos.png";
import oculosImgTablet from "../../assets/images/Tablet/categorias/categoria-oculos.png";
import oculosImgDesktop from "../../assets/images/Desktop/categorias/categoria-oculos.png";


const Category = () => {
    
    return (
        <div className="container row mx-auto g-4">
            <div className="col-6 col-md-4 col-xxl-2">
                <div className="card text-center rounded-0 border-0">
                    <img
                        className="d-block d-md-none"
                        src={camisetaImgMobile}
                        alt="camiseta masculina de manga na cor verde, com bolso, com detalhe vermelho."
                    />
                    <img
                        className="d-none d-md-block d-xl-none"
                        src={camisetaImgTablet}
                        alt="camiseta masculina de manga na cor verde, com bolso, com detalhe vermelho."
                    />
                    <img
                        className="d-none d-xl-block"
                        src={camisetaImgDesktop}
                        alt="camiseta masculina de manga na cor verde, com bolso, com detalhe vermelho."
                    />
                    <div className="card-header bg-black text-light">
                        <p className="card-text">Camisetas</p>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-4 col-xxl-2">
                <div className="card text-center">
                    <img
                        className="d-block d-md-none"
                        src={bolsaImgMobile}
                        alt="bolsa de couro marrom formada por retalhos quadriculados e uma corrente como alça"
                    />
                    <img
                        className="d-none d-md-block d-xl-none"
                        src={bolsaImgTablet}
                        alt="bolsa de couro marrom formada por retalhos quadriculados e uma corrente como alça"
                    />
                    <img
                        className="d-none d-xl-block"
                        src={bolsaImgDesktop}
                        alt="bolsa de couro marrom formada por retalhos quadriculados e uma corrente como alça"
                    />
                    <div className="card-header bg-black text-light">
                        <p className="card-text">Bolsas</p>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-4 col-xxl-2">
                <div className="card text-center">
                    <img
                        className="d-block d-md-none"
                        src={calcadoImgMobile}
                        alt="tênis colorido em ciano, vermelho e roxo, sola branca e detalhes em cinza"
                    />
                    <img
                        className="d-none d-md-block d-xl-none"
                        src={calcadoImgTablet}
                        alt="tênis colorido em ciano, vermelho e roxo, sola branca e detalhes em cinza"
                    />
                    <img
                        className="d-none d-xl-block"
                        src={calcadoImgDesktop}
                        alt="tênis colorido em ciano, vermelho e roxo, sola branca e detalhes em cinza"
                    />
                    <div className="card-header bg-black text-light">
                        <p className="card-text">Calçados</p>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-4 col-xxl-2">
                <div className="card text-center">
                    <img
                        className="d-block d-md-none"
                        src={calcaImgMobile}
                        alt="calças jeans de várias tonalidades"
                    />
                    <img
                        className="d-none d-md-block d-xl-none"
                        src={calcaImgTablet}
                        alt="calças jeans de várias tonalidades"
                    />
                    <img
                        className="d-none d-xl-block"
                        src={calcaImgDesktop}
                        alt="calças jeans de várias tonalidades"
                    />
                    <div className="card-header bg-black text-light">
                        <p className="card-text">Calças</p>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-4 col-xxl-2">
                <div className="card text-center">
                    <img
                        className="d-block d-md-none"
                        src={casacoImgMobile}
                        alt="casaco marrom com zíper e dois bolsos"
                    />
                    <img
                        className="d-none d-md-block d-xl-none"
                        src={casacoImgTablet}
                        alt="casaco marrom com zíper e dois bolsos"
                    />
                    <img
                        className="d-none d-xl-block"
                        src={casacoImgDesktop}
                        alt="casaco marrom com zíper e dois bolsos"
                    />
                    <div className="card-header bg-black text-light">
                        <p className="card-text">Casacos</p>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-4 col-xxl-2">
                <div className="card text-center">
                    <img
                        className="d-block d-md-none"
                        src={oculosImgMobile}
                        alt="oculos com lentes escuras arredondadas e armação dourada"
                    />
                    <img
                        className="d-none d-md-block d-xl-none"
                        src={oculosImgTablet}
                        alt="oculos com lentes escuras arredondadas e armação dourada"
                    />
                    <img
                        className="d-none d-xl-block"
                        src={oculosImgDesktop}
                        alt="oculos com lentes escuras arredondadas e armação dourada"
                    />
                    <div className="card-header bg-black text-light">
                        <p className="card-text">Óculos</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Category