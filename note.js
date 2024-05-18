console.log("note taking application");
showNotes();

let addsave = document.getElementById('save')
addsave.addEventListener("click", function (e) {
    let addTxt = document.getElementById("notetxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(notetxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    notetxt.value = "";
    showNotes();
});


function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="card">
            <div class="card-body">
                <div class="card-title">Note ${index + 1}</div>
                <hr>
                <div id="notes" class="card-text">
                    <p>${element}</p>
                    <button id="${index}"onclick="deleteNote(this.id)">Delete Note</button>
                </div>
            </div>
        </div>`;
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `<h4>Nothing to show!</h4>`;
    }
}
function deleteNote(index) {
    
      let notes = localStorage.getItem("notes");
      if (notes == null) {
        notesObj = [];
      } else {
        notesObj = JSON.parse(notes);
      }
    
      notesObj.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(notesObj));
      showNotes();
    }