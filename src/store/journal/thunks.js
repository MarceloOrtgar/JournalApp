import { doc, collection, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { loadNotes } from "../../helpers";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from "./JournalSlice";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNote());

    const { uid } = getState().auth;

    const newNote = {
      title: "",
      body: "",
      data: new Date().getTime(),
    };

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));

    await setDoc(newDoc, newNote);

    newNote.id = newDoc.id;

    //dispatch
    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));

    //dispatch(newNote)
    //dispatch(activarNote)
  };
};

export const startLoadingNotes = () => {
  return async(dispatch, getState) => {
    const { uid } = getState().auth;
    if(!uid) throw new Error ('El UID del usuario no existe');

    const notes= await loadNotes(uid);
    dispatch( setNotes(notes))

  };
};
