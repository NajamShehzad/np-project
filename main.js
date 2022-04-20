const {default:axios} = require("axios")
const sha256 = require("sha256")
const totalApps = 3;
const basePort = 5000;
const clientPort = [5001,5002,5003]

callSlaves()
async function callSlaves(){
    console.log("Start");
    const passwordHash = sha256("123456")
    clientPort.map(async (port) =>{
        const {data} = await axios.get(`http://localhost:${port}?passwordHash=${passwordHash}`);
        console.log({data});
    })
    // for(var i =1;i <= totalApps;i++){
    //     const port = basePort + i
    //     const {data} = await axios.get("http://localhost:" +  port);
    //     console.log({data});
    // }
    console.log("End");
}