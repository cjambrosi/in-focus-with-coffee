import { constants } from "./constants.js";

export default class EventManager {
  #allUsers = new Map();

  constructor({ componentEmitter, socketClient }) {
    this.componentEmitter = componentEmitter;
    this.socketClient = socketClient;
  }
  
  joinRoomAndWaitForMessages(data)   {
    this.socketClient.sendMessage(constants.events.socket.JOIN_ROOM, data);
    
    this.componentEmitter.on(constants.events.app.MESSAGE_SENT, msg => {
      this.socketClient.sendMessage(constants.events.socket.MESSAGE, msg);
    });
  }

  updateUsers(users) {
    const connectedUsers = users;
    connectedUsers.forEach(({ id, userName }) => 
      this.#allUsers.set(id, userName));
    
    this.#updateUsersComponent();
  }

  disconnectUser(user) {
    const { userName, id } = user;
    this.#allUsers.delete(id);

    this.#updateActivityLogComponent(`${userName} left!`);
    this.#updateUsersComponent();
  }

  message(message) {
    this.#emitComponentUpdate(
      constants.events.app.MESSAGE_RECEIVED,
      message
    );
  }

  newUserConnected(message) {
    const user = message;
    this.#allUsers.set(user.id, user.userName);
    this.#updateUsersComponent();
    this.#updateActivityLogComponent(`${user.userName} joined!`);
  }

  #updateActivityLogComponent(message) {
    this.#emitComponentUpdate(
      constants.events.app.ACTIVITYLOG_UPDATED,
      message
    );
  }

  #emitComponentUpdate(event, message) {
    this.componentEmitter.emit(
      event,
      message
    );
  }

  #updateUsersComponent() {
    this.#emitComponentUpdate(
      constants.events.app.STATUS_UPDATED,
      Array.from(this.#allUsers.values())
    );
  }

  getEvents() {
    const functions = Reflect.ownKeys(EventManager.prototype) // Pegar as funções dessa classe
      .filter(fn => fn !== 'constructor')
      .map(name => [name, this[name].bind(this)]); // retorna [[],[],[]]
    
    return new Map(functions);
  }
}