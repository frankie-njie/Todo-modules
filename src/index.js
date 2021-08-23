import ToDoItem from "./modules/ToDoItem";
import Project from "./modules/Project";
console.log("hello world!");

// const myTasks = [];
const myProjects = [];

const allTodoitems = document.getElementById("taskDiv");
const addTaskBtn = document.getElementById("addTask");
const projectDiv = document.getElementById("projectList");

const addProjectsBtn = document.getElementById("addProject");

//button event listeners
addTaskBtn.addEventListener("click", createTaskForm);
addProjectsBtn.addEventListener("click", createProjectForm);

//project form
function createProjectForm() {
  let projectFormDiv = document.getElementById("projectForm");
  projectFormDiv.innerHTML = `
        <label for="projectNme">Project Name</label>
        <input id="projectNme" type="text">
        <label for="">Project Description</label>
        <input id="projectDesc" type="text">
        <button id="createProject" class="button">create project</button>
        <button id="cancelProject">cancel</button>
    `;
  let projectDelBtn = document.getElementById("cancelProject");
  projectDelBtn.onclick = () => {
    cancelProject();
  };

  let projectCreateBtn = document.getElementById("createProject");

  projectCreateBtn.onclick = createProject;
}


function createProject(projName, projDescription) {
  let projId = myProjects.length;
  projName = document.getElementById("projectNme").value;
  projDescription = document.getElementById("projectDesc").value;
  let projectState;

  if (!projName) {
    alert("Enter a project name");
  } else {
    let newProject = new Project(
      projId,
      projName,
      projDescription,
      projectState
    );
    myProjects.push(newProject);
    displayProject();
    cancelProject()
    newProject.active = true;
    for (let i = 0; i < myProjects.length - 1; i++) {
      myProjects[i].active = false;
    }
    displayProjectTask();
    console.log(myProjects);
  }

}

// function getActiveProject() {
//     return myProjects.find((project)=>{
//         return project.active
//     })
// }

function displayProject() {
  projectDiv.innerHTML = "";
  myProjects.forEach((project, i) => {
    
    projectDiv.innerHTML += `
        <div class="singleProjDiv">
            <span class="projectName">${project.name}</span>
            <button class="projectDelItem">delete</button>
        </div>
        `;
  });

  let removeProject = document.querySelectorAll(".projectDelItem");
  removeProject.forEach((button, index) => {
    button.addEventListener("click", () => deleteProject(index));
  });

  let projectItem = document.querySelectorAll(".projectName");

  projectItem.forEach((item,id) =>
    item.addEventListener("click", (e) => {
        let currentProject = myProjects[id]
        console.log(currentProject);
        currentProject.active = true;
        for (let i = 0; i < myProjects.length; i++) {
            if (i !== id) {
                myProjects[i].active = false;
            }
        }
        cancelTask()
        displayProjectTask();
        console.log(myProjects);
    })
  );
}

function displayProjectTask() {
  let activeProject = getActiveProject();
  let currentProject = activeProject.getAllTasks();
  let taskDiv = document.getElementById("taskDiv");
  let taskHead = document.getElementById("main-content").firstElementChild;
  let taskDesc = document.getElementById('project-desc')
  taskDiv.innerHTML = "";

  taskHead.innerHTML = activeProject.name;
  taskDesc.innerHTML = activeProject.description
  

  let singleTask = "";
  currentProject.forEach((projectTask) => {
    let taskid = projectTask.id;

    singleTask += `<div id="singleTask" class="single-task">
            <p>${projectTask.title}</p>
            <p>${projectTask.description}</p>
            <span>${projectTask.dueDate}</span>
            <button class="edit-task">edit task</button>
            <button data-task=${taskid} class="delete-task">delete task </button>
        </div>
        `;
  });

  taskDiv.innerHTML = "";
  taskDiv.innerHTML += singleTask;

  let deleteTaskBtn = document.querySelectorAll(".delete-task");
  deleteTaskBtn.forEach((element) => {
  
    element.addEventListener("click", removeTask);
  });
}

function deleteProject(projId) {
  myProjects.splice(projId, 1);
  displayProject();
  console.log(myProjects);
}

function cancelProject() {
   let div = document.getElementById("projectForm")
   div.innerHTML = "";
}




//task form
function createTaskForm(e) {
  const todoForm = document.getElementById("taskForm");

  todoForm.innerHTML = `
        <input id="todoTitle" type="text">
        <input id="description" type="text">
        <input id="date" type="date">
        <button id="createTaskBtn">add Task</button>
        <button id="cancelTaskBtn">cancel</button>
    `;

  let createTaskBtn = document.getElementById("createTaskBtn");
  let cancelBtn = document.getElementById("cancelTaskBtn");

  createTaskBtn.addEventListener("click", createTask);
  cancelBtn.addEventListener("click", cancelTask);
}

function cancelTask() {
//   console.log(e.target);
  const todoForm = document.getElementById("taskForm");
  todoForm.innerHTML = "";
}


function createTask(taskTitle, taskDescription, taskDueDate, taskPriority) {
  let activeProject = getActiveProject()

  let taskId = activeProject.setTaskId();
//   console.log(taskId);
  taskTitle = document.getElementById("todoTitle").value;
  taskDescription = document.getElementById("description").value;
  taskDueDate = document.getElementById("date").value;

  if (!taskTitle) {
    alert("You must enter a task Title for this to be valid");
  } else {
    let newTask = new ToDoItem(taskId, taskTitle, taskDescription, taskDueDate);
    activeProject.addTask(newTask);
    displayProjectTask();

    // console.log("called from by displayed func", newTask);
  }
}

function getActiveProject() {
  return myProjects.find((project) => {
    return project.active;
  });
}


function removeTask(event) {
  console.log(event.target);
  let taskId = event.target.dataset.task;
  console.log(taskId);

  let activeProject = getActiveProject()
  activeProject.deleteTask(parseInt(taskId));
  displayProjectTask();
  console.log(myProjects);
}

// show all task in a project
// when a project is removed, all the tasks should also be removed
