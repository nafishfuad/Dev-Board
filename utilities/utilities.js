function plusTotalTask() {
  let completedTask = document.getElementById("completed-task").innerText;
  let convertedCompletedTask = parseInt(completedTask) + 1;
  document.getElementById('completed-task').innerText = convertedCompletedTask;
}
function minusTotalTask() {
  let completedTask = document.getElementById("task-assigned-number").innerText;
  let convertedCompletedTask = parseInt(completedTask) - 1;
  document.getElementById('task-assigned-number').innerText = convertedCompletedTask;
}

function dayToday() {
  const date = new Date();
  let time = date.toLocaleTimeString('en-Us', {hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true});
  return time;
}
