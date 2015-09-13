
$(document).ready(function() {

  var manager = new toDoManager();

  function taskView() {
    var tasks = $.map(manager.toDos, function(task) {
      return('<li>' + task + '</li>');
    });
    $(".tasks").html(tasks);
  };

  taskView();

  $('.addTask').click(function(){
    var taskInput = $('.taskString').val();
    manager.addTask(taskInput);
    taskView();
  });

  $('.taskString').keypress(function(e) {
    var taskInput = $('.taskString').val();
    if(e.which == 13) {
      manager.addTask(taskInput);
      taskView();
    };
  });
});
