import express from "express";

const app = express ();

app.get("/api/notes",(req, res)=>{
    res.send("you got 500 notes");
});
 
app.post("/api/notes", (req, res) =>{
    res.status(201).json({message:"Note created successfully!"});
});

app.put("/api/notes", (req,res)=>{
    res.status(200).json({message: "Note updated successfully!"});
});

app.delete("/api/notes", (req, res)=>{
    res.status(200).json({mrssage:"Note deleted successfully!"});
});


app.listen(5001, () =>{
    console.log("server started on PORT:5001");
});
