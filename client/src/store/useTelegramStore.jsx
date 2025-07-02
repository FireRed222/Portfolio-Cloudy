import { create } from "zustand";
import axios from "axios";

const useTelegramStore = create(() => ({
  sendMessage: async ({ name, email, message }) => {
    const text = `
📬 New Contact Form Submission

👤 Name: ${name}
📧 Email: ${email}
💬 Message: ${message}
    `;

    const token = "7588019544:AAHEGWWetRUuwlZtLzvbLHlHVGDskN-bgwQ";
    const chatID = "-4627385966";
    const urlApi = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
      await axios.post(urlApi, {
        chat_id: chatID,
        text: text.trim(),
      });
    } catch (error) {
      console.error("Telegram error:", error);
    }
  },
}));

export default useTelegramStore;
