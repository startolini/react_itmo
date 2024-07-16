// импорт стилей (CSS модуль)
import headerStyle from "./header.module.css"

function Logo(){
    return (
        <div className={headerStyle.nav}>
            <p>Logo here</p>
        </div>
    );
}

function Navbar(){
    return (
        <div>
            <nav className={headerStyle.nav}>
                <a href="/">Home </a>
                <a href="/">Articles </a>
                <a href="/">About </a>
            </nav>
        </div>
    );
}

// безымянный экспорт компонента
export default function Header(){
    return (
        /* использование стилей (CSS модуль) */
        <header className={headerStyle.header}>
            <Logo/>
            <Navbar/>
        </header>
    );
}