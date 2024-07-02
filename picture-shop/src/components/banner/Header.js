// импорт стилей (CSS модуль)
import header from "./header.module.css"

function Logo(){
    return (
        <div>
            <p>Logo here</p>
        </div>
    );
}

function Navbar(){
    return (
        <div>
            <nav className={header}>
                <a href="/">Home</a>
                <a href="/">Articles</a>
                <a href="/">About</a>
            </nav>
        </div>
    );
}

// безымянный экспорт компонента
export default function Header(){
    return (
        /* использование стилей (CSS модуль) */
        <header className={header}>
            <Logo/>
            <Navbar/>
        </header>
    );
}