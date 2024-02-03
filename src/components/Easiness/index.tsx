const Easiness = () => {
    
    return (
        <section className="pb-4 bg-black text-light py-4">
            <h2 className="text-center">
                Conheça todas as nossas facilidades
            </h2>
            <div
                className="d-flex flex-column flex-lg-row align-items-center justify-content-lg-center px-3 gap-3"
            >
                <div className="divs-facilidades d-flex">
                    <div className="destaq">
                        <i className="bi bi-x-diamond fs-1"></i>
                    </div>
                    <div className="ms-3">
                        <div className="mb-1 destaq">
                            PAGUE PELO PIX
                        </div>
                        <div className="texto-menor">
                            Ganhe 5% OFF em pagamentos via PIX
                        </div>
                    </div>
                </div>
                <div className="divs-facilidades d-flex">
                    <div className="destaq">
                        <i className="bi bi-arrow-repeat fs-1"></i>
                    </div>
                    <div className="ms-3">
                        <div className="mb-1 destaq">
                            TROCA GRÁTIS
                        </div>
                        <div className="texto-menor">
                            Fique livre para trocar em até 30 dias.
                        </div>
                    </div>
                </div>
                <div className="divs-facilidades d-flex">
                    <div className="destaq">
                        <i className="bi bi-flower1 fs-1"></i>
                    </div>
                    <div className="ms-3">
                        <div className="mb-1 destaq">
                            SUSTENTABILIDADE
                        </div>
                        <div className="texto-menor">
                            Moda responsável, que respeita o meio ambiente.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Easiness