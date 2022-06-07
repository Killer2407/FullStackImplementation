const express = require("express")
const cors = require('cors');
const data = require('./mockData/data.json');
const fs = require('fs');

const PORT = 8000;
const app = express();
app.use(cors());
app.use(express.json());

app.get("/getNotes", function routeHandler(req, res) {
    const jsonData = fs.readFileSync('./mockData/data.json')
    res.send(JSON.parse(jsonData));
});

app.post("/addNote", (req, res) => {
    let note = req.body;
    writeData = data;
        note.id = writeData.length + 1;
        // console.log('note',note);
        writeData.push(note);
        const stringData = JSON.stringify(writeData);
        // console.log('sD',stringData);
        fs.writeFile('./mockData/data.json',JSON.stringify(writeData),(err)=>{
            if(err){
            console.error(err)
            }
            // console.log('saved');
        });
        res.send(note);
});


app.delete("/deleteNote/:id", (req, res) =>{
    let { id } = req.params;
    let found = data.find(_=>_.id==id)   
        try {
            if(found.id){
                const filtered = data.filter(a => a.id!==parseInt(id));    
                fs.writeFile('./mockData/data.json',JSON.stringify(filtered),(err)=>{
                    if(err){
                        console.error(err)
                    }
                // console.log('saved');
                });
                res.send(found)
            }
            else {
                res.send({message:"id not found"})
            }
  
        } catch (error) {
        res.send({message:"something went wrong"})
        }
})

app.listen(PORT, () => {
    console.log(`server is running in on port : ${PORT}`);
});
