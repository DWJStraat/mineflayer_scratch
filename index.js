mineflayer = require('mineflayer');
scratch = require('scratch-vm');
arg_type = require('scratch-vm/src/extension-support/argument-type');
block_type = require('scratch-vm/src/extension-support/block-type');

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
                    blockType: block_type.COMMAND,
                    text: 'Connect to [HOST][PORT][NAME]',
                    arguments: {
                        HOST: {
                            type: arg_type.STRING,
                            defaultValue: 'localhost'
                        },
                        PORT: {
                            type: arg_type.NUMBER,
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

Scratch.extensions.register(new ScratchFetch());