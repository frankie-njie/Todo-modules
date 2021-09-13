/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Project{
constructor(id, name, description) {
    this.id = id
    this.name = name;
    this.description  = description
    this.allTasks = [];
    this.active
}
addTask(task){
    this.allTasks.push(task)
}
deleteTask(taskId){
  this.allTasks = this.allTasks.filter((task) => task.id !== taskId)
    // this.allTasks.splice(taskId, 1)
} 
setTaskId(){
    return this.allTasks.length
}
getAllTasks(){
    return this.allTasks
}
getId(){
    return this.id
}

getTitle(){
    return this.name
}
}
 
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/modules/ToDoItem.js":
/*!*********************************!*\
  !*** ./src/modules/ToDoItem.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// function ToDoItem() {
//     console.log("A todo item has been created");
// }

class ToDoItem {
    constructor(id, title, description, dueDate, priority, notes) {
        this.id = id;
        this.title = title;
        this.description = description; 
        this.dueDate = dueDate;
        this.priority = priority;
        // this.notes = notes
    }
    // getId(){
    //     return this.id
    // }

   toDoTitle (){
        return this.title
    }
    toDoDescription(){
        return this.description;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDoItem);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_ToDoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ToDoItem */ "./src/modules/ToDoItem.js");
/* harmony import */ var _modules_Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Project */ "./src/modules/Project.js");


console.log("hello world!");

const myProjects = [];

const addTaskBtn = document.getElementById("addTask");
const projectDiv = document.getElementById("projectList");

const addProjectsBtn = document.getElementById("addProject");

//button event listeners
addTaskBtn.addEventListener("click", createTaskForm);
addProjectsBtn.addEventListener("click", createProjectForm);

