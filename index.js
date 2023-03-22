class ScratchMineflayer {
    constructor() {
    }

    getInfo() {
        return {
            "id": "Mineflayer",
            "name": "Mineflayer",
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
                {
                    "opcode": "jsonExtract",
                    "blockType": "reporter",
                    "text": "extract [name] from [data]",
                    "arguments": {
                        "name": {
                            "type": "string",
                            "defaultValue": "temperature"
                        },
                        "data": {
                            "type": "string",
                            "defaultValue": '{"temperature": 12.3}'
                        },
                    }
                },
            ],
        };
    }

    connect({url}) {
        return fetch(url).then(response => response.text())
    }

    jsonExtract({name,data}) {
        var parsed = JSON.parse(data)
        if (name in parsed) {
            var out = parsed[name]
            var t = typeof(out)
            if (t == "string" || t == "number")
                return out
            if (t == "boolean")
                return t ? 1 : 0
            return JSON.stringify(out)
        }
        else {
            return ""
        }
    }
}

Scratch.extensions.register(new ScratchMineflayer())