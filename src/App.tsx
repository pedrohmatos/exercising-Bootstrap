import Carousel from "./components/Carousel/insex"
import Category from "./components/Category"
import Easiness from "./components/Easiness"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import News from "./components/News"
import Popular from "./components/Popular"


function App() {

    return (
        <div>
            <NavBar />
            <Carousel />
            <h2 className="text-center my-3 my-xl-5">Busque por categoria:</h2>
            <Category />
            <h2 className="container text-center my-3 my-xl-5">Produtos que estão bombando!</h2>
            <Popular />
            <Easiness />
            <News />
            <Footer />
        </div>
    )
}

export default App
