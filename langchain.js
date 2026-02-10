import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { CommaSeparatedListOutputParser } from '@langchain/core/output_parsers';


import dotenv from 'dotenv';
dotenv.config();


const model = new ChatGoogleGenerativeAI({
    model : "gemini-2.5-flash",
    apiKey: process.env.GEN_KEY
})

async function aiAnswer(){
     //  const response = await model.invoke("what is love?")
    // const response = await model.stream("what is AI?")
    // for await (const chunk of response){
    //     console.log(chunk.content);
    // }

    // const response = await model.batch([
    //     " 5 fruits name ",
    //     " 5 animals name"
    // ])
    // for( let i = 0; i<response.length;i++){
    // console.log(response[i].content);
    // }
}
// aiAnswer();

// async function aiAnswer(){

//     const prompt1 = ChatPromptTemplate.fromMessages([
//         ["system", "Explain topic in 50 words"],
//         ["user", "Tell me about {topic}"],
//     ])

    // fromTemplate 

    // const prompt = ChatPromptTemplate.fromTemplate(" Explain {topic} in {words} words");
    // const formattedMsg = await prompt.formatMessages({topic : "love" , words : 10});
    // const response = await model.invoke(formattedMsg);
    // console.log(response.content)


    // Output parser
 
//       const prompt = ChatPromptTemplate.fromTemplate(" Explain {topic} in {words} words");
//         // const chain = prompt.pipe(model).pipe( new StringOutputParser());  // stringoutputparser
//         const chain = prompt.pipe(model).pipe( new  CommaSeparatedListOutputParser()); //comma separated list outpur parser
//         const response = await chain.invoke({topic: "love" , words :10});
//         console.log(response);

// }
// aiAnswer();







  