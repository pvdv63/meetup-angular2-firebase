var shape = exports.shape = {
    "shapeType": "Entry",
    "id": 1,
    "description": "Start",
    "nextShape": {
        "shapeType": "Operation",
        "id": 2,
        "description": "Adding value 2",
        "nextShape": {
            "shapeType": "Decision",
            "id": 3,
            "description": "Adding value 2",
            "paths": [{
                "value": true,
                "selected": false,
                "nextShape": null,
                "nextShapeId": 3
            },
            {
                "value": false,
                "selected": false,
                "nextShape":
                    {
                        "shapeType": "Operation",
                        "id": 5,
                        "description": "Adding nothing",
                        "nextShape": null,
                        "properties": { "value": 0 },
                        "processName": "DecisionApp.add"
                    },
                "nextShapeId": 0
            }],
            "properties": { "value": 2, "decision": 10 },
            "processName": "DecisionApp.add",
            "nextShape": null,
            "decideName": "DecisionApp.checkValue"
        },
        "properties": { "value": 2 },
        "processName": "DecisionApp.add"
    }
};