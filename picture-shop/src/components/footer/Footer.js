// import footerStyle from "./footer.module.css"
// инлайн стили
const footerStyle = {
    position: "relative",
    padding: "20px",
    backgroundColor: "#464046",
    color: "#A2A1A9",
};

const footerInfo = {
    style: footerStyle,
    text: "Информация о футере центр подвала"
};

// имя функции компонента с заглавной буквы
export default function Footer(){
    // можно вернуть только один корневой элемент
    return (
        /* подключение инлайн стилей */
        <footer style={footerInfo.style}>
            {footerInfo.text}
        </footer>
    );
}