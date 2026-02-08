import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendMessageToBioBot = async (message: string, history: { role: 'user' | 'model'; text: string }[]): Promise<string> => {
  try {
    const model = 'gemini-3-flash-preview';
    
    // Construct the conversation history including the system instruction as context
    const systemInstruction = `
      Você é o "BioBot", um assistente virtual especializado em Biologia, treinado para auxiliar os alunos da Professora Janielly Oliveira.
      
      Suas diretrizes:
      1. Responda apenas perguntas relacionadas a biologia, ciências da natureza e estudos.
      2. Seja didático, encorajador e use analogias simples.
      3. Se a pergunta for sobre um tema complexo (como Ciclo de Krebs), explique passo a passo.
      4. Mencione que a Professora Janielly pode aprofundar o tema em sala de aula se for algo muito específico.
      5. Mantenha um tom profissional, mas amigável e acessível.
      6. Responda em Português do Brasil.
      
      Se o usuário perguntar algo fora do escopo (ex: matemática, política), diga educadamente que só pode ajudar com Biologia.
    `;

    // Format history for the API if needed, but for simple generateContent we can just concatenate or use chat if we wanted stateful.
    // For this stateless function approach, we'll use a chat session.
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: systemInstruction,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({
      message: message
    });

    return result.text || "Desculpe, não consegui processar sua pergunta sobre biologia no momento.";
  } catch (error) {
    console.error("Erro ao comunicar com Gemini:", error);
    return "Ocorreu um erro ao tentar contatar o BioBot. Por favor, tente novamente mais tarde.";
  }
};