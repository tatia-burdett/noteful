export const getFolderNotes = (notes=[], folderId) => (
  (!folderId)
    ? notes
    : notes.filter(note => note.folderId === folderId))