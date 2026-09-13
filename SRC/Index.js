export class GameRoom {
  constructor(ctx, env) {
    this.ctx = ctx;
    this.env = env;
  }

  async fetch(request) {
    return new Response("BLACK CLICK serveur OK");
  }
}

export default {
  async fetch(request, env) {
    if (new URL(request.url).pathname === "/ws") {
      const id = env.GAME.idFromName("global");
      const room = env.GAME.get(id);
      return room.fetch(request);
    }

    return env.ASSETS.fetch(request);
  }
};
