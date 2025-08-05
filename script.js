let pendingList = document.getElementById("pendingTasks");
let completedList = document.getElementById("completedTasks");

function getDateTime() {
  return new Date().toLocaleString();
}

function addTask() {
  const taskInput = document.getElementById("taskText");
  const taskText = taskInput.value.trim();
  if (!taskText) return;

  const li = createTaskElement(taskText, false);
  pendingList.appendChild(li);
  taskInput.value = '';
}

function createTaskElement(text, isCompleted) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.innerHTML = `<strong>${text}</strong><br><small>${getDateTime()}</small>`;

  const buttons = document.createElement("div");
  buttons.className = "buttons";

  if (!isCompleted) {
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.className = "complete-btn";
    completeBtn.onclick = () => {
      const completedTask = createTaskElement(text, true);
      completedList.appendChild(completedTask);
      li.remove();
    };
    buttons.appendChild(completeBtn);
  }

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit-btn";
  editBtn.onclick = () => {
    const newText = prompt("Edit your task:", text);
    if (newText) {
      span.innerHTML = `<strong>${newText}</strong><br><small>${getDateTime()}</small>`;
    }
  };
  buttons.appendChild(editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = () => li.remove();
  buttons.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(buttons);

  return li;
}
