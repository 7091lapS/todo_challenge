describe('toDoList feature', function() {

  var manager = new toDoManager();

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);
  });

  it('shows an entry if entry is present', function() {
    manager.addTask('test task');
    expect('.tasks').toContainText('test task');
  });

});
