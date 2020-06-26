

(function (exports) {
  function NoteController(noteList = new NoteList()) {
    this.noteList = noteList;
    this.noteList.addNote("Favourite drink: seltzer");
    //console.log(this.noteList)
    this.noteListView = new NoteListView(this.noteList);
  }

  NoteController.prototype.insertHTML = function (view = this.noteListView.returnHTML()) {
    console.log("let's test")
    this.listeningToHashChange()
    this.listeningToSubmit()
    
    var element = document.getElementById("app");
    element.innerHTML = view;
    
  };

  NoteController.prototype.listeningToSubmit = function () {
    const form = document.getElementById("text");
    form.addEventListener("submit", (submitEvent) => {
      submitEvent.preventDefault();
      this.noteList.addNote(submitEvent.target[0].value)
      this.insertHTML()
      // var notetext = submitEvent.target[0].value
      // return notetext
    });  
    
  }
 
  // NoteController.prototype.returnSubmittedNote = function() {
  //   var notetext = this.listeningToSubmit()
  //   return notetext
  // }

  NoteController.prototype.listeningToHashChange = function () {
    window.addEventListener("hashchange", () =>{
      this.insertHTML(this.returnViewForSingleNote())
      //console.log(this.returnViewForSingleNote())
      });  
  }

  NoteController.prototype.returnViewForSingleNote = function () {
    singleview = new SingleNoteView(this.singleNotefromURL())
    //console.log(singleview)
    return singleview.returnHtmlString()
  }
  
  NoteController.prototype.singleNotefromURL = function() {
    var noteToView = this.noteList.showList().filter(element => {
      return element.returnId().toString() === this.getIdFromURL(window.location);
    })[0];
    //console.log(this.getIdFromURL(window.location))
    //console.log(noteToView)
    return noteToView;
  }

  NoteController.prototype.getIdFromURL = function (location) {
    return location.hash.split("#")[1];
  }




  exports.NoteController = NoteController;
})(this);
