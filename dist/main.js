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
// let form = document.getElementsByClassName('form');
// form[0].onclick = () => createProjectForm();
// form[1].onclick = () => createTaskForm();


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
        
            <h4>${projectTask.title}</h4>
            <span>${projectTask.dueDate}</span>
            <div class="singleTask-btn">
                <button class="edit-task">edit task</button>
                <button data-task=${taskid} class="delete-task">delete task </button>
            </div>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95Ly4vc3JjL21vZHVsZXMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly95Ly4vc3JjL21vZHVsZXMvVG9Eb0l0ZW0uanMiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3kvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxPQUFPLEU7Ozs7Ozs7Ozs7Ozs7O0FDOUJ0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRTs7Ozs7O1VDekJ2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7QUNOMEM7QUFDRjtBQUN4Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSCx5QkFBeUIscURBQU87QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJCQUEyQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxhQUFhO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHVCQUF1QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxrQkFBa0Isa0JBQWtCO0FBQ3BDLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQTtBQUNBLG9DQUFvQyxPQUFPO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNILHNCQUFzQixzREFBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByb2plY3R7XG5jb25zdHJ1Y3RvcihpZCwgbmFtZSwgZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLmlkID0gaWRcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gID0gZGVzY3JpcHRpb25cbiAgICB0aGlzLmFsbFRhc2tzID0gW107XG4gICAgdGhpcy5hY3RpdmVcbn1cbmFkZFRhc2sodGFzayl7XG4gICAgdGhpcy5hbGxUYXNrcy5wdXNoKHRhc2spXG59XG5kZWxldGVUYXNrKHRhc2tJZCl7XG4gIHRoaXMuYWxsVGFza3MgPSB0aGlzLmFsbFRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5pZCAhPT0gdGFza0lkKVxuICAgIC8vIHRoaXMuYWxsVGFza3Muc3BsaWNlKHRhc2tJZCwgMSlcbn0gXG5zZXRUYXNrSWQoKXtcbiAgICByZXR1cm4gdGhpcy5hbGxUYXNrcy5sZW5ndGhcbn1cbmdldEFsbFRhc2tzKCl7XG4gICAgcmV0dXJuIHRoaXMuYWxsVGFza3Ncbn1cbmdldElkKCl7XG4gICAgcmV0dXJuIHRoaXMuaWRcbn1cblxuZ2V0VGl0bGUoKXtcbiAgICByZXR1cm4gdGhpcy5uYW1lXG59XG59XG4gXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0OyIsIi8vIGZ1bmN0aW9uIFRvRG9JdGVtKCkge1xuLy8gICAgIGNvbnNvbGUubG9nKFwiQSB0b2RvIGl0ZW0gaGFzIGJlZW4gY3JlYXRlZFwiKTtcbi8vIH1cblxuY2xhc3MgVG9Eb0l0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcykge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uOyBcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICAvLyB0aGlzLm5vdGVzID0gbm90ZXNcbiAgICB9XG4gICAgLy8gZ2V0SWQoKXtcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuaWRcbiAgICAvLyB9XG5cbiAgIHRvRG9UaXRsZSAoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGVcbiAgICB9XG4gICAgdG9Eb0Rlc2NyaXB0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9Eb0l0ZW07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVG9Eb0l0ZW0gZnJvbSBcIi4vbW9kdWxlcy9Ub0RvSXRlbVwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vbW9kdWxlcy9Qcm9qZWN0XCI7XG5jb25zb2xlLmxvZyhcImhlbGxvIHdvcmxkIVwiKTtcblxuLy8gY29uc3QgbXlUYXNrcyA9IFtdO1xuY29uc3QgbXlQcm9qZWN0cyA9IFtdO1xuXG5jb25zdCBhbGxUb2RvaXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tEaXZcIik7XG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUYXNrXCIpO1xuY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdExpc3RcIik7XG5cbmNvbnN0IGFkZFByb2plY3RzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRQcm9qZWN0XCIpO1xuXG4vL2J1dHRvbiBldmVudCBsaXN0ZW5lcnNcbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVRhc2tGb3JtKTtcbmFkZFByb2plY3RzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVQcm9qZWN0Rm9ybSk7XG4vLyBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Zvcm0nKTtcbi8vIGZvcm1bMF0ub25jbGljayA9ICgpID0+IGNyZWF0ZVByb2plY3RGb3JtKCk7XG4vLyBmb3JtWzFdLm9uY2xpY2sgPSAoKSA9PiBjcmVhdGVUYXNrRm9ybSgpO1xuXG5cbi8vcHJvamVjdCBmb3JtXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0Rm9ybSgpIHtcbiAgbGV0IHByb2plY3RGb3JtRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0Rm9ybVwiKTtcbiAgcHJvamVjdEZvcm1EaXYuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgcHJvamVjdEZvcm1EaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPiBcbiAgICAgICAgPGxhYmVsIGZvcj1cInByb2plY3RObWVcIj5Qcm9qZWN0IE5hbWU8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgaWQ9XCJwcm9qZWN0Tm1lXCIgdHlwZT1cInRleHRcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cIlwiPlByb2plY3QgRGVzY3JpcHRpb248L2xhYmVsPlxuICAgICAgICA8aW5wdXQgaWQ9XCJwcm9qZWN0RGVzY1wiIHR5cGU9XCJ0ZXh0XCI+XG4gICAgICAgIDxidXR0b24gaWQ9XCJjcmVhdGVQcm9qZWN0XCIgY2xhc3M9XCJidXR0b25cIj5jcmVhdGUgcHJvamVjdDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGlkPVwiY2FuY2VsUHJvamVjdFwiIGNsYXNzPVwiYnV0dG9uLWNhbmNlbFwiPmNhbmNlbDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuICBsZXQgcHJvamVjdERlbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsUHJvamVjdFwiKTtcbiAgcHJvamVjdERlbEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGNhbmNlbFByb2plY3QoKTtcbiAgfTtcblxuICBsZXQgcHJvamVjdENyZWF0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlUHJvamVjdFwiKTtcbiAgcHJvamVjdENyZWF0ZUJ0bi5vbmNsaWNrID0gY3JlYXRlUHJvamVjdDtcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHByb2pOYW1lLCBwcm9qRGVzY3JpcHRpb24pIHtcbiAgbGV0IHByb2pJZCA9IG15UHJvamVjdHMubGVuZ3RoO1xuICBwcm9qTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdE5tZVwiKS52YWx1ZTtcbiAgcHJvakRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0RGVzY1wiKS52YWx1ZTtcbiAgbGV0IHByb2plY3RTdGF0ZTtcblxuICBpZiAoIXByb2pOYW1lKSB7XG4gICAgYWxlcnQoXCJFbnRlciBhIHByb2plY3QgbmFtZVwiKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KFxuICAgICAgcHJvaklkLFxuICAgICAgcHJvak5hbWUsXG4gICAgICBwcm9qRGVzY3JpcHRpb24sXG4gICAgICBwcm9qZWN0U3RhdGVcbiAgICApO1xuICAgIG15UHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICBkaXNwbGF5UHJvamVjdCgpO1xuICAgIGNhbmNlbFByb2plY3QoKVxuICAgIG5ld1Byb2plY3QuYWN0aXZlID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15UHJvamVjdHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBteVByb2plY3RzW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgICBkaXNwbGF5UHJvamVjdFRhc2soKTtcbiAgICBjb25zb2xlLmxvZyhteVByb2plY3RzKTtcbiAgfVxuXG59XG5cbi8vIGZ1bmN0aW9uIGdldEFjdGl2ZVByb2plY3QoKSB7XG4vLyAgICAgcmV0dXJuIG15UHJvamVjdHMuZmluZCgocHJvamVjdCk9Pntcbi8vICAgICAgICAgcmV0dXJuIHByb2plY3QuYWN0aXZlXG4vLyAgICAgfSlcbi8vIH1cblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3QoKSB7XG4gIHByb2plY3REaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgbXlQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpKSA9PiB7XG4gICAgXG4gICAgcHJvamVjdERpdi5pbm5lckhUTUwgKz0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwic2luZ2xlUHJvakRpdlwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9qZWN0TmFtZVwiPiR7cHJvamVjdC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwcm9qZWN0RGVsSXRlbVwiPmRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgfSk7XG5cbiAgbGV0IHJlbW92ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3REZWxJdGVtXCIpO1xuICByZW1vdmVQcm9qZWN0LmZvckVhY2goKGJ1dHRvbiwgaW5kZXgpID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGRlbGV0ZVByb2plY3QoaW5kZXgpKTtcbiAgfSk7XG5cbiAgbGV0IHByb2plY3RJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0TmFtZVwiKTtcblxuICBwcm9qZWN0SXRlbS5mb3JFYWNoKChpdGVtLGlkKSA9PlxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50UHJvamVjdCA9IG15UHJvamVjdHNbaWRdXG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgY3VycmVudFByb2plY3QuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteVByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSAhPT0gaWQpIHtcbiAgICAgICAgICAgICAgICBteVByb2plY3RzW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhbmNlbFRhc2soKVxuICAgICAgICBkaXNwbGF5UHJvamVjdFRhc2soKTtcbiAgICAgICAgY29uc29sZS5sb2cobXlQcm9qZWN0cyk7XG4gICAgfSlcbiAgKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RUYXNrKCkge1xuICBsZXQgYWN0aXZlUHJvamVjdCA9IGdldEFjdGl2ZVByb2plY3QoKTtcbiAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gYWN0aXZlUHJvamVjdC5nZXRBbGxUYXNrcygpO1xuICBsZXQgdGFza0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0RpdlwiKTtcbiAgbGV0IHRhc2tIZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWNvbnRlbnRcIikuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gIGxldCB0YXNrRGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWRlc2MnKVxuICB0YXNrRGl2LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgdGFza0hlYWQuaW5uZXJIVE1MID0gYWN0aXZlUHJvamVjdC5uYW1lO1xuICB0YXNrRGVzYy5pbm5lckhUTUwgPSBhY3RpdmVQcm9qZWN0LmRlc2NyaXB0aW9uXG4gIFxuXG4gIGxldCBzaW5nbGVUYXNrID0gXCJcIjtcbiAgY3VycmVudFByb2plY3QuZm9yRWFjaCgocHJvamVjdFRhc2spID0+IHtcbiAgICBsZXQgdGFza2lkID0gcHJvamVjdFRhc2suaWQ7XG5cbiAgICBzaW5nbGVUYXNrICs9IGA8ZGl2IGlkPVwic2luZ2xlVGFza1wiIGNsYXNzPVwic2luZ2xlLXRhc2tcIj5cbiAgICAgICAgXG4gICAgICAgICAgICA8aDQ+JHtwcm9qZWN0VGFzay50aXRsZX08L2g0PlxuICAgICAgICAgICAgPHNwYW4+JHtwcm9qZWN0VGFzay5kdWVEYXRlfTwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaW5nbGVUYXNrLWJ0blwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJlZGl0LXRhc2tcIj5lZGl0IHRhc2s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtdGFzaz0ke3Rhc2tpZH0gY2xhc3M9XCJkZWxldGUtdGFza1wiPmRlbGV0ZSB0YXNrIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICB9KTtcblxuICB0YXNrRGl2LmlubmVySFRNTCA9IFwiXCI7XG4gIHRhc2tEaXYuaW5uZXJIVE1MICs9IHNpbmdsZVRhc2s7XG5cbiAgbGV0IGRlbGV0ZVRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZS10YXNrXCIpO1xuICBkZWxldGVUYXNrQnRuLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlVGFzayk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2pJZCkge1xuICBteVByb2plY3RzLnNwbGljZShwcm9qSWQsIDEpO1xuICBkaXNwbGF5UHJvamVjdCgpO1xuICBjb25zb2xlLmxvZyhteVByb2plY3RzKTtcbn1cblxuZnVuY3Rpb24gY2FuY2VsUHJvamVjdCgpIHtcbiAgIGxldCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RGb3JtXCIpXG4gICBkaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuXG5cbi8vdGFzayBmb3JtXG5mdW5jdGlvbiBjcmVhdGVUYXNrRm9ybShlKSB7XG4gIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRm9ybVwiKTtcbiAgdG9kb0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgdG9kb0Zvcm0uaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1pbnB1dHNcIj5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cInRvZG9UaXRsZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUYXNrIHRpdGxlXCI+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJkYXRlXCIgdHlwZT1cImRhdGVcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJkZXNjcmlwdGlvblwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJ0YXNrIGRlc2NyaXB0aW9uXCIgY29sPjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1idXR0b25zXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiY3JlYXRlVGFza0J0blwiIGNsYXNzPVwiYnV0dG9uXCI+YWRkIFRhc2s8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjYW5jZWxUYXNrQnRuXCIgY2xhc3M9XCJidXR0b24tY2FuY2VsXCI+Y2FuY2VsPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgbGV0IGNyZWF0ZVRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZVRhc2tCdG5cIik7XG4gIGxldCBjYW5jZWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbmNlbFRhc2tCdG5cIik7XG5cbiAgY3JlYXRlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixjcmVhdGVUYXNrKTtcbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYW5jZWxUYXNrKTtcbn1cblxuZnVuY3Rpb24gY2FuY2VsVGFzaygpIHtcbiAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tGb3JtXCIpO1xuICB0b2RvRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG59XG5cblxuZnVuY3Rpb24gY3JlYXRlVGFzayh0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza0R1ZURhdGUsIHRhc2tQcmlvcml0eSkge1xuICBsZXQgYWN0aXZlUHJvamVjdCA9IGdldEFjdGl2ZVByb2plY3QoKVxuXG4gIGxldCB0YXNrSWQgPSBhY3RpdmVQcm9qZWN0LnNldFRhc2tJZCgpO1xuICB0YXNrVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9UaXRsZVwiKS52YWx1ZTtcbiAgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWU7XG5cbiAgaWYgKCF0YXNrVGl0bGUpIHtcbiAgICBhbGVydChcIllvdSBtdXN0IGVudGVyIGEgdGFzayBUaXRsZSBmb3IgdGhpcyB0byBiZSB2YWxpZFwiKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgbmV3VGFzayA9IG5ldyBUb0RvSXRlbSh0YXNrSWQsIHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrRHVlRGF0ZSk7XG4gICAgYWN0aXZlUHJvamVjdC5hZGRUYXNrKG5ld1Rhc2spO1xuICAgIGRpc3BsYXlQcm9qZWN0VGFzaygpO1xuICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRm9ybVwiKTtcbiAgICB0b2RvRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5cbiAgICAvLyBjb25zb2xlLmxvZyhcImNhbGxlZCBmcm9tIGJ5IGRpc3BsYXllZCBmdW5jXCIsIG5ld1Rhc2spO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEFjdGl2ZVByb2plY3QoKSB7XG4gIHJldHVybiBteVByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHtcbiAgICByZXR1cm4gcHJvamVjdC5hY3RpdmU7XG4gIH0pO1xufVxuXG5cbmZ1bmN0aW9uIHJlbW92ZVRhc2soZXZlbnQpIHtcbiAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0KTtcbiAgbGV0IHRhc2tJZCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LnRhc2s7XG4gIGNvbnNvbGUubG9nKHRhc2tJZCk7XG5cbiAgbGV0IGFjdGl2ZVByb2plY3QgPSBnZXRBY3RpdmVQcm9qZWN0KClcbiAgYWN0aXZlUHJvamVjdC5kZWxldGVUYXNrKHBhcnNlSW50KHRhc2tJZCkpO1xuICBkaXNwbGF5UHJvamVjdFRhc2soKTtcbiAgY29uc29sZS5sb2cobXlQcm9qZWN0cyk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlRm9ybShlKSB7XG4gICAgbGV0IGZvcm0gPSBlLnRhcmdldDtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG4gICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgXG59XG5cbi8vIHNob3cgYWxsIHRhc2sgaW4gYSBwcm9qZWN0XG4vLyB3aGVuIGEgcHJvamVjdCBpcyByZW1vdmVkLCBhbGwgdGhlIHRhc2tzIHNob3VsZCBhbHNvIGJlIHJlbW92ZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=