(function (exports) {
  function NoteList() {
    this._list = [];
    this.id = 0;
  }

  NoteList.prototype.showList = function() {
    return this._list
  }

  NoteList.prototype.addNote = function (string, id) {
    var note = new Note(string, this.id);
    this._list.push(note);
    this.incrementId();
  };

  NoteList.prototype.incrementId = function() {
    this.id++
  };

  

  exports.NoteList = NoteList;
})(this);

