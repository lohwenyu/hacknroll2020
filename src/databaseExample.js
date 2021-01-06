// possible data storage
const database = {
	"Users": {
		"UserID1": {
			"Name": "Kok Wee",
			"GamesPlayed": 37,
			"WinRate": 0.87,
			"LoseRate": 0.07,
			"AveragePPG": 11,
			"DisplayPicture": require("./images/placeholder.png"),
			"Bookmarks": ["CourtID1", "CourtID2"]
		},
		"UserID2": {
			"Name": "Kok Wee",
			"GamesPlayed": 37,
			"WinRate": 0.86,
			"LoseRate": 0.07,
			"AveragePPG": 11,
			"DisplayPicture": require("./images/placeholder.png"),
			"Bookmarks": ["CourtID1", "CourtID2"]
		},
		"UserID3": {
			"Name": "Wen Yu",
			"GamesPlayed": 37,
			"WinRate": 0.87,
			"LoseRate": 0.07,
			"AveragePPG": 11,
			"DisplayPicture": require("./images/placeholder.png")
		},
	},
	"Courts": {
		"CourtID1": {
			"Address": "Block 321 Tampines Avenue 3, S321321",
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
			"Address": "Block 321 Tampines Avenue 3, S321321",
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