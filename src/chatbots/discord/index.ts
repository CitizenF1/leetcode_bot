import * as DiscordBot from 'discord.js';

import constants from '../../utils/constants';
import dictionary from '../../utils/dictionary';
import { log } from '../../utils/helper';
import Actions, { registeredActions } from '../actions';
import { Context } from '../models';

import createBot from './bot';
import { reply } from './utils';

class Discord {
  token: string = constants.PROVIDERS.DISCORD.TOKEN;

  bot: DiscordBot.Client;

  async run() {
    // Create Bot with token
    this.bot = await createBot(this.token);

    // Set Bot message listener (any message)
    this.bot.on('message', (message: DiscordBot.Message) => {
      const { content, author, channel } = message;

      // If message doesn't start with ! (prefix) OR author is BOT, then ignore
      if (
        !content.startsWith(constants.PROVIDERS.DISCORD.PREFIX)
        || author.bot
      ) return;

      // Turn "!rating username arg1" into ["!rating", "username", "arg1"]
      const args: string[] = content
        .slice(constants.PROVIDERS.DISCORD.PREFIX.length)
        .trim()
        .split(' ');

      // Get command and arguments from args list
      const command: string = args[0];

      // Find appropriate action by name and execute it
      for (let i = 0; i < registeredActions.length; i++) {
        const { name, property } = registeredActions[i];
        if (name === command) {
          const context: Context = {
            text: content,
            reply,
            channel,
            provider: constants.PROVIDERS.DISCORD.NAME,
            prefix: constants.PROVIDERS.DISCORD.PREFIX,
            options: {},
          };
          channel.startTyping().then();
          Actions[property](context);
          channel.stopTyping();

          // Stop searching after action is found
          return;
        }
      }
    });

    log(dictionary.SERVER_MESSAGES.DISCORD_BOT_IS_RUNNING);
  }
}

export default new Discord();
