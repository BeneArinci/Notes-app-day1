

(function (exports) {
  function NoteController(noteList = new NoteList()) {
    this.noteList = noteList;
    this.noteList.addNote("Favourite drink: seltzer");
    console.log(this.noteList)
    this.noteListView = new NoteListView(this.noteList);
  }

  NoteController.prototype.insertHTML = function (view = this.noteListView.returnHTML()) {
    this.listeningToHashChange()
    var view = view
    var element = document.getElementById("app");
    element.innerHTML = view;
    
  };

  NoteController.prototype.listeningToHashChange = function () {
    window.addEventListener("hashchange", () =>{
      this.insertHTML(this.returnViewForSingleNote())
      });
  }

  NoteController.prototype.returnViewForSingleNote = function () {
    return SingleNoteView(noteToView).returnHtmlString()
  }
  
  NoteController.prototype.singleNotefromURL = function() {
    var noteToView = this.noteList.getNotes().filter(element => {
      return element.returnId().toString() === this.getIdFromURL(window.location);
    })[0];
    console.log(this.getIdFromURL(window.location))
    console.log(noteToView)
    return noteToView;
  }

  NoteController.prototype.getIdFromURL = function (location) {
    return location.hash.split("#")[1];
  }




  exports.NoteController = NoteController;
})(this);
