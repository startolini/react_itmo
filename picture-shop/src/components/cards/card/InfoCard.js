import card from "./card.module.css"

export default function InfoCard({info}){
    return (
        <div className={card.griditem}>
            <p>{info.type}</p>
            <p>{info.description}</p>
        </div>
    );
}