export const taskDone = (id, tasks) => {
    const newTask = tasks.map(item => {
        const idTask = item.id
        let task = Object.assign({}, item)

        if (id === idTask) {
            task.done = !item.done
        }
        return task
    })
    return newTask
}