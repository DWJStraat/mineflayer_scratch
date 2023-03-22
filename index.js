mineflayer = require('mineflayer');

class ScratchFetch {
    constructor (runtime) {
        this.runtime = runtime;
    }
    getInfo () {
        return {
            id: 'mineflayer',
            name: 'Mineflayer',
            blocks: [
                {
                    opcode: 'connect',
                    blockType: "command",
                    text: 'Connect to [HOST][PORT][NAME]',
                    arguments: {
                        HOST: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'localhost'
                        },
                        PORT: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 25566
                        },
                        NAME: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'BotName'
                        }
                    }
                }
            ]
        };
    }
    connect (args) {
        let bot;
        bot = mineflayer.createBot({
            host: args.HOST,
            port: args.PORT,
            username: args.NAME
        });
        }

}

Scratch.extensions.register(new ScratchFetch())
