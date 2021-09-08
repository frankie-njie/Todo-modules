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

    singleTask += `<div id="singleTask" class="single-task">
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

  // let tasks = document.querySelectorAll(".single-task");
  // tasks.forEach((task, id) => {
  //   task.onclick = () => {
  //     console.log("clicked");
  //     let taskDescription = document.querySelectorAll(".singletask-desc");
  //     console.log(taskDescription);
  //     taskDescription.forEach((element) => {
  //       if (element.innerHTML === "") {
  //         console.log("empty");
  //       } else if (element == id && element.innerHTML !== "") {
  //         console.log(id  );
  //         element.style.display = "block";
  //       }
  //     });
  //     // if (taskDescription === ""){
  //     //   console.log("string is empty");
  //     // }else taskDescription.style.display = "block"
  //   };
  // });

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


// show all task in a project
// when a project is removed, all the tasks should also be removed

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95Ly4vc3JjL21vZHVsZXMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly95Ly4vc3JjL21vZHVsZXMvVG9Eb0l0ZW0uanMiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3kvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxPQUFPLEU7Ozs7Ozs7Ozs7Ozs7O0FDOUJ0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRTs7Ozs7O1VDekJ2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7QUNOMEM7QUFDRjtBQUN4Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gseUJBQXlCLHFEQUFPO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwyQkFBMkI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsYUFBYTtBQUNyRDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix1QkFBdUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQyxvQkFBb0Isb0JBQW9CO0FBQ3hDO0FBQ0E7QUFDQSxxRUFBcUUsT0FBTztBQUM1RTtBQUNBLGdFQUFnRSx3QkFBd0I7QUFDeEY7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSCxzQkFBc0Isc0RBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQcm9qZWN0e1xuY29uc3RydWN0b3IoaWQsIG5hbWUsIGRlc2NyaXB0aW9uKSB7XG4gICAgdGhpcy5pZCA9IGlkXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uICA9IGRlc2NyaXB0aW9uXG4gICAgdGhpcy5hbGxUYXNrcyA9IFtdO1xuICAgIHRoaXMuYWN0aXZlXG59XG5hZGRUYXNrKHRhc2spe1xuICAgIHRoaXMuYWxsVGFza3MucHVzaCh0YXNrKVxufVxuZGVsZXRlVGFzayh0YXNrSWQpe1xuICB0aGlzLmFsbFRhc2tzID0gdGhpcy5hbGxUYXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgIT09IHRhc2tJZClcbiAgICAvLyB0aGlzLmFsbFRhc2tzLnNwbGljZSh0YXNrSWQsIDEpXG59IFxuc2V0VGFza0lkKCl7XG4gICAgcmV0dXJuIHRoaXMuYWxsVGFza3MubGVuZ3RoXG59XG5nZXRBbGxUYXNrcygpe1xuICAgIHJldHVybiB0aGlzLmFsbFRhc2tzXG59XG5nZXRJZCgpe1xuICAgIHJldHVybiB0aGlzLmlkXG59XG5cbmdldFRpdGxlKCl7XG4gICAgcmV0dXJuIHRoaXMubmFtZVxufVxufVxuIFxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDsiLCIvLyBmdW5jdGlvbiBUb0RvSXRlbSgpIHtcbi8vICAgICBjb25zb2xlLmxvZyhcIkEgdG9kbyBpdGVtIGhhcyBiZWVuIGNyZWF0ZWRcIik7XG4vLyB9XG5cbmNsYXNzIFRvRG9JdGVtIHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjsgXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgLy8gdGhpcy5ub3RlcyA9IG5vdGVzXG4gICAgfVxuICAgIC8vIGdldElkKCl7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLmlkXG4gICAgLy8gfVxuXG4gICB0b0RvVGl0bGUgKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlXG4gICAgfVxuICAgIHRvRG9EZXNjcmlwdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvRG9JdGVtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRvRG9JdGVtIGZyb20gXCIuL21vZHVsZXMvVG9Eb0l0ZW1cIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL21vZHVsZXMvUHJvamVjdFwiO1xuY29uc29sZS5sb2coXCJoZWxsbyB3b3JsZCFcIik7XG5cbi8vIGNvbnN0IG15VGFza3MgPSBbXTtcbmNvbnN0IG15UHJvamVjdHMgPSBbXTtcblxuY29uc3QgYWxsVG9kb2l0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRGl2XCIpO1xuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza1wiKTtcbmNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RMaXN0XCIpO1xuXG5jb25zdCBhZGRQcm9qZWN0c0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUHJvamVjdFwiKTtcblxuLy9idXR0b24gZXZlbnQgbGlzdGVuZXJzXG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVUYXNrRm9ybSk7XG5hZGRQcm9qZWN0c0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlUHJvamVjdEZvcm0pO1xuXG4vL3Byb2plY3QgZm9ybVxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEZvcm0oKSB7XG4gIGxldCBwcm9qZWN0Rm9ybURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdEZvcm1cIik7XG4gIHByb2plY3RGb3JtRGl2LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIHByb2plY3RGb3JtRGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj4gXG4gICAgICAgIDxsYWJlbCBmb3I9XCJwcm9qZWN0Tm1lXCI+UHJvamVjdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGlkPVwicHJvamVjdE5tZVwiIHR5cGU9XCJ0ZXh0XCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJcIj5Qcm9qZWN0IERlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGlkPVwicHJvamVjdERlc2NcIiB0eXBlPVwidGV4dFwiPlxuICAgICAgICA8YnV0dG9uIGlkPVwiY3JlYXRlUHJvamVjdFwiIGNsYXNzPVwiYnV0dG9uXCI+Y3JlYXRlIHByb2plY3Q8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cImNhbmNlbFByb2plY3RcIiBjbGFzcz1cImJ1dHRvbi1jYW5jZWxcIj5jYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcbiAgbGV0IHByb2plY3REZWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbmNlbFByb2plY3RcIik7XG4gIHByb2plY3REZWxCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICBjYW5jZWxQcm9qZWN0KCk7XG4gIH07XG5cbiAgbGV0IHByb2plY3RDcmVhdGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZVByb2plY3RcIik7XG4gIHByb2plY3RDcmVhdGVCdG4ub25jbGljayA9IGNyZWF0ZVByb2plY3Q7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QocHJvak5hbWUsIHByb2pEZXNjcmlwdGlvbikge1xuICBsZXQgcHJvaklkID0gbXlQcm9qZWN0cy5sZW5ndGg7XG4gIHByb2pOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0Tm1lXCIpLnZhbHVlO1xuICBwcm9qRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3REZXNjXCIpLnZhbHVlO1xuICBsZXQgcHJvamVjdFN0YXRlO1xuXG4gIGlmICghcHJvak5hbWUpIHtcbiAgICBhbGVydChcIkVudGVyIGEgcHJvamVjdCBuYW1lXCIpO1xuICB9IGVsc2Uge1xuICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoXG4gICAgICBwcm9qSWQsXG4gICAgICBwcm9qTmFtZSxcbiAgICAgIHByb2pEZXNjcmlwdGlvbixcbiAgICAgIHByb2plY3RTdGF0ZVxuICAgICk7XG4gICAgbXlQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgIGRpc3BsYXlQcm9qZWN0KCk7XG4gICAgY2FuY2VsUHJvamVjdCgpO1xuICAgIG5ld1Byb2plY3QuYWN0aXZlID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15UHJvamVjdHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBteVByb2plY3RzW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgICBkaXNwbGF5UHJvamVjdFRhc2soKTtcbiAgICBjb25zb2xlLmxvZyhteVByb2plY3RzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdCgpIHtcbiAgcHJvamVjdERpdi5pbm5lckhUTUwgPSBcIlwiO1xuICBteVByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGkpID0+IHtcbiAgICBwcm9qZWN0RGl2LmlubmVySFRNTCArPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaW5nbGVQcm9qRGl2XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb2plY3ROYW1lXCI+JHtwcm9qZWN0Lm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInByb2plY3REZWxJdGVtIGljb24tYnRuc1wiPjxpIGNsYXNzPVwiZmFsIGZhLXRyYXNoLWFsdCBmYS0yeFwiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gIH0pO1xuXG4gIGxldCByZW1vdmVQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0RGVsSXRlbVwiKTtcbiAgcmVtb3ZlUHJvamVjdC5mb3JFYWNoKChidXR0b24sIGluZGV4KSA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBkZWxldGVQcm9qZWN0KGluZGV4KSk7XG4gIH0pO1xuXG4gIGxldCBwcm9qZWN0SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdE5hbWVcIik7XG5cbiAgcHJvamVjdEl0ZW0uZm9yRWFjaCgoaXRlbSwgaWQpID0+XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGxldCBjdXJyZW50UHJvamVjdCA9IG15UHJvamVjdHNbaWRdO1xuICAgICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QpO1xuICAgICAgY3VycmVudFByb2plY3QuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXlQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaSAhPT0gaWQpIHtcbiAgICAgICAgICBteVByb2plY3RzW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjYW5jZWxUYXNrKCk7XG4gICAgICBkaXNwbGF5UHJvamVjdFRhc2soKTtcbiAgICAgIGNvbnNvbGUubG9nKG15UHJvamVjdHMpO1xuICAgIH0pXG4gICk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0VGFzaygpIHtcbiAgbGV0IGFjdGl2ZVByb2plY3QgPSBnZXRBY3RpdmVQcm9qZWN0KCk7XG4gIGxldCBjdXJyZW50UHJvamVjdCA9IGFjdGl2ZVByb2plY3QuZ2V0QWxsVGFza3MoKTtcbiAgbGV0IHRhc2tEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tEaXZcIik7XG4gIGxldCB0YXNrSGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1jb250ZW50XCIpLmZpcnN0RWxlbWVudENoaWxkO1xuICBsZXQgdGFza0Rlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtZGVzY1wiKTtcbiAgdGFza0Rpdi5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIHRhc2tIZWFkLmlubmVySFRNTCA9IGFjdGl2ZVByb2plY3QubmFtZTtcbiAgdGFza0Rlc2MuaW5uZXJIVE1MID0gYWN0aXZlUHJvamVjdC5kZXNjcmlwdGlvbjtcblxuICBsZXQgc2luZ2xlVGFzayA9IFwiXCI7XG4gIGN1cnJlbnRQcm9qZWN0LmZvckVhY2goKHByb2plY3RUYXNrKSA9PiB7XG4gICAgbGV0IHRhc2tpZCA9IHByb2plY3RUYXNrLmlkO1xuXG4gICAgc2luZ2xlVGFzayArPSBgPGRpdiBpZD1cInNpbmdsZVRhc2tcIiBjbGFzcz1cInNpbmdsZS10YXNrXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCI+XG4gICAgICAgICAgICA8aDQ+JHtwcm9qZWN0VGFzay50aXRsZX08L2g0PlxuICAgICAgICAgICAgPHNwYW4+JHtwcm9qZWN0VGFzay5kdWVEYXRlfTwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaW5nbGVUYXNrLWJ0blwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJlZGl0LXRhc2sgaWNvbi1idG5zXCI+PGkgY2xhc3M9XCJmYWwgZmEtZWRpdCBmYS0yeFwiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlLXRhc2sgaWNvbi1idG5zXCI+PGkgZGF0YS10YXNrPSR7dGFza2lkfSBjbGFzcz1cImZhbCBmYS10cmFzaC1hbHQgZmEtMnhcIj48L2k+PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaW5nbGV0YXNrLWRlc2NcIiBzdHlsZT1cImRpc3BsYXk6bm9uZVwiPiR7cHJvamVjdFRhc2suZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICB9KTtcblxuICB0YXNrRGl2LmlubmVySFRNTCA9IFwiXCI7XG4gIHRhc2tEaXYuaW5uZXJIVE1MICs9IHNpbmdsZVRhc2s7XG5cbiAgLy8gbGV0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaW5nbGUtdGFza1wiKTtcbiAgLy8gdGFza3MuZm9yRWFjaCgodGFzaywgaWQpID0+IHtcbiAgLy8gICB0YXNrLm9uY2xpY2sgPSAoKSA9PiB7XG4gIC8vICAgICBjb25zb2xlLmxvZyhcImNsaWNrZWRcIik7XG4gIC8vICAgICBsZXQgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaW5nbGV0YXNrLWRlc2NcIik7XG4gIC8vICAgICBjb25zb2xlLmxvZyh0YXNrRGVzY3JpcHRpb24pO1xuICAvLyAgICAgdGFza0Rlc2NyaXB0aW9uLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgLy8gICAgICAgaWYgKGVsZW1lbnQuaW5uZXJIVE1MID09PSBcIlwiKSB7XG4gIC8vICAgICAgICAgY29uc29sZS5sb2coXCJlbXB0eVwiKTtcbiAgLy8gICAgICAgfSBlbHNlIGlmIChlbGVtZW50ID09IGlkICYmIGVsZW1lbnQuaW5uZXJIVE1MICE9PSBcIlwiKSB7XG4gIC8vICAgICAgICAgY29uc29sZS5sb2coaWQgICk7XG4gIC8vICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9KTtcbiAgLy8gICAgIC8vIGlmICh0YXNrRGVzY3JpcHRpb24gPT09IFwiXCIpe1xuICAvLyAgICAgLy8gICBjb25zb2xlLmxvZyhcInN0cmluZyBpcyBlbXB0eVwiKTtcbiAgLy8gICAgIC8vIH1lbHNlIHRhc2tEZXNjcmlwdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gIC8vICAgfTtcbiAgLy8gfSk7XG5cbiAgbGV0IGRlbGV0ZVRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZS10YXNrXCIpO1xuICBkZWxldGVUYXNrQnRuLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVUYXNrKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvaklkKSB7XG4gIG15UHJvamVjdHMuc3BsaWNlKHByb2pJZCwgMSk7XG4gIGRpc3BsYXlQcm9qZWN0KCk7XG4gIGNvbnNvbGUubG9nKG15UHJvamVjdHMpO1xufVxuXG5mdW5jdGlvbiBjYW5jZWxQcm9qZWN0KCkge1xuICBsZXQgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0Rm9ybVwiKTtcbiAgZGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuLy90YXNrIGZvcm1cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tGb3JtKGUpIHtcbiAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tGb3JtXCIpO1xuICB0b2RvRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gIHRvZG9Gb3JtLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0taW5wdXRzXCI+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJ0b2RvVGl0bGVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVGFzayB0aXRsZVwiPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiZGF0ZVwiIHR5cGU9XCJkYXRlXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiZGVzY3JpcHRpb25cIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwidGFzayBkZXNjcmlwdGlvblwiIGNvbD48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tYnV0dG9uc1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNyZWF0ZVRhc2tCdG5cIiBjbGFzcz1cImJ1dHRvblwiPmFkZCBUYXNrPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2FuY2VsVGFza0J0blwiIGNsYXNzPVwiYnV0dG9uLWNhbmNlbFwiPmNhbmNlbDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gIGxldCBjcmVhdGVUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGVUYXNrQnRuXCIpO1xuICBsZXQgY2FuY2VsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5jZWxUYXNrQnRuXCIpO1xuXG4gIGNyZWF0ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVRhc2spO1xuICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhbmNlbFRhc2spO1xufVxuXG5mdW5jdGlvbiBjYW5jZWxUYXNrKCkge1xuICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0Zvcm1cIik7XG4gIHRvZG9Gb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFzayh0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza0R1ZURhdGUsIHRhc2tQcmlvcml0eSkge1xuICBsZXQgYWN0aXZlUHJvamVjdCA9IGdldEFjdGl2ZVByb2plY3QoKTtcblxuICBsZXQgdGFza0lkID0gYWN0aXZlUHJvamVjdC5zZXRUYXNrSWQoKTtcbiAgdGFza1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvVGl0bGVcIikudmFsdWU7XG4gIHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWU7XG4gIHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLnZhbHVlO1xuXG4gIGlmICghdGFza1RpdGxlKSB7XG4gICAgYWxlcnQoXCJZb3UgbXVzdCBlbnRlciBhIHRhc2sgVGl0bGUgZm9yIHRoaXMgdG8gYmUgdmFsaWRcIik7XG4gIH0gZWxzZSB7XG4gICAgbGV0IG5ld1Rhc2sgPSBuZXcgVG9Eb0l0ZW0odGFza0lkLCB0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza0R1ZURhdGUpO1xuICAgIGFjdGl2ZVByb2plY3QuYWRkVGFzayhuZXdUYXNrKTtcbiAgICBkaXNwbGF5UHJvamVjdFRhc2soKTtcbiAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0Zvcm1cIik7XG4gICAgdG9kb0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgLy8gY29uc29sZS5sb2coXCJjYWxsZWQgZnJvbSBieSBkaXNwbGF5ZWQgZnVuY1wiLCBuZXdUYXNrKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRBY3RpdmVQcm9qZWN0KCkge1xuICByZXR1cm4gbXlQcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiB7XG4gICAgcmV0dXJuIHByb2plY3QuYWN0aXZlO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGFzayhldmVudCkge1xuICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpO1xuICBsZXQgdGFza0lkID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudGFzaztcbiAgY29uc29sZS5sb2codGFza0lkKTtcblxuICBsZXQgYWN0aXZlUHJvamVjdCA9IGdldEFjdGl2ZVByb2plY3QoKTtcbiAgYWN0aXZlUHJvamVjdC5kZWxldGVUYXNrKHBhcnNlSW50KHRhc2tJZCkpO1xuICBkaXNwbGF5UHJvamVjdFRhc2soKTtcbiAgY29uc29sZS5sb2cobXlQcm9qZWN0cyk7XG59XG5cblxuLy8gc2hvdyBhbGwgdGFzayBpbiBhIHByb2plY3Rcbi8vIHdoZW4gYSBwcm9qZWN0IGlzIHJlbW92ZWQsIGFsbCB0aGUgdGFza3Mgc2hvdWxkIGFsc28gYmUgcmVtb3ZlZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==