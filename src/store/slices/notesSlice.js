import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';
const notesSlice = createSlice({
    name: "notes",
    initialState: {
        notes:[],
        title:'',
        text:'',
        isPinned:false,
        isArchived:false,
        isDeleted:false,
        archivedNotes:[],
        deletedNotes:[],
    },
    reducers:{
        setTitle:(state,action)=>{
            state.title = action.payload;
        },
        setText:(state,action)=>{
            state.text= action.payload;
        },
        addNote:({title,text,notes}) => {
            notes.push({id:  uuid(), title, text, isPinned:false,isArchived:false});
        },
        clearInput:(state) => {
            state.title= '';
            state.text= '';
        },
        pinNote:(state,action) => {
            state.notes.find(note => note.id === action.payload).isPinned=true;
        },
        UnPinNote:(state,action) => {
            state.notes.find(note => note.id === action.payload).isPinned = false;
        },
        Archive:(state,action) => {
            const noteToArchive = state.notes.find(note => note.id === action.payload);
            state.archivedNotes.push(noteToArchive);
            noteToArchive.isArchived=true;
        },
        UnArchive:(state,action) => {
            const noteToUnArchive = state.notes.find(note => note.id === action.payload);
            noteToUnArchive.isArchived=false;
            state.archivedNotes.find(note => note.id === action.payload).isArchived=false;
            state.archivedNotes = state.archivedNotes.filter(note => note.isArchived === true);
            
        },
        deleteNote:(state,action) => {
            const noteToDelete = state.notes.find(note => note.id === action.payload);
            state.deletedNotes.push(noteToDelete);
            state.deletedNotes.find(note => note.id === action.payload).isDeleted=true;
            state.notes = state.notes.filter(note => note.id !== action.payload);
        }
        ,
        restore:(state,action) => {
            const noteToRestore = state.deletedNotes.find(note => note.id === action.payload);
            noteToRestore.isDeleted=false;
            state.notes.push(noteToRestore);
            state.deletedNotes = state.deletedNotes.filter(note => note.id !== action.payload);
        },
    }
});

export const {setTitle,setText,addNote,clearInput ,pinNote,UnPinNote,Archive,UnArchive,deleteNote,restore} = notesSlice.actions;
export default notesSlice.reducer;