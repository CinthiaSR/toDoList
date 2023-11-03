export const getTaskDay = (date, tasks) => {
    const newTask = tasks.filter((item => {
        return date.setHours(0, 0, 0, 0) === new Date(item.date).setHours(0, 0, 0, 0)
    }))
    return newTask

}