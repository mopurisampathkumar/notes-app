import { Fragment } from "react";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { useSelector } from "react-redux";
import { NotesCard } from "../components/NotesCard";

export const Archive = () => {
  const { notes,archivedNotes } = useSelector((state) => state.notes);
  return (
    <Fragment>
      <Navbar />
      <main className="flex gap-3">
        <Sidebar />
          <div className="flex flex-wrap rounded-md mt-2">
            {archivedNotes?.length > 0 && (
              <h1 className="text-xl font-semibold">Archived Notes:</h1>
            )}
            {archivedNotes?.length > 0 &&
              archivedNotes.map(({ id, title, text, isPinned,isArchived }) => (
                <NotesCard
                  key={id}
                  className="border-2 border-gray-300 rounded-md p-4 m-4 w-120"
                  id={id}
                  title={title}
                  text={text}
                  isPinned={isPinned}
                  isArchived={isArchived}
              
                />
              ))}
          </div>
      </main>
    </Fragment>
  );
};
