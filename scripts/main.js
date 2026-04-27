const buttonsClick = document.getElementsByClassName("tasks-cards-btn");
const date = new Date();
document.getElementById("day-name").innerText =
  date.toLocaleDateString("en-GB", { weekday: "long" }) + ",";
document.getElementById("date-today").innerText = date.toLocaleDateString(
  "en-GB",
  { month: "long", day: "numeric", year: "numeric" },
);

// task card button functions

for (const button of buttonsClick) {
  button.addEventListener("click", function (event) {
    event.preventDefault;
    button.setAttribute("disabled", true);
    plusTotalTask();
    minusTotalTask();
    this.style.opacity = "0.5";

    // add activity list
    const activity = document.getElementById("Activity-log");
    const taskCardAsParent = this.closest(".task-card");
    const taskName = taskCardAsParent.querySelector("h2").innerText;

    const div = document.createElement("div");
    div.className = "activity-card p-3 bg-slate-200 rounded-lg mt-6";

    div.innerHTML = `
      <p class="text-base font-normal">
      You have Complete The Task ${taskName} at ${dayToday()}
      </p>
    `;
    activity.appendChild(div);
  });
}

// remove activity list
  const removeButton = document.getElementById("activity-remove-btn");
  removeButton.addEventListener('click', function (event) {
      event.preventDefault;
      const activityCards = document.querySelectorAll('.activity-card');
      for (const card of activityCards) {
        card.remove();
      };
  })

  // bg color change function

  const colorBtn = document.getElementById('bg-color');

  colorBtn.addEventListener('click', function(event){
    event.preventDefault;
    document.getElementById('body').style.backgroundColor = randomColor();
  })

  