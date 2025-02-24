interface Task {
    task_id: number,
    name: string,
    due_date: Date,
    status: number
}

interface GetAllResponse extends Array<Task>{}


export { Task, GetAllResponse }