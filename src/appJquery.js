
$(document).ready(function() {

  var manager = new toDoManager();

  // tasks checkbox view
  function taskView() {
    var tasks = $.map(manager.toDos, function(task, index) {
      return("<li><input type='checkbox' class='toDoTask' id=" + index + ">" + task + "</li>");
    });
    $(".tasks").html(tasks);
  };
  taskView();

  // adding a valid task with Enter key
  $('.taskString').keypress(function(e) {
    var taskInput = $('.taskString').val();
    if (e.which == 13 && taskInput != '') {
      manager.addTask(taskInput);
      taskView();
      $('.taskString').val('');
    };
  });

  $('.toDoTask').change(function(){
    manager.markDone(parseInt($(this).attr('id')));
    taskView();
  });


});
