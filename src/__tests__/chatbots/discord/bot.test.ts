import * as DiscordBot from 'discord.js';
import { jest } from '@jest/globals';

import createBot from '../../../chatbots/discord/bot';
import constants from '../../../utils/constants';
import dictionary from '../../../utils/dictionary';
import DiscordBotInstance from '../../../chatbots/discord';

const { SERVER_MESSAGES: SM } = dictionary;

beforeAll(async () => {
  jest.setTimeout(30000);
});

afterAll(async () => {
  jest.setTimeout(5000);
});

test('chatbots.discord.bot.createBot function', async () => {
  if (!constants.PROVIDERS.DISCORD.TEST_ENABLE) return;

  expect(typeof createBot).toBe('function');

  // Create a test bot with test token
  const bot: DiscordBot.Client = (
    await createBot(constants.PROVIDERS.DISCORD.TEST_TOKEN)
  );

  expect(bot instanceof DiscordBot.Client).toBe(true);

  // eslint-disable-next-line no-console
  expect(console.log).toHaveBeenCalledWith(
    SM.DISCORD_BOT_IS_CONNECTED,
  );

  await DiscordBotInstance.run();

  // eslint-disable-next-line no-console
  expect(console.log).toHaveBeenCalledWith(
    SM.DISCORD_BOT_IS_RUNNING,
  );
});
