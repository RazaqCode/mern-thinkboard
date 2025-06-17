import express from "express"

const router = express.Router();

router.get("/",(req, res)=>{
    res.status(200).send("you did it");
});

router.post("/", (req, res) =>{
    res.status(201).json({message:"Note created successfully!"});
});

router.put("/", (req,res)=>{
    res.status(200).json({message: "Note updated successfully!"});
});

router.delete("/", (req, res)=>{
    res.status(200).json({message:"Note deleted successfully!"});
});

export default router;


 

