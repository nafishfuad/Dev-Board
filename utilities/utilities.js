function plusTotalTask() {
  let completedTask = document.getElementById("completed-task").innerText;
  let convertedCompletedTask = parseInt(completedTask) + 1;
  document.getElementById('completed-task').innerText = convertedCompletedTask;
}
function minusTotalTask() {
  let completedTask = document.getElementById("task-assigned-number").innerText;
  let convertedCompletedTask = parseInt(completedTask);
  let sum = convertedCompletedTask - 1;
  document.getElementById('task-assigned-number').innerText = sum;
}

function dayToday() {
  const date = new Date();
  let time = date.toLocaleTimeString('en-Us', {hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true});
  return time;
}
// theme background color;
  const bgColorsNamer = ['#55efc4', '#e84393', '#a29bfe', '#fdcb6e', '#b2bec3', '#81ecec', '#ff7675', 'offwhite'];

  function randomColor() {
    const randomColorIndex = Math.floor(Math.random() * bgColorsNamer.length);
    return bgColorsNamer[randomColorIndex];
  }