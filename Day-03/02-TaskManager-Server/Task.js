function Task(defaults){
   defaults = defaults || {};
   this.id = defaults.id || 0;
   this.name = defaults.name || '';
   this.isCompleted = defaults.isCompleted || false;
}
