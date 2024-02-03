import bannerMobile1 from "../../assets/images/Mobile/banner1-mobile.png";
import bannerTablet1 from "../../assets/images/Tablet/banner1-tablet.png";
import bannerDesktop1 from "../../assets/images/Desktop/banner1-desktop.png";

import bannerMobile2 from "../../assets/images/Mobile/banner2-mobile.png";
import bannerTablet2 from "../../assets/images/Tablet/banner2-tablet.png";
import bannerDesktop2 from "../../assets/images/Desktop/banner2-desktop.png";

import bannerMobile3 from "../../assets/images/Mobile/banner3-mobile.png";
import bannerTablet3 from "../../assets/images/Tablet/banner3-tablet.png";
import bannerDesktop3 from "../../assets/images/Desktop/banner3-desktop.png";

const Carousel = () => {

    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        className="img-fluid d-md-none"
                        src={bannerMobile1}
                        alt="modelo feminina vestindo blusa rosa em fundo lilás"
                    />
                    <img
                        className="img-fluid d-none d-md-block d-xl-none"
                        src={bannerTablet1}
                        alt="modelo feminina vestindo blusa rosa em fundo lilás"
                    />
                    <img
                        className="img-fluid d-none d-xl-block w-100"
                        src={bannerDesktop1}
                        alt="modelo feminina vestindo blusa rosa em fundo lilás"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        className="img-fluid d-md-none"
                        src={bannerMobile2}
                        alt="modelo feminina vestindo roupas pretas com sapado e fundo rosa"
                    />
                    <img
                        className="img-fluid d-none d-md-block d-xl-none"
                        src={bannerTablet2}
                        alt="modelo feminina vestindo roupas pretas com sapado e fundo rosa"
                    />
                    <img
                        className="img-fluid d-none d-xl-block"
                        src={bannerDesktop2}
                        alt="modelo feminina vestindo roupas pretas com sapado e fundo rosa"
                    />
                    <div className="carousel-caption">
                        <h5 className="fs-1">COLEÇÃO ATEMPORAL</h5>
                        <p>Estilo e qualidade para durar.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        className="img-fluid d-md-none"
                        src={bannerMobile3}
                        alt="modelo masculino vestindo roupas cinza com chapéu escuro e fundo laranja"
                    />
                    <img
                        className="img-fluid d-none d-md-block d-xl-none"
                        src={bannerTablet3}
                        alt="modelo masculino vestindo roupas cinza com chapéu escuro e fundo laranja"
                    />
                    <img
                        className="img-fluid d-none d-xl-block"
                        src={bannerDesktop3}
                        alt="modelo masculino vestindo roupas cinza com chapéu escuro e fundo laranja"
                    />
                    <div className="carousel-caption">
                        <h5 className="fs-1">COLEÇÃO ATEMPORAL</h5>
                        <p>Alto impacto visual, baixo impacto ambiental!</p>
                    </div>
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Próximo</span>
            </button>
        </div>
    )
};

export default Carousel