
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import dotenv from "dotenv";
// dotenv.config();

// const genAI = new GoogleGenerativeAI(process.env.GEN_KEY);

// const generateCongig = {
//     temprature: 0.2,
//     maxOutputToken: 20,
// }

// const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash", generateCongig});

// // const res = await model.generateContent(" what is love?");
// const res = await model.generateContent({
//     contents:[
//         {
//             role: "user",
//             parts: [
//                 {
//                     text: "what is love?"
//                 }
//             ]
//         }
//     ]
// })

// console.log(res.response.text());


// ==========================google geminial ===========================


import { GoogleGenAI } from "@google/genai";
import dotenv from 'dotenv';
import { readFileSync, write, writeFileSync } from "fs";
dotenv.config();

const genAI = new GoogleGenAI({ apiKey: process.env.GEN_KEY });

// async function aiAnswer(){
//     const response = await genAI.models.generateContent({
//         model: "gemini-2.5-flash",
//         contents : "what is love?",
//         config : {
//             systemInstruction: "answeer must be 1 word",
//         }

//     })
//     console.log(response.text);
// }
// aiAnswer();

// =============================================

// read image from image.js

// async function aiAnswer (){
//     const imageData = readFileSync("Badge.png");
//     const response = await genAI.models.generateContent({
//         model: "gemini-2.5-flash",
//         contents : [
//             {
//                 inlineData : {
//                     mimeType: "image/png",
//                     data: imageData.toString("base64") ,
//                 },
//             },
//             {text : "read text from image "}
//         ]
//     })
//     console.log(response.text);
// }

// aiAnswer();



// ===================image generate ===================

// async function aiAnswer (){  
//     const response = await genAI.models.generateImages({
//         model: "imagen-4.0-generate-001",
//        prompt : "a cat sitting on the bed",
//        config: {
//       numberOfImages: 1,
//     },
//     })
//     const image = response.generatedImages[0].image.imageBytes;
//     const buffer = Buffer.from(image , "base64");
//     writeFileSync("cat.png" , buffer);
// }
// aiAnswer();



// ====================video generate======


async function aiAnswer() {
    const operation = await genAI.models.generateImages({
        model: "veo-3.1-generate-001",
        prompt: "a dog running on road",

    })
    while (!operation.dome) {
    console.log("Waiting for video generation to complete...")
    await new Promise((resolve) => setTimeout(resolve, 10000));
    operation = await genAI.operations.getVideosOperation({
        operation: operation,
    });
}


// Download the generated video.
genAI.files.download({
    file: operation.response.generatedVideos[0].video,
    downloadPath: "dialogue_example.mp4",
});
console.log(`Generated video saved to dialogue_example.mp4`);
}

aiAnswer();