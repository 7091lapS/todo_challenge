
$(document).ready(function() {

  var manager = new toDoManager();

  // to do tasks checkbox view
  function taskView() {
    var tasksToDo = $.map(manager.toDos, function(task, index) {
      return("<li><input type='checkbox' class='toDoTask' id=toDo" + index + ">" + task + "</li>");
    });
    $(".tasks").html(tasksToDo);
  };

  // done tasks checkbox view
  function viewComplete(){
    var tasksComplete = $.map(manager.doneTasks, function(task, index) {
      return("<li><input type='checkbox' class='completeTask' id=complete" + index + ">" + task + "</li>");
    });
    $(".tasks").html(tasksComplete);
  };

  // taskView();

  // adding a valid task with Enter key
  $('.taskString').keypress(function(e) {
    var taskInput = $('.taskString').val();
    if (e.which == 13 && taskInput != '') {
      manager.addTask(taskInput);
      taskView();
      emptyField();
    };
  });

  // needs on change because it doesnt know about the taskView functions return
  $('body').on('change', '.toDoTask', function(){
    if ($(this).is(':checked')) {
      manager.markDone(parseInt($(this).attr('id')));
      taskView();
    }
  });

  // nn possible reasons of unexpected behaviour are how ^ this function decides which id to delete. Or simply in how the splice method works. Check it.




  $('.complete').click(function(){
    viewComplete();
  });

  $('.active').click(function(){
    taskView();
  });


  // cleans up field after task is entered
  function emptyField(){
    $('.taskString').val('');
  };

});
