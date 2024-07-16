// безымянный импорт компонента
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Bubble from "./components/bubble/Bubble";
import TasksList from "./components/tasklist/TasksList";

function App() {
    return (
        <div>
            <Header/>
            Магазин картин
            <Banner text="текст акции">
                <Bubble/>
            </Banner>
            <TasksList/>
            {/* при использовании имя компонента с заглавной буквы, в отличие от html тега */}
            <Footer/>
        </div>
    );
}

export default App;
