import { useReducer } from "react";
import { MdOutlinePushPin, MdPushPin } from "react-icons/md";
import { IoArchive, IoArchiveOutline, IoTrashBin } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { FaTrashRestore } from "react-icons/fa";
import {
  pinNote,
  UnPinNote,
  Archive,
  UnArchive,
  deleteNote,
  restore,
} from "../store/slices/notesSlice";

export const NotesCard = ({
  id,
  title,
  text,
  isPinned,
  archivedNotes,
  isArchived,
  isDeleted,
  deletedNotes,
}) => {
  const dispatch = useDispatch();
  const onPinClick = (id) => {
    dispatch(pinNote(id));
  };
  const onUnPinClick = (id) => {
    dispatch(UnPinNote(id));
  };
  const onArchiveClick = (id) => {
    dispatch(Archive(id));
  };
  const onUnArchiveClick = (id) => {
    dispatch(UnArchive(id));
  };
  const onDeleteClick = (id) => {
    dispatch(deleteNote(id));
  };
  const onRestoreClick = (id) => {
    dispatch(restore(id));
  };

  return (
    <div className="border-2 border-gray-300 rounded-md p-4 m-8 w-112 h-48 ">
      <div className="flex justify-between items-center mb-2">
        <p className="font-bold text-lg">{title}</p>
        {isDeleted ?(<></>): isArchived ? (
          <></>
        ) : !isPinned ? (
          <MdOutlinePushPin
            onClick={() => onPinClick(id)}
            className="text-2xl"
          />
        ) : (
          <MdPushPin onClick={() => onUnPinClick(id)} className="text-2xl" />
        )}
      </div>
      <hr />
      <div className="w-105 h-25 p-2 text-gray-700 overflow-y-auto whitespace-pre-wrap ">
        <p>{text}</p>
      </div>
      <div className="ml-88 mb-2 mt-2 flex text-2xl space-x-4 flex-auto text-gray-600">
         {!isDeleted &&(isArchived ?  (
          <IoArchive onClick={() => onUnArchiveClick(id)} />
        ) : (
          <IoArchiveOutline onClick={() => onArchiveClick(id)} />
        ))}
        {!isDeleted ?  (
          <RiDeleteBin6Line onClick={()=>onDeleteClick(id)} />
        ) : (
          <FaTrashRestore onClick={()=>onRestoreClick(id)} />
        )}
      </div>
    </div>
  );
};
