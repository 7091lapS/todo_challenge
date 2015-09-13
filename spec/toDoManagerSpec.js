describe('toDoList Logic', function(){

  beforeEach(function(){
    manager = new toDoManager();
  });

  describe('the toDos array', function(){

    it('exists', function(){
      expect(manager.toDos).toEqual([]);
    });

    it('can have tasks added', function(){
      manager.addTask('test task');
      expect(manager.toDos[0]).toEqual('test task');
    });

    it('can have tasks removed', function(){
      manager.addTask('test task2');
      manager.removeTask(0);
      expect(manager.toDos).toEqual([]);
    });

    it('can have tasks edited', function(){
      manager.addTask('test');
      manager.editTask(0, 'edited');
      expect(manager.toDos[0]).toEqual('edited');
    })
  });

  describe('the doneTasks array', function(){

    it('exists', function(){
      expect(manager.doneTasks).toEqual([]);
    });

    it('can have tasks added from the toDos array', function(){
      manager.addTask('test');
      manager.markDone(0);
      expect(manager.toDos).toEqual([]);
      expect(manager.doneTasks[0]).toEqual('test');
    });

    it('can have done tasks put back in the toDos array', function(){
      manager.addTask('test');
      manager.markDone(0);
      manager.markUnDone(0);
      expect(manager.doneTasks).toEqual([]);
      expect(manager.toDos[0]).toEqual('test');
    });

  });

  describe('viewing and counting the tasks', function(){

    beforeEach(function(){
      manager.addTask('test');
      manager.addTask('test2');
      manager.markDone(0);
    });

    it('returns an array with all the tasks', function(){
      expect(manager.seeAll()).toEqual(['test', 'test2']);
    });

    it('shows the number of toDo tasks', function(){
      expect(manager.toDoCount()).toEqual(1);
    });

    it('shows the number of completed tasks', function(){
      expect(manager.doneTasksCount()).toEqual(1);
    });

    it('shows the total number of tasks', function(){
      expect(manager.totalCount()).toEqual(2);
    });

  });

});