//project form
function createProjectForm() {
  let projectFormDiv = document.getElementById("projectForm");
  projectFormDiv.style.display = "block";
  projectFormDiv.innerHTML = `
        <div class="modal-content"> 
        <label for="projectNme">Project Name</label>
        <input id="projectNme" type="text">
        <label for="">Project Description</label>
        <input id="projectDesc" type="text">
        <button id="createProject" class="button">create project</button>
        <button id="cancelProject" class="button-cancel">cancel</button>
        </div>
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
    let newProject = new _modules_Project__WEBPACK_IMPORTED_MODULE_1__.default(
      projId,
      projName,
      projDescription,
      projectState
    );
    myProjects.push(newProject);
    displayProject();
    cancelProject();
    newProject.active = true;
    for (let i = 0; i < myProjects.length - 1; i++) {
      myProjects[i].active = false;
    }
    displayProjectTask();
    console.log(myProjects);
  }
}

function displayProject() {
  projectDiv.innerHTML = "";
  myProjects.forEach((project, i) => {
    projectDiv.innerHTML += `
        <div class="singleProjDiv">
            <span class="projectName">${project.name}</span>
            <button class="projectDelItem icon-btns"><i class="fal fa-trash-alt fa-2x"></i></button>
        </div>
        `;
  });

  let removeProject = document.querySelectorAll(".projectDelItem");
  removeProject.forEach((button, index) => {
    button.addEventListener("click", () => deleteProject(index));
  });

  let projectItem = document.querySelectorAll(".projectName");

  projectItem.forEach((item, id) =>
    item.addEventListener("click", (e) => {
      let currentProject = myProjects[id];
      console.log(currentProject);
      currentProject.active = true;
      for (let i = 0; i < myProjects.length; i++) {
        if (i !== id) {
          myProjects[i].active = false;
        }
      }
      cancelTask();
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
  let taskDesc = document.getElementById("project-desc");
  taskDiv.innerHTML = "";

  taskHead.innerHTML = activeProject.name;
  taskDesc.innerHTML = activeProject.description;

  let singleTask = "";
  currentProject.forEach((projectTask) => {
    let taskid = projectTask.id;

    singleTask += `<div class="single-task">
            <input type="checkbox">
            <h4>${projectTask.title}</h4>
            <span>${projectTask.dueDate}</span>
            <div class="singleTask-btn">
                <button class="edit-task icon-btns"><i class="fal fa-edit fa-2x"></i></button>
                <button class="delete-task icon-btns"><i data-task=${taskid} class="fal fa-trash-alt fa-2x"></i></button>
            </div>
            <div class="singletask-desc" style="display:none">${projectTask.description}</div>
        </div>
        `;
  });

  taskDiv.innerHTML = "";
  taskDiv.innerHTML += singleTask;

  showTaskDescription();

  let deleteTaskBtn = document.querySelectorAll(".delete-task");
  deleteTaskBtn.forEach((element) => {
    element.addEventListener("click", removeTask);
  });
}

function showTaskDescription() {
  let tasks = document.querySelectorAll(".single-task");
  tasks.forEach((task, id) => {
    task.setAttribute("id", id);
    task.onclick = (e) => {
      console.log(e.target.parentNode);

      if (id == e.target.parentNode.id || id == e.target.id) {
        console.log("clicked here", id);
        let description = task.querySelector(".singletask-desc");

        if (description.style.display == "block") {
          description.style.display = "none";
        } else if (description.style.display == "none") {
          description.style.display = "block";
        }
      }
    };
  });
}

function deleteProject(projId) {
  myProjects.splice(projId, 1);
  displayProject();
  console.log(myProjects);
}

function cancelProject() {
  let div = document.getElementById("projectForm");
  div.style.display = "none";
}

//task form
function createTaskForm(e) {
  const todoForm = document.getElementById("taskForm");
  todoForm.style.display = "block";

  todoForm.innerHTML = `
        <div class="form-inputs">
            <input id="todoTitle" type="text" placeholder="Task title">
            <input id="date" type="date">
        </div>
        <div>
            <textarea id="description" type="text" placeholder="task description" col></textarea>
        </div>
        <div class="form-buttons">
            <button id="createTaskBtn" class="button">add Task</button>
            <button id="cancelTaskBtn" class="button-cancel">cancel</button>
        </div>
    `;

  let createTaskBtn = document.getElementById("createTaskBtn");
  let cancelBtn = document.getElementById("cancelTaskBtn");

  createTaskBtn.addEventListener("click", createTask);
  cancelBtn.addEventListener("click", cancelTask);
}

function cancelTask() {
  const todoForm = document.getElementById("taskForm");
  todoForm.style.display = "none";
}

function createTask(taskTitle, taskDescription, taskDueDate, taskPriority) {
  let activeProject = getActiveProject();

  let taskId = activeProject.setTaskId();
  taskTitle = document.getElementById("todoTitle").value;
  taskDescription = document.getElementById("description").value;
  taskDueDate = document.getElementById("date").value;

  if (!taskTitle) {
    alert("You must enter a task Title for this to be valid");
  } else {
    let newTask = new _modules_ToDoItem__WEBPACK_IMPORTED_MODULE_0__.default(taskId, taskTitle, taskDescription, taskDueDate);
    activeProject.addTask(newTask);
    displayProjectTask();
    const todoForm = document.getElementById("taskForm");
    todoForm.style.display = "none";

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

  let activeProject = getActiveProject();
  activeProject.deleteTask(parseInt(taskId));
  displayProjectTask();
  console.log(myProjects);
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95Ly4vc3JjL21vZHVsZXMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly95Ly4vc3JjL21vZHVsZXMvVG9Eb0l0ZW0uanMiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3kvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxPQUFPLEU7Ozs7Ozs7Ozs7Ozs7O0FDOUJ0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRTs7Ozs7O1VDekJ2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7QUNOMEM7QUFDRjtBQUN4Qzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSCx5QkFBeUIscURBQU87QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJCQUEyQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxhQUFhO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHVCQUF1QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQTtBQUNBLHFFQUFxRSxPQUFPO0FBQzVFO0FBQ0EsZ0VBQWdFLHdCQUF3QjtBQUN4RjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsc0JBQXNCLHNEQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUHJvamVjdHtcbmNvbnN0cnVjdG9yKGlkLCBuYW1lLCBkZXNjcmlwdGlvbikge1xuICAgIHRoaXMuaWQgPSBpZFxuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiAgPSBkZXNjcmlwdGlvblxuICAgIHRoaXMuYWxsVGFza3MgPSBbXTtcbiAgICB0aGlzLmFjdGl2ZVxufVxuYWRkVGFzayh0YXNrKXtcbiAgICB0aGlzLmFsbFRhc2tzLnB1c2godGFzaylcbn1cbmRlbGV0ZVRhc2sodGFza0lkKXtcbiAgdGhpcy5hbGxUYXNrcyA9IHRoaXMuYWxsVGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlkICE9PSB0YXNrSWQpXG4gICAgLy8gdGhpcy5hbGxUYXNrcy5zcGxpY2UodGFza0lkLCAxKVxufSBcbnNldFRhc2tJZCgpe1xuICAgIHJldHVybiB0aGlzLmFsbFRhc2tzLmxlbmd0aFxufVxuZ2V0QWxsVGFza3MoKXtcbiAgICByZXR1cm4gdGhpcy5hbGxUYXNrc1xufVxuZ2V0SWQoKXtcbiAgICByZXR1cm4gdGhpcy5pZFxufVxuXG5nZXRUaXRsZSgpe1xuICAgIHJldHVybiB0aGlzLm5hbWVcbn1cbn1cbiBcbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7IiwiLy8gZnVuY3Rpb24gVG9Eb0l0ZW0oKSB7XG4vLyAgICAgY29uc29sZS5sb2coXCJBIHRvZG8gaXRlbSBoYXMgYmVlbiBjcmVhdGVkXCIpO1xuLy8gfVxuXG5jbGFzcyBUb0RvSXRlbSB7XG4gICAgY29uc3RydWN0b3IoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247IFxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIC8vIHRoaXMubm90ZXMgPSBub3Rlc1xuICAgIH1cbiAgICAvLyBnZXRJZCgpe1xuICAgIC8vICAgICByZXR1cm4gdGhpcy5pZFxuICAgIC8vIH1cblxuICAgdG9Eb1RpdGxlICgpe1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZVxuICAgIH1cbiAgICB0b0RvRGVzY3JpcHRpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb0RvSXRlbTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBUb0RvSXRlbSBmcm9tIFwiLi9tb2R1bGVzL1RvRG9JdGVtXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9tb2R1bGVzL1Byb2plY3RcIjtcbmNvbnNvbGUubG9nKFwiaGVsbG8gd29ybGQhXCIpO1xuXG5jb25zdCBteVByb2plY3RzID0gW107XG5cbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRhc2tcIik7XG5jb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0TGlzdFwiKTtcblxuY29uc3QgYWRkUHJvamVjdHNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFByb2plY3RcIik7XG5cbi8vYnV0dG9uIGV2ZW50IGxpc3RlbmVyc1xuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlVGFza0Zvcm0pO1xuYWRkUHJvamVjdHNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVByb2plY3RGb3JtKTtcblxuLy9wcm9qZWN0IGZvcm1cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RGb3JtKCkge1xuICBsZXQgcHJvamVjdEZvcm1EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RGb3JtXCIpO1xuICBwcm9qZWN0Rm9ybURpdi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICBwcm9qZWN0Rm9ybURpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+IFxuICAgICAgICA8bGFiZWwgZm9yPVwicHJvamVjdE5tZVwiPlByb2plY3QgTmFtZTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBpZD1cInByb2plY3RObWVcIiB0eXBlPVwidGV4dFwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwiXCI+UHJvamVjdCBEZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBpZD1cInByb2plY3REZXNjXCIgdHlwZT1cInRleHRcIj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cImNyZWF0ZVByb2plY3RcIiBjbGFzcz1cImJ1dHRvblwiPmNyZWF0ZSBwcm9qZWN0PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gaWQ9XCJjYW5jZWxQcm9qZWN0XCIgY2xhc3M9XCJidXR0b24tY2FuY2VsXCI+Y2FuY2VsPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG4gIGxldCBwcm9qZWN0RGVsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5jZWxQcm9qZWN0XCIpO1xuICBwcm9qZWN0RGVsQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgY2FuY2VsUHJvamVjdCgpO1xuICB9O1xuXG4gIGxldCBwcm9qZWN0Q3JlYXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGVQcm9qZWN0XCIpO1xuICBwcm9qZWN0Q3JlYXRlQnRuLm9uY2xpY2sgPSBjcmVhdGVQcm9qZWN0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHByb2pOYW1lLCBwcm9qRGVzY3JpcHRpb24pIHtcbiAgbGV0IHByb2pJZCA9IG15UHJvamVjdHMubGVuZ3RoO1xuICBwcm9qTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdE5tZVwiKS52YWx1ZTtcbiAgcHJvakRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0RGVzY1wiKS52YWx1ZTtcbiAgbGV0IHByb2plY3RTdGF0ZTtcblxuICBpZiAoIXByb2pOYW1lKSB7XG4gICAgYWxlcnQoXCJFbnRlciBhIHByb2plY3QgbmFtZVwiKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KFxuICAgICAgcHJvaklkLFxuICAgICAgcHJvak5hbWUsXG4gICAgICBwcm9qRGVzY3JpcHRpb24sXG4gICAgICBwcm9qZWN0U3RhdGVcbiAgICApO1xuICAgIG15UHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICBkaXNwbGF5UHJvamVjdCgpO1xuICAgIGNhbmNlbFByb2plY3QoKTtcbiAgICBuZXdQcm9qZWN0LmFjdGl2ZSA9IHRydWU7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteVByb2plY3RzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgbXlQcm9qZWN0c1tpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gICAgZGlzcGxheVByb2plY3RUYXNrKCk7XG4gICAgY29uc29sZS5sb2cobXlQcm9qZWN0cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3QoKSB7XG4gIHByb2plY3REaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgbXlQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpKSA9PiB7XG4gICAgcHJvamVjdERpdi5pbm5lckhUTUwgKz0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwic2luZ2xlUHJvakRpdlwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9qZWN0TmFtZVwiPiR7cHJvamVjdC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwcm9qZWN0RGVsSXRlbSBpY29uLWJ0bnNcIj48aSBjbGFzcz1cImZhbCBmYS10cmFzaC1hbHQgZmEtMnhcIj48L2k+PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICB9KTtcblxuICBsZXQgcmVtb3ZlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdERlbEl0ZW1cIik7XG4gIHJlbW92ZVByb2plY3QuZm9yRWFjaCgoYnV0dG9uLCBpbmRleCkgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZGVsZXRlUHJvamVjdChpbmRleCkpO1xuICB9KTtcblxuICBsZXQgcHJvamVjdEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3ROYW1lXCIpO1xuXG4gIHByb2plY3RJdGVtLmZvckVhY2goKGl0ZW0sIGlkKSA9PlxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBsZXQgY3VycmVudFByb2plY3QgPSBteVByb2plY3RzW2lkXTtcbiAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgIGN1cnJlbnRQcm9qZWN0LmFjdGl2ZSA9IHRydWU7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15UHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGkgIT09IGlkKSB7XG4gICAgICAgICAgbXlQcm9qZWN0c1tpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2FuY2VsVGFzaygpO1xuICAgICAgZGlzcGxheVByb2plY3RUYXNrKCk7XG4gICAgICBjb25zb2xlLmxvZyhteVByb2plY3RzKTtcbiAgICB9KVxuICApO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdFRhc2soKSB7XG4gIGxldCBhY3RpdmVQcm9qZWN0ID0gZ2V0QWN0aXZlUHJvamVjdCgpO1xuICBsZXQgY3VycmVudFByb2plY3QgPSBhY3RpdmVQcm9qZWN0LmdldEFsbFRhc2tzKCk7XG4gIGxldCB0YXNrRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRGl2XCIpO1xuICBsZXQgdGFza0hlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tY29udGVudFwiKS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgbGV0IHRhc2tEZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWRlc2NcIik7XG4gIHRhc2tEaXYuaW5uZXJIVE1MID0gXCJcIjtcblxuICB0YXNrSGVhZC5pbm5lckhUTUwgPSBhY3RpdmVQcm9qZWN0Lm5hbWU7XG4gIHRhc2tEZXNjLmlubmVySFRNTCA9IGFjdGl2ZVByb2plY3QuZGVzY3JpcHRpb247XG5cbiAgbGV0IHNpbmdsZVRhc2sgPSBcIlwiO1xuICBjdXJyZW50UHJvamVjdC5mb3JFYWNoKChwcm9qZWN0VGFzaykgPT4ge1xuICAgIGxldCB0YXNraWQgPSBwcm9qZWN0VGFzay5pZDtcblxuICAgIHNpbmdsZVRhc2sgKz0gYDxkaXYgY2xhc3M9XCJzaW5nbGUtdGFza1wiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiPlxuICAgICAgICAgICAgPGg0PiR7cHJvamVjdFRhc2sudGl0bGV9PC9oND5cbiAgICAgICAgICAgIDxzcGFuPiR7cHJvamVjdFRhc2suZHVlRGF0ZX08L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2luZ2xlVGFzay1idG5cIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZWRpdC10YXNrIGljb24tYnRuc1wiPjxpIGNsYXNzPVwiZmFsIGZhLWVkaXQgZmEtMnhcIj48L2k+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZS10YXNrIGljb24tYnRuc1wiPjxpIGRhdGEtdGFzaz0ke3Rhc2tpZH0gY2xhc3M9XCJmYWwgZmEtdHJhc2gtYWx0IGZhLTJ4XCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2luZ2xldGFzay1kZXNjXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIj4ke3Byb2plY3RUYXNrLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgfSk7XG5cbiAgdGFza0Rpdi5pbm5lckhUTUwgPSBcIlwiO1xuICB0YXNrRGl2LmlubmVySFRNTCArPSBzaW5nbGVUYXNrO1xuXG4gIHNob3dUYXNrRGVzY3JpcHRpb24oKTtcblxuICBsZXQgZGVsZXRlVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlLXRhc2tcIik7XG4gIGRlbGV0ZVRhc2tCdG4uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZVRhc2spO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2hvd1Rhc2tEZXNjcmlwdGlvbigpIHtcbiAgbGV0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaW5nbGUtdGFza1wiKTtcbiAgdGFza3MuZm9yRWFjaCgodGFzaywgaWQpID0+IHtcbiAgICB0YXNrLnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgICB0YXNrLm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coZS50YXJnZXQucGFyZW50Tm9kZSk7XG5cbiAgICAgIGlmIChpZCA9PSBlLnRhcmdldC5wYXJlbnROb2RlLmlkIHx8IGlkID09IGUudGFyZ2V0LmlkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tlZCBoZXJlXCIsIGlkKTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gdGFzay5xdWVyeVNlbGVjdG9yKFwiLnNpbmdsZXRhc2stZGVzY1wiKTtcblxuICAgICAgICBpZiAoZGVzY3JpcHRpb24uc3R5bGUuZGlzcGxheSA9PSBcImJsb2NrXCIpIHtcbiAgICAgICAgICBkZXNjcmlwdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZGVzY3JpcHRpb24uc3R5bGUuZGlzcGxheSA9PSBcIm5vbmVcIikge1xuICAgICAgICAgIGRlc2NyaXB0aW9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qSWQpIHtcbiAgbXlQcm9qZWN0cy5zcGxpY2UocHJvaklkLCAxKTtcbiAgZGlzcGxheVByb2plY3QoKTtcbiAgY29uc29sZS5sb2cobXlQcm9qZWN0cyk7XG59XG5cbmZ1bmN0aW9uIGNhbmNlbFByb2plY3QoKSB7XG4gIGxldCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RGb3JtXCIpO1xuICBkaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuXG4vL3Rhc2sgZm9ybVxuZnVuY3Rpb24gY3JlYXRlVGFza0Zvcm0oZSkge1xuICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0Zvcm1cIik7XG4gIHRvZG9Gb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgdG9kb0Zvcm0uaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1pbnB1dHNcIj5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cInRvZG9UaXRsZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUYXNrIHRpdGxlXCI+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJkYXRlXCIgdHlwZT1cImRhdGVcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJkZXNjcmlwdGlvblwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJ0YXNrIGRlc2NyaXB0aW9uXCIgY29sPjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1idXR0b25zXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiY3JlYXRlVGFza0J0blwiIGNsYXNzPVwiYnV0dG9uXCI+YWRkIFRhc2s8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjYW5jZWxUYXNrQnRuXCIgY2xhc3M9XCJidXR0b24tY2FuY2VsXCI+Y2FuY2VsPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgbGV0IGNyZWF0ZVRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZVRhc2tCdG5cIik7XG4gIGxldCBjYW5jZWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbmNlbFRhc2tCdG5cIik7XG5cbiAgY3JlYXRlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlVGFzayk7XG4gIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FuY2VsVGFzayk7XG59XG5cbmZ1bmN0aW9uIGNhbmNlbFRhc2soKSB7XG4gIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRm9ybVwiKTtcbiAgdG9kb0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrRHVlRGF0ZSwgdGFza1ByaW9yaXR5KSB7XG4gIGxldCBhY3RpdmVQcm9qZWN0ID0gZ2V0QWN0aXZlUHJvamVjdCgpO1xuXG4gIGxldCB0YXNrSWQgPSBhY3RpdmVQcm9qZWN0LnNldFRhc2tJZCgpO1xuICB0YXNrVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9UaXRsZVwiKS52YWx1ZTtcbiAgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWU7XG5cbiAgaWYgKCF0YXNrVGl0bGUpIHtcbiAgICBhbGVydChcIllvdSBtdXN0IGVudGVyIGEgdGFzayBUaXRsZSBmb3IgdGhpcyB0byBiZSB2YWxpZFwiKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgbmV3VGFzayA9IG5ldyBUb0RvSXRlbSh0YXNrSWQsIHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrRHVlRGF0ZSk7XG4gICAgYWN0aXZlUHJvamVjdC5hZGRUYXNrKG5ld1Rhc2spO1xuICAgIGRpc3BsYXlQcm9qZWN0VGFzaygpO1xuICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRm9ybVwiKTtcbiAgICB0b2RvRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhcImNhbGxlZCBmcm9tIGJ5IGRpc3BsYXllZCBmdW5jXCIsIG5ld1Rhc2spO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEFjdGl2ZVByb2plY3QoKSB7XG4gIHJldHVybiBteVByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHtcbiAgICByZXR1cm4gcHJvamVjdC5hY3RpdmU7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVUYXNrKGV2ZW50KSB7XG4gIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldCk7XG4gIGxldCB0YXNrSWQgPSBldmVudC50YXJnZXQuZGF0YXNldC50YXNrO1xuICBjb25zb2xlLmxvZyh0YXNrSWQpO1xuXG4gIGxldCBhY3RpdmVQcm9qZWN0ID0gZ2V0QWN0aXZlUHJvamVjdCgpO1xuICBhY3RpdmVQcm9qZWN0LmRlbGV0ZVRhc2socGFyc2VJbnQodGFza0lkKSk7XG4gIGRpc3BsYXlQcm9qZWN0VGFzaygpO1xuICBjb25zb2xlLmxvZyhteVByb2plY3RzKTtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==