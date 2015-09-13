describe('toDoList feature', function() {

  var manager = new toDoManager();

  var clickEnter = function() {
    var e = jQuery.Event("keypress");
    e.which = 13;
    e.keyCode = 13;
    $('.taskString').trigger(e);
  };

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);
  });

  describe('adding tasks', function() {

    it('has a form to enter the task', function() {
      expect("<input class='inputTask'>").toExist();
    });

    it('can add a task to the list', function() {
      $(".taskString").val('test task');
      clickEnter();
      expect('.tasks').toContainText('test task');
    });
    
  });
});
