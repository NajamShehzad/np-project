const express = require("express")
const sha256 = require("sha256")
const port = 5001;
const app = express();
const hash123456 = '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92';
app.get('/', (req, res) => {
    const { passwordHash } = req.query;
    console.log({ passwordHash });
    let foundPass = null;
    for(var i=0 ; i < 1000000;i++){
        const ourHash = sha256(i.toString());
        if(ourHash == passwordHash){
            
            foundPass = i;
        }
    }
    if(foundPass){
        console.log("Found!!");
        console.log("You pass is: " + foundPass);
    }
    else{
        console.log("Unable to find the password");
    }
    res.send({ test: "Hello!" })
})

app.listen(port, () => {
    console.log("Server running on: " + port);
})
