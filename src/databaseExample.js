// possible data storage
const database = {
	"Users": {
		"UserID1": {
			"Name": "Kok Wee",
			"Email": "abc213123@hotmail.com",
			"GamesPlayed": 37,
			"WinRate": 0.87,
			"LoseRate": 0.07,
			"AveragePPG": 11,
			"DisplayPicture": require("./images/placeholder.png"),
			"Bookmarks": ["CourtID1", "CourtID2"]
		},
		"UserID2": {
			"Name": "Kok Wee",
			"Email": "abc213123@gmail.com",
			"GamesPlayed": 37,
			"WinRate": 0.86,
			"LoseRate": 0.07,
			"AveragePPG": 11,
			"DisplayPicture": require("./images/placeholder.png"),
			"Bookmarks": ["CourtID1"]
		},
		"UserID3": {
			"Name": "Wen Yu",
			"Email": "abc213123@icloud.com",
			"GamesPlayed": 37,
			"WinRate": 0.87,
			"LoseRate": 0.07,
			"AveragePPG": 11,
			"DisplayPicture": require("./images/placeholder.png"),
			"Bookmarks": []			
		},
	},
	"Courts": {
		"CourtID1": {
            "Address": "6 Potong Pasir Ave 2, Singapore 358361",
            "Coordinates": {
                "Latitude": 1.3337286161508455,
                "Longitude": 103.8670577060402
            },
			"Picture": require("./images/placeholder.png"),
			"PlayersOnCourt": {
				"UserID1": {
					"DisplayPicture": require("./images/placeholder.png")
				},
				// "UserID2": {
				// 	"DisplayPicture": require("./images/placeholder.png")
				// },
				// "UserID3": {
				// 	"DisplayPicture": require("./images/placeholder.png")
				// },
				// "UserID4": {
				// 	"DisplayPicture": require("./images/placeholder.png")
				// },
				// "UserID5": {
				// 	"DisplayPicture": require("./images/placeholder.png")
				// }
			},
			"TeamsOnCourt": {
				"TeamID1": {
					"DisplayPicture": require("./images/placeholder.png"),
					"TeamName": "Hello",
					"Players": {
						"UserID1": {
							"DisplayPicture": require("./images/placeholder.png")
						},
						"UserID2": {
							"DisplayPicture": require("./images/placeholder.png")
						}
					}
				},
				"TeamID2": {
					"DisplayPicture": require("./images/placeholder.png"),
					"TeamName": "Hello",
					"Players": {
						"UserID1": {
							"DisplayPicture": require("./images/placeholder.png")
						},
						"UserID2": {
							"DisplayPicture": require("./images/placeholder.png")
						}
					}
				}
			}
		},
		"CourtID2": {
			"Address": "4C St George's Ln, Singapore 322004",
            "Coordinates": {
                "Latitude": 1.3242039726320411, 
                "Longitude": 103.86182203406368,
            },
			"Picture": require("./images/placeholder.png"),
			"PlayersOnCourt": {
				"UserID1": {
					"DisplayPicture": require("./images/placeholder.png")
				},
				"UserID2": {
					"DisplayPicture": require("./images/placeholder.png")
				},
				"UserID3": {
					"DisplayPicture": require("./images/placeholder.png")
				},
				"UserID4": {
					"DisplayPicture": require("./images/placeholder.png")
				},
				"UserID5": {
					"DisplayPicture": require("./images/placeholder.png")
				}
			},
			"TeamsOnCourt": {
				"TeamID1": {
					"DisplayPicture": require("./images/placeholder.png"),
					"TeamName": "Hello",
					"Players": {
						"UserID1": {
							"DisplayPicture": require("./images/placeholder.png")
						},
						"UserID2": {
							"DisplayPicture": require("./images/placeholder.png")
						}
					}
				},
				"TeamID2": {
					"DisplayPicture": require("./images/placeholder.png"),
					"TeamName": "Hello",
					"Players": {
						"UserID1": {
							"DisplayPicture": require("./images/placeholder.png")
						},
						"UserID2": {
							"DisplayPicture": require("./images/placeholder.png")
						}
					}
				}
			}
		}
	}
}

export default database;