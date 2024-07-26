// импорт стилей (CSS модуль)
import bannerStyle from "./banner.module.css"
// импорт изображений
import splash from "./splash.jpg"
import { capitalise } from "../../hooks";



// безымянный экспорт компонента
export default function Banner({text, children}){
    const bannerText = capitalise(text);
    return (
        /* использование стилей (CSS модуль) */
        <figure className={bannerStyle.container}>
            {children}
            {/* подключение импортированного изображения */}
            <img className={bannerStyle.picture} 
                src={splash} 
                alt={text}/>
            <figcaption className={bannerStyle.caption}>
                {bannerText}
            </figcaption>
        </figure>
    );
}