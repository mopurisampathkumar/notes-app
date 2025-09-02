import { Fragment } from "react"
import { Navbar } from "../components/Navbar"
import { Sidebar } from "../components/Sidebar"
import { NotesCard } from "../components/NotesCard"
import { useSelector } from "react-redux"
export const Bin = () => {
      const { notes } = useSelector((state) => state.notes);
    const deletedNotes = notes.filter((note) => note.isDeleted);
    return (
    <Fragment>
      <Navbar />
      <main className="flex gap-3">
        <Sidebar />
          <div className="flex flex-wrap rounded-md mt-2">
            {deletedNotes?.length > 0 && (
              <h1 className="text-xl font-semibold">Deleted Notes:</h1>
            )}
            {deletedNotes?.length > 0 &&
              deletedNotes.map(({ id, title, text, isPinned,isArchived }) => (
                <NotesCard
                  key={id}
                  className="border-2 border-gray-300 rounded-md p-4 m-4 w-120"
                  id={id}
                  title={title}
                  text={text}
                  isPinned={isPinned}
                  isArchived={isArchived}
                  isDeleted={true}
                />
              ))}
          </div>
      </main>
    </Fragment>
    )
}