import footer from "./footer.module.css"
// инлайн стили
// const footerStyle = {
//     padding: "20px",
//     backgroundColor: "#464046",
//     color: "#A2A1A9"
// };

// имя функции компонента с заглавной буквы
export default function Footer(){
    // можно вернуть только один корневой элемент
    return (
        /* подключение инлайн стилей */
        <footer style={footer}>
            Подвал сайта. Здесь будет меню
            <p>Небольшая информация, размещаемая по центру подвала</p>
        </footer>
    );
}