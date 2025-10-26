import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "WHATNEXT.ai", // Unique app ID
  name: "WHATNEXT.ai",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
