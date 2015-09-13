$(document).ready(function() {

  var manager = new toDoManager();

  // var tasks = $.map(manager.toDos, function(value) {
  //   return('<span>' + value + '</span>');
  // });
  // $(".tasks").html(tasks.join(""));

    $('.tasks').html(manager.toDos);
});
