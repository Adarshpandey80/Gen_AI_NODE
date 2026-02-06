
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEN_KEY);

const generateCongig = {
    temprature: 0.2,
    maxOutputToken: 20,
}

const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash", generateCongig});

// const res = await model.generateContent(" what is love?");
const res = await model.generateContent({
    contents:[
        {
            role: "user",
            parts: [
                {
                    text: "what is love?"
                }
            ]
        }
    ]
})

console.log(res.response.text());
