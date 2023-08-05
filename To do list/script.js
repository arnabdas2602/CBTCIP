const activeTasksList = document.getElementById("activeTasks");
const completedTasksList = document.getElementById("completedTasks");
const taskInput = document.getElementById("taskInput");

function getCurrentDateTime() {
  const now = new Date();
  const dateOptions = { year: "numeric", month: "short", day: "numeric" };
  const timeOptions = { hour: "numeric", minute: "numeric" };
  const date = now.toLocaleDateString("en-US", dateOptions);
  const time = now.toLocaleTimeString("en-US", timeOptions);
  return `${date}, ${time}`;
}

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = toggleTask;
    const label = document.createElement("label");
    label.textContent = taskText;
    const dateTime = document.createElement("span");
    dateTime.textContent = getCurrentDateTime();
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(dateTime);
    activeTasksList.appendChild(li);
    taskInput.value = "";
  }
}

function toggleTask() {
  const listItem = this.parentElement;
  if (this.checked) {
    completedTasksList.appendChild(listItem);
    listItem.classList.add("completed");
  } else {
    activeTasksList.appendChild(listItem);
    listItem.classList.remove("completed");
  }
}
