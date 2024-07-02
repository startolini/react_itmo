// безымянный импорт компонента
import Banner from "./components/banner/Banner";
import Footer from "./components/banner/Footer";
import Header from "./components/banner/Header";

function App() {
    return (
        <div>
            <Header/>
            Магазин картин
            <Banner/>
            {/* при использовании имя компонента с заглавной буквы, в отличие от html тега */}
            <Footer/>
        </div>
    );
}

export default App;
