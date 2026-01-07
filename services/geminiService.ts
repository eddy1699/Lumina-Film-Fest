
import { GoogleGenAI } from "@google/genai";
import { MOVIES } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getMovieRecommendation = async (userPrompt: string) => {
  const model = "gemini-3-flash-preview";
  
  const movieContext = MOVIES.map(m => 
    `${m.title} (${m.genre.join(', ')}): ${m.synopsis} Tags: ${m.tags.join(', ')}`
  ).join('\n');

  const systemInstruction = `
    Eres LuminaBot, el asistente experto del festival de cine "Lumina Film Fest 2025".
    Tu objetivo es recomendar películas del festival basadas en los gustos, ánimo o preferencias del usuario.
    
    Películas disponibles en el festival:
    ${movieContext}
    
    Reglas:
    1. Sé amable, sofisticado y apasionado por el cine.
    2. Usa siempre el contexto de las películas proporcionadas.
    3. Si el usuario pregunta por algo que no está en la lista, intenta sugerir la película que más se acerque o explica amablemente que no está en la programación actual.
    4. Responde en español de forma concisa pero atractiva.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: userPrompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "Lo siento, no pude procesar tu solicitud de recomendación. ¿Podrías intentar de nuevo?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Ups, parece que mi proyector mental ha fallado. Por favor, revisa nuestra programación manualmente mientras lo arreglo.";
  }
};
