const PRODUCTION_URL = 'https://hacker-chat-cja.herokuapp.com';

export default class CliConfig {
  constructor({ username, hostUri = PRODUCTION_URL, room }) {
    const { hostname, port, protocol } = new URL(hostUri); // Traduz a string (URL) em um objeto URL.
    
    this.username = username;
    this.room = room;
    this.host = hostname;
    this.port = port;
    this.protocol = protocol.replace(/\W/, ''); // Tudo o que não for uma letras
  }

  static parseArguments(commands) {
    const cmd = new Map();

    for(const key in commands) {
      const index = parseInt(key);
      const command =  commands[key];
      const commandPreffix = '--';

      if (!command.includes(commandPreffix)) continue;

      cmd.set(
        command.replace(commandPreffix, ''), // Chave
        commands[index + 1] // Valor
      );
    }

    return new CliConfig(Object.fromEntries(cmd));
  }
}