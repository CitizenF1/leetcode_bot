import { Options } from '../../../chatbots/models';

export class MockBotDiscord {
  formattedMessage: string = null;

  options: Options = {};

  send(message: string, options: Options = {}): void {
    this.formattedMessage = message;
    this.options = options;
  }
}
