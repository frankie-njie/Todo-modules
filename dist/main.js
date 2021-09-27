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
class Project {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.allTasks = [];
    this.active;
  }
  addTask(task) {
    this.allTasks.push(task);
  }
  deleteTask(taskId) {
    this.allTasks = this.allTasks.filter((task) => task.id !== taskId);
    // this.allTasks.splice(taskId, 1)
  }
  setTaskId() {
    return this.allTasks.length;
  }
  getAllTasks() {
    return this.allTasks;
  }
  getId() {
    return this.id;
  }

  getTitle() {
    return this.name;
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
class ToDoItem {
  constructor(id, title, description, dueDate, priority, notes) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    // this.notes = notes
  }

  toDoTitle() {
    return this.title;
  }
  toDoDescription() {
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

let myProjects = [];
// let home = [];

const addTaskBtn = document.getElementById("addTask");
const projectDiv = document.getElementById("projectList");

const addProjectsBtn = document.getElementById("addProject");

//button event listeners
addTaskBtn.addEventListener("click", createTaskForm);
addProjectsBtn.addEventListener("click", createProjectForm);
window.addEventListener("load", () => {
  let getAllProjects = JSON.parse(localStorage.getItem("myProjects")) || [];
  console.log(getAllProjects);
  // Object.assign(myProjects, ...getAllProjects)
  myProjects = [...getAllProjects];
  console.log(myProjects);
  displayProject();
});

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
    let newProject = new _modules_Project__WEBPACK_IMPORTED_MODULE_1__["default"](
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
    localStorage.setItem("myProjects", JSON.stringify(myProjects));
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
      // console.log(currentProject);
      currentProject.active = true;
      for (let i = 0; i < myProjects.length; i++) {
        if (i !== id) {
          myProjects[i].active = false;
        }
      }
      cancelTask();
      displayProjectTask();
    })
  );
}

