import { GoogleGenerativeAI } from "@google/generative-ai";
import {writeFileSync} from "fs";

import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEN_KEY);
const model = genAI.getGenerativeModel({model: "gemini-2.5-flash"});

async function aiAnswer(){
    const response = await model.image.generate({
        prompt: "a cute cat sitting on a tree branch",
        size: "512x512",
        formate: "png",
        n:1
    })
    console.log(response);
    const imageURL = response.data[0].url

    const path = "./cat.png";
    const buffer = Buffer.from(imageURL , "base64");
    writeFileSync(path , buffer);
    console.log("image saved" + path);
}

 