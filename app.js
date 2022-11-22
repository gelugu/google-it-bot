const { Telegraf } = require("telegraf");
require("dotenv").config();

const bot = new Telegraf(process.env.TOKEN);

bot.on("message", async (ctx) => {
  console.log(ctx.update.message.reply_to_message);

  const message = ctx.update.message.text;

  if (
    message.includes(bot.botInfo.username) ||
    message.includes("google") ||
    message.includes("гугл")
  ) {
    bot.telegram.sendMessage(
      ctx.update.message.chat.id,
      `https://www.google.com/search?q=${encodeURIComponent(
        ctx.update.message.reply_to_message.text
      ).replaceAll("%20", "+")}`,
      {
        reply_to_message_id: ctx.update.message.reply_to_message.message_id,
        disable_web_page_preview: true,
      }
    );
  }
});

bot.launch();
