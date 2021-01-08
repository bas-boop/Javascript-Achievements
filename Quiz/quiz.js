const quiz1 =
{
    "quizID": "Museum 1",
    "quizMetaData":
    {
        "title": "DE quiz van Bas de Reus",
        "imageURI": "data:image/jpeg;base64,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"

    },
    "quizContent":		
		[
			{
				"question": "Wat is lekker eten?",
				"answers": [{
						"answer": "pizza",
						"feedback": true
					},
					{
						"answer": "pasta",
						"feedback": true
					},
					{
						"answer": "shusi",
						"feedback": true
					},
					{
						"answer": "wortel",
						"feedback": false
					},
					{
						"answer": "boerenkool",
						"feedback": true
					}
				]
			},
			{
				"question": "Wat is een leuk spel met vrienden",
				"answers": [{
						"answer": "Cities skylines",
						"feedback": false
					},
					{
						"answer": "Among us",
						"feedback": true
					},
					{
						"answer": "Who's your daddy?",
						"feedback": false
					},
					{
						"answer": "Rocket League",
						"feedback": true
					}
				]
			},
			{
				"question": "Hoe kan je nu met vrienden gamen?",
				"answers": [{
						"answer": "offline",
						"feedback": false
					},
					{
						"answer": "online",
						"feedback": true
					},
				]
			},
			{
				"question": "Waarop is het beste om een game te spelen?",
				"answers": [{
						"answer": "pc 2",
						"feedback": false
					},
					{
						"answer": "xDoos 420",
						"feedback": false
					},
					{
						"answer": "Ps 69",
						"feedback": false
					},
					{
						"answer": "DS",
						"feedback": true
					},
				]
			}
		]
	}
