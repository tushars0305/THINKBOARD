export function getAllNotes(req,res){
    res.status(200).send("you just fetched the notes ");
};
export function createNote(req,res){
    res.status(200).json("notes created successfully!!");
};
export function updateNote(req,res){
    res.status(200).json("note updated successfully!!");
};
export function deleteNote(req,res){
    res.status(200).json("note deleted successfully!!");
};


