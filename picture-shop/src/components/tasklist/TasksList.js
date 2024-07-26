import tasks from "../../tasks";
import Card from "../card/Card";

export default function TasksList(){
    const tasksCards = tasks.map(task => <Card taskData={task}/>);
    return (<div>{tasksCards}</div>);
}
