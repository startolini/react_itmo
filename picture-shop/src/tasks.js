// Пример массива задач
export default [
    {
        id: 1,
        createdDate: '2024-07-01',
        completedDate: null,
        tags: ['urgent', 'office'],
        description: "Complete the financial report for Q2",
        participants: ['Alice', 'Bob'],
        estimate: 3,
        isCompleted: false
    },
    {
        id: 2,
        createdDate: '2024-07-05',
        completedDate: '2024-07-10',
        tags: ['home', 'maintenance'],
        description: 'Fix the kitchen sink',
        participants: ['Charlie'],
        estimate: 5,
        isCompleted: true
    },
    {
        id: 3,
        createdDate: '2024-07-07',
        completedDate: null,
        tags: ['work', 'development'],
        description: 'Develop the new feature for the project',
        participants: ['Alice', 'Dave'],
        estimate: 1,
        isCompleted: true
    },
    {
        id: 4,
        createdDate: '2024-07-08',
        completedDate: null,
        tags: ['work', 'meeting'],
        description: 'Prepare for the team meeting',
        participants: ['Bob', 'Eve'],
        estimate: 2,
        isCompleted: true
    },
    {
        id: 5,
        createdDate: '2024-07-09',
        completedDate: '2024-07-12',
        tags: ['personal', 'health'],
        description: 'Schedule annual health check-up',
        participants: ['Alice'],
        estimate: 6,
        isCompleted: true
    }
];
