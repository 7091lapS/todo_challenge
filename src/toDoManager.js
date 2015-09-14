function toDoManager(){
  this.toDos = [];
  this.doneTasks = [];
};

toDoManager.prototype.addTask = function(newTask){
  this.toDos.push(newTask);
};

toDoManager.prototype.removeTask = function(index){
  this.toDos.splice(index, 1);
};

toDoManager.prototype.editTask = function(index, content){
  this.toDos[index] = content;
};

toDoManager.prototype.markDone = function(index){
  this.doneTasks.push(this.toDos[index]);
  this.toDos.splice(index, 1);
};

toDoManager.prototype.markUnDone = function(index){
  this.toDos.push(this.doneTasks[index]);
  this.doneTasks.splice(index, 1);
};

toDoManager.prototype.seeAll = function(){
  return this.doneTasks.concat(this.toDos);
};

toDoManager.prototype.toDoCount = function(){
  return this.toDos.length;
};

toDoManager.prototype.doneTasksCount = function(){
  return this.doneTasks.length;
};

toDoManager.prototype.totalCount = function(){
  return this.toDoCount() + this.doneTasksCount();
};

//
//
// var toDoManager = {
//   toDos: [],
//   doneTasks: [],
//   addTask: function (newTask) {
//     this.toDos.push(newTask);
//   },
//   removeTask: function (index) {
//     this.toDos.splice(index, 1);
//   },
//   ediTask: function (index, content) {
//     this.toDos[index] = content;        // maybe get rid of the argument and pass the index directly in with jquery?
//   },
//   markDone: function (index) {
//     this.doneTasks.push(this.toDos[index]);
//     this.toDos.splice(index, 1);
//   },
//   markUnDone: function(index) {
//     this.doneTasks.splice(index, 1);
//     this.toDos.push(this.toDos[index]);
//   },
//   seeAll: function () {
//     return this.doneTasks.concat(this.toDos);
//   },
//   toDoCount: function () {
//     return this.toDos.length;
//   },
//   doneTasksCount: function () {
//     return this.doneTasks.length;
//   },
//   totalCount: function () {
//     return this.toDoCount() + this.doneTasksCount();
//   }
// };
