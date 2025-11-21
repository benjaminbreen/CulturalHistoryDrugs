import { GoogleGenAI } from "@google/genai";
import { SourceItem } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// System instruction for the "Librarian" persona
const LIBRARIAN_INSTRUCTION = `You are a specialized archival librarian for the "Pharmacopeia" project. 
Your expertise is in the history of drug culture, legislation, and media between 1880 and 1950.
You provide academic, neutral, and historically accurate information.
You are knowledgeable about obscure primary sources, including silent films, jazz recordings, and patent medicine advertisements.`;

export const analyzeSource = async (source: SourceItem): Promise<string> => {
  const prompt = `
    Please provide a detailed historical analysis (approx. 200 words) of the following primary source. 
    Focus on its sociological significance, the context of drug policy at the time, and its cultural impact.
    
    Title: ${source.title}
    Year: ${source.year}
    Creator: ${source.creator}
    Type: ${source.type}
    Description: ${source.description}
    Location: ${source.location}
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: LIBRARIAN_INSTRUCTION,
        temperature: 0.3, // Low temperature for factual accuracy
      }
    });
    return response.text || "Analysis unavailable.";
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    return "Unable to generate analysis at this time. Please check your API connection.";
  }
};

export const compareSources = async (sourceA: SourceItem, sourceB: SourceItem): Promise<string> => {
  const prompt = `
    Compare the following two primary sources from the Pharmacopeia archive:

    1. "${sourceA.title}" (${sourceA.year}, ${sourceA.type})
       Creator: ${sourceA.creator}
       Description: ${sourceA.description}
       Full Analysis Context: ${sourceA.fullAnalysis}

    2. "${sourceB.title}" (${sourceB.year}, ${sourceB.type})
       Creator: ${sourceB.creator}
       Description: ${sourceB.description}
       Full Analysis Context: ${sourceB.fullAnalysis}

    Identify specific thematic, historical, or rhetorical connections between them. 
    How do they speak to each other regarding drug culture, policy, or perception? 
    Are they contrasting (e.g. medical vs. criminal) or complimentary?
    
    Suggest 1-2 relevant themes or secondary sources for further research.
    Keep the response succinct (approx 2 paragraphs), probing, and scholarly but creative.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-flash-lite-latest',
      contents: prompt,
      config: {
        systemInstruction: LIBRARIAN_INSTRUCTION,
        temperature: 0.5, 
      }
    });
    return response.text || "Comparison unavailable.";
  } catch (error) {
    console.error("Gemini Comparison Error:", error);
    return "Unable to generate comparison at this time.";
  }
};