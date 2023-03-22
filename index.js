mineflayer = require('mineflayer')

class ScratchMineflayer {
    constructor() {
    }

    getInfo() {
        return {
            "id": "MF",
            "name": "Mineflayer1.0",
            "blocks": [
                {
                    "opcode": "connect",
                    "blockType": "command",
                    "text": "Connect to [HOST]:[PORT] as [USERNAME]",
                    "arguments": {
                        "HOST": {
                            "type": "string",
                            "defaultValue": "localhost"
                        },
                        "PORT": {
                            "type": "number",
                            "defaultValue": 25565
                        },
                        "USERNAME": {
                            "type": "string",
                            "defaultValue": "Scratch"
                        }
                    }
                },
            ],
        };
    }

    connect(args) {
        let bot = mineflayer.createBot({
            host: args.HOST,
            port: args.port,
            username: args.USERNAME,
        })
    }
}

Scratch.extensions.register(new ScratchMineflayer())