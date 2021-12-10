'use strict';
const addNoteTitle = document.getElementById('addNoteTitle'),
    addNoteText = document.getElementById('addNoteText'),
    addNoteButton = document.getElementById('addNoteButton'),
    notesContainer = document.getElementById('notes'),
    searchForm = document.getElementById('search-form'),
    searchInput = document.getElementById('search');


showNotes();


function checkNotes() {
    const notes = localStorage.getItem('notes');    // If there are anything called notes in the key of localStorage then get it.
    let savedNotes = [];    //  Creating an empty array in case there are no notes inside localStorage.
    if (notes) savedNotes = JSON.parse(notes);    // If there are notes inside localStorage then parse it.(convert the string value to its previous state. in this case ar array because I have saved an array in the localStorage.)
    return savedNotes;  // Return the array(empty array or an array filled with notes).
    // NOTE:   remainder: You can only store STRING value in the localStorage
};


// If user adds a note, add it to the localStorage
addNoteButton.addEventListener('click', function () {
    const saveNotes = checkNotes()
    const note = {
        title: addNoteTitle.value,
        text: addNoteText.value
    }
    if (note.title !== '' && note.text !== '') {
        saveNotes.push(note);
        localStorage.setItem('notes', JSON.stringify(saveNotes));  // convert the array into a string and save it to the localStorage.
        addNoteTitle.value = '';
        addNoteText.value = '';
        // Remove all the notes from the screen and show the new notes with existing notes.
        while (notesContainer.firstChild) notesContainer.firstChild.remove();
        showNotes();    // Calling show notes so that it can render new notes which is created now.
    }
});


// Show notes from localStorage
function showNotes() {
    const saveNotes = checkNotes()
    if (saveNotes.length !== 0) {
        saveNotes.forEach(function (note, index) {
            notesContainer.insertAdjacentHTML('beforeend',
                `<div class="card" data-unique-note="${index}">
                    <div class="card-body">
                        <h5 class="card-title"><strong>${note.title}</strong></h5>
                        <p class="card-text">${note.text}</p>
                        <button id=${index} class="btn btn-primary" data-delete="delete">Delete Note</button>
                    </div>
                </div>`
            );
        });
    }
    else {
        notesContainer.innerHTML = `<strong class="text-center"> Nothing to show! Use "Add a Note" to add a new note. </strong>`
    }
}


notesContainer.addEventListener('click', function (event) {
    const noteId = event.target.id;
    if (event.target.dataset.delete == 'delete') {
        deleteNote(noteId);
    }
});


// Delete a note
function deleteNote(index) {
    const saveNotes = checkNotes()
    saveNotes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(saveNotes));
    while (notesContainer.firstChild) notesContainer.firstChild.remove();
    showNotes();
}


searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchValue = searchInput.value.toLowerCase();
    const notes = document.querySelectorAll('[data-unique-note]');
    for (const note of notes) {
        const noteTitle = note.querySelector('.card-title').innerText.toLowerCase();
        const noteText = note.querySelector('.card-text').innerText.toLowerCase();
        if (noteTitle.includes(searchValue) || noteText.includes(searchValue)) {
            note.style.display = 'block';
        }
        else {
            note.style.display = 'none';
        }
    }
});