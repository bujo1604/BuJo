import moment from 'moment'

//compare tasks.date values to sort by

function compareDate(a,b) {
  if (a.date < b.date) return -1
  if (a.date > b.date) return 1
  return 0;
}

//sort tasks by task.date
export function sortTasksByDate(tasks){
  return tasks.sort(compareDate)
}

//add count to tasks - per day
export function addDayCountToTasks(tasks) {
  let count = 1
  tasks = sortTasksByDate(tasks)
  tasks.forEach((task, i) => {
    if (i > 0 && task.date === tasks[i - 1].date) {
      count++
      task.count = count
    }
    else {
      count = 1
      task.count = count
    }
  })
}

//add count to tasks - per week
export function addWeekCountToTasks(tasks) {
  let count = 1
  tasks = sortTasksByDate(tasks)
  tasks.forEach((task, i) => {
    if (moment(task.date).format('dd') === 'Su' ) {
      count = 1
      task.count = count
    }
    else {
      count++
      task.count = count
    }
  })
}
