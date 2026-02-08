import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const genAL = new GoogleGenerativeAI(process.env.GEN_KEY);
const model = genAL.getGenerativeModel({model: "gemini-2.5-flash"});

async function aiAnswer(qsn){
    const res = await model.generateContent(qsn)
    console.log(res.response.text());
}

process.stdout.write("Ask me anything: ");
process.stdin.on("data", (data)=>{
    console.log("you asked:" , data.toString().trim());
 const qsn = data.toString().trim();
 if(qsn == "exit"){
    process.exit();
   
 } else {
     aiAnswer(qsn);
 }

})