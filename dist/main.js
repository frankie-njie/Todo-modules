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
  projectFormDiv.style.display = 'block'
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
            <button class="projectDelItem icon-btns"><i class="fal fa-trash-alt fa-2x"></i></button>
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

  let deleteTaskBtn = document.querySelectorAll(".delete-task");
  deleteTaskBtn.forEach((element) => {
    console.log(element.description);
    element.addEventListener("click",removeTask);
  });
}

function deleteProject(projId) {
  myProjects.splice(projId, 1);
  displayProject();
  console.log(myProjects);
}

function cancelProject() {
   let div = document.getElementById("projectForm")
   div.style.display = 'none';
}



//task form
function createTaskForm(e) {
  const todoForm = document.getElementById("taskForm");
  todoForm.style.display = 'block';

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

  createTaskBtn.addEventListener("click",createTask);
  cancelBtn.addEventListener("click", cancelTask);
}

function cancelTask() {
  const todoForm = document.getElementById("taskForm");
  todoForm.style.display = 'none'
}


function createTask(taskTitle, taskDescription, taskDueDate, taskPriority) {
  let activeProject = getActiveProject()

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
    todoForm.style.display = 'none'

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

function closeForm(e) {
    let form = e.target;
    console.log(e.target);
    form.style.display = 'none'
    
}

// show all task in a project
// when a project is removed, all the tasks should also be removed

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95Ly4vc3JjL21vZHVsZXMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly95Ly4vc3JjL21vZHVsZXMvVG9Eb0l0ZW0uanMiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3kvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxPQUFPLEU7Ozs7Ozs7Ozs7Ozs7O0FDOUJ0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRTs7Ozs7O1VDekJ2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7QUNOMEM7QUFDRjtBQUN4Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSCx5QkFBeUIscURBQU87QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJCQUEyQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxhQUFhO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHVCQUF1QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQyxvQkFBb0Isb0JBQW9CO0FBQ3hDO0FBQ0E7QUFDQSxxRUFBcUUsT0FBTztBQUM1RTtBQUNBLGdFQUFnRSx3QkFBd0I7QUFDeEY7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSCxzQkFBc0Isc0RBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQcm9qZWN0e1xuY29uc3RydWN0b3IoaWQsIG5hbWUsIGRlc2NyaXB0aW9uKSB7XG4gICAgdGhpcy5pZCA9IGlkXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uICA9IGRlc2NyaXB0aW9uXG4gICAgdGhpcy5hbGxUYXNrcyA9IFtdO1xuICAgIHRoaXMuYWN0aXZlXG59XG5hZGRUYXNrKHRhc2spe1xuICAgIHRoaXMuYWxsVGFza3MucHVzaCh0YXNrKVxufVxuZGVsZXRlVGFzayh0YXNrSWQpe1xuICB0aGlzLmFsbFRhc2tzID0gdGhpcy5hbGxUYXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgIT09IHRhc2tJZClcbiAgICAvLyB0aGlzLmFsbFRhc2tzLnNwbGljZSh0YXNrSWQsIDEpXG59IFxuc2V0VGFza0lkKCl7XG4gICAgcmV0dXJuIHRoaXMuYWxsVGFza3MubGVuZ3RoXG59XG5nZXRBbGxUYXNrcygpe1xuICAgIHJldHVybiB0aGlzLmFsbFRhc2tzXG59XG5nZXRJZCgpe1xuICAgIHJldHVybiB0aGlzLmlkXG59XG5cbmdldFRpdGxlKCl7XG4gICAgcmV0dXJuIHRoaXMubmFtZVxufVxufVxuIFxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDsiLCIvLyBmdW5jdGlvbiBUb0RvSXRlbSgpIHtcbi8vICAgICBjb25zb2xlLmxvZyhcIkEgdG9kbyBpdGVtIGhhcyBiZWVuIGNyZWF0ZWRcIik7XG4vLyB9XG5cbmNsYXNzIFRvRG9JdGVtIHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjsgXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgLy8gdGhpcy5ub3RlcyA9IG5vdGVzXG4gICAgfVxuICAgIC8vIGdldElkKCl7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLmlkXG4gICAgLy8gfVxuXG4gICB0b0RvVGl0bGUgKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlXG4gICAgfVxuICAgIHRvRG9EZXNjcmlwdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvRG9JdGVtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRvRG9JdGVtIGZyb20gXCIuL21vZHVsZXMvVG9Eb0l0ZW1cIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL21vZHVsZXMvUHJvamVjdFwiO1xuY29uc29sZS5sb2coXCJoZWxsbyB3b3JsZCFcIik7XG5cbi8vIGNvbnN0IG15VGFza3MgPSBbXTtcbmNvbnN0IG15UHJvamVjdHMgPSBbXTtcblxuY29uc3QgYWxsVG9kb2l0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRGl2XCIpO1xuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza1wiKTtcbmNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RMaXN0XCIpO1xuXG5jb25zdCBhZGRQcm9qZWN0c0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUHJvamVjdFwiKTtcblxuLy9idXR0b24gZXZlbnQgbGlzdGVuZXJzXG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVUYXNrRm9ybSk7XG5hZGRQcm9qZWN0c0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlUHJvamVjdEZvcm0pO1xuXG5cbi8vcHJvamVjdCBmb3JtXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0Rm9ybSgpIHtcbiAgbGV0IHByb2plY3RGb3JtRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0Rm9ybVwiKTtcbiAgcHJvamVjdEZvcm1EaXYuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgcHJvamVjdEZvcm1EaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPiBcbiAgICAgICAgPGxhYmVsIGZvcj1cInByb2plY3RObWVcIj5Qcm9qZWN0IE5hbWU8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgaWQ9XCJwcm9qZWN0Tm1lXCIgdHlwZT1cInRleHRcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cIlwiPlByb2plY3QgRGVzY3JpcHRpb248L2xhYmVsPlxuICAgICAgICA8aW5wdXQgaWQ9XCJwcm9qZWN0RGVzY1wiIHR5cGU9XCJ0ZXh0XCI+XG4gICAgICAgIDxidXR0b24gaWQ9XCJjcmVhdGVQcm9qZWN0XCIgY2xhc3M9XCJidXR0b25cIj5jcmVhdGUgcHJvamVjdDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGlkPVwiY2FuY2VsUHJvamVjdFwiIGNsYXNzPVwiYnV0dG9uLWNhbmNlbFwiPmNhbmNlbDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuICBsZXQgcHJvamVjdERlbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsUHJvamVjdFwiKTtcbiAgcHJvamVjdERlbEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGNhbmNlbFByb2plY3QoKTtcbiAgfTtcblxuICBsZXQgcHJvamVjdENyZWF0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlUHJvamVjdFwiKTtcbiAgcHJvamVjdENyZWF0ZUJ0bi5vbmNsaWNrID0gY3JlYXRlUHJvamVjdDtcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHByb2pOYW1lLCBwcm9qRGVzY3JpcHRpb24pIHtcbiAgbGV0IHByb2pJZCA9IG15UHJvamVjdHMubGVuZ3RoO1xuICBwcm9qTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdE5tZVwiKS52YWx1ZTtcbiAgcHJvakRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0RGVzY1wiKS52YWx1ZTtcbiAgbGV0IHByb2plY3RTdGF0ZTtcblxuICBpZiAoIXByb2pOYW1lKSB7XG4gICAgYWxlcnQoXCJFbnRlciBhIHByb2plY3QgbmFtZVwiKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KFxuICAgICAgcHJvaklkLFxuICAgICAgcHJvak5hbWUsXG4gICAgICBwcm9qRGVzY3JpcHRpb24sXG4gICAgICBwcm9qZWN0U3RhdGVcbiAgICApO1xuICAgIG15UHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICBkaXNwbGF5UHJvamVjdCgpO1xuICAgIGNhbmNlbFByb2plY3QoKVxuICAgIG5ld1Byb2plY3QuYWN0aXZlID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15UHJvamVjdHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBteVByb2plY3RzW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgICBkaXNwbGF5UHJvamVjdFRhc2soKTtcbiAgICBjb25zb2xlLmxvZyhteVByb2plY3RzKTtcbiAgfVxuXG59XG5cbi8vIGZ1bmN0aW9uIGdldEFjdGl2ZVByb2plY3QoKSB7XG4vLyAgICAgcmV0dXJuIG15UHJvamVjdHMuZmluZCgocHJvamVjdCk9Pntcbi8vICAgICAgICAgcmV0dXJuIHByb2plY3QuYWN0aXZlXG4vLyAgICAgfSlcbi8vIH1cblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3QoKSB7XG4gIHByb2plY3REaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgbXlQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpKSA9PiB7XG4gICAgXG4gICAgcHJvamVjdERpdi5pbm5lckhUTUwgKz0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwic2luZ2xlUHJvakRpdlwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9qZWN0TmFtZVwiPiR7cHJvamVjdC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwcm9qZWN0RGVsSXRlbSBpY29uLWJ0bnNcIj48aSBjbGFzcz1cImZhbCBmYS10cmFzaC1hbHQgZmEtMnhcIj48L2k+PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICB9KTtcblxuICBsZXQgcmVtb3ZlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdERlbEl0ZW1cIik7XG4gIHJlbW92ZVByb2plY3QuZm9yRWFjaCgoYnV0dG9uLCBpbmRleCkgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZGVsZXRlUHJvamVjdChpbmRleCkpO1xuICB9KTtcblxuICBsZXQgcHJvamVjdEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3ROYW1lXCIpO1xuXG4gIHByb2plY3RJdGVtLmZvckVhY2goKGl0ZW0saWQpID0+XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gbXlQcm9qZWN0c1tpZF1cbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QpO1xuICAgICAgICBjdXJyZW50UHJvamVjdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15UHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpICE9PSBpZCkge1xuICAgICAgICAgICAgICAgIG15UHJvamVjdHNbaV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2FuY2VsVGFzaygpXG4gICAgICAgIGRpc3BsYXlQcm9qZWN0VGFzaygpO1xuICAgICAgICBjb25zb2xlLmxvZyhteVByb2plY3RzKTtcbiAgICB9KVxuICApO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdFRhc2soKSB7XG4gIGxldCBhY3RpdmVQcm9qZWN0ID0gZ2V0QWN0aXZlUHJvamVjdCgpO1xuICBsZXQgY3VycmVudFByb2plY3QgPSBhY3RpdmVQcm9qZWN0LmdldEFsbFRhc2tzKCk7XG4gIGxldCB0YXNrRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRGl2XCIpO1xuICBsZXQgdGFza0hlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tY29udGVudFwiKS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgbGV0IHRhc2tEZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtZGVzYycpXG4gIHRhc2tEaXYuaW5uZXJIVE1MID0gXCJcIjtcblxuICB0YXNrSGVhZC5pbm5lckhUTUwgPSBhY3RpdmVQcm9qZWN0Lm5hbWU7XG4gIHRhc2tEZXNjLmlubmVySFRNTCA9IGFjdGl2ZVByb2plY3QuZGVzY3JpcHRpb25cbiAgXG5cbiAgbGV0IHNpbmdsZVRhc2sgPSBcIlwiO1xuICBjdXJyZW50UHJvamVjdC5mb3JFYWNoKChwcm9qZWN0VGFzaykgPT4ge1xuICAgIGxldCB0YXNraWQgPSBwcm9qZWN0VGFzay5pZDtcblxuICAgIHNpbmdsZVRhc2sgKz0gYDxkaXYgaWQ9XCJzaW5nbGVUYXNrXCIgY2xhc3M9XCJzaW5nbGUtdGFza1wiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiPlxuICAgICAgICAgICAgPGg0PiR7cHJvamVjdFRhc2sudGl0bGV9PC9oND5cbiAgICAgICAgICAgIDxzcGFuPiR7cHJvamVjdFRhc2suZHVlRGF0ZX08L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2luZ2xlVGFzay1idG5cIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZWRpdC10YXNrIGljb24tYnRuc1wiPjxpIGNsYXNzPVwiZmFsIGZhLWVkaXQgZmEtMnhcIj48L2k+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZS10YXNrIGljb24tYnRuc1wiPjxpIGRhdGEtdGFzaz0ke3Rhc2tpZH0gY2xhc3M9XCJmYWwgZmEtdHJhc2gtYWx0IGZhLTJ4XCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2luZ2xldGFzay1kZXNjXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIj4ke3Byb2plY3RUYXNrLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgfSk7XG5cbiAgdGFza0Rpdi5pbm5lckhUTUwgPSBcIlwiO1xuICB0YXNrRGl2LmlubmVySFRNTCArPSBzaW5nbGVUYXNrO1xuXG4gIGxldCBkZWxldGVUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGUtdGFza1wiKTtcbiAgZGVsZXRlVGFza0J0bi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coZWxlbWVudC5kZXNjcmlwdGlvbik7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixyZW1vdmVUYXNrKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvaklkKSB7XG4gIG15UHJvamVjdHMuc3BsaWNlKHByb2pJZCwgMSk7XG4gIGRpc3BsYXlQcm9qZWN0KCk7XG4gIGNvbnNvbGUubG9nKG15UHJvamVjdHMpO1xufVxuXG5mdW5jdGlvbiBjYW5jZWxQcm9qZWN0KCkge1xuICAgbGV0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdEZvcm1cIilcbiAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5cblxuLy90YXNrIGZvcm1cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tGb3JtKGUpIHtcbiAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tGb3JtXCIpO1xuICB0b2RvRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICB0b2RvRm9ybS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWlucHV0c1wiPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwidG9kb1RpdGxlXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlRhc2sgdGl0bGVcIj5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImRhdGVcIiB0eXBlPVwiZGF0ZVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cImRlc2NyaXB0aW9uXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cInRhc2sgZGVzY3JpcHRpb25cIiBjb2w+PC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjcmVhdGVUYXNrQnRuXCIgY2xhc3M9XCJidXR0b25cIj5hZGQgVGFzazwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNhbmNlbFRhc2tCdG5cIiBjbGFzcz1cImJ1dHRvbi1jYW5jZWxcIj5jYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcblxuICBsZXQgY3JlYXRlVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlVGFza0J0blwiKTtcbiAgbGV0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsVGFza0J0blwiKTtcblxuICBjcmVhdGVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGNyZWF0ZVRhc2spO1xuICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhbmNlbFRhc2spO1xufVxuXG5mdW5jdGlvbiBjYW5jZWxUYXNrKCkge1xuICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0Zvcm1cIik7XG4gIHRvZG9Gb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrRHVlRGF0ZSwgdGFza1ByaW9yaXR5KSB7XG4gIGxldCBhY3RpdmVQcm9qZWN0ID0gZ2V0QWN0aXZlUHJvamVjdCgpXG5cbiAgbGV0IHRhc2tJZCA9IGFjdGl2ZVByb2plY3Quc2V0VGFza0lkKCk7XG4gIHRhc2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb1RpdGxlXCIpLnZhbHVlO1xuICB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKS52YWx1ZTtcblxuICBpZiAoIXRhc2tUaXRsZSkge1xuICAgIGFsZXJ0KFwiWW91IG11c3QgZW50ZXIgYSB0YXNrIFRpdGxlIGZvciB0aGlzIHRvIGJlIHZhbGlkXCIpO1xuICB9IGVsc2Uge1xuICAgIGxldCBuZXdUYXNrID0gbmV3IFRvRG9JdGVtKHRhc2tJZCwgdGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24sIHRhc2tEdWVEYXRlKTtcbiAgICBhY3RpdmVQcm9qZWN0LmFkZFRhc2sobmV3VGFzayk7XG4gICAgZGlzcGxheVByb2plY3RUYXNrKCk7XG4gICAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tGb3JtXCIpO1xuICAgIHRvZG9Gb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcblxuICAgIC8vIGNvbnNvbGUubG9nKFwiY2FsbGVkIGZyb20gYnkgZGlzcGxheWVkIGZ1bmNcIiwgbmV3VGFzayk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0QWN0aXZlUHJvamVjdCgpIHtcbiAgcmV0dXJuIG15UHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4ge1xuICAgIHJldHVybiBwcm9qZWN0LmFjdGl2ZTtcbiAgfSk7XG59XG5cblxuZnVuY3Rpb24gcmVtb3ZlVGFzayhldmVudCkge1xuICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpO1xuICBsZXQgdGFza0lkID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudGFzaztcbiAgY29uc29sZS5sb2codGFza0lkKTtcblxuICBsZXQgYWN0aXZlUHJvamVjdCA9IGdldEFjdGl2ZVByb2plY3QoKVxuICBhY3RpdmVQcm9qZWN0LmRlbGV0ZVRhc2socGFyc2VJbnQodGFza0lkKSk7XG4gIGRpc3BsYXlQcm9qZWN0VGFzaygpO1xuICBjb25zb2xlLmxvZyhteVByb2plY3RzKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VGb3JtKGUpIHtcbiAgICBsZXQgZm9ybSA9IGUudGFyZ2V0O1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcbiAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICBcbn1cblxuLy8gc2hvdyBhbGwgdGFzayBpbiBhIHByb2plY3Rcbi8vIHdoZW4gYSBwcm9qZWN0IGlzIHJlbW92ZWQsIGFsbCB0aGUgdGFza3Mgc2hvdWxkIGFsc28gYmUgcmVtb3ZlZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==