function displayProjectTask() {
  let activeProject = getActiveProject();
  // console.log(activeProject);
  let currentProject = activeProject.getAllTasks();
  // let currentProject = activeProject.allTasks

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
  localStorage.setItem("myProjects", JSON.stringify(myProjects));
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
    let newTask = new _modules_ToDoItem__WEBPACK_IMPORTED_MODULE_0__["default"](taskId, taskTitle, taskDescription, taskDueDate);
    activeProject.addTask(newTask);
    displayProjectTask();
    const todoForm = document.getElementById("taskForm");
    todoForm.style.display = "none";
    localStorage.setItem("myProjects", JSON.stringify(myProjects));
    // console.log(JSON.parse(localStorage.getItem('allTask')));
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

// function homeTasks(){
//   let allProjects = myProjects;
//   allProjects.forEach(project => {
//     home.push(project.allTasks)
//     // home = [...project.allTasks]
//     console.log(home)
//     })
//     // displayProjectTask()
// }

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95Ly4vc3JjL21vZHVsZXMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly95Ly4vc3JjL21vZHVsZXMvVG9Eb0l0ZW0uanMiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly95L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3kvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKGlkLCBuYW1lLCBkZXNjcmlwdGlvbikge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmFsbFRhc2tzID0gW107XG4gICAgdGhpcy5hY3RpdmU7XG4gIH1cbiAgYWRkVGFzayh0YXNrKSB7XG4gICAgdGhpcy5hbGxUYXNrcy5wdXNoKHRhc2spO1xuICB9XG4gIGRlbGV0ZVRhc2sodGFza0lkKSB7XG4gICAgdGhpcy5hbGxUYXNrcyA9IHRoaXMuYWxsVGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlkICE9PSB0YXNrSWQpO1xuICAgIC8vIHRoaXMuYWxsVGFza3Muc3BsaWNlKHRhc2tJZCwgMSlcbiAgfVxuICBzZXRUYXNrSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWxsVGFza3MubGVuZ3RoO1xuICB9XG4gIGdldEFsbFRhc2tzKCkge1xuICAgIHJldHVybiB0aGlzLmFsbFRhc2tzO1xuICB9XG4gIGdldElkKCkge1xuICAgIHJldHVybiB0aGlzLmlkO1xuICB9XG5cbiAgZ2V0VGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xuIiwiY2xhc3MgVG9Eb0l0ZW0ge1xuICBjb25zdHJ1Y3RvcihpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAvLyB0aGlzLm5vdGVzID0gbm90ZXNcbiAgfVxuXG4gIHRvRG9UaXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgfVxuICB0b0RvRGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9Eb0l0ZW07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBUb0RvSXRlbSBmcm9tIFwiLi9tb2R1bGVzL1RvRG9JdGVtXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9tb2R1bGVzL1Byb2plY3RcIjtcbmNvbnNvbGUubG9nKFwiaGVsbG8gd29ybGQhXCIpO1xuXG5sZXQgbXlQcm9qZWN0cyA9IFtdO1xuLy8gbGV0IGhvbWUgPSBbXTtcblxuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza1wiKTtcbmNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RMaXN0XCIpO1xuXG5jb25zdCBhZGRQcm9qZWN0c0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUHJvamVjdFwiKTtcblxuLy9idXR0b24gZXZlbnQgbGlzdGVuZXJzXG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVUYXNrRm9ybSk7XG5hZGRQcm9qZWN0c0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlUHJvamVjdEZvcm0pO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgbGV0IGdldEFsbFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm15UHJvamVjdHNcIikpIHx8IFtdO1xuICBjb25zb2xlLmxvZyhnZXRBbGxQcm9qZWN0cyk7XG4gIC8vIE9iamVjdC5hc3NpZ24obXlQcm9qZWN0cywgLi4uZ2V0QWxsUHJvamVjdHMpXG4gIG15UHJvamVjdHMgPSBbLi4uZ2V0QWxsUHJvamVjdHNdO1xuICBjb25zb2xlLmxvZyhteVByb2plY3RzKTtcbiAgZGlzcGxheVByb2plY3QoKTtcbn0pO1xuXG4vL3Byb2plY3QgZm9ybVxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEZvcm0oKSB7XG4gIGxldCBwcm9qZWN0Rm9ybURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdEZvcm1cIik7XG4gIHByb2plY3RGb3JtRGl2LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIHByb2plY3RGb3JtRGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj4gXG4gICAgICAgIDxsYWJlbCBmb3I9XCJwcm9qZWN0Tm1lXCI+UHJvamVjdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGlkPVwicHJvamVjdE5tZVwiIHR5cGU9XCJ0ZXh0XCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJcIj5Qcm9qZWN0IERlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGlkPVwicHJvamVjdERlc2NcIiB0eXBlPVwidGV4dFwiPlxuICAgICAgICA8YnV0dG9uIGlkPVwiY3JlYXRlUHJvamVjdFwiIGNsYXNzPVwiYnV0dG9uXCI+Y3JlYXRlIHByb2plY3Q8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cImNhbmNlbFByb2plY3RcIiBjbGFzcz1cImJ1dHRvbi1jYW5jZWxcIj5jYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcbiAgbGV0IHByb2plY3REZWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbmNlbFByb2plY3RcIik7XG4gIHByb2plY3REZWxCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICBjYW5jZWxQcm9qZWN0KCk7XG4gIH07XG5cbiAgbGV0IHByb2plY3RDcmVhdGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZVByb2plY3RcIik7XG4gIHByb2plY3RDcmVhdGVCdG4ub25jbGljayA9IGNyZWF0ZVByb2plY3Q7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QocHJvak5hbWUsIHByb2pEZXNjcmlwdGlvbikge1xuICBsZXQgcHJvaklkID0gbXlQcm9qZWN0cy5sZW5ndGg7XG4gIHByb2pOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0Tm1lXCIpLnZhbHVlO1xuICBwcm9qRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3REZXNjXCIpLnZhbHVlO1xuICBsZXQgcHJvamVjdFN0YXRlO1xuXG4gIGlmICghcHJvak5hbWUpIHtcbiAgICBhbGVydChcIkVudGVyIGEgcHJvamVjdCBuYW1lXCIpO1xuICB9IGVsc2Uge1xuICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoXG4gICAgICBwcm9qSWQsXG4gICAgICBwcm9qTmFtZSxcbiAgICAgIHByb2pEZXNjcmlwdGlvbixcbiAgICAgIHByb2plY3RTdGF0ZVxuICAgICk7XG4gICAgbXlQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgIGRpc3BsYXlQcm9qZWN0KCk7XG4gICAgY2FuY2VsUHJvamVjdCgpO1xuICAgIG5ld1Byb2plY3QuYWN0aXZlID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15UHJvamVjdHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBteVByb2plY3RzW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgICBkaXNwbGF5UHJvamVjdFRhc2soKTtcbiAgICBjb25zb2xlLmxvZyhteVByb2plY3RzKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm15UHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkobXlQcm9qZWN0cykpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0KCkge1xuICBwcm9qZWN0RGl2LmlubmVySFRNTCA9IFwiXCI7XG4gIG15UHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaSkgPT4ge1xuICAgIHByb2plY3REaXYuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInNpbmdsZVByb2pEaXZcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvamVjdE5hbWVcIj4ke3Byb2plY3QubmFtZX08L3NwYW4+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJvamVjdERlbEl0ZW0gaWNvbi1idG5zXCI+PGkgY2xhc3M9XCJmYWwgZmEtdHJhc2gtYWx0IGZhLTJ4XCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgfSk7XG5cbiAgbGV0IHJlbW92ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3REZWxJdGVtXCIpO1xuICByZW1vdmVQcm9qZWN0LmZvckVhY2goKGJ1dHRvbiwgaW5kZXgpID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGRlbGV0ZVByb2plY3QoaW5kZXgpKTtcbiAgfSk7XG5cbiAgbGV0IHByb2plY3RJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0TmFtZVwiKTtcblxuICBwcm9qZWN0SXRlbS5mb3JFYWNoKChpdGVtLCBpZCkgPT5cbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gbXlQcm9qZWN0c1tpZF07XG4gICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdCk7XG4gICAgICBjdXJyZW50UHJvamVjdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteVByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpICE9PSBpZCkge1xuICAgICAgICAgIG15UHJvamVjdHNbaV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNhbmNlbFRhc2soKTtcbiAgICAgIGRpc3BsYXlQcm9qZWN0VGFzaygpO1xuICAgIH0pXG4gICk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0VGFzaygpIHtcbiAgbGV0IGFjdGl2ZVByb2plY3QgPSBnZXRBY3RpdmVQcm9qZWN0KCk7XG4gIC8vIGNvbnNvbGUubG9nKGFjdGl2ZVByb2plY3QpO1xuICBsZXQgY3VycmVudFByb2plY3QgPSBhY3RpdmVQcm9qZWN0LmdldEFsbFRhc2tzKCk7XG4gIC8vIGxldCBjdXJyZW50UHJvamVjdCA9IGFjdGl2ZVByb2plY3QuYWxsVGFza3NcblxuICBsZXQgdGFza0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0RpdlwiKTtcbiAgbGV0IHRhc2tIZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWNvbnRlbnRcIikuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gIGxldCB0YXNrRGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1kZXNjXCIpO1xuICB0YXNrRGl2LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgdGFza0hlYWQuaW5uZXJIVE1MID0gYWN0aXZlUHJvamVjdC5uYW1lO1xuICB0YXNrRGVzYy5pbm5lckhUTUwgPSBhY3RpdmVQcm9qZWN0LmRlc2NyaXB0aW9uO1xuXG4gIGxldCBzaW5nbGVUYXNrID0gXCJcIjtcbiAgY3VycmVudFByb2plY3QuZm9yRWFjaCgocHJvamVjdFRhc2spID0+IHtcbiAgICBsZXQgdGFza2lkID0gcHJvamVjdFRhc2suaWQ7XG5cbiAgICBzaW5nbGVUYXNrICs9IGA8ZGl2IGNsYXNzPVwic2luZ2xlLXRhc2tcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIj5cbiAgICAgICAgICAgIDxoND4ke3Byb2plY3RUYXNrLnRpdGxlfTwvaDQ+XG4gICAgICAgICAgICA8c3Bhbj4ke3Byb2plY3RUYXNrLmR1ZURhdGV9PC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpbmdsZVRhc2stYnRuXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImVkaXQtdGFzayBpY29uLWJ0bnNcIj48aSBjbGFzcz1cImZhbCBmYS1lZGl0IGZhLTJ4XCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGUtdGFzayBpY29uLWJ0bnNcIj48aSBkYXRhLXRhc2s9JHt0YXNraWR9IGNsYXNzPVwiZmFsIGZhLXRyYXNoLWFsdCBmYS0yeFwiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpbmdsZXRhc2stZGVzY1wiIHN0eWxlPVwiZGlzcGxheTpub25lXCI+JHtwcm9qZWN0VGFzay5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gIH0pO1xuXG4gIHRhc2tEaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgdGFza0Rpdi5pbm5lckhUTUwgKz0gc2luZ2xlVGFzaztcblxuICBzaG93VGFza0Rlc2NyaXB0aW9uKCk7XG5cbiAgbGV0IGRlbGV0ZVRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZS10YXNrXCIpO1xuICBkZWxldGVUYXNrQnRuLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVUYXNrKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNob3dUYXNrRGVzY3JpcHRpb24oKSB7XG4gIGxldCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2luZ2xlLXRhc2tcIik7XG4gIHRhc2tzLmZvckVhY2goKHRhc2ssIGlkKSA9PiB7XG4gICAgdGFzay5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gICAgdGFzay5vbmNsaWNrID0gKGUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnBhcmVudE5vZGUpO1xuXG4gICAgICBpZiAoaWQgPT0gZS50YXJnZXQucGFyZW50Tm9kZS5pZCB8fCBpZCA9PSBlLnRhcmdldC5pZCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrZWQgaGVyZVwiLCBpZCk7XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IHRhc2sucXVlcnlTZWxlY3RvcihcIi5zaW5nbGV0YXNrLWRlc2NcIik7XG5cbiAgICAgICAgaWYgKGRlc2NyaXB0aW9uLnN0eWxlLmRpc3BsYXkgPT0gXCJibG9ja1wiKSB7XG4gICAgICAgICAgZGVzY3JpcHRpb24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGRlc2NyaXB0aW9uLnN0eWxlLmRpc3BsYXkgPT0gXCJub25lXCIpIHtcbiAgICAgICAgICBkZXNjcmlwdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvaklkKSB7XG4gIG15UHJvamVjdHMuc3BsaWNlKHByb2pJZCwgMSk7XG4gIGRpc3BsYXlQcm9qZWN0KCk7XG4gIGNvbnNvbGUubG9nKG15UHJvamVjdHMpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm15UHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkobXlQcm9qZWN0cykpO1xufVxuXG5mdW5jdGlvbiBjYW5jZWxQcm9qZWN0KCkge1xuICBsZXQgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0Rm9ybVwiKTtcbiAgZGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuLy90YXNrIGZvcm1cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tGb3JtKGUpIHtcbiAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tGb3JtXCIpO1xuICB0b2RvRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gIHRvZG9Gb3JtLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0taW5wdXRzXCI+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJ0b2RvVGl0bGVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVGFzayB0aXRsZVwiPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiZGF0ZVwiIHR5cGU9XCJkYXRlXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiZGVzY3JpcHRpb25cIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwidGFzayBkZXNjcmlwdGlvblwiIGNvbD48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tYnV0dG9uc1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNyZWF0ZVRhc2tCdG5cIiBjbGFzcz1cImJ1dHRvblwiPmFkZCBUYXNrPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2FuY2VsVGFza0J0blwiIGNsYXNzPVwiYnV0dG9uLWNhbmNlbFwiPmNhbmNlbDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gIGxldCBjcmVhdGVUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGVUYXNrQnRuXCIpO1xuICBsZXQgY2FuY2VsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5jZWxUYXNrQnRuXCIpO1xuXG4gIGNyZWF0ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVRhc2spO1xuICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhbmNlbFRhc2spO1xufVxuXG5mdW5jdGlvbiBjYW5jZWxUYXNrKCkge1xuICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0Zvcm1cIik7XG4gIHRvZG9Gb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFzayh0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza0R1ZURhdGUsIHRhc2tQcmlvcml0eSkge1xuICBsZXQgYWN0aXZlUHJvamVjdCA9IGdldEFjdGl2ZVByb2plY3QoKTtcblxuICBsZXQgdGFza0lkID0gYWN0aXZlUHJvamVjdC5zZXRUYXNrSWQoKTtcbiAgdGFza1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvVGl0bGVcIikudmFsdWU7XG4gIHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWU7XG4gIHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLnZhbHVlO1xuXG4gIGlmICghdGFza1RpdGxlKSB7XG4gICAgYWxlcnQoXCJZb3UgbXVzdCBlbnRlciBhIHRhc2sgVGl0bGUgZm9yIHRoaXMgdG8gYmUgdmFsaWRcIik7XG4gIH0gZWxzZSB7XG4gICAgbGV0IG5ld1Rhc2sgPSBuZXcgVG9Eb0l0ZW0odGFza0lkLCB0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza0R1ZURhdGUpO1xuICAgIGFjdGl2ZVByb2plY3QuYWRkVGFzayhuZXdUYXNrKTtcbiAgICBkaXNwbGF5UHJvamVjdFRhc2soKTtcbiAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0Zvcm1cIik7XG4gICAgdG9kb0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibXlQcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShteVByb2plY3RzKSk7XG4gICAgLy8gY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsVGFzaycpKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0QWN0aXZlUHJvamVjdCgpIHtcbiAgcmV0dXJuIG15UHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4ge1xuICAgIHJldHVybiBwcm9qZWN0LmFjdGl2ZTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhc2soZXZlbnQpIHtcbiAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0KTtcbiAgbGV0IHRhc2tJZCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LnRhc2s7XG4gIGNvbnNvbGUubG9nKHRhc2tJZCk7XG5cbiAgbGV0IGFjdGl2ZVByb2plY3QgPSBnZXRBY3RpdmVQcm9qZWN0KCk7XG4gIGFjdGl2ZVByb2plY3QuZGVsZXRlVGFzayhwYXJzZUludCh0YXNrSWQpKTtcbiAgZGlzcGxheVByb2plY3RUYXNrKCk7XG4gIGNvbnNvbGUubG9nKG15UHJvamVjdHMpO1xufVxuXG4vLyBmdW5jdGlvbiBob21lVGFza3MoKXtcbi8vICAgbGV0IGFsbFByb2plY3RzID0gbXlQcm9qZWN0cztcbi8vICAgYWxsUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbi8vICAgICBob21lLnB1c2gocHJvamVjdC5hbGxUYXNrcylcbi8vICAgICAvLyBob21lID0gWy4uLnByb2plY3QuYWxsVGFza3NdXG4vLyAgICAgY29uc29sZS5sb2coaG9tZSlcbi8vICAgICB9KVxuLy8gICAgIC8vIGRpc3BsYXlQcm9qZWN0VGFzaygpXG4vLyB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=