import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "../components/Navbar";
import { NotesCard } from "../components/NotesCard";
import { Sidebar } from "../components/Sidebar";
import { v4 as uuid } from "uuid";
import {
  setTitle,
  setText,
  addNote,
  clearInput,
} from "../store/slices/notesSlice";
import { Fragment } from "react";

export const Home = () => {
  const { notes, title, text, isPinned,isArchived,archivedNotes} = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const onTitleChange = (e) => {
    dispatch(setTitle(e.target.value));
  };
  const onTextChange = (e) => {
    dispatch(setText(e.target.value));
  };
  const onAddNoteClick = () => {
    dispatch(addNote());
    
    dispatch(clearInput());
  };
  const pinnedNotes = notes.filter((note) => note.isPinned);
  const unpinnedNotes = notes.filter((note) => !note.isPinned);
  return (
    <Fragment>
        <Navbar />
        <main className="flex">
          <Sidebar />
          <div>
            <div className=" flex flex-col border-2 border-gray-300 rounded-md p-2 m-4 ml-60 w-120 h-56">
              <input
                type="text"
                value={title}
                onChange={onTitleChange}
                placeholder="Title"
                className="border-2 border-gray-300 rounded-md m-2 p-2"
              />
              <textarea
                placeholder="Take a note..."
                value={text}
                onChange={onTextChange}
                className="border-2 border-gray-300 rounded-md m-2 p-2 h-full "
              ></textarea>
            </div>
            <div className="m-2 mr-1 ml-155">
              <button
                disabled={(text.length && title.length) === 0}
                onClick={onAddNoteClick}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200 "
              >
                Add Note
              </button>
            </div>

            <div className="flex flex-wrap rounded-md mt-2">
              {pinnedNotes.length > 0 && <h1 className="text-xl font-semibold">Pinned Notes:</h1>}
              {pinnedNotes?.length > 0 && 
                pinnedNotes.map(({ id, title, text,isPinned,isArchived,isDeleted}) => (
                  !isDeleted && !isArchived&&
                  <NotesCard
                    key={id}
                    className="border-2 border-gray-300 rounded-md p-4 m-4 w-120"
                    id={id}
                    title={title}
                    text={text}
                    isPinned={isPinned}
                    isArchived={isArchived}
                    archivedNotes={archivedNotes}
                    isDeleted={isDeleted}
                  />
                ))}
            </div>
            
            <div className="flex flex-wrap rounded-md mt-2">
              {unpinnedNotes?.length > 0&& <h1 className="text-xl font-semibold">Other Notes:</h1>}
              {unpinnedNotes?.length > 0 &&
                unpinnedNotes.map(({ id, title, text,isPinned ,isArchived,isDeleted}) => (
                  !isDeleted&&!isArchived&&
                    <NotesCard
                    key={id}
                    className="border-2 border-gray-300 rounded-md p-4 m-4 w-120"
                    id={id}
                    title={title}
                    text={text}
                    isPinned={isPinned}
                    isArchived={isArchived}
                    archivedNotes={archivedNotes}
                    isDeleted={isDeleted}
                  />
                  
                  
                ))}
            </div>
          </div>
        </main>
    </Fragment>
  );
};
