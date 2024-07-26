export default function Card({taskData}){
    const firstTag = taskData.tags[0];
    if (!taskData.isCompleted) 
        return null;
    return (
        <div style={{
            padding: "20px",
            backgroundColor: "D8E6EF",
            borderRadius: "5px",
            color: "#44046"
        }}>
            <h2>{taskData.description}</h2>
            <h3>{firstTag}</h3>
            <p>
                {taskData.estimate > 5 ? 'Too big to handle' : taskData.estimate}
            </p>
            <button>
                Button
            </button>
        </div>
    );
}