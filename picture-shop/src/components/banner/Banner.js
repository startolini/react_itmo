// импорт стилей (CSS модуль)
import banner from "./banner.module.css"
// импорт изображений
import splash from "./splash.jpg"

// безымянный экспорт компонента
export default function Banner(){
    return (
        /* использование стилей (CSS модуль) */
        <figure className={banner.container}>
            {/* подключение импортированного изображения */}
            <img className={banner.picture} src={splash} alt="Текст акции"/>
            <figcaption className={banner.caption}>Текст акции</figcaption>
        </figure>
    );
}