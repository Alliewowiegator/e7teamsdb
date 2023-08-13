const fsPromises = require('fs').promises;

let data = []

let heroData = {
    "Abigail": {
        "code": "c1144",
        "_id": "abigail",
        "name": "Abigail",
        "moonlight": false,
        "rarity": 5,
        "attribute": "fire",
        "role": "warrior",
        "zodiac": "ram",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "B": 0.056,
                "A": 0.084,
                "S": 0.112,
                "SS": 0.14,
                "SSS": 0.168
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1144_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1144_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.8,
                "pow": 0.9,
                "targets": 1,
                "selfHpScaling": 0.12,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.2,
                "pow": 0.95,
                "targets": 1,
                "selfHpScaling": 0.2,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11377,
                "atk": 789,
                "hp": 4735,
                "spd": 117,
                "def": 514,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 14466,
                "atk": 984,
                "hp": 6266,
                "spd": 117,
                "def": 637,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Achates": {
        "code": "c1017",
        "_id": "achates",
        "name": "Achates",
        "moonlight": false,
        "rarity": 4,
        "attribute": "fire",
        "role": "manauser",
        "zodiac": "twins",
        "self_devotion": {
            "type": "max_hp_rate",
            "grades": {
                "C": 0.04,
                "B": 0.06,
                "A": 0.08,
                "S": 0.1,
                "SS": 0.12,
                "SSS": 0.14
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1017_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1017_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc101701",
                "id": "exc101701",
                "name": "Untainted Heart",
                "description": "A staff decorated with a bright red orb that encapsulates both the spirit of charity, and the unwavering determination of Achates.",
                "unit": "c1017",
                "role": "manauser",
                "rarity": 5,
                "stat": {
                    "type": "max_hp_rate",
                    "value": 0.07
                },
                "skills": [
                    {
                        "skill": 1,
                        "description": "Increases the chance to decrease Attack when using Magic Design by 25%.",
                        "skill_description": null,
                        "values": [],
                        "_id": 0
                    },
                    {
                        "skill": 2,
                        "description": "Amount recovered is increased by 67% when using Rapid Cure.",
                        "skill_description": null,
                        "values": [],
                        "_id": 1
                    },
                    {
                        "skill": 3,
                        "description": "Increases Effect Resistance of the caster for 2 turns when using Curing Prayer.",
                        "skill_description": "Dispels debuffs from all allies before healing them. Increases Effect Resistance of the caster for 2 turns. Healing increases proportional to the caster's max Health.",
                        "values": [
                            57
                        ],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1017.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.95,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S2 heal",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.15
                    }
                ]
            },
            "S3": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S3 heal",
                        "targets": 0,
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.3
                    },
                    {
                        "name": "S3 soulburn heal",
                        "targets": 0,
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.5
                    }
                ]
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 14745,
                "atk": 484,
                "hp": 3741,
                "spd": 103,
                "def": 534,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.3
            },
            "lv60SixStarFullyAwakened": {
                "cp": 18738,
                "atk": 603,
                "hp": 4945,
                "spd": 103,
                "def": 662,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.3
            }
        }
    },
    "Adin": {
        "code": "c3143",
        "_id": "adin",
        "name": "Adin",
        "moonlight": false,
        "rarity": 3,
        "attribute": "wind",
        "role": "assassin",
        "zodiac": "lion",
        "self_devotion": {
            "type": "att",
            "grades": {
                "D": 36,
                "C": 54,
                "B": 72,
                "A": 90,
                "S": 108,
                "SS": 126,
                "SSS": 144
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3143_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3143_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.95,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.8,
                "pow": 1,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.8,
                "pow": 1.05,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11477,
                "atk": 828,
                "hp": 3642,
                "spd": 111,
                "def": 398,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 14563,
                "atk": 1081,
                "hp": 4572,
                "spd": 111,
                "def": 494,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Adlay": {
        "code": "c3043",
        "_id": "adlay",
        "name": "Adlay",
        "moonlight": false,
        "rarity": 3,
        "attribute": "wind",
        "role": "mage",
        "zodiac": "archer",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "D": 0.045,
                "C": 0.068,
                "B": 0.09,
                "A": 0.112,
                "S": 0.135,
                "SS": 0.158,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3043_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3043_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11614,
                "atk": 833,
                "hp": 3128,
                "spd": 110,
                "def": 489,
                "chc": 0.19,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 14932,
                "atk": 1039,
                "hp": 3925,
                "spd": 110,
                "def": 606,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Adventurer Ras": {
        "code": "c5001",
        "_id": "adventurer-ras",
        "name": "Adventurer Ras",
        "moonlight": false,
        "rarity": 3,
        "attribute": "fire",
        "role": "knight",
        "zodiac": "scales",
        "self_devotion": {
            "type": "max_hp",
            "grades": {
                "D": 180,
                "C": 270,
                "B": 360,
                "A": 450,
                "S": 540,
                "SS": 630,
                "SSS": 720
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c5001_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c5001_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 1,
                "targets": 1,
                "selfHpScaling": 0.04,
                "increasedValue": 0.1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 1,
                "targets": 3,
                "selfHpScaling": 0.04,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12124,
                "atk": 607,
                "hp": 4640,
                "spd": 95,
                "def": 511,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.12,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 5429,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 6,
                "overrideAdditionalEff": 0.25,
                "overrideAdditionalRes": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15498,
                "atk": 758,
                "hp": 5826,
                "spd": 95,
                "def": 672,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.12,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 6818,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 6,
                "overrideAdditionalEff": 0.25,
                "overrideAdditionalRes": 0
            }
        }
    },
    "ae-GISELLE": {
        "code": "c1138",
        "_id": "ae-giselle",
        "name": "ae-GISELLE",
        "moonlight": true,
        "rarity": 5,
        "attribute": "wind",
        "role": "mage",
        "zodiac": "scorpion",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1138_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1138_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 2,
                "pow": 1,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12684,
                "atk": 906,
                "hp": 3578,
                "spd": 101,
                "def": 506,
                "chc": 0.27,
                "chd": 1.6,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16087,
                "atk": 1286,
                "hp": 4733,
                "spd": 103,
                "def": 652,
                "chc": 0.27,
                "chd": 1.6,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "ae-KARINA": {
        "code": "c1137",
        "_id": "ae-karina",
        "name": "ae-KARINA",
        "moonlight": false,
        "rarity": 5,
        "attribute": "ice",
        "role": "knight",
        "zodiac": "ram",
        "self_devotion": {
            "type": "def_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1137_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1137_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.5,
                "pow": 1,
                "targets": 1,
                "selfDefScaling": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S2 barrier",
                        "rate": 0,
                        "pow": 0,
                        "selfDefScaling": 0.7
                    }
                ]
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "note": "with proc dmg",
                "rate": 0.5,
                "pow": 1,
                "targets": 1,
                "selfDefScaling": 0.5,
                "extraSelfDefScaling": 1.4,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13403,
                "atk": 658,
                "hp": 5375,
                "spd": 110,
                "def": 523,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.06,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17219,
                "atk": 821,
                "hp": 6751,
                "spd": 110,
                "def": 648,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "ae-NINGNING": {
        "code": "c1140",
        "_id": "ae-ningning",
        "name": "ae-NINGNING",
        "moonlight": false,
        "rarity": 5,
        "attribute": "fire",
        "role": "manauser",
        "zodiac": "scorpion",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "B": 0.09,
                "A": 0.135,
                "S": 0.18,
                "SS": 0.225,
                "SSS": 0.27
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1140_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1140_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 16221,
                "atk": 921,
                "hp": 5165,
                "spd": 102,
                "def": 497,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16221,
                "atk": 785,
                "hp": 5077,
                "spd": 114,
                "def": 634,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.3,
                "efr": 0
            }
        }
    },
    "ae-WINTER": {
        "code": "c1139",
        "_id": "ae-winter",
        "name": "ae-WINTER",
        "moonlight": false,
        "rarity": 5,
        "attribute": "fire",
        "role": "assassin",
        "zodiac": "goat",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "B": 0.056,
                "A": 0.084,
                "S": 0.112,
                "SS": 0.14,
                "SSS": 0.168
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1139_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1139_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.8,
                "pow": 0.95,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13285,
                "atk": 804,
                "hp": 4542,
                "spd": 115,
                "def": 472,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17052,
                "atk": 1057,
                "hp": 5542,
                "spd": 118,
                "def": 532,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.3,
                "efr": 0
            }
        }
    },
    "Ainos": {
        "code": "c3105",
        "_id": "ainos",
        "name": "Ainos",
        "moonlight": true,
        "rarity": 3,
        "attribute": "dark",
        "role": "manauser",
        "zodiac": "archer",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "D": 0.045,
                "C": 0.068,
                "B": 0.09,
                "A": 0.112,
                "S": 0.135,
                "SS": 0.158,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3105_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3105_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13832,
                "atk": 651,
                "hp": 3128,
                "spd": 107,
                "def": 483,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.12,
                "efr": 0.06
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17640,
                "atk": 812,
                "hp": 3925,
                "spd": 107,
                "def": 599,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.12,
                "efr": 0.18
            }
        }
    },
    "Ainos 2.0": {
        "code": "c4105",
        "_id": "ainos-2.0",
        "name": "Ainos 2.0",
        "moonlight": true,
        "rarity": 3,
        "attribute": "dark",
        "role": "manauser",
        "zodiac": "archer",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "D": 0.045,
                "C": 0.068,
                "B": 0.09,
                "A": 0.112,
                "S": 0.135,
                "SS": 0.158,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4105_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4105_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13832,
                "atk": 651,
                "hp": 3128,
                "spd": 107,
                "def": 483,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.12,
                "efr": 0.06,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 4801,
                "overrideDef": 688,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 5,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17640,
                "atk": 812,
                "hp": 3925,
                "spd": 107,
                "def": 599,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.12,
                "efr": 0.18,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 4801,
                "overrideDef": 688,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 5,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            }
        }
    },
    "Ains": {
        "code": "c3093",
        "_id": "ains",
        "name": "Ains",
        "moonlight": false,
        "rarity": 3,
        "attribute": "wind",
        "role": "warrior",
        "zodiac": "scales",
        "self_devotion": {
            "type": "def",
            "grades": {
                "D": 18,
                "C": 27,
                "B": 36,
                "A": 45,
                "S": 54,
                "SS": 63,
                "SSS": 72
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3093_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3093_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 1,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11788,
                "atk": 762,
                "hp": 4171,
                "spd": 104,
                "def": 469,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15002,
                "atk": 951,
                "hp": 5517,
                "spd": 104,
                "def": 583,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Aither": {
        "code": "c1018",
        "_id": "aither",
        "name": "Aither",
        "moonlight": false,
        "rarity": 3,
        "attribute": "ice",
        "role": "manauser",
        "zodiac": "scales",
        "self_devotion": {
            "type": "att",
            "grades": {
                "D": 36,
                "C": 54,
                "B": 72,
                "A": 90,
                "S": 108,
                "SS": 126,
                "SSS": 144
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1018_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1018_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1.05,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S2 heal",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.15,
                        "selfAtkScaling": 0.45
                    }
                ]
            },
            "S3": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S3 heal",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.15,
                        "selfAtkScaling": 0.35
                    }
                ]
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13996,
                "atk": 571,
                "hp": 3659,
                "spd": 99,
                "def": 541,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17770,
                "atk": 712,
                "hp": 4592,
                "spd": 103,
                "def": 672,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Alencia": {
        "code": "c1100",
        "_id": "alencia",
        "name": "Alencia",
        "moonlight": false,
        "rarity": 5,
        "attribute": "wind",
        "role": "warrior",
        "zodiac": "crab",
        "self_devotion": {
            "type": "max_hp_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1100_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1100_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc102301",
                "id": "exc102301",
                "name": "Grudge Marble",
                "description": "A marble filled with the grudges of people who pledged their souls and loyalty to Kayron",
                "unit": "c1023",
                "role": "warrior",
                "rarity": 5,
                "stat": {
                    "type": "cri",
                    "value": 0.06
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.5,
                "pow": 1,
                "targets": 1,
                "selfHpScaling": 0.08,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "note": "S1 proc",
                "rate": 0.5,
                "pow": 1,
                "targets": 1,
                "selfHpScaling": 0.11,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.5,
                "pow": 1,
                "targets": 3,
                "selfHpScaling": 0.15,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13640,
                "atk": 782,
                "hp": 5616,
                "spd": 106,
                "def": 497,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17360,
                "atk": 975,
                "hp": 7054,
                "spd": 106,
                "def": 652,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Alexa": {
        "code": "c3012",
        "_id": "alexa",
        "name": "Alexa",
        "moonlight": false,
        "rarity": 3,
        "attribute": "ice",
        "role": "assassin",
        "zodiac": "lion",
        "self_devotion": {
            "type": "att",
            "grades": {
                "D": 36,
                "C": 54,
                "B": 72,
                "A": 90,
                "S": 108,
                "SS": 126,
                "SSS": 144
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3012_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3012_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 0.9,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11477,
                "atk": 828,
                "hp": 3642,
                "spd": 111,
                "def": 398,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 14563,
                "atk": 1081,
                "hp": 4572,
                "spd": 111,
                "def": 494,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "All-Rounder Wanda": {
        "code": "c4065",
        "_id": "allrounder-wanda",
        "name": "All-Rounder Wanda",
        "moonlight": true,
        "rarity": 3,
        "attribute": "dark",
        "role": "ranger",
        "zodiac": "twins",
        "self_devotion": {
            "type": "att",
            "grades": {
                "D": 36,
                "C": 54,
                "B": 72,
                "A": 90,
                "S": 108,
                "SS": 126,
                "SSS": 144
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4065_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4065_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 0.95,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.8,
                "pow": 0.9,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11667,
                "atk": 769,
                "hp": 3739,
                "spd": 109,
                "def": 429,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 4248,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0.12,
                "overrideAdditionalRes": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 14767,
                "atk": 1005,
                "hp": 4693,
                "spd": 109,
                "def": 532,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 5590,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0.12,
                "overrideAdditionalRes": 0
            }
        }
    },
    "Ambitious Tywin": {
        "code": "c2042",
        "_id": "ambitious-tywin",
        "name": "Ambitious Tywin",
        "moonlight": true,
        "rarity": 5,
        "attribute": "light",
        "role": "knight",
        "zodiac": "archer",
        "self_devotion": {
            "type": "max_hp_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2042_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2042_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.6,
                "pow": 1,
                "targets": 1,
                "selfHpScaling": 0.1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.5,
                "pow": 1,
                "targets": 3,
                "selfHpScaling": 0.12,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13591,
                "atk": 716,
                "hp": 5446,
                "spd": 100,
                "def": 559,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17114,
                "atk": 894,
                "hp": 6840,
                "spd": 104,
                "def": 694,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Amid": {
        "code": "c1143",
        "_id": "amid",
        "name": "Amid",
        "moonlight": false,
        "rarity": 5,
        "attribute": "ice",
        "role": "manauser",
        "zodiac": "bull",
        "self_devotion": {
            "type": "res",
            "grades": {
                "B": 0.09,
                "A": 0.135,
                "S": 0.18,
                "SS": 0.225,
                "SSS": 0.27
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1143_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1143_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 15716,
                "atk": 556,
                "hp": 3867,
                "spd": 117,
                "def": 528,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.18
            },
            "lv60SixStarFullyAwakened": {
                "cp": 20057,
                "atk": 694,
                "hp": 4855,
                "spd": 117,
                "def": 655,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.3
            }
        }
    },
    "Angel of Light Angelica": {
        "code": "c6062",
        "_id": "angel-of-light-angelica",
        "name": "Angel of Light Angelica",
        "moonlight": true,
        "rarity": 4,
        "attribute": "light",
        "role": "mage",
        "zodiac": "bull",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "C": 0.068,
                "B": 0.102,
                "A": 0.136,
                "S": 0.17,
                "SS": 0.204,
                "SSS": 0.238
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c6062_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c6062_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13090,
                "atk": 767,
                "hp": 3996,
                "spd": 112,
                "def": 520,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.06,
                "efr": 0.18
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16790,
                "atk": 957,
                "hp": 5016,
                "spd": 112,
                "def": 645,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0.18
            }
        }
    },
    "Angelic Montmorancy": {
        "code": "c4042",
        "_id": "angelic-montmorancy",
        "name": "Angelic Montmorancy",
        "moonlight": false,
        "rarity": 3,
        "attribute": "ice",
        "role": "manauser",
        "zodiac": "fish",
        "self_devotion": {
            "type": "res",
            "grades": {
                "D": 0.045,
                "C": 0.068,
                "B": 0.09,
                "A": 0.112,
                "S": 0.135,
                "SS": 0.158,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4042_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4042_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S2 heal",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.07
                    }
                ]
            },
            "S3": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S3 heal",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.35
                    }
                ]
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 14246,
                "atk": 433,
                "hp": 3904,
                "spd": 98,
                "def": 556,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.12,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 4231,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0.4
            },
            "lv60SixStarFullyAwakened": {
                "cp": 18267,
                "atk": 540,
                "hp": 4900,
                "spd": 98,
                "def": 729,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.12,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 5312,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0.4
            }
        }
    },
    "Angelica": {
        "code": "c1062",
        "_id": "angelica",
        "name": "Angelica",
        "moonlight": false,
        "rarity": 4,
        "attribute": "ice",
        "role": "manauser",
        "zodiac": "crab",
        "self_devotion": {
            "type": "max_hp_rate",
            "grades": {
                "C": 0.04,
                "B": 0.06,
                "A": 0.08,
                "S": 0.1,
                "SS": 0.12,
                "SSS": 0.14
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1062_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1062_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc100801",
                "id": "exc100801",
                "name": "Golden Cat's Treasure",
                "description": "An ear-protecting ornament that was passed down in Armin's family and brings wealth and honor.",
                "unit": "c1008",
                "role": "knight",
                "rarity": 5,
                "stat": {
                    "type": "speed",
                    "value": 5
                },
                "skills": [
                    {
                        "skill": 1,
                        "description": "Takedown's chance of stunning is increased by 25%.",
                        "skill_description": null,
                        "values": [],
                        "_id": 0
                    },
                    {
                        "skill": 3,
                        "description": "Shield Wall's barrier strength is increased by 50%.",
                        "skill_description": null,
                        "values": [],
                        "_id": 1
                    },
                    {
                        "skill": 3,
                        "description": "Dispels one debuff from all allies when using Shield Wall.",
                        "skill_description": "Covers all allies with the Shield of Light and grants a barrier for 3 turns, recovering Health and dispelling one debuff. Barrier strength is proportional to the caster's Defense, and amount recovered is proportional to the target's max Health. Decreases damage suffered by allies by 10% when this skill is unavailable.",
                        "values": [
                            5
                        ],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1008.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S2 heal",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.2
                    }
                ]
            },
            "S3": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S3 heal",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.15
                    }
                ]
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 15120,
                "atk": 462,
                "hp": 4326,
                "spd": 98,
                "def": 598,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 19232,
                "atk": 576,
                "hp": 5700,
                "spd": 98,
                "def": 743,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Apocalypse Ravi": {
        "code": "c2019",
        "_id": "apocalypse-ravi",
        "name": "Apocalypse Ravi",
        "moonlight": true,
        "rarity": 5,
        "attribute": "dark",
        "role": "warrior",
        "zodiac": "crab",
        "self_devotion": {
            "type": "res",
            "grades": {
                "B": 0.09,
                "A": 0.135,
                "S": 0.18,
                "SS": 0.225,
                "SSS": 0.27
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2019_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2019_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.95,
                "targets": 1,
                "selfHpScaling": 0.12,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S2 heal",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.08
                    }
                ]
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.3,
                "pow": 0.95,
                "targets": 1,
                "selfHpScaling": 0.2,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13640,
                "atk": 782,
                "hp": 5616,
                "spd": 106,
                "def": 497,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 0,
                "overrideDef": 0,
                "overrideAdditionalCr": 0.3,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17360,
                "atk": 975,
                "hp": 7054,
                "spd": 106,
                "def": 652,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 0,
                "overrideDef": 0,
                "overrideAdditionalCr": 0.3,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            }
        }
    },
    "Aramintha": {
        "code": "c1048",
        "_id": "aramintha",
        "name": "Aramintha",
        "moonlight": false,
        "rarity": 5,
        "attribute": "fire",
        "role": "mage",
        "zodiac": "twins",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "B": 0.09,
                "A": 0.135,
                "S": 0.18,
                "SS": 0.225,
                "SSS": 0.27
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1048_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1048_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc101048",
                "id": "exc101048",
                "name": "Scarlet Tear",
                "description": "Earrings bestowed to Aramintha from a nomad during her travels with Duren. No one knew that the trip was going to be their last one together.",
                "unit": "c1048",
                "role": "mage",
                "rarity": 5,
                "stat": {
                    "type": "speed",
                    "value": 5
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1.05,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 1,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13525,
                "atk": 960,
                "hp": 3642,
                "spd": 106,
                "def": 551,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17342,
                "atk": 1197,
                "hp": 4572,
                "spd": 106,
                "def": 683,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.3,
                "efr": 0
            }
        }
    },
    "Arbiter Vildred": {
        "code": "c2007",
        "_id": "arbiter-vildred",
        "name": "Arbiter Vildred",
        "moonlight": true,
        "rarity": 5,
        "attribute": "dark",
        "role": "assassin",
        "zodiac": "lion",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2007_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2007_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.975,
                "pow": 1,
                "targets": 2,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.04,
                "pow": 0.85,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13126,
                "atk": 983,
                "hp": 4092,
                "spd": 116,
                "def": 421,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16674,
                "atk": 1283,
                "hp": 5138,
                "spd": 116,
                "def": 522,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Archdemon's Shadow": {
        "code": "c5004",
        "_id": "archdemons-shadow",
        "name": "Archdemon's Shadow",
        "moonlight": true,
        "rarity": 5,
        "attribute": "dark",
        "role": "mage",
        "zodiac": "waterbearer",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c5004_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c5004_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.6,
                "pow": 1.3,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 14048,
                "atk": 1056,
                "hp": 3806,
                "spd": 108,
                "def": 576,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.06,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 18032,
                "atk": 1316,
                "hp": 4777,
                "spd": 108,
                "def": 715,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "Architect Laika": {
        "code": "c2099",
        "_id": "architect-laika",
        "name": "Architect Laika",
        "moonlight": true,
        "rarity": 5,
        "attribute": "light",
        "role": "mage",
        "zodiac": "maiden",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2099_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2099_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.9,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "note": "80% penetration",
                "rate": 0.9,
                "pow": 0.9,
                "targets": 3,
                "penetration": 0.8,
                "selfSpdScaling": 0.001125,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13675,
                "atk": 1047,
                "hp": 3385,
                "spd": 115,
                "def": 525,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17281,
                "atk": 1306,
                "hp": 4248,
                "spd": 119,
                "def": 652,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Aria": {
        "code": "c1129",
        "_id": "aria",
        "name": "Aria",
        "moonlight": false,
        "rarity": 5,
        "attribute": "ice",
        "role": "mage",
        "zodiac": "bull",
        "self_devotion": {
            "type": "def_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1129_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1129_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 1,
                "targets": 2,
                "selfDefScaling": 0.85,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 1.3,
                "targets": 3,
                "selfDefScaling": 1.4,
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S3 barrier",
                        "rate": 0,
                        "pow": 0,
                        "selfDefScaling": 1
                    }
                ]
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13970,
                "atk": 833,
                "hp": 4221,
                "spd": 115,
                "def": 542,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.06,
                "efr": 0.18,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 0,
                "overrideDef": 0,
                "overrideAdditionalCr": 0.3,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17925,
                "atk": 1039,
                "hp": 5299,
                "spd": 115,
                "def": 673,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0.18,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 0,
                "overrideDef": 0,
                "overrideAdditionalCr": 0.3,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            }
        }
    },
    "Armin": {
        "code": "c1008",
        "_id": "armin",
        "name": "Armin",
        "moonlight": false,
        "rarity": 4,
        "attribute": "wind",
        "role": "knight",
        "zodiac": "goat",
        "self_devotion": {
            "type": "def_rate",
            "grades": {
                "C": 0.04,
                "B": 0.06,
                "A": 0.08,
                "S": 0.1,
                "SS": 0.12,
                "SSS": 0.14
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1008_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1008_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc100801",
                "id": "exc100801",
                "name": "Golden Cat's Treasure",
                "description": "An ear-protecting ornament that was passed down in Armin's family and brings wealth and honor.",
                "unit": "c1008",
                "role": "knight",
                "rarity": 5,
                "stat": {
                    "type": "speed",
                    "value": 5
                },
                "skills": [
                    {
                        "skill": 1,
                        "description": "Takedown's chance of stunning is increased by 25%.",
                        "skill_description": null,
                        "values": [],
                        "_id": 0
                    },
                    {
                        "skill": 3,
                        "description": "Shield Wall's barrier strength is increased by 50%.",
                        "skill_description": null,
                        "values": [],
                        "_id": 1
                    },
                    {
                        "skill": 3,
                        "description": "Dispels one debuff from all allies when using Shield Wall.",
                        "skill_description": "Covers all allies with the Shield of Light and grants a barrier for 3 turns, recovering Health and dispelling one debuff. Barrier strength is proportional to the caster's Defense, and amount recovered is proportional to the target's max Health. Decreases damage suffered by allies by 10% when this skill is unavailable.",
                        "values": [
                            5
                        ],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1008.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "note": "single target",
                "rate": 0.8,
                "pow": 0.9,
                "targets": 1,
                "selfDefScaling": 0.6,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S3 barrier",
                        "rate": 0,
                        "pow": 0,
                        "selfDefScaling": 0.6
                    }
                ]
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13184,
                "atk": 578,
                "hp": 4928,
                "spd": 91,
                "def": 633,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.06
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16931,
                "atk": 721,
                "hp": 6189,
                "spd": 91,
                "def": 785,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.18
            }
        }
    },
    "Arowell": {
        "code": "c3004",
        "_id": "arowell",
        "name": "Arowell",
        "moonlight": true,
        "rarity": 3,
        "attribute": "light",
        "role": "knight",
        "zodiac": "scales",
        "self_devotion": {
            "type": "max_hp",
            "grades": {
                "D": 180,
                "C": 270,
                "B": 360,
                "A": 450,
                "S": 540,
                "SS": 630,
                "SSS": 720
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3004_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3004_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 0.95,
                "targets": 1,
                "selfHpScaling": 0.05,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 0.95,
                "targets": 1,
                "selfHpScaling": 0.15,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12124,
                "atk": 607,
                "hp": 4640,
                "spd": 95,
                "def": 511,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.12
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15498,
                "atk": 758,
                "hp": 5826,
                "spd": 95,
                "def": 672,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.12
            }
        }
    },
    "Arunka": {
        "code": "c1124",
        "_id": "arunka",
        "name": "Arunka",
        "moonlight": false,
        "rarity": 5,
        "attribute": "wind",
        "role": "warrior",
        "zodiac": "scorpion",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1124_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1124_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": [
                    {
                        "name": "S1 proc normal",
                        "rate": 1.3,
                        "pow": 1.3,
                        "targets": 1
                    },
                    {
                        "name": "S1 proc miss",
                        "rate": 1.3,
                        "pow": 1.3,
                        "targets": 1
                    }
                ]
            },
            "S3": {
                "hitTypes": ["normal", "miss"],
                "note": "70% penetration",
                "rate": 0.9,
                "pow": 1,
                "targets": 1,
                "penetration": 0.7,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 16221,
                "atk": 921,
                "hp": 5165,
                "spd": 102,
                "def": 497,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 30,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 0,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16221,
                "atk": 1208,
                "hp": 6488,
                "spd": 102,
                "def": 616,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 30,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 0,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            }
        }
    },
    "Assassin Cartuja": {
        "code": "c2013",
        "_id": "assassin-cartuja",
        "name": "Assassin Cartuja",
        "moonlight": true,
        "rarity": 4,
        "attribute": "dark",
        "role": "warrior",
        "zodiac": "scorpion",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "C": 0.068,
                "B": 0.102,
                "A": 0.136,
                "S": 0.17,
                "SS": 0.204,
                "SSS": 0.238
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2013_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2013_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc107101",
                "id": "exc107101",
                "name": "Citrine Treasure",
                "description": "A beautiful brooch made by the world's greatest artisan using only the highest-grade materials.",
                "unit": "c1071",
                "role": "ranger",
                "rarity": 5,
                "stat": {
                    "type": "acc",
                    "value": 0.08
                },
                "skills": [
                    {
                        "skill": 2,
                        "description": "Dispels one buff each from all enemies when using Butterfly Fan.",
                        "skill_description": "Attacks all enemies by waving a fan, dispelling one buff each. Damage dealt increases with more enemies. Grants the caster immunity for 1 turn after attacking.",
                        "values": [
                            12
                        ],
                        "_id": 0
                    },
                    {
                        "skill": 3,
                        "description": "Increases decrease Defense chance by 20% when using Razorwind Fan.",
                        "skill_description": null,
                        "values": [],
                        "_id": 1
                    },
                    {
                        "skill": 3,
                        "description": "Decreases Combat Readiness of all enemies by 15% when using Razorwind Fan.",
                        "skill_description": "Attacks all enemies by creating a powerful gust of wind, with a {{variable}} chance to decrease Defense for 2 turns, before decreasing Combat Readiness by 15%. Effect chance increases by 20% when Razorwind Fan is triggered by Windbreak Fan.",
                        "values": [
                            18
                        ],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1071.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 0.95,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12819,
                "atk": 854,
                "hp": 4850,
                "spd": 100,
                "def": 479,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16221,
                "atk": 1119,
                "hp": 6091,
                "spd": 100,
                "def": 594,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Assassin Cidd": {
        "code": "c2014",
        "_id": "assassin-cidd",
        "name": "Assassin Cidd",
        "moonlight": true,
        "rarity": 4,
        "attribute": "dark",
        "role": "assassin",
        "zodiac": "waterbearer",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "C": 0.042,
                "B": 0.063,
                "A": 0.084,
                "S": 0.105,
                "SS": 0.126,
                "SSS": 0.147
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2014_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2014_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc107101",
                "id": "exc107101",
                "name": "Citrine Treasure",
                "description": "A beautiful brooch made by the world's greatest artisan using only the highest-grade materials.",
                "unit": "c1071",
                "role": "ranger",
                "rarity": 5,
                "stat": {
                    "type": "acc",
                    "value": 0.08
                },
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1071.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 1,
                "targets": 1,
                "selfSpdScaling": 0.00075,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 0.95,
                "targets": 1,
                "selfSpdScaling": 0.001,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11993,
                "atk": 746,
                "hp": 3803,
                "spd": 128,
                "def": 401,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15432,
                "atk": 930,
                "hp": 4774,
                "spd": 128,
                "def": 497,
                "chc": 0.35,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Assassin Coli": {
        "code": "c2033",
        "_id": "assassin-coli",
        "name": "Assassin Coli",
        "moonlight": true,
        "rarity": 4,
        "attribute": "dark",
        "role": "assassin",
        "zodiac": "bull",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "C": 0.042,
                "B": 0.063,
                "A": 0.084,
                "S": 0.105,
                "SS": 0.126,
                "SSS": 0.147
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2033_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2033_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc203301",
                "id": "exc203301",
                "name": "Silent Daggers",
                "description": "A pair of daggers that Assassin Coli has been using since before she joined Dagger Sicar.",
                "unit": "c2033",
                "role": "assassin",
                "rarity": 5,
                "stat": {
                    "type": "att_rate",
                    "value": 0.07
                },
                "skills": [
                    {
                        "skill": 1,
                        "description": "Damage dealt is increased by 10% when using Ambush.",
                        "skill_description": null,
                        "values": [],
                        "_id": 0
                    },
                    {
                        "skill": 1,
                        "description": "Removes 3 Souls from the enemy after using Ambush.",
                        "skill_description": "Ambushes the enemy. Removes 3 Souls from the opponent. When the caster is stealthed, increases damage dealt and increases Speed of the caster for 1 turn. Damage dealt increases proportional to the caster's Speed.",
                        "values": [
                            56,
                            15,
                            3
                        ],
                        "_id": 1
                    },
                    {
                        "skill": 3,
                        "description": "Grants the caster immunity for 2 turns after using Murder.",
                        "skill_description": "Moves silently to attack the enemy, stunning for 1 turn, before granting immunity to the caster for 2 turns. Silences all enemies for 1 turn when the target is defeated. Damage dealt increases proportional to the caster's Speed.",
                        "values": [
                            20,
                            28,
                            12
                        ],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c2033.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 1,
                "targets": 1,
                "selfSpdScaling": 0.00075,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 0.8,
                "targets": 1,
                "selfSpdScaling": 0.001125,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11777,
                "atk": 787,
                "hp": 4221,
                "spd": 126,
                "def": 378,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 14934,
                "atk": 1027,
                "hp": 5299,
                "spd": 126,
                "def": 469,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Astromancer Elena": {
        "code": "c2091",
        "_id": "astromancer-elena",
        "name": "Astromancer Elena",
        "moonlight": true,
        "rarity": 5,
        "attribute": "light",
        "role": "ranger",
        "zodiac": "scales",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2091_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2091_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.9,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.1,
                "pow": 0.9,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13144,
                "atk": 824,
                "hp": 4382,
                "spd": 115,
                "def": 455,
                "chc": 0.27,
                "chd": 1.6,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16680,
                "atk": 1079,
                "hp": 5502,
                "spd": 115,
                "def": 564,
                "chc": 0.27,
                "chd": 1.6,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Auxiliary Lots": {
        "code": "c2031",
        "_id": "auxiliary-lots",
        "name": "Auxiliary Lots",
        "moonlight": true,
        "rarity": 4,
        "attribute": "dark",
        "role": "mage",
        "zodiac": "fish",
        "self_devotion": {
            "type": "max_hp_rate",
            "grades": {
                "C": 0.04,
                "B": 0.06,
                "A": 0.08,
                "S": 0.1,
                "SS": 0.12,
                "SSS": 0.14
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2031_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2031_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.8,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.8,
                "pow": 1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12736,
                "atk": 818,
                "hp": 3867,
                "spd": 112,
                "def": 491,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16357,
                "atk": 1021,
                "hp": 4855,
                "spd": 112,
                "def": 610,
                "chc": 0.35,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Azalea": {
        "code": "c3031",
        "_id": "azalea",
        "name": "Azalea",
        "moonlight": false,
        "rarity": 3,
        "attribute": "fire",
        "role": "warrior",
        "zodiac": "scorpion",
        "self_devotion": {
            "type": "att",
            "grades": {
                "D": 36,
                "C": 54,
                "B": 72,
                "A": 90,
                "S": 108,
                "SS": 126,
                "SSS": 144
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3031_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3031_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1.05,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 1.05,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12002,
                "atk": 779,
                "hp": 4570,
                "spd": 98,
                "def": 461,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15162,
                "atk": 1019,
                "hp": 5738,
                "spd": 98,
                "def": 571,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Baal & Sezan": {
        "code": "c1015",
        "_id": "baal-sezan",
        "name": "Baal & Sezan",
        "moonlight": false,
        "rarity": 5,
        "attribute": "fire",
        "role": "mage",
        "zodiac": "twins",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "B": 0.09,
                "A": 0.135,
                "S": 0.18,
                "SS": 0.225,
                "SSS": 0.27
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1015_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1015_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc101015",
                "id": "exc101015",
                "name": "Cape of Selfish Interest",
                "description": "A cape Baal made for Sezan after she became a doll. Baal is keeping it in his pocket, looking forward to her reaction when she sees it.",
                "unit": "c1015",
                "role": "mage",
                "rarity": 5,
                "stat": {
                    "type": "att_rate",
                    "value": 0.07
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 2,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.1,
                "pow": 0.9,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.8,
                "pow": 1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13525,
                "atk": 960,
                "hp": 3642,
                "spd": 106,
                "def": 551,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17342,
                "atk": 1197,
                "hp": 4572,
                "spd": 106,
                "def": 683,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.3,
                "efr": 0
            }
        }
    },
    "Bad Cat Armin": {
        "code": "c6008",
        "_id": "bad-cat-armin",
        "name": "Bad Cat Armin",
        "moonlight": true,
        "rarity": 4,
        "attribute": "dark",
        "role": "warrior",
        "zodiac": "maiden",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "C": 0.042,
                "B": 0.063,
                "A": 0.084,
                "S": 0.105,
                "SS": 0.126,
                "SSS": 0.147
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c6008_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c6008_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 1,
                "targets": 1,
                "selfHpScaling": 0.06,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.3,
                "pow": 1,
                "targets": 1,
                "selfHpScaling": 0.16,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13440,
                "atk": 897,
                "hp": 4735,
                "spd": 109,
                "def": 505,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17097,
                "atk": 912,
                "hp": 5871,
                "spd": 115,
                "def": 614,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Baiken": {
        "code": "c1093",
        "_id": "baiken",
        "name": "Baiken",
        "moonlight": false,
        "rarity": 5,
        "attribute": "wind",
        "role": "assassin",
        "zodiac": "scorpion",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "B": 0.056,
                "A": 0.084,
                "S": 0.112,
                "SS": 0.14,
                "SSS": 0.168
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1093_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1093_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.2,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.6,
                "pow": 1,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13275,
                "atk": 984,
                "hp": 4735,
                "spd": 113,
                "def": 381,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16901,
                "atk": 1228,
                "hp": 6266,
                "spd": 113,
                "def": 473,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Basar": {
        "code": "c1053",
        "_id": "basar",
        "name": "Basar",
        "moonlight": false,
        "rarity": 5,
        "attribute": "wind",
        "role": "mage",
        "zodiac": "waterbearer",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "B": 0.09,
                "A": 0.135,
                "S": 0.18,
                "SS": 0.225,
                "SSS": 0.27
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1053_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1053_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 1,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 0.9,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 14048,
                "atk": 1056,
                "hp": 3806,
                "spd": 108,
                "def": 576,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.06,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 18032,
                "atk": 1316,
                "hp": 4777,
                "spd": 108,
                "def": 715,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "Bask": {
        "code": "c3006",
        "_id": "bask",
        "name": "Bask",
        "moonlight": false,
        "rarity": 3,
        "attribute": "ice",
        "role": "knight",
        "zodiac": "scorpion",
        "self_devotion": {
            "type": "res",
            "grades": {
                "D": 0.045,
                "C": 0.068,
                "B": 0.09,
                "A": 0.112,
                "S": 0.135,
                "SS": 0.158,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3006_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3006_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 0.9,
                "targets": 1,
                "selfHpScaling": 0.07,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.8,
                "pow": 1,
                "targets": 1,
                "selfHpScaling": 0.12,
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S3 barrier",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.3
                    }
                ]
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12037,
                "atk": 675,
                "hp": 4902,
                "spd": 90,
                "def": 497,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15336,
                "atk": 842,
                "hp": 6463,
                "spd": 90,
                "def": 617,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Batisse": {
        "code": "c3095",
        "_id": "batisse",
        "name": "Batisse",
        "moonlight": true,
        "rarity": 3,
        "attribute": "dark",
        "role": "warrior",
        "zodiac": "bull",
        "self_devotion": {
            "type": "att",
            "grades": {
                "D": 36,
                "C": 54,
                "B": 72,
                "A": 90,
                "S": 108,
                "SS": 126,
                "SSS": 144
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3095_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3095_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.8,
                "pow": 0.95,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "note": "S1 proc",
                "rate": 0.5,
                "pow": 0.95,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 1,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11888,
                "atk": 833,
                "hp": 4060,
                "spd": 104,
                "def": 418,
                "chc": 0.22999999999999998,
                "chd": 1.55,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 14913,
                "atk": 1039,
                "hp": 5097,
                "spd": 104,
                "def": 518,
                "chc": 0.22999999999999998,
                "chd": 1.65,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Beehoo": {
        "code": "c1141",
        "_id": "beehoo",
        "name": "Beehoo",
        "moonlight": false,
        "rarity": 5,
        "attribute": "fire",
        "role": "ranger",
        "zodiac": "goat",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "B": 0.09,
                "A": 0.135,
                "S": 0.18,
                "SS": 0.225,
                "SSS": 0.27
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1141_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1141_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["normal", "miss"],
                "rate": 1,
                "pow": 0.9,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["normal", "miss"],
                "note": "S1 proc",
                "rate": 1.2,
                "pow": 0.9,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13285,
                "atk": 804,
                "hp": 4542,
                "spd": 115,
                "def": 472,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0,
                "bonusMaxAtkPercent": 30,
                "bonusMaxDefPercent": 30,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 0,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17052,
                "atk": 1003,
                "hp": 5704,
                "spd": 115,
                "def": 585,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.3,
                "efr": 0,
                "bonusMaxAtkPercent": 30,
                "bonusMaxDefPercent": 30,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 0,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            }
        }
    },
    "Belian": {
        "code": "c1117",
        "_id": "belian",
        "name": "Belian",
        "moonlight": true,
        "rarity": 5,
        "attribute": "light",
        "role": "knight",
        "zodiac": "ram",
        "self_devotion": {
            "type": "max_hp_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1117_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1117_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.6,
                "pow": 1.05,
                "targets": 3,
                "selfHpScaling": 0.09,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "note": "S1 proc",
                "rate": 0.6,
                "pow": 1.3,
                "targets": 3,
                "selfHpScaling": 0.045,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.6,
                "pow": 1.3,
                "targets": 3,
                "selfHpScaling": 0.12,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13403,
                "atk": 658,
                "hp": 5375,
                "spd": 110,
                "def": 523,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.06,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17219,
                "atk": 821,
                "hp": 6751,
                "spd": 110,
                "def": 648,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "Bellona": {
        "code": "c1071",
        "_id": "bellona",
        "name": "Bellona",
        "moonlight": false,
        "rarity": 5,
        "attribute": "wind",
        "role": "ranger",
        "zodiac": "goat",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1071_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1071_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc107101",
                "id": "exc107101",
                "name": "Citrine Treasure",
                "description": "A beautiful brooch made by the world's greatest artisan using only the highest-grade materials.",
                "unit": "c1071",
                "role": "ranger",
                "rarity": 5,
                "stat": {
                    "type": "acc",
                    "value": 0.08
                },
                "skills": [
                    {
                        "skill": 2,
                        "description": "Dispels one buff each from all enemies when using Butterfly Fan.",
                        "skill_description": "Attacks all enemies by waving a fan, dispelling one buff each. Damage dealt increases with more enemies. Grants the caster immunity for 1 turn after attacking.",
                        "values": [
                            12
                        ],
                        "_id": 0
                    },
                    {
                        "skill": 3,
                        "description": "Increases decrease Defense chance by 20% when using Razorwind Fan.",
                        "skill_description": null,
                        "values": [],
                        "_id": 1
                    },
                    {
                        "skill": 3,
                        "description": "Decreases Combat Readiness of all enemies by 15% when using Razorwind Fan.",
                        "skill_description": "Attacks all enemies by creating a powerful gust of wind, with a {{variable}} chance to decrease Defense for 2 turns, before decreasing Combat Readiness by 15%. Effect chance increases by 20% when Razorwind Fan is triggered by Windbreak Fan.",
                        "values": [
                            18
                        ],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1071.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.95,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.8,
                "pow": 0.95,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.95,
                "pow": 1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13285,
                "atk": 804,
                "hp": 4542,
                "spd": 115,
                "def": 472,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17052,
                "atk": 1003,
                "hp": 5704,
                "spd": 115,
                "def": 585,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.3,
                "efr": 0
            }
        }
    },
    "Benevolent Romann": {
        "code": "c2043",
        "_id": "benevolent-romann",
        "name": "Benevolent Romann",
        "moonlight": true,
        "rarity": 4,
        "attribute": "light",
        "role": "mage",
        "zodiac": "bull",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "C": 0.068,
                "B": 0.102,
                "A": 0.136,
                "S": 0.17,
                "SS": 0.204,
                "SSS": 0.238
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2043_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2043_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.8,
                "pow": 0.9,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "note": "S1 proc",
                "rate": 0.5,
                "pow": 1,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 1.1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13090,
                "atk": 767,
                "hp": 3996,
                "spd": 112,
                "def": 520,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.06,
                "efr": 0.18
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16790,
                "atk": 957,
                "hp": 5016,
                "spd": 112,
                "def": 645,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0.18
            }
        }
    },
    "Benimaru": {
        "code": "c1146",
        "_id": "benimaru",
        "name": "Benimaru",
        "moonlight": false,
        "rarity": 5,
        "attribute": "fire",
        "role": "warrior",
        "zodiac": "archer",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "B": 0.056,
                "A": 0.084,
                "S": 0.112,
                "SS": 0.14,
                "SSS": 0.168
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/benimaruPortrait.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/benimaruPanel.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.2,
                "pow": 1,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 2,
                "pow": 1,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13380,
                "atk": 945,
                "hp": 4414,
                "spd": 119,
                "def": 446,
                "chc": 0.19,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17246,
                "atk": 1177,
                "hp": 5542,
                "spd": 119,
                "def": 553,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Blaze Dingo": {
        "code": "c2021",
        "_id": "blaze-dingo",
        "name": "Blaze Dingo",
        "moonlight": true,
        "rarity": 4,
        "attribute": "light",
        "role": "manauser",
        "zodiac": "archer",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "C": 0.042,
                "B": 0.063,
                "A": 0.084,
                "S": 0.105,
                "SS": 0.126,
                "SSS": 0.147
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2021_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2021_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc202101",
                "id": "exc202101",
                "name": "Hellfire",
                "description": "A gauntlet that maximizes the power of Malicus, making it unsuitable for cooking.",
                "unit": "c2021",
                "role": "manauser",
                "rarity": 5,
                "stat": {
                    "type": "def_rate",
                    "value": 0.07
                },
                "skills": [
                    {
                        "skill": 1,
                        "description": "When a critical hit is made with Punishment, dispels one debuff inflicted on the caster and the ally with the lowest Health.",
                        "skill_description": "Attacks an enemy with a sharp dagger, healing the ally with the lowest Health. A critical hit will dispel one debuff from the caster and the ally with the lowest Health. Amount recovered increases proportional to the damage dealt.",
                        "values": [],
                        "_id": 0
                    },
                    {
                        "skill": 2,
                        "description": "Increases Defense of the caster for 2 turns when using Divine Punishment.",
                        "skill_description": "Attacks all enemies with a giant gauntlet, before increasing Defense of the caster for 2 turns and healing the ally with the lowest Health. A critical hit activates Punishment against a random enemy. Amount recovered increases proportional to the damage dealt.",
                        "values": [
                            2
                        ],
                        "_id": 1
                    },
                    {
                        "skill": 3,
                        "description": "Grants the caster increased Attack (Greater) for 2 turns when using Sacred Power.",
                        "skill_description": "Heals an ally and the caster with sacred power, granting invincibility for 1 turn and increased Attack for 2 turns to the ally, and invincibility for 1 turn and increased Attack (Greater) for 2 turns to the caster. Amount recovered increases proportional to the caster's Attack.",
                        "values": [
                            6,
                            44,
                            1
                        ],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c2021.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 0.95,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.2,
                "pow": 0.95,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 14809,
                "atk": 709,
                "hp": 3321,
                "spd": 109,
                "def": 506,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.12,
                "efr": 0.06
            },
            "lv60SixStarFullyAwakened": {
                "cp": 18881,
                "atk": 885,
                "hp": 4167,
                "spd": 109,
                "def": 627,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.12,
                "efr": 0.18
            }
        }
    },
    "Blood Blade Karin": {
        "code": "c2011",
        "_id": "blood-blade-karin",
        "name": "Blood Blade Karin",
        "moonlight": true,
        "rarity": 4,
        "attribute": "dark",
        "role": "assassin",
        "zodiac": "scorpion",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "C": 0.04,
                "B": 0.06,
                "A": 0.08,
                "S": 0.1,
                "SS": 0.12,
                "SSS": 0.14
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2011_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2011_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.2,
                "pow": 0.95,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12463,
                "atk": 913,
                "hp": 4436,
                "spd": 111,
                "def": 373,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15849,
                "atk": 1138,
                "hp": 5871,
                "spd": 111,
                "def": 462,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Blood Moon Haste": {
        "code": "c2039",
        "_id": "blood-moon-haste",
        "name": "Blood Moon Haste",
        "moonlight": true,
        "rarity": 5,
        "attribute": "dark",
        "role": "manauser",
        "zodiac": "fish",
        "self_devotion": {
            "type": "max_hp_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2039_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2039_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "selfHpScaling": 0.12,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S2 barrier",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.6
                    }
                ]
            },
            "S3": {
                "hitTypes": ["normal", "miss"],
                "rate": 0.3,
                "pow": 1,
                "targets": 1,
                "selfHpScaling": 0.12,
                "penetration": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 16093,
                "atk": 498,
                "hp": 4359,
                "spd": 102,
                "def": 609,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.12
            },
            "lv60SixStarFullyAwakened": {
                "cp": 20659,
                "atk": 621,
                "hp": 5474,
                "spd": 102,
                "def": 802,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.12
            }
        }
    },
    "Bomb Model Kanna": {
        "code": "c1097",
        "_id": "bomb-model-kanna",
        "name": "Bomb Model Kanna",
        "moonlight": false,
        "rarity": 5,
        "attribute": "fire",
        "role": "ranger",
        "zodiac": "twins",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1097_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1097_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc107101",
                "id": "exc107101",
                "name": "Citrine Treasure",
                "description": "A beautiful brooch made by the world's greatest artisan using only the highest-grade materials.",
                "unit": "c1071",
                "role": "ranger",
                "rarity": 5,
                "stat": {
                    "type": "acc",
                    "value": 0.08
                },
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1071.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.75,
                "pow": 1,
                "targets": 2,
                "selfSpdScaling": 0.00075,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13288,
                "atk": 904,
                "hp": 4221,
                "spd": 114,
                "def": 460,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16848,
                "atk": 1182,
                "hp": 5299,
                "spd": 114,
                "def": 571,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "Briar Witch Iseria": {
        "code": "c2024",
        "_id": "briar-witch-iseria",
        "name": "Briar Witch Iseria",
        "moonlight": true,
        "rarity": 5,
        "attribute": "dark",
        "role": "ranger",
        "zodiac": "twins",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2024_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2024_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "note": "with proc damage",
                "rate": 0.85,
                "pow": 1,
                "targets": 1,
                "extraSelfAtkScaling": 0.3,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "note": "with proc damage",
                "rate": 0.95,
                "pow": 1.1,
                "targets": 3,
                "extraSelfAtkScaling": 0.3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13288,
                "atk": 904,
                "hp": 4221,
                "spd": 114,
                "def": 460,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16848,
                "atk": 1182,
                "hp": 5299,
                "spd": 114,
                "def": 571,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "Butcher Corps Inquisitor": {
        "code": "c3001",
        "_id": "butcher-corps-inquisitor",
        "name": "Butcher Corps Inquisitor",
        "moonlight": false,
        "rarity": 3,
        "attribute": "fire",
        "role": "knight",
        "zodiac": "lion",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "D": 0.045,
                "C": 0.068,
                "B": 0.09,
                "A": 0.112,
                "S": 0.135,
                "SS": 0.158,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3001_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3001_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 0.85,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11820,
                "atk": 739,
                "hp": 4092,
                "spd": 95,
                "def": 489,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 14918,
                "atk": 963,
                "hp": 5138,
                "spd": 95,
                "def": 606,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Camilla": {
        "code": "c3124",
        "_id": "camilla",
        "name": "Camilla",
        "moonlight": false,
        "rarity": 3,
        "attribute": "light",
        "role": "warrior",
        "zodiac": "maiden",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "D": 0.028,
                "C": 0.042,
                "B": 0.056,
                "A": 0.07,
                "S": 0.084,
                "SS": 0.098,
                "SSS": 0.112
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3124_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3124_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 0.95,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 16298,
                "atk": 885,
                "hp": 4733,
                "spd": 110,
                "def": 571,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16298,
                "atk": 885,
                "hp": 4733,
                "spd": 110,
                "def": 571,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "Captain Rikoris": {
        "code": "c4034",
        "_id": "captain-rikoris",
        "name": "Captain Rikoris",
        "moonlight": true,
        "rarity": 3,
        "attribute": "light",
        "role": "warrior",
        "zodiac": "scales",
        "self_devotion": {
            "type": "max_hp",
            "grades": {
                "D": 180,
                "C": 270,
                "B": 360,
                "A": 450,
                "S": 540,
                "SS": 630,
                "SSS": 720
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4034_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4034_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11788,
                "atk": 762,
                "hp": 4171,
                "spd": 104,
                "def": 469,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 850,
                "overrideHp": 0,
                "overrideDef": 0,
                "overrideAdditionalCr": 0.1,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0.1,
                "overrideAdditionalRes": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15002,
                "atk": 951,
                "hp": 5517,
                "spd": 104,
                "def": 583,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 1031,
                "overrideHp": 0,
                "overrideDef": 0,
                "overrideAdditionalCr": 0.1,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0.1,
                "overrideAdditionalRes": 0
            }
        }
    },
    "Carmainerose": {
        "code": "c3071",
        "_id": "carmainerose",
        "name": "Carmainerose",
        "moonlight": false,
        "rarity": 3,
        "attribute": "fire",
        "role": "mage",
        "zodiac": "waterbearer",
        "self_devotion": {
            "type": "def",
            "grades": {
                "D": 18,
                "C": 27,
                "B": 36,
                "A": 45,
                "S": 54,
                "SS": 63,
                "SSS": 72
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3071_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3071_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 1.05,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 0.95,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12152,
                "atk": 936,
                "hp": 3090,
                "spd": 101,
                "def": 537,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.06,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15595,
                "atk": 1168,
                "hp": 3877,
                "spd": 101,
                "def": 666,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "Carrot": {
        "code": "c3051",
        "_id": "carrot",
        "name": "Carrot",
        "moonlight": false,
        "rarity": 3,
        "attribute": "fire",
        "role": "mage",
        "zodiac": "archer",
        "self_devotion": {
            "type": "att",
            "grades": {
                "D": 36,
                "C": 54,
                "B": 72,
                "A": 90,
                "S": 108,
                "SS": 126,
                "SSS": 144
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3051_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3051_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.95,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S2 barrier",
                        "rate": 0,
                        "pow": 0,
                        "selfAtkScaling": 0.78
                    }
                ]
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11614,
                "atk": 833,
                "hp": 3128,
                "spd": 110,
                "def": 489,
                "chc": 0.19,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 14932,
                "atk": 1039,
                "hp": 3925,
                "spd": 110,
                "def": 606,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Cartuja": {
        "code": "c1013",
        "_id": "cartuja",
        "name": "Cartuja",
        "moonlight": false,
        "rarity": 4,
        "attribute": "wind",
        "role": "warrior",
        "zodiac": "crab",
        "self_devotion": {
            "type": "max_hp_rate",
            "grades": {
                "C": 0.04,
                "B": 0.06,
                "A": 0.08,
                "S": 0.1,
                "SS": 0.12,
                "SSS": 0.14
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1013_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1013_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.5,
                "pow": 1,
                "targets": 1,
                "selfHpScaling": 0.06,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.6,
                "pow": 1,
                "targets": 3,
                "selfHpScaling": 0.05,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12802,
                "atk": 724,
                "hp": 5283,
                "spd": 103,
                "def": 479,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16316,
                "atk": 903,
                "hp": 6635,
                "spd": 103,
                "def": 630,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Cecilia": {
        "code": "c1002",
        "_id": "cecilia",
        "name": "Cecilia",
        "moonlight": false,
        "rarity": 5,
        "attribute": "fire",
        "role": "knight",
        "zodiac": "ram",
        "self_devotion": {
            "type": "max_hp_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1002_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1002_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc100201",
                "id": "exc100201",
                "name": "Black Winter Spear",
                "description": "\"A requiem for the fallen heroes of Wintenberg.\" These are the words the blacksmith spoke as he offered this weapon to Cecilia.",
                "unit": "c1002",
                "role": "knight",
                "rarity": 5,
                "stat": {
                    "type": "acc",
                    "value": 0.08
                },
                "skills": [
                    {
                        "skill": 1,
                        "description": "Increases decrease Defense chance by 10% when using Deliverance.",
                        "skill_description": null,
                        "values": [],
                        "_id": 0
                    },
                    {
                        "skill": 2,
                        "description": "Dispels one buff from all enemies after using Steel Cloudburst.",
                        "skill_description": "Attacks all enemies with a magical spear, with a {{variable}} chance to decrease Attack for 2 turns and a 100% chance to dispel one buff. Damage dealt increases proportional to the caster's max Health.",
                        "values": [],
                        "_id": 1
                    },
                    {
                        "skill": 2,
                        "description": "Makes all enemies unhealable for 2 turns when using Steel Cloudburst.",
                        "skill_description": "Attacks all enemies with a magical spear, with a {{variable}} chance to decrease Attack for 2 turns and a 100% chance to make them unhealable for 2 turns. Damage dealt increases proportional to the caster's max Health.",
                        "values": [
                            17,
                            27
                        ],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1002.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 1,
                "targets": 1,
                "selfHpScaling": 0.07,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.4,
                "pow": 1,
                "targets": 3,
                "selfHpScaling": 0.06,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.6,
                "pow": 1.05,
                "targets": 3,
                "selfHpScaling": 0.12,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13403,
                "atk": 658,
                "hp": 5375,
                "spd": 110,
                "def": 523,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.06,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17219,
                "atk": 821,
                "hp": 6751,
                "spd": 110,
                "def": 648,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "Celeste": {
        "code": "c3064",
        "_id": "celeste",
        "name": "Celeste",
        "moonlight": true,
        "rarity": 3,
        "attribute": "light",
        "role": "ranger",
        "zodiac": "archer",
        "self_devotion": {
            "type": "att",
            "grades": {
                "D": 36,
                "C": 54,
                "B": 72,
                "A": 90,
                "S": 108,
                "SS": 126,
                "SSS": 144
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3064_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3064_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.9,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11234,
                "atk": 744,
                "hp": 3771,
                "spd": 124,
                "def": 398,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 14170,
                "atk": 929,
                "hp": 4733,
                "spd": 128,
                "def": 494,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Celestial Mercedes": {
        "code": "c2005",
        "_id": "celestial-mercedes",
        "name": "Celestial Mercedes",
        "moonlight": true,
        "rarity": 4,
        "attribute": "dark",
        "role": "mage",
        "zodiac": "scorpion",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "C": 0.042,
                "B": 0.063,
                "A": 0.084,
                "S": 0.105,
                "SS": 0.126,
                "SSS": 0.147
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2005_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2005_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 0.9,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.2,
                "pow": 0.8,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12684,
                "atk": 906,
                "hp": 3578,
                "spd": 101,
                "def": 506,
                "chc": 0.27,
                "chd": 1.6,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16087,
                "atk": 1187,
                "hp": 4491,
                "spd": 101,
                "def": 627,
                "chc": 0.27,
                "chd": 1.6,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Celine": {
        "code": "c1103",
        "_id": "celine",
        "name": "Celine",
        "moonlight": false,
        "rarity": 5,
        "attribute": "wind",
        "role": "assassin",
        "zodiac": "scorpion",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1103_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1103_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc110301",
                "id": "exc110301",
                "name": "Reingar PSC Armband",
                "description": "An armband Celine wore when she was a part of the Reingar Public Security Club. She keeps it with her to help remind her of those days.",
                "unit": "c1103",
                "role": "assassin",
                "rarity": 5,
                "stat": {
                    "type": "cri",
                    "value": 0.06
                },
                "skills": [
                    {
                        "skill": 2,
                        "description": "Grants the caster stealth for 2 turns after using Blink.",
                        "skill_description": "Attacks a random enemy with Blink when an enemy uses a non-attack skill. Can be activated once every 2 turns.\nBlink: Cuts the enemy in the blink of an eye, before granting the caster stealth for 2 turns. When the enemy is not an Elite or Boss monster, damage sharing effects are ignored.",
                        "values": [
                            15
                        ],
                        "_id": 0
                    },
                    {
                        "skill": 2,
                        "description": "When using Blink, damage dealt is increased by 10% and attacks the enemy with the highest Attack.",
                        "skill_description": "Attacks the enemy with the highest Attack with Blink when an enemy uses a non-attack skill. Can be activated once every 2 turns.\nBlink: Cuts the enemy in the blink of an eye. When the enemy is not an Elite or Boss monster, damage sharing effects are ignored.",
                        "values": [],
                        "_id": 1
                    },
                    {
                        "skill": 3,
                        "description": "Damage dealt is increased by 10% when using Thunderclap.",
                        "skill_description": null,
                        "values": [],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1103.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.4,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.8,
                "pow": 1,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13275,
                "atk": 984,
                "hp": 4735,
                "spd": 113,
                "def": 381,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16901,
                "atk": 1228,
                "hp": 6266,
                "spd": 113,
                "def": 473,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Cerise": {
        "code": "c1081",
        "_id": "cerise",
        "name": "Cerise",
        "moonlight": false,
        "rarity": 5,
        "attribute": "ice",
        "role": "ranger",
        "zodiac": "waterbearer",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "B": 0.09,
                "A": 0.135,
                "S": 0.18,
                "SS": 0.225,
                "SSS": 0.27
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1081_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1081_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1.1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12803,
                "atk": 778,
                "hp": 4221,
                "spd": 122,
                "def": 486,
                "chc": 0.19,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16445,
                "atk": 970,
                "hp": 5299,
                "spd": 122,
                "def": 603,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Cermia": {
        "code": "c1079",
        "_id": "cermia",
        "name": "Cermia",
        "moonlight": false,
        "rarity": 5,
        "attribute": "fire",
        "role": "warrior",
        "zodiac": "lion",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1079_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1079_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc107901",
                "id": "exc107901",
                "name": "Lucky Dice",
                "description": "Dice used on the day Cermia won a once-in-a-lifetime jackpot. She holds onto them in hopes that they'll bring her that luck again one day.",
                "unit": "c1079",
                "role": "warrior",
                "rarity": 5,
                "stat": {
                    "type": "att_rate",
                    "value": 0.07
                },
                "skills": [
                    {
                        "skill": 1,
                        "description": "25% chance to grant an extra attack with the same skill when using Playing with Fire.",
                        "skill_description": "Attacks with a flaming sword, with a {{variable}} chance to make the target unhealable for 1 turn. Has a 25% chance to grant the caster an extra attack with the same skill.",
                        "values": [
                            27
                        ],
                        "_id": 0
                    },
                    {
                        "skill": 2,
                        "description": "Grants a barrier to the caster for 2 turns when using Hot Streak!. Barrier strength increases proportional to the caster’s Attack.",
                        "skill_description": "Shoots fire, granting the caster increased Attack (Greater) and a barrier for 2 turns, resetting the cooldown of All-In!, and granting an extra turn. Barrier strength is proportional to the caster's Attack.",
                        "values": [
                            44,
                            5,
                            35
                        ],
                        "_id": 1
                    },
                    {
                        "skill": 3,
                        "description": "Decreases skill cooldown of Hot Streak! by 2 turns when an enemy is defeated by All-In!.",
                        "skill_description": "Attacks with a blazing inferno, penetrating Defense by 50%. Decreases skill cooldown of Hot Streak! by 2 turns when an enemy is defeated.",
                        "values": [
                            34
                        ],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1079.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.2,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.15,
                "pow": 0.9,
                "penetration": 0.5,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13727,
                "atk": 1040,
                "hp": 4414,
                "spd": 105,
                "def": 472,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17416,
                "atk": 1359,
                "hp": 5542,
                "spd": 105,
                "def": 585,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Challenger Dominiel": {
        "code": "c2037",
        "_id": "challenger-dominiel",
        "name": "Challenger Dominiel",
        "moonlight": true,
        "rarity": 4,
        "attribute": "dark",
        "role": "mage",
        "zodiac": "scorpion",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "C": 0.042,
                "B": 0.063,
                "A": 0.084,
                "S": 0.105,
                "SS": 0.126,
                "SSS": 0.147
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2037_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2037_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.9,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12684,
                "atk": 906,
                "hp": 3578,
                "spd": 101,
                "def": 506,
                "chc": 0.27,
                "chd": 1.6,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16087,
                "atk": 1187,
                "hp": 4491,
                "spd": 101,
                "def": 627,
                "chc": 0.27,
                "chd": 1.6,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Champion Zerato": {
        "code": "c2010",
        "_id": "champion-zerato",
        "name": "Champion Zerato",
        "moonlight": true,
        "rarity": 4,
        "attribute": "dark",
        "role": "mage",
        "zodiac": "ram",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "C": 0.068,
                "B": 0.102,
                "A": 0.136,
                "S": 0.17,
                "SS": 0.204,
                "SSS": 0.238
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2010_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2010_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.95,
                "targets": 2,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13209,
                "atk": 929,
                "hp": 3771,
                "spd": 104,
                "def": 506,
                "chc": 0.19,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16974,
                "atk": 1159,
                "hp": 4733,
                "spd": 104,
                "def": 627,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "Chaos Inquisitor": {
        "code": "c4001",
        "_id": "chaos-inquisitor",
        "name": "Chaos Inquisitor",
        "moonlight": false,
        "rarity": 3,
        "attribute": "fire",
        "role": "knight",
        "zodiac": "lion",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "D": 0.045,
                "C": 0.068,
                "B": 0.09,
                "A": 0.112,
                "S": 0.135,
                "SS": 0.158,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4001_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4001_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 0.85,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11820,
                "atk": 739,
                "hp": 4092,
                "spd": 95,
                "def": 489,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 4467,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0.25,
                "overrideAdditionalRes": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 14918,
                "atk": 963,
                "hp": 5138,
                "spd": 95,
                "def": 606,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 5609,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0.25,
                "overrideAdditionalRes": 0
            }
        }
    },
    "Chaos Sect Axe": {
        "code": "c4025",
        "_id": "chaos-sect-axe",
        "name": "Chaos Sect Axe",
        "moonlight": true,
        "rarity": 3,
        "attribute": "dark",
        "role": "warrior",
        "zodiac": "lion",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "D": 0.028,
                "C": 0.042,
                "B": 0.056,
                "A": 0.07,
                "S": 0.084,
                "SS": 0.098,
                "SSS": 0.112
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4025_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4025_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 0.95,
                "targets": 1,
                "selfHpScaling": 0.06,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 0.95,
                "targets": 3,
                "selfHpScaling": 0.08,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.9,
                "targets": 1,
                "selfHpScaling": 0.2,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11978,
                "atk": 878,
                "hp": 3899,
                "spd": 101,
                "def": 438,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 4788,
                "overrideDef": 503,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15164,
                "atk": 1144,
                "hp": 4895,
                "spd": 101,
                "def": 543,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 6013,
                "overrideDef": 624,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            }
        }
    },
    "Charles": {
        "code": "c1027",
        "_id": "charles",
        "name": "Charles",
        "moonlight": false,
        "rarity": 5,
        "attribute": "wind",
        "role": "knight",
        "zodiac": "twins",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "B": 0.056,
                "A": 0.084,
                "S": 0.112,
                "SS": 0.14,
                "SSS": 0.168
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1027_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1027_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc102701",
                "id": "exc102701",
                "name": "Justice's Mask",
                "description": "A pauldron with the face of a stern judge, symbolizing the firm resolve not to allow emotion to get in the way of duty.",
                "unit": "c1027",
                "role": "knight",
                "rarity": 5,
                "stat": {
                    "type": "att_rate",
                    "value": 0.07
                },
                "skills": [
                    {
                        "skill": 1,
                        "description": "Chance of activating Smash increases by 10% when using Slash.",
                        "skill_description": "Attacks with a giant sword, with a {{variable}} chance to decrease Attack for 1 turn. After using this skill, has a 35% chance to activate Smash as an extra attack. Chance to activate Smash is doubled when the enemy is buffed.",
                        "values": [
                            17
                        ],
                        "_id": 0
                    },
                    {
                        "skill": 1,
                        "description": "Chance of decreasing Attack increases by 15%, and damage dealt increases by 10% when using Slash.",
                        "skill_description": null,
                        "values": [],
                        "_id": 1
                    },
                    {
                        "skill": 3,
                        "description": "Dispels all debuffs from the caster before the skill effect when using Faithful Strike.",
                        "skill_description": "Dispels all debuffs from the caster and attacks all enemies with a swordstorm, before increasing Attack of all allies for 2 turns. Additionally increases Defense of the caster for 2 turns. When there are three or fewer enemies, damage dealt increases as enemies become fewer.",
                        "values": [
                            1,
                            2
                        ],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1027.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.2,
                "pow": 1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13243,
                "atk": 767,
                "hp": 4896,
                "spd": 109,
                "def": 511,
                "chc": 0.19,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16949,
                "atk": 957,
                "hp": 6148,
                "spd": 109,
                "def": 634,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Charlotte": {
        "code": "c1009",
        "_id": "charlotte",
        "name": "Charlotte",
        "moonlight": false,
        "rarity": 5,
        "attribute": "fire",
        "role": "knight",
        "zodiac": "lion",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1009_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1009_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc101701",
                "id": "exc101701",
                "name": "Untainted Heart",
                "description": "A staff decorated with a bright red orb that encapsulates both the spirit of charity, and the unwavering determination of Achates.",
                "unit": "c1017",
                "role": "manauser",
                "rarity": 5,
                "stat": {
                    "type": "max_hp_rate",
                    "value": 0.07
                },
                "skills": [
                    {
                        "skill": 1,
                        "description": "Increases the chance to decrease Attack when using Magic Design by 25%.",
                        "skill_description": null,
                        "values": [],
                        "_id": 0
                    },
                    {
                        "skill": 2,
                        "description": "Amount recovered is increased by 67% when using Rapid Cure.",
                        "skill_description": null,
                        "values": [],
                        "_id": 1
                    },
                    {
                        "skill": 3,
                        "description": "Increases Effect Resistance of the caster for 2 turns when using Curing Prayer.",
                        "skill_description": "Dispels debuffs from all allies before healing them. Increases Effect Resistance of the caster for 2 turns. Healing increases proportional to the caster's max Health.",
                        "values": [
                            57
                        ],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1017.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.4,
                "pow": 0.9,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13494,
                "atk": 869,
                "hp": 4639,
                "spd": 99,
                "def": 534,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17057,
                "atk": 1134,
                "hp": 5825,
                "spd": 99,
                "def": 662,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Chloe": {
        "code": "c1049",
        "_id": "chloe",
        "name": "Chloe",
        "moonlight": false,
        "rarity": 5,
        "attribute": "ice",
        "role": "warrior",
        "zodiac": "archer",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1049_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1049_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc104901",
                "id": "exc104901",
                "name": "Prototype Crown",
                "description": "Equipment that contains a set of emergency commands and looks like a tiny crown.",
                "unit": "c1049",
                "role": "warrior",
                "rarity": 5,
                "stat": {
                    "type": "att_rate",
                    "value": 0.07
                },
                "skills": [
                    {
                        "skill": 2,
                        "description": "50% chance to grant the caster an extra turn when using Magic Bolt.",
                        "skill_description": "Inflicts magic nail for 3 turns, before a 50% chance to grant the caster an extra turn. Magic nail cannot be resisted.",
                        "values": [
                            30,
                            35
                        ],
                        "_id": 0
                    },
                    {
                        "skill": 2,
                        "description": "Dispels all buffs from the enemy when using Magic Bolt. (This effect is applied before inflicting magic nail.)",
                        "skill_description": "Inflicts magic nail for 3 turns after dispelling all buffs from the enemy. This effect cannot be resisted.",
                        "values": [
                            30
                        ],
                        "_id": 1
                    },
                    {
                        "skill": 3,
                        "description": "Decreases the enemy's Defense for 2 turns when using Hyper Strike.",
                        "skill_description": "Soars into the air and attacks the enemy, stunning for 1 turn, before  decreasing Defense for 2 turns. Damage dealt is increased when the enemy is inflicted with magic nail.",
                        "values": [
                            20,
                            18,
                            30
                        ],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1049.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.9,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.2,
                "pow": 0.9,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.7,
                "pow": 0.8,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13380,
                "atk": 945,
                "hp": 4414,
                "spd": 119,
                "def": 446,
                "chc": 0.19,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17246,
                "atk": 1177,
                "hp": 5542,
                "spd": 119,
                "def": 553,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Choux": {
        "code": "c1101",
        "_id": "choux",
        "name": "Choux",
        "moonlight": false,
        "rarity": 5,
        "attribute": "ice",
        "role": "warrior",
        "zodiac": "goat",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "B": 0.056,
                "A": 0.084,
                "S": 0.112,
                "SS": 0.14,
                "SSS": 0.168
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1101_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1101_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc100301",
                "id": "exc100301",
                "name": "Valkyrie Wing",
                "description": "A mysterious circlet that symbolizes strength and beauty, and is the source of Rose's Fighting Spirit.",
                "unit": "c1003",
                "role": "knight",
                "rarity": 5,
                "stat": {
                    "type": "speed",
                    "value": 5
                },
                "skills": [
                    {
                        "skill": 1,
                        "description": "Activates each effect regardless of current Health when using Sequential Cutter.",
                        "skill_description": "Attacks with a sword, with a {{variable}} chance to provoke for 1 turn, before increasing Defense of the caster for 1 turn. Damage dealt increases proportional to the caster's Defense.",
                        "values": [
                            25,
                            2
                        ],
                        "_id": 0
                    },
                    {
                        "skill": 2,
                        "description": "Applies the same effect to the caster when using Shield of Light.",
                        "skill_description": "Covers an ally and the caster with the Shield of Light, dispelling two debuffs and granting a barrier for 2 turns before increasing Combat Readiness by {{variable}}. Barrier strength is proportional to the caster's Defense.",
                        "values": [
                            5
                        ],
                        "_id": 1
                    },
                    {
                        "skill": 3,
                        "description": "Decreases skill cooldown of Goddess of Victory by 1 turn.",
                        "skill_description": null,
                        "values": [],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1003.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.5,
                "pow": 1,
                "targets": 1,
                "selfHpScaling": 0.1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.5,
                "pow": 1,
                "targets": 1,
                "selfHpScaling": 0.11,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.5,
                "pow": 1,
                "targets": 3,
                "selfHpScaling": 0.15,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13730,
                "atk": 775,
                "hp": 5551,
                "spd": 102,
                "def": 530,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17484,
                "atk": 966,
                "hp": 7323,
                "spd": 102,
                "def": 657,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Christy": {
        "code": "c3123",
        "_id": "christy",
        "name": "Christy",
        "moonlight": false,
        "rarity": 3,
        "attribute": "wind",
        "role": "knight",
        "zodiac": "goat",
        "self_devotion": {
            "type": "res",
            "grades": {
                "D": 0.045,
                "C": 0.068,
                "B": 0.09,
                "A": 0.112,
                "S": 0.135,
                "SS": 0.158,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3123_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3123_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S3 heal",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.12
                    }
                ]
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12320,
                "atk": 534,
                "hp": 4542,
                "spd": 90,
                "def": 603,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.06
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15835,
                "atk": 667,
                "hp": 5784,
                "spd": 90,
                "def": 749,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.18
            }
        }
    },
    "Church of Ilryos Axe": {
        "code": "c3025",
        "_id": "church-of-ilryos-axe",
        "name": "Church of Ilryos Axe",
        "moonlight": true,
        "rarity": 3,
        "attribute": "dark",
        "role": "warrior",
        "zodiac": "lion",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "D": 0.028,
                "C": 0.042,
                "B": 0.056,
                "A": 0.07,
                "S": 0.084,
                "SS": 0.098,
                "SSS": 0.112
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3025_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3025_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 0.95,
                "targets": 1,
                "selfHpScaling": 0.06,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 0.95,
                "targets": 3,
                "selfHpScaling": 0.08,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.9,
                "targets": 1,
                "selfHpScaling": 0.2,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11978,
                "atk": 878,
                "hp": 3899,
                "spd": 101,
                "def": 438,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15164,
                "atk": 1144,
                "hp": 4895,
                "spd": 101,
                "def": 543,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Cidd": {
        "code": "c1014",
        "_id": "cidd",
        "name": "Cidd",
        "moonlight": false,
        "rarity": 4,
        "attribute": "wind",
        "role": "assassin",
        "zodiac": "ram",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "C": 0.042,
                "B": 0.063,
                "A": 0.084,
                "S": 0.105,
                "SS": 0.126,
                "SSS": 0.147
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1014_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1014_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc101014",
                "id": "exc101014",
                "name": "Restrained Ferality",
                "description": "A necklace given to Cidd by the Wild Dog Company after he accomplished his first mission. Apparently, Jenua pick the design himself.",
                "unit": "c1014",
                "role": "assassin",
                "rarity": 5,
                "stat": {
                    "type": "acc",
                    "value": 0.08
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 0.95,
                "targets": 1,
                "selfSpdScaling": 0.00075,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.6,
                "pow": 1,
                "targets": 1,
                "selfSpdScaling": 0.0021,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12112,
                "atk": 825,
                "hp": 4060,
                "spd": 122,
                "def": 381,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15297,
                "atk": 1029,
                "hp": 5097,
                "spd": 126,
                "def": 473,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Clarissa": {
        "code": "c1028",
        "_id": "clarissa",
        "name": "Clarissa",
        "moonlight": false,
        "rarity": 4,
        "attribute": "ice",
        "role": "warrior",
        "zodiac": "lion",
        "self_devotion": {
            "type": "coop",
            "grades": {
                "C": 0.014,
                "B": 0.021,
                "A": 0.028,
                "S": 0.035,
                "SS": 0.042,
                "SSS": 0.049
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1028_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1028_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc101601",
                "id": "exc101601",
                "name": "Azure Dragon's Spirit",
                "description": "A ribbon with special powers that allows the wearer to harness their innate dragon powers.",
                "unit": "c1016",
                "role": "warrior",
                "rarity": 5,
                "stat": {
                    "type": "att_rate",
                    "value": 0.07
                },
                "skills": [
                    {
                        "skill": 1,
                        "description": "35% chance to extend the caster's buff durations by 1 turn when using Double Slash.",
                        "skill_description": "Attacks by swinging their weapon, with a {{variable}} chance to decrease Defense for 2 turns, before a 35% chance to extend the caster's buff durations by 1 turn.",
                        "values": [
                            18
                        ],
                        "_id": 0
                    },
                    {
                        "skill": 1,
                        "description": "Damage dealt is increased by 30% when using Double Slash.",
                        "skill_description": null,
                        "values": [],
                        "_id": 1
                    },
                    {
                        "skill": 2,
                        "description": "Increases chance of inflicting silence with Dragon's Roar by 15%.",
                        "skill_description": null,
                        "values": [],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1016.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "note": "S1 proc",
                "rate": 0.7,
                "pow": 1,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.8,
                "pow": 1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12841,
                "atk": 958,
                "hp": 4157,
                "spd": 103,
                "def": 455,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16283,
                "atk": 1252,
                "hp": 5219,
                "spd": 103,
                "def": 564,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Closer Charles": {
        "code": "c2027",
        "_id": "closer-charles",
        "name": "Closer Charles",
        "moonlight": true,
        "rarity": 5,
        "attribute": "dark",
        "role": "assassin",
        "zodiac": "scorpion",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "B": 0.056,
                "A": 0.084,
                "S": 0.112,
                "SS": 0.14,
                "SSS": 0.168
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2027_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2027_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "note": "S1 proc",
                "rate": 1.2,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13275,
                "atk": 984,
                "hp": 4735,
                "spd": 113,
                "def": 381,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16901,
                "atk": 1228,
                "hp": 6266,
                "spd": 113,
                "def": 473,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Coli": {
        "code": "c1033",
        "_id": "coli",
        "name": "Coli",
        "moonlight": false,
        "rarity": 4,
        "attribute": "ice",
        "role": "assassin",
        "zodiac": "scorpion",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "C": 0.04,
                "B": 0.06,
                "A": 0.08,
                "S": 0.1,
                "SS": 0.12,
                "SSS": 0.14
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1033_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1033_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.8,
                "pow": 0.9,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.8,
                "pow": 0.9,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.3,
                "pow": 0.9,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12463,
                "atk": 913,
                "hp": 4436,
                "spd": 111,
                "def": 373,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15849,
                "atk": 1138,
                "hp": 5871,
                "spd": 111,
                "def": 462,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Commander Lorina": {
        "code": "c4035",
        "_id": "commander-lorina",
        "name": "Commander Lorina",
        "moonlight": true,
        "rarity": 3,
        "attribute": "dark",
        "role": "warrior",
        "zodiac": "lion",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "D": 0.028,
                "C": 0.042,
                "B": 0.056,
                "A": 0.07,
                "S": 0.084,
                "SS": 0.098,
                "SSS": 0.112
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4035_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4035_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.9,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 0.95,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11978,
                "atk": 878,
                "hp": 3899,
                "spd": 101,
                "def": 438,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 891,
                "overrideHp": 0,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0.02,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15164,
                "atk": 1144,
                "hp": 4895,
                "spd": 101,
                "def": 543,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 1161,
                "overrideHp": 0,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0.02,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            }
        }
    },
    "Commander Pavel": {
        "code": "c2080",
        "_id": "commander-pavel",
        "name": "Commander Pavel",
        "moonlight": true,
        "rarity": 5,
        "attribute": "light",
        "role": "ranger",
        "zodiac": "bull",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2080_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2080_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.75,
                "pow": 1,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "note": "70% penetration",
                "rate": 0.75,
                "pow": 1,
                "penetration": 0.7,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 16394,
                "atk": 1016,
                "hp": 4092,
                "spd": 109,
                "def": 469,
                "chc": 0.23,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 20727,
                "atk": 1327,
                "hp": 5138,
                "spd": 109,
                "def": 582,
                "chc": 0.23,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Conqueror Lilias": {
        "code": "c2089",
        "_id": "conqueror-lilias",
        "name": "Conqueror Lilias",
        "moonlight": true,
        "rarity": 5,
        "attribute": "light",
        "role": "warrior",
        "zodiac": "waterbearer",
        "self_devotion": {
            "type": "max_hp_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2089_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2089_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.2,
                "pow": 0.95,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 17097,
                "atk": 885,
                "hp": 6149,
                "spd": 121,
                "def": 613,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17097,
                "atk": 885,
                "hp": 6149,
                "spd": 121,
                "def": 613,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "Corvus": {
        "code": "c1012",
        "_id": "corvus",
        "name": "Corvus",
        "moonlight": false,
        "rarity": 4,
        "attribute": "fire",
        "role": "warrior",
        "zodiac": "crab",
        "self_devotion": {
            "type": "res",
            "grades": {
                "C": 0.068,
                "B": 0.102,
                "A": 0.136,
                "S": 0.17,
                "SS": 0.204,
                "SSS": 0.238
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1012_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1012_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 1,
                "targets": 1,
                "selfDefScaling": 0.9,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.3,
                "pow": 0.9,
                "targets": 3,
                "selfDefScaling": 0.7,
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S3 heal",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.5
                    }
                ]
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12802,
                "atk": 724,
                "hp": 5283,
                "spd": 103,
                "def": 479,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16316,
                "atk": 903,
                "hp": 6635,
                "spd": 103,
                "def": 630,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Crescent Moon Rin": {
        "code": "c2054",
        "_id": "crescent-moon-rin",
        "name": "Crescent Moon Rin",
        "moonlight": true,
        "rarity": 4,
        "attribute": "dark",
        "role": "assassin",
        "zodiac": "bull",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "C": 0.068,
                "B": 0.102,
                "A": 0.136,
                "S": 0.17,
                "SS": 0.204,
                "SSS": 0.238
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2054_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2054_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.6,
                "pow": 1,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11777,
                "atk": 787,
                "hp": 4221,
                "spd": 126,
                "def": 378,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 14934,
                "atk": 1027,
                "hp": 5299,
                "spd": 126,
                "def": 469,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Crimson Armin": {
        "code": "c2008",
        "_id": "crimson-armin",
        "name": "Crimson Armin",
        "moonlight": true,
        "rarity": 4,
        "attribute": "light",
        "role": "knight",
        "zodiac": "scales",
        "self_devotion": {
            "type": "def_rate",
            "grades": {
                "C": 0.04,
                "B": 0.06,
                "A": 0.08,
                "S": 0.1,
                "SS": 0.12,
                "SSS": 0.14
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2008_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2008_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.8,
                "pow": 1,
                "targets": 1,
                "selfDefScaling": 0.6,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12975,
                "atk": 658,
                "hp": 4991,
                "spd": 97,
                "def": 535,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.12
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16569,
                "atk": 821,
                "hp": 6266,
                "spd": 97,
                "def": 703,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.12
            }
        }
    },
    "Crozet": {
        "code": "c1036",
        "_id": "crozet",
        "name": "Crozet",
        "moonlight": false,
        "rarity": 4,
        "attribute": "ice",
        "role": "knight",
        "zodiac": "crab",
        "self_devotion": {
            "type": "def_rate",
            "grades": {
                "C": 0.04,
                "B": 0.06,
                "A": 0.08,
                "S": 0.1,
                "SS": 0.12,
                "SSS": 0.14
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1036_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1036_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.6,
                "pow": 1.05,
                "targets": 1,
                "selfDefScaling": 0.7,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S2 barrier",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.15
                    }
                ]
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.5,
                "pow": 0.95,
                "targets": 3,
                "selfDefScaling": 0.6,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12936,
                "atk": 593,
                "hp": 5469,
                "spd": 93,
                "def": 558,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16523,
                "atk": 739,
                "hp": 6868,
                "spd": 93,
                "def": 733,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Dark Corvus": {
        "code": "c2012",
        "_id": "dark-corvus",
        "name": "Dark Corvus",
        "moonlight": true,
        "rarity": 5,
        "attribute": "dark",
        "role": "warrior",
        "zodiac": "goat",
        "self_devotion": {
            "type": "max_hp_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2012_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2012_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 1,
                "targets": 1,
                "selfHpScaling": 0.07,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["normal", "miss"],
                "rate": 0,
                "pow": 0.95,
                "targets": 1,
                "selfHpScaling": 0.25,
                "penetration": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13730,
                "atk": 775,
                "hp": 5551,
                "spd": 102,
                "def": 530,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17484,
                "atk": 966,
                "hp": 7323,
                "spd": 102,
                "def": 657,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Death Dealer Ray": {
        "code": "c2090",
        "_id": "death-dealer-ray",
        "name": "Death Dealer Ray",
        "moonlight": true,
        "rarity": 5,
        "attribute": "dark",
        "role": "manauser",
        "zodiac": "crab",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "B": 0.09,
                "A": 0.135,
                "S": 0.18,
                "SS": 0.225,
                "SSS": 0.27
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2090_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2090_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 16072,
                "atk": 498,
                "hp": 4578,
                "spd": 100,
                "def": 625,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 20427,
                "atk": 621,
                "hp": 6034,
                "spd": 100,
                "def": 775,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Desert Jewel Basar": {
        "code": "c2053",
        "_id": "desert-jewel-basar",
        "name": "Desert Jewel Basar",
        "moonlight": true,
        "rarity": 5,
        "attribute": "light",
        "role": "manauser",
        "zodiac": "archer",
        "self_devotion": {
            "type": "res",
            "grades": {
                "B": 0.09,
                "A": 0.135,
                "S": 0.18,
                "SS": 0.225,
                "SSS": 0.27
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2053_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2053_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.2,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 15700,
                "atk": 767,
                "hp": 3481,
                "spd": 111,
                "def": 525,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.12,
                "efr": 0.06
            },
            "lv60SixStarFullyAwakened": {
                "cp": 20041,
                "atk": 957,
                "hp": 4370,
                "spd": 111,
                "def": 652,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.12,
                "efr": 0.18
            }
        }
    },
    "Designer Lilibet": {
        "code": "c2095",
        "manual": true,
        "_id": "designer-lilibet",
        "name": "Designer Lilibet",
        "moonlight": true,
        "rarity": 5,
        "attribute": "dark",
        "role": "warrior",
        "zodiac": "crab",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "B": 0.056,
                "A": 0.084,
                "S": 0.112,
                "SS": 0.14,
                "SSS": 0.168
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2095_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2095_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.6,
                "pow": 1,
                "targets": 1,
                "selfDefScaling": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.6,
                "pow": 1,
                "targets": 3,
                "selfDefScaling": 1.15,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13640,
                "atk": 782,
                "hp": 5616,
                "spd": 106,
                "def": 497,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17360,
                "atk": 975,
                "hp": 7054,
                "spd": 106,
                "def": 652,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Destina": {
        "code": "c2022",
        "_id": "destina",
        "name": "Destina",
        "moonlight": false,
        "rarity": 5,
        "attribute": "wind",
        "role": "manauser",
        "zodiac": "crab",
        "self_devotion": {
            "type": "res",
            "grades": {
                "B": 0.09,
                "A": 0.135,
                "S": 0.18,
                "SS": 0.225,
                "SSS": 0.27
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2022_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2022_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc202201",
                "id": "exc202201",
                "name": "Ruele's Sad Promise",
                "description": "A mysterious concoction of life created by combining the laws of light and nature and the love of a noble soul.",
                "unit": "c2022",
                "role": "manauser",
                "rarity": 5,
                "stat": {
                    "type": "res",
                    "value": 0.08
                },
                "skills": [
                    {
                        "skill": 1,
                        "description": "Dispels one debuff from the ally with the lowest Health when using Key to an Oath.",
                        "skill_description": "Attacks the enemy with a staff and heals the ally with the lowest Health, before dispelling one debuff. Healing increases proportional to the target's max Health.",
                        "values": [],
                        "_id": 0
                    },
                    {
                        "skill": 2,
                        "description": "Has a 30% chance to reset skill cooldown of Regen when using Regen.",
                        "skill_description": "Blesses an ally, recovering their Health and increasing their Combat Readiness by 50%. Healing increases proportional to the caster's max Health. When this skill is used, has a 30% chance to reset this skill's cooldown.",
                        "values": [],
                        "_id": 1
                    },
                    {
                        "skill": 3,
                        "description": "Decreases skill cooldown of Destina's Grace by 1 turn.",
                        "skill_description": null,
                        "values": [],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c2022.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S2 heal",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.16
                    }
                ]
            },
            "S3": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S3 heal",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.3
                    }
                ]
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 16072,
                "atk": 498,
                "hp": 4578,
                "spd": 100,
                "def": 625,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 20427,
                "atk": 621,
                "hp": 6034,
                "spd": 100,
                "def": 775,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Diene": {
        "code": "c1076",
        "_id": "diene",
        "name": "Diene",
        "moonlight": false,
        "rarity": 5,
        "attribute": "ice",
        "role": "manauser",
        "zodiac": "twins",
        "self_devotion": {
            "type": "max_hp_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1076_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1076_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc107601",
                "id": "exc107601",
                "name": "Halted Pocketwatch",
                "description": "Diene's pocketwatch where she keeps a dried forget-me-not inside. The watch's hands are halted at the exact time of Diene's most beautiful moment of her life.",
                "unit": "c1076",
                "role": "manauser",
                "rarity": 5,
                "stat": {
                    "type": "speed",
                    "value": 5
                },
                "skills": [
                    {
                        "skill": 1,
                        "description": "Increase Combat Readiness of the ally with the highest Attack by 5% when using Light of Judgment. When the caster has a buff, the effect is doubled.",
                        "skill_description": null,
                        "values": [],
                        "_id": 0
                    },
                    {
                        "skill": 2,
                        "description": "Blessings of the Goddess's barrier strength is increased by 10%.",
                        "skill_description": null,
                        "values": [],
                        "_id": 1
                    },
                    {
                        "skill": 2,
                        "description": "Increases Combat Readiness of all allies by 15% when using Blessings of the Goddess",
                        "skill_description": null,
                        "values": [],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1003.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.95,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S2 barrier",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.2
                    }
                ]
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 15706,
                "atk": 520,
                "hp": 3972,
                "spd": 105,
                "def": 559,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.3
            },
            "lv60SixStarFullyAwakened": {
                "cp": 19986,
                "atk": 649,
                "hp": 5254,
                "spd": 105,
                "def": 694,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.3
            }
        }
    },
    "Dingo": {
        "code": "c1021",
        "_id": "dingo",
        "name": "Dingo",
        "moonlight": false,
        "rarity": 4,
        "attribute": "fire",
        "role": "warrior",
        "zodiac": "maiden",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "C": 0.042,
                "B": 0.063,
                "A": 0.084,
                "S": 0.105,
                "SS": 0.126,
                "SSS": 0.147
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1021_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1021_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.8,
                "pow": 1,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12701,
                "atk": 767,
                "hp": 4028,
                "spd": 112,
                "def": 477,
                "chc": 0.19,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16298,
                "atk": 957,
                "hp": 5057,
                "spd": 112,
                "def": 592,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "Dizzy": {
        "code": "c1094",
        "_id": "dizzy",
        "name": "Dizzy",
        "moonlight": false,
        "rarity": 5,
        "attribute": "ice",
        "role": "mage",
        "zodiac": "bull",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1094_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1094_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 1,
                "targets": 3,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["miss"],
                "rate": 2.5,
                "pow": 1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13970,
                "atk": 833,
                "hp": 4221,
                "spd": 115,
                "def": 542,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.06,
                "efr": 0.18
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17925,
                "atk": 1039,
                "hp": 5299,
                "spd": 115,
                "def": 673,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0.18
            }
        }
    },
    "Doll Maker Pearlhorizon": {
        "code": "c4073",
        "_id": "doll-maker-pearlhorizon",
        "name": "Doll Maker Pearlhorizon",
        "moonlight": false,
        "rarity": 3,
        "attribute": "wind",
        "role": "mage",
        "zodiac": "bull",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "D": 0.045,
                "C": 0.068,
                "B": 0.09,
                "A": 0.112,
                "S": 0.135,
                "SS": 0.158,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4073_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4073_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.6,
                "pow": 1,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 0.9,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12694,
                "atk": 738,
                "hp": 3867,
                "spd": 112,
                "def": 508,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.06,
                "efr": 0.18,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 4572,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0.15,
                "overrideAdditionalRes": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16292,
                "atk": 921,
                "hp": 4855,
                "spd": 112,
                "def": 631,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0.18,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 5742,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0.15,
                "overrideAdditionalRes": 0
            }
        }
    },
    "Dominiel": {
        "code": "c1037",
        "_id": "dominiel",
        "name": "Dominiel",
        "moonlight": false,
        "rarity": 4,
        "attribute": "ice",
        "role": "mage",
        "zodiac": "bull",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "C": 0.068,
                "B": 0.102,
                "A": 0.136,
                "S": 0.17,
                "SS": 0.204,
                "SSS": 0.238
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1037_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1037_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S2 barrier",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.25
                    }
                ]
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.75,
                "pow": 0.95,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13090,
                "atk": 767,
                "hp": 3996,
                "spd": 112,
                "def": 520,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.06,
                "efr": 0.18
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16790,
                "atk": 957,
                "hp": 5016,
                "spd": 112,
                "def": 645,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0.18
            }
        }
    },
    "Doris": {
        "code": "c3044",
        "_id": "doris",
        "name": "Doris",
        "moonlight": true,
        "rarity": 3,
        "attribute": "light",
        "role": "manauser",
        "zodiac": "crab",
        "self_devotion": {
            "type": "max_hp",
            "grades": {
                "D": 180,
                "C": 270,
                "B": 360,
                "A": 450,
                "S": 540,
                "SS": 630,
                "SSS": 720
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3044_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3044_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S2 heal",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.15
                    }
                ]
            },
            "S3": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S3 heal",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.25
                    }
                ]
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 14137,
                "atk": 433,
                "hp": 4038,
                "spd": 96,
                "def": 569,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17952,
                "atk": 540,
                "hp": 5319,
                "spd": 96,
                "def": 705,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Eaton": {
        "code": "c3094",
        "_id": "eaton",
        "name": "Eaton",
        "moonlight": true,
        "rarity": 3,
        "attribute": "light",
        "role": "knight",
        "zodiac": "crab",
        "self_devotion": {
            "type": "max_hp",
            "grades": {
                "D": 180,
                "C": 270,
                "B": 360,
                "A": 450,
                "S": 540,
                "SS": 630,
                "SSS": 720
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3094_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3094_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.2,
                "pow": 1,
                "targets": 1,
                "selfHpScaling": 0.05,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S3 barrier",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.361
                    }
                ]
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12139,
                "atk": 549,
                "hp": 5098,
                "spd": 91,
                "def": 535,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 20,
                "overrideAtk": 0,
                "overrideHp": 0,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15518,
                "atk": 685,
                "hp": 6403,
                "spd": 91,
                "def": 703,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 20,
                "overrideAtk": 0,
                "overrideHp": 0,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            }
        }
    },
    "Eda": {
        "code": "c1111",
        "_id": "eda",
        "name": "Eda",
        "moonlight": false,
        "rarity": 5,
        "attribute": "ice",
        "role": "mage",
        "zodiac": "ram",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "B": 0.09,
                "A": 0.135,
                "S": 0.18,
                "SS": 0.225,
                "SSS": 0.27
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1111_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1111_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 1,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.05,
                "pow": 1.1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 17217,
                "atk": 1007,
                "hp": 3996,
                "spd": 106,
                "def": 525,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.18
            },
            "lv60SixStarFullyAwakened": {
                "cp": 18123,
                "atk": 1255,
                "hp": 5016,
                "spd": 106,
                "def": 652,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "Edward Elric": {
        "code": "c1134",
        "_id": "edward-elric",
        "name": "Edward Elric",
        "moonlight": false,
        "rarity": 5,
        "attribute": "fire",
        "role": "warrior",
        "zodiac": "ram",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "B": 0.056,
                "A": 0.084,
                "S": 0.112,
                "SS": 0.14,
                "SSS": 0.168
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1134_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1134_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "selfHpScaling": 0.1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 1,
                "targets": 3,
                "selfHpScaling": 0.08,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.2,
                "pow": 1,
                "targets": 1,
                "selfHpScaling": 0.25,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11377,
                "atk": 789,
                "hp": 4735,
                "spd": 117,
                "def": 514,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 14466,
                "atk": 984,
                "hp": 6266,
                "spd": 117,
                "def": 637,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Elena": {
        "code": "c1091",
        "_id": "elena",
        "name": "Elena",
        "moonlight": false,
        "rarity": 5,
        "attribute": "ice",
        "role": "manauser",
        "zodiac": "twins",
        "self_devotion": {
            "type": "res",
            "grades": {
                "B": 0.09,
                "A": 0.135,
                "S": 0.18,
                "SS": 0.225,
                "SSS": 0.27
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1091_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1091_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc202201",
                "id": "exc202201",
                "name": "Ruele's Sad Promise",
                "description": "A mysterious concoction of life created by combining the laws of light and nature and the love of a noble soul.",
                "unit": "c2022",
                "role": "manauser",
                "rarity": 5,
                "stat": {
                    "type": "res",
                    "value": 0.08
                },
                "skills": [
                    {
                        "skill": 1,
                        "description": "Dispels one debuff from the ally with the lowest Health when using Key to an Oath.",
                        "skill_description": "Attacks the enemy with a staff and heals the ally with the lowest Health, before dispelling one debuff. Healing increases proportional to the target's max Health.",
                        "values": [],
                        "_id": 0
                    },
                    {
                        "skill": 2,
                        "description": "Has a 30% chance to reset skill cooldown of Regen when using Regen.",
                        "skill_description": "Blesses an ally, recovering their Health and increasing their Combat Readiness by 50%. Healing increases proportional to the caster's max Health. When this skill is used, has a 30% chance to reset this skill's cooldown.",
                        "values": [],
                        "_id": 1
                    },
                    {
                        "skill": 3,
                        "description": "Decreases skill cooldown of Destina's Grace by 1 turn.",
                        "skill_description": null,
                        "values": [],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c2022.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S2 heal",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.2
                    }
                ]
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 15706,
                "atk": 520,
                "hp": 3972,
                "spd": 105,
                "def": 559,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.3
            },
            "lv60SixStarFullyAwakened": {
                "cp": 19986,
                "atk": 649,
                "hp": 5254,
                "spd": 105,
                "def": 694,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.3
            }
        }
    },
    "Eligos": {
        "code": "c1142",
        "_id": "eligos",
        "name": "Eligos",
        "moonlight": false,
        "rarity": 5,
        "attribute": "fire",
        "role": "ranger",
        "zodiac": "maiden",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "B": 0.056,
                "A": 0.084,
                "S": 0.112,
                "SS": 0.14,
                "SSS": 0.168
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1142_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1142_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.95,
                "pow": 0.9,
                "targets": 1,
                "selfSpdScaling": 0.00075,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 1.3,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 1,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12952,
                "atk": 983,
                "hp": 3964,
                "spd": 124,
                "def": 432,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16448,
                "atk": 1283,
                "hp": 4976,
                "spd": 124,
                "def": 536,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Elphelt": {
        "code": "c1105",
        "_id": "elphelt",
        "name": "Elphelt",
        "moonlight": false,
        "rarity": 5,
        "attribute": "fire",
        "role": "ranger",
        "zodiac": "goat",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "B": 0.09,
                "A": 0.135,
                "S": 0.18,
                "SS": 0.225,
                "SSS": 0.27
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1105_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1105_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.85,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.1,
                "pow": 1.1,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13285,
                "atk": 804,
                "hp": 4542,
                "spd": 115,
                "def": 472,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17052,
                "atk": 1003,
                "hp": 5704,
                "spd": 115,
                "def": 585,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.3,
                "efr": 0
            }
        }
    },
    "Elson": {
        "code": "c3054",
        "_id": "elson",
        "name": "Elson",
        "moonlight": true,
        "rarity": 3,
        "attribute": "light",
        "role": "manauser",
        "zodiac": "fish",
        "self_devotion": {
            "type": "max_hp",
            "grades": {
                "D": 180,
                "C": 270,
                "B": 360,
                "A": 450,
                "S": 540,
                "SS": 630,
                "SSS": 720
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3054_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3054_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 0.9,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S3 heal",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.1
                    }
                ]
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 14246,
                "atk": 433,
                "hp": 3904,
                "spd": 98,
                "def": 556,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.12
            },
            "lv60SixStarFullyAwakened": {
                "cp": 18267,
                "atk": 540,
                "hp": 4900,
                "spd": 98,
                "def": 729,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.12
            }
        }
    },
    "Emilia": {
        "code": "c1116",
        "_id": "emilia",
        "name": "Emilia",
        "moonlight": false,
        "rarity": 5,
        "attribute": "ice",
        "role": "manauser",
        "zodiac": "twins",
        "self_devotion": {
            "type": "res",
            "grades": {
                "B": 0.09,
                "A": 0.135,
                "S": 0.18,
                "SS": 0.225,
                "SSS": 0.27
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1116_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1116_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.95,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S2 heal",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.2
                    }
                ]
            },
            "S3": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S3 heal",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.15
                    },
                    {
                        "name": "S3 barrier",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.2
                    }
                ]
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 15706,
                "atk": 520,
                "hp": 3972,
                "spd": 105,
                "def": 559,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.3
            },
            "lv60SixStarFullyAwakened": {
                "cp": 19986,
                "atk": 649,
                "hp": 5254,
                "spd": 105,
                "def": 694,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.3
            }
        }
    },
    "Enott": {
        "code": "c3022",
        "_id": "enott",
        "name": "Enott",
        "moonlight": false,
        "rarity": 3,
        "attribute": "ice",
        "role": "warrior",
        "zodiac": "scorpion",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "D": 0.028,
                "C": 0.042,
                "B": 0.056,
                "A": 0.07,
                "S": 0.084,
                "SS": 0.098,
                "SSS": 0.112
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3022_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3022_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 1.05,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12002,
                "atk": 779,
                "hp": 4570,
                "spd": 98,
                "def": 461,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15162,
                "atk": 1019,
                "hp": 5738,
                "spd": 98,
                "def": 571,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Ervalen": {
        "code": "c1108",
        "_id": "ervalen",
        "name": "Ervalen",
        "moonlight": false,
        "rarity": 5,
        "attribute": "wind",
        "role": "assassin",
        "zodiac": "scorpion",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "B": 0.056,
                "A": 0.084,
                "S": 0.112,
                "SS": 0.14,
                "SSS": 0.168
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1108_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1108_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.4,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.6,
                "pow": 1,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13275,
                "atk": 984,
                "hp": 4735,
                "spd": 113,
                "def": 381,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16901,
                "atk": 1228,
                "hp": 6266,
                "spd": 113,
                "def": 473,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Fairytale Tenebria": {
        "code": "c5050",
        "_id": "fairytale-tenebria",
        "name": "Fairytale Tenebria",
        "moonlight": false,
        "rarity": 5,
        "attribute": "ice",
        "role": "mage",
        "zodiac": "bull",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "B": 0.09,
                "A": 0.135,
                "S": 0.18,
                "SS": 0.225,
                "SSS": 0.27
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c5050_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c5050_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.8,
                "pow": 1,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13970,
                "atk": 833,
                "hp": 4221,
                "spd": 115,
                "def": 542,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.06,
                "efr": 0.18
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17925,
                "atk": 1039,
                "hp": 5299,
                "spd": 115,
                "def": 673,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0.18
            }
        }
    },
    "Faithless Lidica": {
        "code": "c2046",
        "_id": "faithless-lidica",
        "name": "Faithless Lidica",
        "moonlight": true,
        "rarity": 5,
        "attribute": "light",
        "role": "ranger",
        "zodiac": "twins",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "B": 0.09,
                "A": 0.135,
                "S": 0.18,
                "SS": 0.225,
                "SSS": 0.27
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2046_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2046_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 1,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.4,
                "pow": 0.95,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13288,
                "atk": 904,
                "hp": 4221,
                "spd": 114,
                "def": 460,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16848,
                "atk": 1182,
                "hp": 5299,
                "spd": 114,
                "def": 571,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "Falconer Kluri": {
        "code": "c4003",
        "_id": "falconer-kluri",
        "name": "Falconer Kluri",
        "moonlight": false,
        "rarity": 3,
        "attribute": "wind",
        "role": "knight",
        "zodiac": "ram",
        "self_devotion": {
            "type": "def",
            "grades": {
                "D": 18,
                "C": 27,
                "B": 36,
                "A": 45,
                "S": 54,
                "SS": 63,
                "SSS": 72
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4003_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4003_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.5,
                "pow": 0.9,
                "targets": 1,
                "selfDefScaling": 0.7,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11779,
                "atk": 564,
                "hp": 4709,
                "spd": 105,
                "def": 480,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.06,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 0,
                "overrideDef": 504,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 9,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15140,
                "atk": 703,
                "hp": 5914,
                "spd": 105,
                "def": 596,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 0,
                "overrideDef": 625,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 9,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            }
        }
    },
    "Fallen Cecilia": {
        "code": "c2002",
        "_id": "fallen-cecilia",
        "name": "Fallen Cecilia",
        "moonlight": true,
        "rarity": 5,
        "attribute": "dark",
        "role": "knight",
        "zodiac": "archer",
        "self_devotion": {
            "type": "max_hp_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2002_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2002_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 1,
                "targets": 1,
                "selfHpScaling": 0.07,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S2 barrier",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.15
                    }
                ]
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.65,
                "pow": 0.95,
                "targets": 3,
                "selfHpScaling": 0.12,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13591,
                "atk": 716,
                "hp": 5446,
                "spd": 100,
                "def": 559,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17114,
                "atk": 894,
                "hp": 6840,
                "spd": 104,
                "def": 694,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Fighter Maya": {
        "code": "c2032",
        "_id": "fighter-maya",
        "name": "Fighter Maya",
        "moonlight": true,
        "rarity": 4,
        "attribute": "light",
        "role": "knight",
        "zodiac": "scales",
        "self_devotion": {
            "type": "def_rate",
            "grades": {
                "C": 0.04,
                "B": 0.06,
                "A": 0.08,
                "S": 0.1,
                "SS": 0.12,
                "SSS": 0.14
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2032_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2032_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.5,
                "pow": 1,
                "targets": 1,
                "selfDefScaling": 0.75,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "selfDefScaling": 1.5,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12975,
                "atk": 658,
                "hp": 4991,
                "spd": 97,
                "def": 535,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.12
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16569,
                "atk": 821,
                "hp": 6266,
                "spd": 97,
                "def": 703,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.12
            }
        }
    },
    "Flan": {
        "code": "c1110",
        "_id": "flan",
        "name": "Flan",
        "moonlight": false,
        "rarity": 5,
        "attribute": "ice",
        "role": "ranger",
        "zodiac": "goat",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "B": 0.09,
                "A": 0.135,
                "S": 0.18,
                "SS": 0.225,
                "SSS": 0.27
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1110_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1110_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc111001",
                "id": "exc111001",
                "name": "Foreign Minister's Baton",
                "description": "A baton with Politia's national flag attached to it. When Flan is in a good mood, she often performs flag magic for Landy.",
                "unit": "c1110",
                "role": "ranger",
                "rarity": 5,
                "stat": {
                    "type": "acc",
                    "value": 0.08
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13285,
                "atk": 804,
                "hp": 4542,
                "spd": 115,
                "def": 472,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17052,
                "atk": 1003,
                "hp": 5704,
                "spd": 115,
                "def": 585,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.3,
                "efr": 0
            }
        }
    },
    "Free Spirit Tieria": {
        "code": "c3026",
        "_id": "free-spirit-tieria",
        "name": "Free Spirit Tieria",
        "moonlight": true,
        "rarity": 4,
        "attribute": "light",
        "role": "warrior",
        "zodiac": "maiden",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "C": 0.042,
                "B": 0.063,
                "A": 0.084,
                "S": 0.105,
                "SS": 0.126,
                "SSS": 0.147
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3026_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3026_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc106601",
                "id": "exc106601",
                "name": "Dragon Emerald",
                "description": "Jewelry that Luna's father passed on to her. It is the only thing her mother left behind when she left.",
                "unit": "c1066",
                "role": "warrior",
                "rarity": 5,
                "stat": {
                    "type": "att_rate",
                    "value": 0.07
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.8,
                "pow": 0.9,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12701,
                "atk": 767,
                "hp": 4028,
                "spd": 112,
                "def": 477,
                "chc": 0.19,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16298,
                "atk": 957,
                "hp": 5057,
                "spd": 112,
                "def": 592,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "Furious": {
        "code": "c1087",
        "_id": "furious",
        "name": "Furious",
        "moonlight": false,
        "rarity": 4,
        "attribute": "ice",
        "role": "ranger",
        "zodiac": "lion",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "C": 0.04,
                "B": 0.06,
                "A": 0.08,
                "S": 0.1,
                "SS": 0.12,
                "SSS": 0.14
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1087_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1087_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc101087",
                "id": "exc101087",
                "name": "Indomitable Faith",
                "description": "A crossbow made from the weapon Furious had used when he was serving with the Aakhen Army. It can shoot dozens of arrorws within a short period.",
                "unit": "c1087",
                "role": "ranger",
                "rarity": 5,
                "stat": {
                    "type": "att_rate",
                    "value": 0.07
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.65,
                "pow": 1,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12530,
                "atk": 857,
                "hp": 4271,
                "spd": 110,
                "def": 432,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15920,
                "atk": 1068,
                "hp": 5650,
                "spd": 110,
                "def": 536,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "General Purrgis": {
        "code": "c2035",
        "_id": "general-purrgis",
        "name": "General Purrgis",
        "moonlight": true,
        "rarity": 4,
        "attribute": "light",
        "role": "warrior",
        "zodiac": "crab",
        "self_devotion": {
            "type": "max_hp_rate",
            "grades": {
                "C": 0.04,
                "B": 0.06,
                "A": 0.08,
                "S": 0.1,
                "SS": 0.12,
                "SSS": 0.14
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2035_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2035_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc203501",
                "id": "exc203501",
                "name": "Tear-Stained Badge",
                "description": "A worn-out badge made of paper and given to General Purrgis by his subordinates as a token of their appreciation for him.",
                "unit": "c2035",
                "role": "warrior",
                "rarity": 5,
                "stat": {
                    "type": "max_hp_rate",
                    "value": 0.07
                },
                "skills": [
                    {
                        "skill": 2,
                        "description": "20% chance for Spearhead to increase Defense of the caster for 2 turns when the caster is attacked.",
                        "skill_description": "Increases Combat Readiness of all allies by {{variable}} when the caster is attacked, with a 20% chance to increase Defense of the caster for 2 turns.",
                        "values": [
                            2
                        ],
                        "_id": 0
                    },
                    {
                        "skill": 2,
                        "description": "Spearhead increases Combat Readiness by an additional 3%.",
                        "skill_description": "Increases Combat Readiness of all allies by {{variable}} when the caster is attacked.",
                        "values": [],
                        "_id": 1
                    },
                    {
                        "skill": 3,
                        "description": "Decreases skill cooldown of Command to Charge by 1 turn.",
                        "skill_description": null,
                        "values": [],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c2035.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "selfHpScaling": 0.06,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.8,
                "pow": 1,
                "targets": 3,
                "selfHpScaling": 0.08,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12802,
                "atk": 724,
                "hp": 5283,
                "spd": 103,
                "def": 479,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16316,
                "atk": 903,
                "hp": 6635,
                "spd": 103,
                "def": 630,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Glenn": {
        "code": "c3103",
        "_id": "glenn",
        "name": "Glenn",
        "moonlight": false,
        "rarity": 3,
        "attribute": "wind",
        "role": "ranger",
        "zodiac": "scales",
        "self_devotion": {
            "type": "att",
            "grades": {
                "D": 36,
                "C": 54,
                "B": 72,
                "A": 90,
                "S": 108,
                "SS": 126,
                "SSS": 144
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3103_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3103_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 0.9,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11520,
                "atk": 704,
                "hp": 3867,
                "spd": 110,
                "def": 424,
                "chc": 0.27,
                "chd": 1.6,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 14585,
                "atk": 920,
                "hp": 4855,
                "spd": 110,
                "def": 525,
                "chc": 0.27,
                "chd": 1.6,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Gloomyrain": {
        "code": "c3074",
        "_id": "gloomyrain",
        "name": "Gloomyrain",
        "moonlight": true,
        "rarity": 3,
        "attribute": "light",
        "role": "mage",
        "zodiac": "crab",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "D": 0.045,
                "C": 0.068,
                "B": 0.09,
                "A": 0.112,
                "S": 0.135,
                "SS": 0.158,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3074_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3074_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.95,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12597,
                "atk": 918,
                "hp": 3578,
                "spd": 107,
                "def": 494,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15971,
                "atk": 1199,
                "hp": 4491,
                "spd": 107,
                "def": 613,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Godmother": {
        "code": "c3101",
        "_id": "godmother",
        "name": "Godmother",
        "moonlight": false,
        "rarity": 3,
        "attribute": "fire",
        "role": "ranger",
        "zodiac": "twins",
        "self_devotion": {
            "type": "att",
            "grades": {
                "D": 36,
                "C": 54,
                "B": 72,
                "A": 90,
                "S": 108,
                "SS": 126,
                "SSS": 144
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3101_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3101_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.65,
                "pow": 0.95,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11667,
                "atk": 769,
                "hp": 3739,
                "spd": 109,
                "def": 429,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 14767,
                "atk": 1005,
                "hp": 4693,
                "spd": 109,
                "def": 532,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "Great Chief Khawana": {
        "code": "c2086",
        "_id": "great-chief-khawana",
        "name": "Great Chief Khawana",
        "moonlight": true,
        "rarity": 4,
        "attribute": "dark",
        "role": "warrior",
        "zodiac": "crab",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "C": 0.068,
                "B": 0.102,
                "A": 0.136,
                "S": 0.17,
                "SS": 0.204,
                "SSS": 0.238
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2086_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2086_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc104901",
                "id": "exc104901",
                "name": "Prototype Crown",
                "description": "Equipment that contains a set of emergency commands and looks like a tiny crown.",
                "unit": "c1049",
                "role": "warrior",
                "rarity": 5,
                "stat": {
                    "type": "att_rate",
                    "value": 0.07
                },
                "skills": [],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1049.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S3 barrier",
                        "rate": 0,
                        "pow": 0,
                        "selfAtkScaling": 0.5
                    }
                ]
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12997,
                "atk": 958,
                "hp": 3674,
                "spd": 107,
                "def": 506,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 11111,
                "atk": 1138,
                "hp": 5421,
                "spd": 106,
                "def": 536,
                "chc": 0.53,
                "chd": 1.65,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Guider Aither": {
        "code": "c2018",
        "_id": "guider-aither",
        "name": "Guider Aither",
        "moonlight": true,
        "rarity": 4,
        "attribute": "light",
        "role": "mage",
        "zodiac": "crab",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "C": 0.04,
                "B": 0.06,
                "A": 0.08,
                "S": 0.1,
                "SS": 0.12,
                "SSS": 0.14
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2018_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2018_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc201801",
                "id": "exc201801",
                "name": "Whispered Faith",
                "description": "A mystical whistle that enables the user to freely exchange feelings with small creatures.",
                "unit": "c2018",
                "role": "mage",
                "rarity": 5,
                "stat": {
                    "type": "att_rate",
                    "value": 0.07
                },
                "skills": [
                    {
                        "skill": 2,
                        "description": "Grants a barrier to all allies when using Spirit's Protection. Barrier strength increases proportional to the caster's Attack.",
                        "skill_description": "Attacks with spirit power, and casts a barrier over all allies for 2 turns. Barrier strength is proportional to the caster's Attack.",
                        "values": [
                            5
                        ],
                        "_id": 0
                    },
                    {
                        "skill": 3,
                        "description": "Stuns the enemy for 1 turn when using Wave of Force.",
                        "skill_description": "Delivers a blow to the enemy with spirit power, stunning them for 1 turn, and heals all allies before granting continuous healing for 2 turns. Amount recovered increases proportional to the damage dealt.",
                        "values": [
                            20,
                            11
                        ],
                        "_id": 1
                    },
                    {
                        "skill": 3,
                        "description": "Increases Attack of all allies for 2 turns when using Wave of Force.",
                        "skill_description": "Delivers a blow to the enemy with spirit power, and heals all allies before granting continuous healing and increased Attack for 2 turns. Amount recovered increases proportional to the damage dealt.",
                        "values": [
                            11,
                            1
                        ],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c2018.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 0.9,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.8,
                "pow": 1,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12997,
                "atk": 958,
                "hp": 3674,
                "spd": 107,
                "def": 506,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16478,
                "atk": 1252,
                "hp": 4612,
                "spd": 107,
                "def": 627,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Gunther": {
        "code": "c3024",
        "_id": "gunther",
        "name": "Gunther",
        "moonlight": true,
        "rarity": 3,
        "attribute": "light",
        "role": "warrior",
        "zodiac": "scales",
        "self_devotion": {
            "type": "coop",
            "grades": {
                "D": 0.009,
                "C": 0.013,
                "B": 0.018,
                "A": 0.022,
                "S": 0.027,
                "SS": 0.032,
                "SSS": 0.036
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3024_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3024_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["normal", "miss"],
                "rate": 1,
                "pow": 0.85,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["normal", "miss"],
                "rate": 2.2,
                "pow": 0.95,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "bonusMaxAtkPercent": 75,
            "bonusMaxDefPercent": 0,
            "bonusMaxHpPercent": 0,
            "lv50FiveStarFullyAwakened": {
                "cp": 11788,
                "atk": 762,
                "hp": 4171,
                "spd": 104,
                "def": 469,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 75,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 0,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15002,
                "atk": 951,
                "hp": 5517,
                "spd": 104,
                "def": 583,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 75,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 0,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            }
        }
    },
    "Hasol": {
        "code": "c3135",
        "_id": "hasol",
        "name": "Hasol",
        "moonlight": true,
        "rarity": 3,
        "attribute": "dark",
        "role": "knight",
        "zodiac": "archer",
        "self_devotion": {
            "type": "max_hp",
            "grades": {
                "D": 180,
                "C": 270,
                "B": 360,
                "A": 450,
                "S": 540,
                "SS": 630,
                "SSS": 720
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3135_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3135_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 1,
                "targets": 1,
                "selfHpScaling": 0.05,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 1,
                "targets": 3,
                "selfHpScaling": 0.05,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11779,
                "atk": 564,
                "hp": 4709,
                "spd": 105,
                "def": 480,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.06,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15140,
                "atk": 758,
                "hp": 6002,
                "spd": 101,
                "def": 639,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Haste": {
        "code": "c1039",
        "_id": "haste",
        "name": "Haste",
        "moonlight": false,
        "rarity": 5,
        "attribute": "fire",
        "role": "assassin",
        "zodiac": "twins",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "B": 0.09,
                "A": 0.135,
                "S": 0.18,
                "SS": 0.225,
                "SSS": 0.27
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1039_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1039_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc102301",
                "id": "exc102301",
                "name": "Grudge Marble",
                "description": "A marble filled with the grudges of people who pledged their souls and loyalty to Kayron",
                "unit": "c1023",
                "role": "assassin",
                "rarity": 5,
                "stat": {
                    "type": "cri",
                    "value": 0.06
                },
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1023.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.2,
                "pow": 1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12981,
                "atk": 873,
                "hp": 4285,
                "spd": 120,
                "def": 412,
                "chc": 0.19,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.12,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16740,
                "atk": 1089,
                "hp": 5380,
                "spd": 120,
                "def": 511,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.12,
                "efr": 0
            }
        }
    },
    "Hataan": {
        "code": "c3091",
        "_id": "hataan",
        "name": "Hataan",
        "moonlight": false,
        "rarity": 3,
        "attribute": "fire",
        "role": "assassin",
        "zodiac": "lion",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "D": 0.028,
                "C": 0.042,
                "B": 0.056,
                "A": 0.07,
                "S": 0.084,
                "SS": 0.098,
                "SSS": 0.112
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3091_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3091_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.95,
                "pow": 0.95,
                "targets": 1,
                "selfSpdScaling": 0.00075,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.3,
                "pow": 0.85,
                "targets": 1,
                "selfSpdScaling": 0.00125,
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11477,
                "atk": 828,
                "hp": 3642,
                "spd": 111,
                "def": 398,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 14563,
                "atk": 1081,
                "hp": 4572,
                "spd": 111,
                "def": 494,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Hazel": {
        "code": "c3041",
        "_id": "hazel",
        "name": "Hazel",
        "moonlight": false,
        "rarity": 3,
        "attribute": "fire",
        "role": "manauser",
        "zodiac": "waterbearer",
        "self_devotion": {
            "type": "att",
            "grades": {
                "D": 36,
                "C": 54,
                "B": 72,
                "A": 90,
                "S": 108,
                "SS": 126,
                "SSS": 144
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3041_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3041_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1.05,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S2 heal",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.3,
                        "selfAtkScaling": 0.15
                    }
                ]
            },
            "S3": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S3 heal",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.3,
                        "selfAtkScaling": 0.12
                    }
                ]
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 14054,
                "atk": 680,
                "hp": 3546,
                "spd": 97,
                "def": 534,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17847,
                "atk": 849,
                "hp": 4450,
                "spd": 101,
                "def": 662,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Helen": {
        "code": "c3122",
        "_id": "helen",
        "name": "Helen",
        "moonlight": false,
        "rarity": 3,
        "attribute": "ice",
        "role": "knight",
        "zodiac": "crab",
        "self_devotion": {
            "type": "def",
            "grades": {
                "D": 18,
                "C": 27,
                "B": 36,
                "A": 45,
                "S": 54,
                "SS": 63,
                "SSS": 72
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3122_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3122_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 1,
                "targets": 1,
                "selfDefScaling": 0.8,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.2,
                "pow": 1,
                "targets": 1,
                "selfDefScaling": 1,
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S3 barrier",
                        "rate": 0,
                        "pow": 0,
                        "selfDefScaling": 0.8
                    }
                ]
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12139,
                "atk": 549,
                "hp": 5098,
                "spd": 91,
                "def": 535,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15518,
                "atk": 685,
                "hp": 6403,
                "spd": 91,
                "def": 703,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Helga": {
        "code": "c3023",
        "_id": "helga",
        "name": "Helga",
        "moonlight": false,
        "rarity": 3,
        "attribute": "wind",
        "role": "warrior",
        "zodiac": "archer",
        "self_devotion": {
            "type": "att",
            "grades": {
                "D": 36,
                "C": 54,
                "B": 72,
                "A": 90,
                "S": 108,
                "SS": 126,
                "SSS": 144
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3023_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3023_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.55,
                "pow": 0.95,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11710,
                "atk": 802,
                "hp": 3899,
                "spd": 114,
                "def": 418,
                "chc": 0.19,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15062,
                "atk": 1000,
                "hp": 4895,
                "spd": 114,
                "def": 518,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Holiday Yufine": {
        "code": "c5016",
        "_id": "holiday-yufine",
        "name": "Holiday Yufine",
        "moonlight": false,
        "rarity": 5,
        "attribute": "fire",
        "role": "warrior",
        "zodiac": "scales",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c5016_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c5016_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 1,
                "targets": 3,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13440,
                "atk": 897,
                "hp": 4735,
                "spd": 109,
                "def": 505,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17097,
                "atk": 1119,
                "hp": 6266,
                "spd": 109,
                "def": 627,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Holy Flame Adin": {
        "code": "c4141",
        "_id": "holy-flame-adin",
        "name": "Holy Flame Adin",
        "moonlight": false,
        "rarity": 3,
        "attribute": "fire",
        "role": "assassin",
        "zodiac": "lion",
        "self_devotion": {
            "type": "att",
            "grades": {
                "D": 36,
                "C": 54,
                "B": 72,
                "A": 90,
                "S": 108,
                "SS": 126,
                "SSS": 144
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4141_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4141_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": [],
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11477,
                "atk": 828,
                "hp": 3642,
                "spd": 111,
                "def": 398,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 923,
                "overrideHp": 4137,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 14563,
                "atk": 1081,
                "hp": 4572,
                "spd": 111,
                "def": 494,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 1199,
                "overrideHp": 5194,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0.25,
                "overrideAdditionalRes": 0
            }
        }
    },
    "Hurado": {
        "code": "c3055",
        "_id": "hurado",
        "name": "Hurado",
        "moonlight": true,
        "rarity": 3,
        "attribute": "dark",
        "role": "mage",
        "zodiac": "fish",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "D": 0.045,
                "C": 0.068,
                "B": 0.09,
                "A": 0.112,
                "S": 0.135,
                "SS": 0.158,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3055_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3055_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.9,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11922,
                "atk": 746,
                "hp": 3642,
                "spd": 111,
                "def": 472,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15277,
                "atk": 930,
                "hp": 4572,
                "spd": 111,
                "def": 585,
                "chc": 0.35,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Hwayoung": {
        "code": "c1128",
        "_id": "hwayoung",
        "name": "Hwayoung",
        "moonlight": false,
        "rarity": 5,
        "attribute": "fire",
        "role": "warrior",
        "zodiac": "scales",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1128_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1128_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.8,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S2 barrier",
                        "rate": 0,
                        "pow": 0,
                        "selfAtkScaling": 0.45
                    }
                ]
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "note": "100% penetration",
                "rate": 1.25,
                "pow": 1,
                "targets": 1,
                "penetration": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13440,
                "atk": 897,
                "hp": 4735,
                "spd": 109,
                "def": 505,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 30,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 0,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17097,
                "atk": 1119,
                "hp": 6266,
                "spd": 109,
                "def": 627,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 30,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 0,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            }
        }
    },
    "Ian": {
        "code": "c3102",
        "_id": "ian",
        "name": "Ian",
        "moonlight": false,
        "rarity": 3,
        "attribute": "ice",
        "role": "ranger",
        "zodiac": "maiden",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "D": 0.045,
                "C": 0.068,
                "B": 0.09,
                "A": 0.112,
                "S": 0.135,
                "SS": 0.158,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3102_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3102_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11323,
                "atk": 828,
                "hp": 3546,
                "spd": 118,
                "def": 407,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 14349,
                "atk": 1081,
                "hp": 4450,
                "spd": 118,
                "def": 504,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Ilynav": {
        "code": "c1113",
        "_id": "ilynav",
        "name": "Ilynav",
        "moonlight": false,
        "rarity": 5,
        "attribute": "fire",
        "role": "knight",
        "zodiac": "twins",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "B": 0.056,
                "A": 0.084,
                "S": 0.112,
                "SS": 0.14,
                "SSS": 0.168
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1113_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1113_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc102301",
                "id": "exc102301",
                "name": "Grudge Marble",
                "description": "A marble filled with the grudges of people who pledged their souls and loyalty to Kayron",
                "unit": "c1023",
                "role": "assassin",
                "rarity": 5,
                "stat": {
                    "type": "cri",
                    "value": 0.06
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 1,
                "targets": 1,
                "selfHpScaling": 0.1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "selfHpScaling": 0.18,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 1,
                "targets": 3,
                "selfHpScaling": 0.15,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13243,
                "atk": 767,
                "hp": 4896,
                "spd": 109,
                "def": 511,
                "chc": 0.19,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16949,
                "atk": 957,
                "hp": 6148,
                "spd": 109,
                "def": 634,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Inferno Khawazu": {
        "code": "c2085",
        "_id": "inferno-khawazu",
        "name": "Inferno Khawazu",
        "moonlight": true,
        "rarity": 4,
        "attribute": "dark",
        "role": "warrior",
        "zodiac": "scorpion",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "C": 0.04,
                "B": 0.06,
                "A": 0.08,
                "S": 0.1,
                "SS": 0.12,
                "SSS": 0.14
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2085_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2085_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc208501",
                "id": "exc208501",
                "name": "Flame Armband",
                "description": "A staff decorated with a bright red orb that encapsulates both the spirit of charity, and the unwavering determination of Achates.",
                "unit": "c2085",
                "role": "warrior",
                "rarity": 5,
                "stat": {
                    "type": "att_rate",
                    "value": 0.07
                },
                "skills": [
                    {
                        "skill": 2,
                        "description": "Blazing Fury increases Combat Readiness of the caster by an additional 5%.",
                        "skill_description": null,
                        "values": [],
                        "_id": 0
                    },
                    {
                        "skill": 2,
                        "description": "Grants immunity to the caster for 2 turns when using Blazing Fury.",
                        "skill_description": null,
                        "values": [],
                        "_id": 1
                    },
                    {
                        "skill": 3,
                        "description": "Silences the target for 1 turn when using Flames of Destruction. When the caster is granted vigor, ignores Effect Resistance. This effect is applied before inflicting burn.",
                        "skill_description": null,
                        "values": [],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c2033.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.95,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "note": "no detonations",
                "rate": 0.7,
                "pow": 1,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12819,
                "atk": 854,
                "hp": 4850,
                "spd": 100,
                "def": 479,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16221,
                "atk": 1119,
                "hp": 6091,
                "spd": 100,
                "def": 594,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Iseria": {
        "code": "c1024",
        "_id": "iseria",
        "name": "Iseria",
        "moonlight": false,
        "rarity": 5,
        "attribute": "wind",
        "role": "ranger",
        "zodiac": "lion",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "B": 0.09,
                "A": 0.135,
                "S": 0.18,
                "SS": 0.225,
                "SSS": 0.27
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1024_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1024_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.95,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 2,
                "pow": 0.9,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13356,
                "atk": 928,
                "hp": 4536,
                "spd": 112,
                "def": 446,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16976,
                "atk": 1158,
                "hp": 6002,
                "spd": 112,
                "def": 553,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Jack-O": {
        "code": "c1130",
        "_id": "jack-o",
        "name": "Jack-O",
        "moonlight": false,
        "rarity": 5,
        "attribute": "fire",
        "role": "warrior",
        "zodiac": "bull",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1130_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1130_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.75,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "note": "S1 proc",
                "rate": 1.1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13624,
                "atk": 984,
                "hp": 4607,
                "spd": 109,
                "def": 446,
                "chc": 0.22999999999999998,
                "chd": 1.55,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17106,
                "atk": 1228,
                "hp": 5784,
                "spd": 109,
                "def": 553,
                "chc": 0.22999999999999998,
                "chd": 1.65,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Januta": {
        "code": "c3131",
        "_id": "januta",
        "name": "Januta",
        "moonlight": false,
        "rarity": 3,
        "attribute": "fire",
        "role": "warrior",
        "zodiac": "lion",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "D": 0.028,
                "C": 0.042,
                "B": 0.056,
                "A": 0.07,
                "S": 0.084,
                "SS": 0.098,
                "SSS": 0.112
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3131_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3131_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 1,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11978,
                "atk": 878,
                "hp": 3899,
                "spd": 101,
                "def": 438,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15164,
                "atk": 1144,
                "hp": 4895,
                "spd": 101,
                "def": 543,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Jecht": {
        "code": "c3053",
        "_id": "jecht",
        "name": "Jecht",
        "moonlight": false,
        "rarity": 3,
        "attribute": "wind",
        "role": "manauser",
        "zodiac": "archer",
        "self_devotion": {
            "type": "max_hp",
            "grades": {
                "D": 180,
                "C": 270,
                "B": 360,
                "A": 450,
                "S": 540,
                "SS": 630,
                "SSS": 720
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3053_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3053_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1.05,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 0.9,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13832,
                "atk": 651,
                "hp": 3128,
                "spd": 107,
                "def": 483,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.12,
                "efr": 0.06
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17640,
                "atk": 812,
                "hp": 3925,
                "spd": 107,
                "def": 599,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.12,
                "efr": 0.18
            }
        }
    },
    "Jena": {
        "code": "c3052",
        "_id": "jena",
        "name": "Jena",
        "moonlight": false,
        "rarity": 3,
        "attribute": "ice",
        "role": "mage",
        "zodiac": "ram",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "D": 0.045,
                "C": 0.068,
                "B": 0.09,
                "A": 0.112,
                "S": 0.135,
                "SS": 0.158,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3052_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3052_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.95,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.85,
                "pow": 0.95,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12313,
                "atk": 852,
                "hp": 3578,
                "spd": 101,
                "def": 483,
                "chc": 0.19,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15808,
                "atk": 1063,
                "hp": 4491,
                "spd": 101,
                "def": 599,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "Judge Kise": {
        "code": "c2006",
        "_id": "judge-kise",
        "name": "Judge Kise",
        "moonlight": true,
        "rarity": 5,
        "attribute": "light",
        "role": "warrior",
        "zodiac": "maiden",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2006_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2006_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13569,
                "atk": 833,
                "hp": 4253,
                "spd": 115,
                "def": 497,
                "chc": 0.19,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17434,
                "atk": 1039,
                "hp": 5340,
                "spd": 115,
                "def": 617,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "Judith": {
        "code": "c3011",
        "_id": "judith",
        "name": "Judith",
        "moonlight": false,
        "rarity": 3,
        "attribute": "fire",
        "role": "assassin",
        "zodiac": "fish",
        "self_devotion": {
            "type": "att",
            "grades": {
                "D": 36,
                "C": 54,
                "B": 72,
                "A": 90,
                "S": 108,
                "SS": 126,
                "SSS": 144
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3011_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3011_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11003,
                "atk": 680,
                "hp": 3417,
                "spd": 117,
                "def": 398,
                "chc": 0.19,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 14143,
                "atk": 848,
                "hp": 4289,
                "spd": 117,
                "def": 494,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "Juni": {
        "code": "c3151",
        "_id": "juni",
        "name": "Juni",
        "moonlight": false,
        "rarity": 3,
        "attribute": "fire",
        "role": "warrior",
        "zodiac": "archer",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "D": 0.045,
                "C": 0.068,
                "B": 0.09,
                "A": 0.112,
                "S": 0.135,
                "SS": 0.158,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3151_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3151_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1.1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11710,
                "atk": 802,
                "hp": 3899,
                "spd": 114,
                "def": 418,
                "chc": 0.19,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15062,
                "atk": 1000,
                "hp": 4895,
                "spd": 114,
                "def": 518,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Karin": {
        "code": "c1011",
        "_id": "karin",
        "name": "Karin",
        "moonlight": false,
        "rarity": 4,
        "attribute": "ice",
        "role": "assassin",
        "zodiac": "lion",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "C": 0.042,
                "B": 0.063,
                "A": 0.084,
                "S": 0.105,
                "SS": 0.126,
                "SSS": 0.147
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1011_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1011_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc104601",
                "id": "exc104601",
                "name": "Eternal Rose",
                "description": "A rose that Lidica picked when she was excommunicated from the Rose Apostles. It has been specially treated to ensure it never withers but also lost its scent in the process.",
                "unit": "c1046",
                "role": "ranger",
                "rarity": 5,
                "stat": {
                    "type": "acc",
                    "value": 0.08
                },
                "skills": [
                    {
                        "skill": 1,
                        "description": "Damage dealt is increased by 20% when using Wild Rose.",
                        "skill_description": null,
                        "values": [],
                        "_id": 0
                    },
                    {
                        "skill": 1,
                        "description": "Increases base Combat Readiness reduction by 5% when using Wild Rose.",
                        "skill_description": "Attacks with a sword, decreasing Combat Readiness by 15%. When the enemy is debuffed, decreases Combat Readiness by an additional 10%.",
                        "values": [],
                        "_id": 1
                    },
                    {
                        "skill": 2,
                        "description": "Dispels an additional buff when using Thornbush.",
                        "skill_description": "Attacks all enemies, with a {{variable}} chance each to decrease Hit Chance for 1 turn, make them unhealable for 1 turn, and dispel two buffs.",
                        "values": [
                            22,
                            27
                        ],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1046.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.95,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.9,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.6,
                "pow": 0.85,
                "targets": 1,
                "cdmgIncrease": 0.5,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12292,
                "atk": 910,
                "hp": 3867,
                "spd": 113,
                "def": 409,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15612,
                "atk": 1188,
                "hp": 4855,
                "spd": 113,
                "def": 508,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Kawerik": {
        "code": "c1073",
        "_id": "kawerik",
        "name": "Kawerik",
        "moonlight": false,
        "rarity": 5,
        "attribute": "fire",
        "role": "mage",
        "zodiac": "maiden",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1073_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1073_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc107301",
                "id": "exc107301",
                "name": "Proof of Choice",
                "description": "A token given to the leader of the Enhanced Magic Division. To ensure the past is never forgotten, he keeps it with him at all times.",
                "unit": "c1073",
                "role": "mage",
                "rarity": 5,
                "stat": {
                    "type": "cri",
                    "value": 0.06
                },
                "skills": [
                    {
                        "skill": 2,
                        "description": "Increases Attack of the caster for 2 turns when using Dimensional Corridor.",
                        "skill_description": "Attacks the enemy in a dimensional corridor, with a {{variable}} chance each to dispel two buffs before increasing skill cooldowns by 1 turn twice. Increases Attack and Speed of the caster for 2 turns. Damage dealt increases proportional to the target's Speed.",
                        "values": [
                            1,
                            3
                        ],
                        "_id": 0
                    },
                    {
                        "skill": 3,
                        "description": "Inflicts decreased Hit Chance for 1 turn when using Dimensional Explosion.",
                        "skill_description": "Attacks all enemies with an explosion, decreasing Hit Chance and silencing for 1 turn, before granting stealth to the caster for 2 turns. Penetrates Defense by 30%. Damage dealt increases proportional to the caster's Speed.",
                        "values": [
                            22,
                            28,
                            15,
                            34
                        ],
                        "_id": 1
                    },
                    {
                        "skill": 3,
                        "description": "Damage dealt is increased by 20% when using Dimensional Explosion.",
                        "skill_description": null,
                        "values": [],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1073.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 1,
                "targets": 1,
                "selfSpdScaling": 0.00075,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.4,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.8,
                "pow": 0.95,
                "targets": 3,
                "selfSpdScaling": 0.00075,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13675,
                "atk": 1047,
                "hp": 3385,
                "spd": 115,
                "def": 525,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17281,
                "atk": 1306,
                "hp": 4248,
                "spd": 119,
                "def": 652,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Kayron": {
        "code": "c1023",
        "_id": "kayron",
        "name": "Kayron",
        "moonlight": false,
        "rarity": 5,
        "attribute": "fire",
        "role": "assassin",
        "zodiac": "ram",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1023_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1023_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc102301",
                "id": "exc102301",
                "name": "Grudge Marble",
                "description": "A marble filled with the grudges of people who pledged their souls and loyalty to Kayron",
                "unit": "c1023",
                "role": "assassin",
                "rarity": 5,
                "stat": {
                    "type": "cri",
                    "value": 0.06
                },
                "skills": [
                    {
                        "skill": 1,
                        "description": "Damage dealt is increased by 10% when using Void Slash.",
                        "skill_description": null,
                        "values": [],
                        "_id": 0
                    },
                    {
                        "skill": 3,
                        "description": "Damage dealt is increased by 10% when using Apocalypse.",
                        "skill_description": null,
                        "values": [],
                        "_id": 1
                    },
                    {
                        "skill": 3,
                        "description": "Inflicts silence for 1 turn when using Apocalypse.",
                        "skill_description": "Attacks the enemy by exploding the Archdemon's Might contained within the sword, before inflicting silence for 1 turn and increasing Attack of the caster for 2 turns. When the enemy is defeated, extends the duration of any buffs already granted to the caster by 1 turn. Damage dealt increases proportional to the caster's lost Health.",
                        "values": [
                            28,
                            1
                        ],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1023.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.85,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.7,
                "pow": 0.9,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12898,
                "atk": 897,
                "hp": 4253,
                "spd": 125,
                "def": 390,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16285,
                "atk": 1119,
                "hp": 5340,
                "spd": 129,
                "def": 483,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Ken": {
        "code": "c1047",
        "_id": "ken",
        "name": "Ken",
        "moonlight": false,
        "rarity": 5,
        "attribute": "fire",
        "role": "warrior",
        "zodiac": "goat",
        "self_devotion": {
            "type": "max_hp_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1047_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1047_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "selfHpScaling": 0.1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.2,
                "pow": 1,
                "targets": 1,
                "selfHpScaling": 0.1,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 0.9,
                "targets": 1,
                "selfHpScaling": 0.3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13730,
                "atk": 775,
                "hp": 5551,
                "spd": 102,
                "def": 530,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17484,
                "atk": 966,
                "hp": 7323,
                "spd": 102,
                "def": 657,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Khawana": {
        "code": "c1086",
        "_id": "khawana",
        "name": "Khawana",
        "moonlight": false,
        "rarity": 4,
        "attribute": "fire",
        "role": "assassin",
        "zodiac": "fish",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "C": 0.04,
                "B": 0.06,
                "A": 0.08,
                "S": 0.1,
                "SS": 0.12,
                "SSS": 0.14
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1086_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1086_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 1,
                "targets": 3,
                "selfSpdScaling": 0.00075,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 1,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12124,
                "atk": 767,
                "hp": 3706,
                "spd": 123,
                "def": 415,
                "chc": 0.19,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15622,
                "atk": 957,
                "hp": 4653,
                "spd": 123,
                "def": 515,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "Khawazu": {
        "code": "c1085",
        "_id": "khawazu",
        "name": "Khawazu",
        "moonlight": false,
        "rarity": 4,
        "attribute": "fire",
        "role": "warrior",
        "zodiac": "scorpion",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "C": 0.04,
                "B": 0.06,
                "A": 0.08,
                "S": 0.1,
                "SS": 0.12,
                "SSS": 0.14
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1085_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1085_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.7,
                "pow": 0.9,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12819,
                "atk": 854,
                "hp": 4850,
                "spd": 100,
                "def": 479,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16221,
                "atk": 1119,
                "hp": 6091,
                "spd": 100,
                "def": 594,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Kikirat v2": {
        "code": "c3084",
        "_id": "kikirat-v2",
        "name": "Kikirat v2",
        "moonlight": true,
        "rarity": 3,
        "attribute": "light",
        "role": "knight",
        "zodiac": "goat",
        "self_devotion": {
            "type": "def",
            "grades": {
                "D": 18,
                "C": 27,
                "B": 36,
                "A": 45,
                "S": 54,
                "SS": 63,
                "SSS": 72
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3084_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3084_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.5,
                "pow": 1,
                "targets": 1,
                "selfDefScaling": 0.7,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.4,
                "pow": 1,
                "targets": 3,
                "selfDefScaling": 0.5,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12320,
                "atk": 534,
                "hp": 4542,
                "spd": 90,
                "def": 603,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.06
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15835,
                "atk": 667,
                "hp": 5704,
                "spd": 90,
                "def": 749,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.18
            }
        }
    },
    "Kiris": {
        "code": "c3063",
        "_id": "kiris",
        "name": "Kiris",
        "moonlight": false,
        "rarity": 3,
        "attribute": "wind",
        "role": "ranger",
        "zodiac": "goat",
        "self_devotion": {
            "type": "max_hp",
            "grades": {
                "D": 180,
                "C": 270,
                "B": 360,
                "A": 450,
                "S": 540,
                "SS": 630,
                "SSS": 720
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3063_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3063_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.9,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 1,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11702,
                "atk": 687,
                "hp": 4028,
                "spd": 110,
                "def": 438,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15018,
                "atk": 857,
                "hp": 5057,
                "spd": 110,
                "def": 543,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.3,
                "efr": 0
            }
        }
    },
    "Kise": {
        "code": "c1006",
        "_id": "kise",
        "name": "Kise",
        "moonlight": false,
        "rarity": 5,
        "attribute": "ice",
        "role": "assassin",
        "zodiac": "lion",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1006_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1006_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc101601",
                "id": "exc101601",
                "name": "Azure Dragon's Spirit",
                "description": "A ribbon with special powers that allows the wearer to harness their innate dragon powers.",
                "unit": "c1016",
                "role": "warrior",
                "rarity": 5,
                "stat": {
                    "type": "speed",
                    "value": 5
                },
                "skills": [
                    {
                        "skill": 1,
                        "description": "35% chance to extend the caster's buff durations by 1 turn when using Double Slash.",
                        "skill_description": "Attacks by swinging their weapon, with a {{variable}} chance to decrease Defense for 2 turns, before a 35% chance to extend the caster's buff durations by 1 turn.",
                        "values": [
                            18
                        ],
                        "_id": 0
                    },
                    {
                        "skill": 1,
                        "description": "Damage dealt is increased by 30% when using Double Slash.",
                        "skill_description": null,
                        "values": [],
                        "_id": 1
                    },
                    {
                        "skill": 2,
                        "description": "Increases chance of inflicting silence with Dragon's Roar by 15%.",
                        "skill_description": null,
                        "values": [],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1016.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 1,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.6,
                "pow": 1,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13126,
                "atk": 983,
                "hp": 4092,
                "spd": 116,
                "def": 421,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16674,
                "atk": 1283,
                "hp": 5138,
                "spd": 116,
                "def": 522,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Kitty Clarissa": {
        "code": "c2028",
        "_id": "kitty-clarissa",
        "name": "Kitty Clarissa",
        "moonlight": true,
        "rarity": 4,
        "attribute": "dark",
        "role": "warrior",
        "zodiac": "maiden",
        "self_devotion": {
            "type": "res",
            "grades": {
                "C": 0.068,
                "B": 0.102,
                "A": 0.136,
                "S": 0.17,
                "SS": 0.204,
                "SSS": 0.238
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2028_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2028_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc202201",
                "id": "exc202201",
                "name": "Ruele's Sad Promise",
                "description": "A mysterious concoction of life created by combining the laws of light and nature and the love of a noble soul.",
                "unit": "c2022",
                "role": "manauser",
                "rarity": 5,
                "stat": {
                    "type": "res",
                    "value": 0.08
                },
                "skills": [
                    {
                        "skill": 1,
                        "description": "Dispels one debuff from the ally with the lowest Health when using Key to an Oath.",
                        "skill_description": "Attacks the enemy with a staff and heals the ally with the lowest Health, before dispelling one debuff. Healing increases proportional to the target's max Health.",
                        "values": [],
                        "_id": 0
                    },
                    {
                        "skill": 2,
                        "description": "Has a 30% chance to reset skill cooldown of Regen when using Regen.",
                        "skill_description": "Blesses an ally, recovering their Health and increasing their Combat Readiness by 50%. Healing increases proportional to the caster's max Health. When this skill is used, has a 30% chance to reset this skill's cooldown.",
                        "values": [],
                        "_id": 1
                    },
                    {
                        "skill": 3,
                        "description": "Decreases skill cooldown of Destina's Grace by 1 turn.",
                        "skill_description": null,
                        "values": [],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c2022.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 0.8,
                "targets": 1,
                "selfHpScaling": 0.06,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.8,
                "pow": 0.95,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.6,
                "pow": 1,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12701,
                "atk": 767,
                "hp": 4028,
                "spd": 112,
                "def": 477,
                "chc": 0.19,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16298,
                "atk": 957,
                "hp": 5057,
                "spd": 112,
                "def": 592,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "Kizuna AI": {
        "code": "c1107",
        "_id": "kizuna-ai",
        "name": "Kizuna AI",
        "moonlight": false,
        "rarity": 4,
        "attribute": "fire",
        "role": "manauser",
        "zodiac": "crab",
        "self_devotion": {
            "type": "max_hp_rate",
            "grades": {
                "C": 0.04,
                "B": 0.06,
                "A": 0.08,
                "S": 0.1,
                "SS": 0.12,
                "SSS": 0.14
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1107_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1107_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.5,
                "pow": 0.9,
                "targets": 1,
                "selfHpScaling": 0.12,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S2 heal",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.145
                    }
                ]
            },
            "S3": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S3 barrier",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.182
                    }
                ]
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 15120,
                "atk": 462,
                "hp": 4326,
                "spd": 98,
                "def": 598,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 19232,
                "atk": 576,
                "hp": 5700,
                "spd": 98,
                "def": 743,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Kluri": {
        "code": "c3003",
        "_id": "kluri",
        "name": "Kluri",
        "moonlight": false,
        "rarity": 3,
        "attribute": "wind",
        "role": "knight",
        "zodiac": "ram",
        "self_devotion": {
            "type": "def",
            "grades": {
                "D": 18,
                "C": 27,
                "B": 36,
                "A": 45,
                "S": 54,
                "SS": 63,
                "SSS": 72
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3003_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3003_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.5,
                "pow": 0.9,
                "targets": 1,
                "selfDefScaling": 0.7,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11779,
                "atk": 564,
                "hp": 4709,
                "spd": 105,
                "def": 480,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.06,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15140,
                "atk": 703,
                "hp": 5914,
                "spd": 105,
                "def": 596,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "Krau": {
        "code": "c1070",
        "_id": "krau",
        "name": "Krau",
        "moonlight": false,
        "rarity": 5,
        "attribute": "ice",
        "role": "knight",
        "zodiac": "fish",
        "self_devotion": {
            "type": "max_hp_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1070_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1070_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc100301",
                "id": "exc100301",
                "name": "Valkyrie Wing",
                "description": "A mysterious circlet that symbolizes strength and beauty, and is the source of Rose's Fighting Spirit.",
                "unit": "c1003",
                "role": "knight",
                "rarity": 5,
                "stat": {
                    "type": "speed",
                    "value": 5
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 1,
                "targets": 1,
                "selfHpScaling": 0.085,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.8,
                "pow": 1,
                "targets": 1,
                "selfHpScaling": 0.13,
                "options": []
            },
            "S3": {
                "hitTypes": ["normal", "miss"],
                "note": "no missing health",
                "rate": 0.3,
                "pow": 1,
                "targets": 1,
                "penetration": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13718,
                "atk": 673,
                "hp": 5101,
                "spd": 100,
                "def": 607,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.06
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17610,
                "atk": 839,
                "hp": 6405,
                "spd": 100,
                "def": 752,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.18
            }
        }
    },
    "Command Model Laika": {
        "code": "c1099",
        "_id": "command-model-laika",
        "name": "Command Model Laika",
        "moonlight": false,
        "rarity": 5,
        "attribute": "wind",
        "role": "ranger",
        "zodiac": "twins",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "B": 0.09,
                "A": 0.135,
                "S": 0.18,
                "SS": 0.225,
                "SSS": 0.27
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1099_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1099_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc101099",
                "id": "exc101099",
                "name": "Prototype Memory Card",
                "description": "A memory card that was installed in Laika when she was first produced. Brinus gave it to her in a small gift box and told her to go through its contents whenever Laika felt the need.",
                "unit": "c1099",
                "role": "ranger",
                "rarity": 5,
                "stat": {
                    "type": "speed",
                    "value": 5
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.1,
                "pow": 1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13288,
                "atk": 904,
                "hp": 4221,
                "spd": 114,
                "def": 460,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16848,
                "atk": 1182,
                "hp": 5299,
                "spd": 114,
                "def": 571,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "Landy": {
        "code": "c1109",
        "_id": "landy",
        "name": "Landy",
        "moonlight": false,
        "rarity": 5,
        "attribute": "wind",
        "role": "ranger",
        "zodiac": "lion",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1109_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1109_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13356,
                "atk": 928,
                "hp": 4536,
                "spd": 112,
                "def": 446,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16976,
                "atk": 1158,
                "hp": 6002,
                "spd": 112,
                "def": 553,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Last Piece Karin": {
        "code": "c6011",
        "_id": "last-piece-karin",
        "name": "Last Piece Karin",
        "moonlight": true,
        "rarity": 4,
        "attribute": "light",
        "role": "assassin",
        "zodiac": "ram",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "C": 0.042,
                "B": 0.063,
                "A": 0.084,
                "S": 0.105,
                "SS": 0.126,
                "SSS": 0.147
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c6011_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c6011_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 1,
                "targets": 1,
                "selfSpdScaling": 0.00075,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 1,
                "targets": 1,
                "selfSpdScaling": 0.00075,
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12112,
                "atk": 825,
                "hp": 4060,
                "spd": 122,
                "def": 381,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15297,
                "atk": 1029,
                "hp": 5097,
                "spd": 126,
                "def": 473,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Last Rider Krau": {
        "code": "c2070",
        "_id": "last-rider-krau",
        "name": "Last Rider Krau",
        "moonlight": true,
        "rarity": 5,
        "attribute": "light",
        "role": "knight",
        "zodiac": "fish",
        "self_devotion": {
            "type": "max_hp_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2070_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2070_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 1,
                "targets": 1,
                "selfHpScaling": 0.1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S2 barrier",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.105
                    }
                ]
            },
            "S3": {
                "hitTypes": ["normal", "miss"],
                "rate": 0.3,
                "pow": 1,
                "targets": 3,
                "selfHpScaling": 0.06,
                "selfSpdScaling": 0.001125,
                "penetration": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13718,
                "atk": 673,
                "hp": 5101,
                "spd": 100,
                "def": 607,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.06
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17610,
                "atk": 839,
                "hp": 6405,
                "spd": 100,
                "def": 752,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.18
            }
        }
    },
    "Lena": {
        "code": "c3092",
        "_id": "lena",
        "name": "Lena",
        "moonlight": false,
        "rarity": 3,
        "attribute": "ice",
        "role": "warrior",
        "zodiac": "scales",
        "self_devotion": {
            "type": "att",
            "grades": {
                "D": 36,
                "C": 54,
                "B": 72,
                "A": 90,
                "S": 108,
                "SS": 126,
                "SSS": 144
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3092_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3092_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.15,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11788,
                "atk": 762,
                "hp": 4171,
                "spd": 104,
                "def": 469,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 0,
                "overrideDef": 0,
                "overrideAdditionalCr": 0.5,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15002,
                "atk": 951,
                "hp": 5517,
                "spd": 104,
                "def": 583,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 0,
                "overrideDef": 0,
                "overrideAdditionalCr": 0.5,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            }
        }
    },
    "Leo": {
        "code": "c1029",
        "_id": "leo",
        "name": "Leo",
        "moonlight": false,
        "rarity": 4,
        "attribute": "wind",
        "role": "ranger",
        "zodiac": "goat",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "C": 0.068,
                "B": 0.102,
                "A": 0.136,
                "S": 0.17,
                "SS": 0.204,
                "SSS": 0.238
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1029_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1029_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.35,
                "pow": 1.05,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.8,
                "pow": 0.8,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12475,
                "atk": 746,
                "hp": 4285,
                "spd": 112,
                "def": 455,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16007,
                "atk": 930,
                "hp": 5380,
                "spd": 112,
                "def": 564,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.3,
                "efr": 0
            }
        }
    },
    "Lethe": {
        "code": "c5149",
        "_id": "lethe",
        "name": "Lethe",
        "moonlight": false,
        "rarity": 5,
        "attribute": "ice",
        "role": "warrior",
        "zodiac": "waterbearer",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "B": 0.09,
                "A": 0.135,
                "S": 0.18,
                "SS": 0.225,
                "SSS": 0.27
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c5149_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c5149_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["normal", "miss"],
                "rate": 0.3,
                "pow": 1.3,
                "targets": 1,
                "selfHpScaling": 0.22,
                "penetration": 1,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1.05,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 17097,
                "atk": 885,
                "hp": 6149,
                "spd": 121,
                "def": 613,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17097,
                "atk": 885,
                "hp": 6149,
                "spd": 121,
                "def": 613,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "Lidica": {
        "code": "c1046",
        "_id": "lidica",
        "name": "Lidica",
        "moonlight": false,
        "rarity": 5,
        "attribute": "fire",
        "role": "ranger",
        "zodiac": "maiden",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1046_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1046_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc104601",
                "id": "exc104601",
                "name": "Eternal Rose",
                "description": "A rose that Lidica picked when she was excommunicated from the Rose Apostles. It has been specially treated to ensure it never withers but also lost its scent in the process.",
                "unit": "c1046",
                "role": "ranger",
                "rarity": 5,
                "stat": {
                    "type": "acc",
                    "value": 0.08
                },
                "skills": [
                    {
                        "skill": 1,
                        "description": "Damage dealt is increased by 20% when using Wild Rose.",
                        "skill_description": null,
                        "values": [],
                        "_id": 0
                    },
                    {
                        "skill": 1,
                        "description": "Increases base Combat Readiness reduction by 5% when using Wild Rose.",
                        "skill_description": "Attacks with a sword, decreasing Combat Readiness by 15%. When the enemy is debuffed, decreases Combat Readiness by an additional 10%.",
                        "values": [],
                        "_id": 1
                    },
                    {
                        "skill": 2,
                        "description": "Dispels an additional buff when using Thornbush.",
                        "skill_description": "Attacks all enemies, with a {{variable}} chance each to decrease Hit Chance for 1 turn, make them unhealable for 1 turn, and dispel two buffs.",
                        "values": [
                            22,
                            27
                        ],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1046.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 1,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.6,
                "pow": 1,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12952,
                "atk": 983,
                "hp": 3964,
                "spd": 124,
                "def": 432,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16448,
                "atk": 1283,
                "hp": 4976,
                "spd": 124,
                "def": 536,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Lilka": {
        "code": "c3153",
        "_id": "lilka",
        "name": "Lilka",
        "moonlight": false,
        "rarity": 3,
        "attribute": "wind",
        "role": "ranger",
        "zodiac": "twins",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "D": 0.028,
                "C": 0.042,
                "B": 0.056,
                "A": 0.07,
                "S": 0.084,
                "SS": 0.098,
                "SSS": 0.112
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3153_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3153_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.9,
                "pow": 0.95,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11667,
                "atk": 769,
                "hp": 3739,
                "spd": 109,
                "def": 429,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 14767,
                "atk": 1005,
                "hp": 4693,
                "spd": 109,
                "def": 532,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "Lilias": {
        "code": "c1089",
        "_id": "lilias",
        "name": "Lilias",
        "moonlight": false,
        "rarity": 5,
        "attribute": "fire",
        "role": "knight",
        "zodiac": "ram",
        "self_devotion": {
            "type": "max_hp_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1089_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1089_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.8,
                "pow": 0.95,
                "selfHpScaling": 0.12,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S2 barrier",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.2
                    }
                ]
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13403,
                "atk": 658,
                "hp": 5375,
                "spd": 110,
                "def": 523,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.06,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17219,
                "atk": 821,
                "hp": 6751,
                "spd": 110,
                "def": 648,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "Lilibet": {
        "code": "c1095",
        "_id": "lilibet",
        "name": "Lilibet",
        "moonlight": false,
        "rarity": 5,
        "attribute": "wind",
        "role": "warrior",
        "zodiac": "scales",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1095_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1095_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc109501",
                "id": "exc109501",
                "name": "Soul Tailor",
                "description": "A medal bestowed only to the most talented of tailors. As it is a family heirloom, Lilibet received it from her mother, with whom she has been separated from childhood.",
                "unit": "c1095",
                "role": "warrior",
                "rarity": 5,
                "stat": {
                    "type": "cri",
                    "value": 0.06
                },
                "skills": [
                    {
                        "skill": 1,
                        "description": "Damage dealt is increased by 20% when using Slice-Slice.",
                        "skill_description": null,
                        "values": [],
                        "_id": 0
                    },
                    {
                        "skill": 2,
                        "description": "Increases chance of inflicting bleeding with Snip-Snip by 15%.",
                        "skill_description": null,
                        "values": [],
                        "_id": 1
                    },
                    {
                        "skill": 3,
                        "description": "Damage dealt is increased by 10% when using Soul Cutter.",
                        "skill_description": null,
                        "values": [
                            52,
                            46
                        ],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1095.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 2,
                "pow": 0.95,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13440,
                "atk": 897,
                "hp": 4735,
                "spd": 109,
                "def": 505,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17097,
                "atk": 1119,
                "hp": 6266,
                "spd": 109,
                "def": 627,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Lionheart Cermia": {
        "code": "c2079",
        "_id": "lionheart-cermia",
        "name": "Lionheart Cermia",
        "moonlight": true,
        "rarity": 5,
        "attribute": "light",
        "role": "warrior",
        "zodiac": "fish",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "B": 0.056,
                "A": 0.084,
                "S": 0.112,
                "SS": 0.14,
                "SSS": 0.168
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2079_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2079_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.6,
                "pow": 0.9,
                "targets": 1,
                "selfDefScaling": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.3,
                "pow": 0.9,
                "targets": 3,
                "selfDefScaling": 1.35,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13727,
                "atk": 1040,
                "hp": 4414,
                "spd": 105,
                "def": 472,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17416,
                "atk": 966,
                "hp": 5663,
                "spd": 112,
                "def": 668,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.3
            }
        }
    },
    "Little Queen Charlotte": {
        "code": "c2009",
        "_id": "little-queen-charlotte",
        "name": "Little Queen Charlotte",
        "moonlight": true,
        "rarity": 5,
        "attribute": "light",
        "role": "warrior",
        "zodiac": "scales",
        "self_devotion": {
            "type": "def_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2009_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2009_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.2,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "note": "not including splash",
                "rate": 1.5,
                "pow": 1,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13440,
                "atk": 897,
                "hp": 4735,
                "spd": 109,
                "def": 505,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17097,
                "atk": 1119,
                "hp": 6266,
                "spd": 109,
                "def": 627,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Lone Crescent Bellona": {
        "code": "c2071",
        "_id": "lone-crescent-bellona",
        "name": "Lone Crescent Bellona",
        "moonlight": true,
        "rarity": 5,
        "attribute": "dark",
        "role": "warrior",
        "zodiac": "scorpion",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2071_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2071_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 0.95,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.6,
                "pow": 1,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 1,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 16221,
                "atk": 1208,
                "hp": 6488,
                "spd": 102,
                "def": 616,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16221,
                "atk": 1208,
                "hp": 6488,
                "spd": 102,
                "def": 616,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Lorina": {
        "code": "c3035",
        "_id": "lorina",
        "name": "Lorina",
        "moonlight": true,
        "rarity": 3,
        "attribute": "dark",
        "role": "warrior",
        "zodiac": "lion",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "D": 0.028,
                "C": 0.042,
                "B": 0.056,
                "A": 0.07,
                "S": 0.084,
                "SS": 0.098,
                "SSS": 0.112
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3035_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3035_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.9,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 0.95,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11978,
                "atk": 878,
                "hp": 3899,
                "spd": 101,
                "def": 438,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15164,
                "atk": 1144,
                "hp": 4895,
                "spd": 101,
                "def": 543,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Lots": {
        "code": "c1031",
        "_id": "lots",
        "name": "Lots",
        "moonlight": false,
        "rarity": 4,
        "attribute": "wind",
        "role": "manauser",
        "zodiac": "twins",
        "self_devotion": {
            "type": "max_hp_rate",
            "grades": {
                "C": 0.04,
                "B": 0.06,
                "A": 0.08,
                "S": 0.1,
                "SS": 0.12,
                "SSS": 0.14
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1031_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1031_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S2 heal",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.15
                    }
                ]
            },
            "S3": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S3 heal",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.1
                    }
                ]
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 14745,
                "atk": 484,
                "hp": 3741,
                "spd": 103,
                "def": 534,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.3
            },
            "lv60SixStarFullyAwakened": {
                "cp": 18738,
                "atk": 603,
                "hp": 4945,
                "spd": 103,
                "def": 662,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.3
            }
        }
    },
    "Lua": {
        "code": "c1126",
        "_id": "Lua",
        "name": "Lua",
        "moonlight": false,
        "rarity": 5,
        "attribute": "ice",
        "role": "ranger",
        "zodiac": "fish",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "B": 0.09,
                "A": 0.135,
                "S": 0.18,
                "SS": 0.225,
                "SSS": 0.27
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1126_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1126_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.95,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 0.9,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 16999,
                "atk": 797,
                "hp": 4536,
                "spd": 120,
                "def": 492,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 21659,
                "atk": 993,
                "hp": 6002,
                "spd": 120,
                "def": 611,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Lucy": {
        "code": "c3113",
        "_id": "lucy",
        "name": "Lucy",
        "moonlight": false,
        "rarity": 3,
        "attribute": "wind",
        "role": "manauser",
        "zodiac": "maiden",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "D": 0.045,
                "C": 0.068,
                "B": 0.09,
                "A": 0.112,
                "S": 0.135,
                "SS": 0.158,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3113_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3113_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.95,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 0.95,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S3 barrier",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.2
                    }
                ]
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13894,
                "atk": 447,
                "hp": 3771,
                "spd": 102,
                "def": 533,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.06,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17734,
                "atk": 558,
                "hp": 4733,
                "spd": 102,
                "def": 661,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "Ludwig": {
        "code": "c1069",
        "_id": "ludwig",
        "name": "Ludwig",
        "moonlight": false,
        "rarity": 5,
        "attribute": "wind",
        "role": "mage",
        "zodiac": "lion",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "B": 0.056,
                "A": 0.084,
                "S": 0.112,
                "SS": 0.14,
                "SSS": 0.168
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1069_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1069_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc101601",
                "id": "exc101601",
                "name": "Azure Dragon's Spirit",
                "description": "A ribbon with special powers that allows the wearer to harness their innate dragon powers.",
                "unit": "c1016",
                "role": "warrior",
                "rarity": 5,
                "stat": {
                    "type": "att_rate",
                    "value": 0.07
                },
                "skills": [
                    {
                        "skill": 1,
                        "description": "35% chance to extend the caster's buff durations by 1 turn when using Double Slash.",
                        "skill_description": "Attacks by swinging their weapon, with a {{variable}} chance to decrease Defense for 2 turns, before a 35% chance to extend the caster's buff durations by 1 turn.",
                        "values": [
                            18
                        ],
                        "_id": 0
                    },
                    {
                        "skill": 1,
                        "description": "Damage dealt is increased by 30% when using Double Slash.",
                        "skill_description": null,
                        "values": [],
                        "_id": 1
                    },
                    {
                        "skill": 2,
                        "description": "Increases chance of inflicting silence with Dragon's Roar by 15%.",
                        "skill_description": null,
                        "values": [],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1016.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.65,
                "pow": 1.05,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "note": "60% penetration",
                "rate": 0.9,
                "pow": 0.95,
                "targets": 3,
                "penetration": 0.6,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13169,
                "atk": 1079,
                "hp": 3385,
                "spd": 112,
                "def": 520,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16722,
                "atk": 1412,
                "hp": 4248,
                "spd": 112,
                "def": 645,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Luluca": {
        "code": "c1082",
        "_id": "luluca",
        "name": "Luluca",
        "moonlight": false,
        "rarity": 5,
        "attribute": "ice",
        "role": "mage",
        "zodiac": "waterbearer",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1082_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1082_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc108201",
                "id": "exc108201",
                "name": "Communion Lotus",
                "description": "A physical manifestation of the power gained through communion with the Spirits. Its form and nature change as needed.",
                "unit": "c1082",
                "role": "mage",
                "rarity": 5,
                "stat": {
                    "type": "acc",
                    "value": 0.08
                },
                "skills": [
                    {
                        "skill": 1,
                        "description": "Increases decrease Defense chance by 15% when using Wild Wave.",
                        "skill_description": "Attacks with intense elemental force, with a 65% chance to decrease Defense for 2 turns. Damage dealt increases proportional to the amount of the enemy's lost Health.",
                        "values": [
                            18
                        ],
                        "_id": 0
                    },
                    {
                        "skill": 1,
                        "description": "Has a 35% chance to grant an extra attack with the same skill when using Wild Wave. Extra attack can only be granted once per turn of the caster.",
                        "skill_description": "Attacks with intense elemental force, with a 50% chance to decrease Defense for 2 turns. Damage dealt increases proportional to the amount of the enemy's lost Health. Has a 35% chance to grant an extra attack with the same skill. Extra attack can only be granted once per turn of the caster.",
                        "values": [
                            18
                        ],
                        "_id": 1
                    },
                    {
                        "skill": 3,
                        "description": "Has a 75% chance to decrease Attack of all enemies for 2 turns when using Wave of Vengeance.",
                        "skill_description": "Attacks all enemies with the power of ruin, with a {{variable}} chance to decrease Defense for 2 turns, before a 75% chance to decrease Attack for 2 turns. Increases Attack of the caster, and increased Attack can stack up to 3 times.",
                        "values": [
                            17,
                            18
                        ],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1082.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S2 barrier",
                        "rate": 0,
                        "pow": 0,
                        "selfAtkScaling": 0.375
                    }
                ]
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 1.05,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 14048,
                "atk": 1056,
                "hp": 3806,
                "spd": 108,
                "def": 576,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.06,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 18032,
                "atk": 1316,
                "hp": 4777,
                "spd": 108,
                "def": 715,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "Luna": {
        "code": "c1066",
        "_id": "luna",
        "name": "Luna",
        "moonlight": false,
        "rarity": 5,
        "attribute": "ice",
        "role": "warrior",
        "zodiac": "scales",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1066_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1066_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc106601",
                "id": "exc106601",
                "name": "Dragon Emerald",
                "description": "Jewelry that Luna's father passed on to her. It is the only thing her mother left behind when she left.",
                "unit": "c1066",
                "role": "warrior",
                "rarity": 5,
                "stat": {
                    "type": "att_rate",
                    "value": 0.07
                },
                "skills": [
                    {
                        "skill": 1,
                        "description": "Increases the caster's Combat Readiness by 15% after using Infinity Slash.",
                        "skill_description": "Stabs the target a random number of times, before increasing Combat Readiness of the caster by 15%. Skill cooldown decreases by 1-3 turns and damage dealt increases according to the number of attacks.",
                        "values": [],
                        "_id": 0
                    },
                    {
                        "skill": 3,
                        "description": "Decreases the enemy's Attack for 2 turns after using Ragnar Spear.",
                        "skill_description": "Soars into the air and hits the enemy with a spear, with a {{variable}} chance to decrease Defense for 2 turns and a 100% chance to decrease Attack for 2 turns. Attacks using an advantageous element.",
                        "values": [
                            18,
                            17
                        ],
                        "_id": 1
                    },
                    {
                        "skill": 3,
                        "description": "Grants an extra turn to the caster when the enemy is defeated by Ragnar Spear.",
                        "skill_description": "Soars into the air and hits the enemy with a spear, with a {{variable}} chance to decrease Defense for 2 turns. Attacks using an advantageous element. Grants an extra turn to the caster when the enemy is defeated.",
                        "values": [
                            18,
                            35
                        ],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1066.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "note": "max hits",
                "rate": 2.1,
                "pow": 0.95,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.1,
                "pow": 1.05,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13440,
                "atk": 897,
                "hp": 4735,
                "spd": 109,
                "def": 505,
                "chc": 0.45,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17097,
                "atk": 1119,
                "hp": 6266,
                "spd": 109,
                "def": 627,
                "chc": 0.45,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Magic Scholar Doris": {
        "code": "c4044",
        "_id": "magic-scholar-doris",
        "name": "Magic Scholar Doris",
        "moonlight": true,
        "rarity": 3,
        "attribute": "light",
        "role": "manauser",
        "zodiac": "crab",
        "self_devotion": {
            "type": "max_hp",
            "grades": {
                "D": 180,
                "C": 270,
                "B": 360,
                "A": 450,
                "S": 540,
                "SS": 630,
                "SSS": 720
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4044_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4044_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S2 heal",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.15
                    }
                ]
            },
            "S3": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S3 heal",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.25
                    }
                ]
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 14137,
                "atk": 433,
                "hp": 4038,
                "spd": 96,
                "def": 569,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 4368,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 5,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0.25
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17952,
                "atk": 540,
                "hp": 5319,
                "spd": 96,
                "def": 705,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 5734,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 5,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0.25
            }
        }
    },
    "Maid Chloe": {
        "code": "c2049",
        "_id": "maid-chloe",
        "name": "Maid Chloe",
        "moonlight": true,
        "rarity": 5,
        "attribute": "light",
        "role": "manauser",
        "zodiac": "maiden",
        "self_devotion": {
            "type": "res",
            "grades": {
                "B": 0.09,
                "A": 0.135,
                "S": 0.18,
                "SS": 0.225,
                "SSS": 0.27
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2049_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2049_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S2 heal",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.12
                    }
                ]
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 15694,
                "atk": 513,
                "hp": 4253,
                "spd": 106,
                "def": 580,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.06,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 20045,
                "atk": 640,
                "hp": 5340,
                "spd": 106,
                "def": 720,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "Martial Artist Ken": {
        "code": "c2047",
        "_id": "martial-artist-ken",
        "name": "Martial Artist Ken",
        "moonlight": true,
        "rarity": 5,
        "attribute": "dark",
        "role": "warrior",
        "zodiac": "lion",
        "self_devotion": {
            "type": "res",
            "grades": {
                "B": 0.09,
                "A": 0.135,
                "S": 0.18,
                "SS": 0.225,
                "SSS": 0.27
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2047_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2047_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.95,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.2,
                "pow": 0.95,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13727,
                "atk": 1040,
                "hp": 4414,
                "spd": 105,
                "def": 472,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 0,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0.3
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17416,
                "atk": 1359,
                "hp": 5542,
                "spd": 105,
                "def": 585,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 0,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0.3
            }
        }
    },
    "Mascot Hazel": {
        "code": "c4041",
        "_id": "mascot-hazel",
        "name": "Mascot Hazel",
        "moonlight": false,
        "rarity": 3,
        "attribute": "fire",
        "role": "manauser",
        "zodiac": "waterbearer",
        "self_devotion": {
            "type": "att",
            "grades": {
                "D": 36,
                "C": 54,
                "B": 72,
                "A": 90,
                "S": 108,
                "SS": 126,
                "SSS": 144
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4041_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4041_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1.05,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S2 heal",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.15,
                        "selfAtkScaling": 0.3
                    }
                ]
            },
            "S3": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S3 heal",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.12,
                        "selfAtkScaling": 0.3
                    }
                ]
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 14054,
                "atk": 680,
                "hp": 3546,
                "spd": 97,
                "def": 534,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 680,
                "overrideHp": 4187,
                "overrideDef": 534,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 10,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17847,
                "atk": 849,
                "hp": 4450,
                "spd": 101,
                "def": 662,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 849,
                "overrideHp": 5256,
                "overrideDef": 662,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 10,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            }
        }
    },
    "Maya": {
        "code": "c1032",
        "_id": "maya",
        "name": "Maya",
        "moonlight": false,
        "rarity": 4,
        "attribute": "fire",
        "role": "knight",
        "zodiac": "ram",
        "self_devotion": {
            "type": "def_rate",
            "grades": {
                "C": 0.04,
                "B": 0.06,
                "A": 0.08,
                "S": 0.1,
                "SS": 0.12,
                "SSS": 0.14
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1032_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1032_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.5,
                "pow": 0.95,
                "targets": 1,
                "selfDefScaling": 0.75,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.8,
                "pow": 1,
                "targets": 1,
                "selfDefScaling": 0.8,
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13492,
                "atk": 658,
                "hp": 5411,
                "spd": 112,
                "def": 523,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.06,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17334,
                "atk": 821,
                "hp": 6796,
                "spd": 112,
                "def": 648,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "Mediator Kawerik": {
        "code": "c2073",
        "_id": "mediator-kawerik",
        "name": "Mediator Kawerik",
        "moonlight": true,
        "rarity": 5,
        "attribute": "dark",
        "role": "warrior",
        "zodiac": "goat",
        "self_devotion": {
            "type": "res",
            "grades": {
                "B": 0.09,
                "A": 0.135,
                "S": 0.18,
                "SS": 0.225,
                "SSS": 0.27
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2073_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2073_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "selfHpScaling": 0.04,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 1,
                "targets": 1,
                "selfHpScaling": 0.09,
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13730,
                "atk": 775,
                "hp": 5551,
                "spd": 102,
                "def": 530,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17484,
                "atk": 966,
                "hp": 7323,
                "spd": 102,
                "def": 657,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Melany": {
        "code": "c3121",
        "_id": "melany",
        "name": "Melany",
        "moonlight": false,
        "rarity": 3,
        "attribute": "fire",
        "role": "warrior",
        "zodiac": "scales",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "D": 0.045,
                "C": 0.068,
                "B": 0.09,
                "A": 0.112,
                "S": 0.135,
                "SS": 0.158,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3121_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3121_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11788,
                "atk": 762,
                "hp": 4171,
                "spd": 104,
                "def": 469,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15002,
                "atk": 951,
                "hp": 5517,
                "spd": 104,
                "def": 583,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Melissa": {
        "code": "c1096",
        "_id": "melissa",
        "name": "Melissa",
        "moonlight": false,
        "rarity": 5,
        "attribute": "fire",
        "role": "mage",
        "zodiac": "lion",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1096_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1096_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc102301",
                "id": "exc102301",
                "name": "Grudge Marble",
                "description": "A marble filled with the grudges of people who pledged their souls and loyalty to Kayron",
                "unit": "c1023",
                "role": "mage",
                "rarity": 5,
                "stat": {
                    "type": "cri",
                    "value": 0.06
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1.1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 0.95,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.2,
                "pow": 1,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13169,
                "atk": 1079,
                "hp": 3385,
                "spd": 112,
                "def": 520,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16722,
                "atk": 1412,
                "hp": 4248,
                "spd": 112,
                "def": 645,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Mercedes": {
        "code": "c0002",
        "_id": "mercedes",
        "name": "Mercedes",
        "moonlight": false,
        "rarity": 4,
        "attribute": "fire",
        "role": "mage",
        "zodiac": "scorpion",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "C": 0.04,
                "B": 0.06,
                "A": 0.08,
                "S": 0.1,
                "SS": 0.12,
                "SSS": 0.14
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c0002_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c0002_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 0.95,
                "targets": 2,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 1,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.15,
                "pow": 0.95,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12684,
                "atk": 906,
                "hp": 3578,
                "spd": 101,
                "def": 506,
                "chc": 0.27,
                "chd": 1.6,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16087,
                "atk": 1187,
                "hp": 4491,
                "spd": 101,
                "def": 627,
                "chc": 0.27,
                "chd": 1.6,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Mercenary Helga": {
        "code": "c4023",
        "_id": "mercenary-helga",
        "name": "Mercenary Helga",
        "moonlight": false,
        "rarity": 3,
        "attribute": "wind",
        "role": "warrior",
        "zodiac": "archer",
        "self_devotion": {
            "type": "att",
            "grades": {
                "D": 36,
                "C": 54,
                "B": 72,
                "A": 90,
                "S": 108,
                "SS": 126,
                "SSS": 144
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4023_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4023_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.55,
                "pow": 0.95,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11710,
                "atk": 802,
                "hp": 3899,
                "spd": 114,
                "def": 418,
                "chc": 0.19,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 896,
                "overrideHp": 4717,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0.25,
                "overrideAdditionalRes": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15062,
                "atk": 1000,
                "hp": 4895,
                "spd": 114,
                "def": 518,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 1117,
                "overrideHp": 5924,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0.25,
                "overrideAdditionalRes": 0
            }
        }
    },
    "Mighty Scout": {
        "code": "m0063",
        "_id": "mighty-scout",
        "name": "Mighty Scout",
        "moonlight": false,
        "rarity": 2,
        "attribute": "wind",
        "role": "warrior",
        "zodiac": "goat",
        "self_devotion": {
            "type": "max_hp",
            "grades": {
                "C": 0,
                "B": 0,
                "A": 0,
                "S": 0,
                "SS": 0,
                "SSS": 0
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/m0063_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/m0063_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0,
                "pow": 0,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0,
                "pow": 0,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0,
                "pow": 0,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12452,
                "atk": 778,
                "hp": 4726,
                "spd": 106,
                "def": 449,
                "chc": 0.19,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15955,
                "atk": 919,
                "hp": 5237,
                "spd": 116,
                "def": 525,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.12,
                "efr": 0
            }
        }
    },
    "Milim": {
        "code": "c1122",
        "_id": "milim",
        "name": "Milim",
        "moonlight": false,
        "rarity": 5,
        "attribute": "fire",
        "role": "mage",
        "zodiac": "crab",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1122_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1122_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc110301",
                "id": "exc110301",
                "name": "Reingar PSC Armband",
                "description": "An armband Celine wore when she was a part of the Reingar Public Security Club. She keeps it with her to help remind her of those days.",
                "unit": "c1103",
                "role": "assassin",
                "rarity": 5,
                "stat": {
                    "type": "cri",
                    "value": 0.06
                },
                "skills": [
                    {
                        "skill": 2,
                        "description": "Grants the caster stealth for 2 turns after using Blink.",
                        "skill_description": "Attacks a random enemy with Blink when an enemy uses a non-attack skill. Can be activated once every 2 turns.\nBlink: Cuts the enemy in the blink of an eye, before granting the caster stealth for 2 turns. When the enemy is not an Elite or Boss monster, damage sharing effects are ignored.",
                        "values": [
                            15
                        ],
                        "_id": 0
                    },
                    {
                        "skill": 2,
                        "description": "When using Blink, damage dealt is increased by 10% and attacks the enemy with the highest Attack.",
                        "skill_description": "Attacks the enemy with the highest Attack with Blink when an enemy uses a non-attack skill. Can be activated once every 2 turns.\nBlink: Cuts the enemy in the blink of an eye. When the enemy is not an Elite or Boss monster, damage sharing effects are ignored.",
                        "values": [],
                        "_id": 1
                    },
                    {
                        "skill": 3,
                        "description": "Damage dealt is increased by 10% when using Thunderclap.",
                        "skill_description": null,
                        "values": [],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1103.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.7,
                "pow": 1,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13929,
                "atk": 1040,
                "hp": 3899,
                "spd": 110,
                "def": 525,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17685,
                "atk": 1359,
                "hp": 4895,
                "spd": 110,
                "def": 652,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Mirsa": {
        "code": "c3014",
        "_id": "mirsa",
        "name": "Mirsa",
        "moonlight": true,
        "rarity": 3,
        "attribute": "light",
        "role": "assassin",
        "zodiac": "fish",
        "self_devotion": {
            "type": "att",
            "grades": {
                "D": 36,
                "C": 54,
                "B": 72,
                "A": 90,
                "S": 108,
                "SS": 126,
                "SSS": 144
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3014_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3014_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 1,
                "targets": 1,
                "selfSpdScaling": 0.00075,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.8,
                "pow": 0.85,
                "targets": 1,
                "selfSpdScaling": 0.0015,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11405,
                "atk": 709,
                "hp": 3513,
                "spd": 120,
                "def": 404,
                "chc": 0.19,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 14674,
                "atk": 885,
                "hp": 4410,
                "spd": 120,
                "def": 501,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "Mistychain": {
        "code": "c3072",
        "_id": "mistychain",
        "name": "Mistychain",
        "moonlight": false,
        "rarity": 3,
        "attribute": "ice",
        "role": "mage",
        "zodiac": "lion",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "D": 0.028,
                "C": 0.042,
                "B": 0.056,
                "A": 0.07,
                "S": 0.084,
                "SS": 0.098,
                "SSS": 0.112
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3072_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3072_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.3,
                "pow": 1.05,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 1,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11929,
                "atk": 952,
                "hp": 3128,
                "spd": 109,
                "def": 489,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15119,
                "atk": 1244,
                "hp": 3925,
                "spd": 109,
                "def": 606,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Montmorancy": {
        "code": "c3042",
        "_id": "montmorancy",
        "name": "Montmorancy",
        "moonlight": false,
        "rarity": 3,
        "attribute": "ice",
        "role": "manauser",
        "zodiac": "fish",
        "self_devotion": {
            "type": "res",
            "grades": {
                "D": 0.045,
                "C": 0.068,
                "B": 0.09,
                "A": 0.112,
                "S": 0.135,
                "SS": 0.158,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3042_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3042_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S2 heal",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.07
                    }
                ]
            },
            "S3": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S3 heal",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.35
                    }
                ]
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 14246,
                "atk": 433,
                "hp": 3904,
                "spd": 98,
                "def": 556,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.12
            },
            "lv60SixStarFullyAwakened": {
                "cp": 18267,
                "atk": 540,
                "hp": 4900,
                "spd": 98,
                "def": 729,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.12
            }
        }
    },
    "Moon Bunny Dominiel": {
        "code": "c6037",
        "_id": "moon-bunny-dominiel",
        "name": "Moon Bunny Dominiel",
        "moonlight": true,
        "rarity": 4,
        "attribute": "light",
        "role": "manauser",
        "zodiac": "bull",
        "self_devotion": {
            "type": "max_hp_rate",
            "grades": {
                "C": 0.04,
                "B": 0.06,
                "A": 0.08,
                "S": 0.1,
                "SS": 0.12,
                "SSS": 0.14
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c6037_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c6037_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.9,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S2 barrier",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.3045
                    }
                ]
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 14749,
                "atk": 520,
                "hp": 3642,
                "spd": 114,
                "def": 508,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.18,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 0,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0.2
            },
            "lv60SixStarFullyAwakened": {
                "cp": 18832,
                "atk": 649,
                "hp": 4572,
                "spd": 114,
                "def": 631,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.3,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 0,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0.2
            }
        }
    },
    "Mort": {
        "code": "c1104",
        "_id": "mort",
        "name": "Mort",
        "moonlight": false,
        "rarity": 5,
        "attribute": "wind",
        "role": "knight",
        "zodiac": "twins",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "B": 0.056,
                "A": 0.084,
                "S": 0.112,
                "SS": 0.14,
                "SSS": 0.168
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1104_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1104_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc101701",
                "id": "exc101701",
                "name": "Untainted Heart",
                "description": "A staff decorated with a bright red orb that encapsulates both the spirit of charity, and the unwavering determination of Achates.",
                "unit": "c1017",
                "role": "manauser",
                "rarity": 5,
                "stat": {
                    "type": "max_hp_rate",
                    "value": 0.07
                },
                "skills": [
                    {
                        "skill": 1,
                        "description": "Increases the chance to decrease Attack when using Magic Design by 25%.",
                        "skill_description": null,
                        "values": [],
                        "_id": 0
                    },
                    {
                        "skill": 2,
                        "description": "Amount recovered is increased by 67% when using Rapid Cure.",
                        "skill_description": null,
                        "values": [],
                        "_id": 1
                    },
                    {
                        "skill": 3,
                        "description": "Increases Effect Resistance of the caster for 2 turns when using Curing Prayer.",
                        "skill_description": "Dispels debuffs from all allies before healing them. Increases Effect Resistance of the caster for 2 turns. Healing increases proportional to the caster's max Health.",
                        "values": [
                            57
                        ],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1017.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": [],
                "rate": 0.7,
                "pow": 1,
                "targets": 1,
                "selfHpScaling": 0.08,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 1,
                "targets": 3,
                "selfHpScaling": 0.15,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13243,
                "atk": 767,
                "hp": 4896,
                "spd": 109,
                "def": 511,
                "chc": 0.19,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16949,
                "atk": 957,
                "hp": 6148,
                "spd": 109,
                "def": 634,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Mucacha": {
        "code": "c3033",
        "_id": "mucacha",
        "name": "Mucacha",
        "moonlight": false,
        "rarity": 3,
        "attribute": "wind",
        "role": "warrior",
        "zodiac": "archer",
        "self_devotion": {
            "type": "att",
            "grades": {
                "D": 36,
                "C": 54,
                "B": 72,
                "A": 90,
                "S": 108,
                "SS": 126,
                "SSS": 144
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3033_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3033_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 1,
                "targets": 1,
                "selfSpdScaling": 0.00075,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 1,
                "targets": 1,
                "selfSpdScaling": 0.00075,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11710,
                "atk": 802,
                "hp": 3899,
                "spd": 114,
                "def": 418,
                "chc": 0.19,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15062,
                "atk": 1000,
                "hp": 4895,
                "spd": 114,
                "def": 518,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Mui": {
        "code": "c1044",
        "_id": "mui",
        "name": "Mui",
        "moonlight": false,
        "rarity": 5,
        "attribute": "wind",
        "role": "warrior",
        "zodiac": "maiden",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "B": 0.09,
                "A": 0.135,
                "S": 0.18,
                "SS": 0.225,
                "SSS": 0.27
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1044_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1044_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc104401",
                "id": "exc104401",
                "name": "A Rabbit's Wild Nature",
                "description": "A whip used to train beasts. It is said that beasts are more obedient when tamed with this whip.",
                "unit": "c1044",
                "role": "warrior",
                "rarity": 5,
                "stat": {
                    "type": "acc",
                    "value": 0.08
                },
                "skills": [
                    {
                        "skill": 2,
                        "description": "Increases the effect chance by 10% when using Punishment.",
                        "skill_description": null,
                        "values": [],
                        "_id": 0
                    },
                    {
                        "skill": 3,
                        "description": "Has a 35% chance to grant the caster an extra turn after using Grand Finale.",
                        "skill_description": "Drives monsters forward to attack all enemies, dispelling two buffs. Grants increased Attack to all allies for 3 turns. After attacking, has a 35% chance to grant the caster an extra turn.",
                        "values": [
                            1,
                            35
                        ],
                        "_id": 1
                    },
                    {
                        "skill": 3,
                        "description": "Silences the enemy with the highest Combat Readiness for 1 turn after using Grand Finale.",
                        "skill_description": "Drives monsters forward to attack all enemies, dispelling two buffs, before silencing the enemy with the highest Combat Readiness for 1 turn. Grants increased Attack to all allies for 3 turns.",
                        "values": [
                            28,
                            1
                        ],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1044.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 1,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.95,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13569,
                "atk": 833,
                "hp": 4253,
                "spd": 115,
                "def": 497,
                "chc": 0.19,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17434,
                "atk": 1039,
                "hp": 5340,
                "spd": 115,
                "def": 617,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "Muse Rima": {
        "code": "c4062",
        "_id": "muse-rima",
        "name": "Muse Rima",
        "moonlight": false,
        "rarity": 3,
        "attribute": "ice",
        "role": "ranger",
        "zodiac": "waterbearer",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "D": 0.045,
                "C": 0.068,
                "B": 0.09,
                "A": 0.112,
                "S": 0.135,
                "SS": 0.158,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4062_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4062_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.8,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.3,
                "pow": 0.95,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11248,
                "atk": 659,
                "hp": 3739,
                "spd": 117,
                "def": 452,
                "chc": 0.19,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 4078,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0.25,
                "overrideAdditionalRes": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 14419,
                "atk": 822,
                "hp": 4693,
                "spd": 117,
                "def": 561,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 5120,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0.25,
                "overrideAdditionalRes": 0
            }
        }
    },
    "Muwi": {
        "code": "c3132",
        "_id": "muwi",
        "name": "Muwi",
        "moonlight": false,
        "rarity": 3,
        "attribute": "ice",
        "role": "assassin",
        "zodiac": "scorpion",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "D": 0.045,
                "C": 0.068,
                "B": 0.09,
                "A": 0.112,
                "S": 0.135,
                "SS": 0.158,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3132_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3132_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.8,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1.1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11607,
                "atk": 833,
                "hp": 4171,
                "spd": 108,
                "def": 364,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 14773,
                "atk": 1039,
                "hp": 5517,
                "spd": 108,
                "def": 452,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Navy Captain Landy": {
        "code": "c2109",
        "_id": "navy-captain-landy",
        "name": "Navy Captain Landy",
        "moonlight": true,
        "rarity": 5,
        "attribute": "light",
        "role": "knight",
        "zodiac": "lion",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2109_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2109_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.8,
                "pow": 1.3,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 3,
                "penetration": 0.6,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13494,
                "atk": 869,
                "hp": 4639,
                "spd": 99,
                "def": 534,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17057,
                "atk": 1134,
                "hp": 5825,
                "spd": 99,
                "def": 662,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Nemunas": {
        "code": "c3061",
        "_id": "nemunas",
        "name": "Nemunas",
        "moonlight": false,
        "rarity": 3,
        "attribute": "fire",
        "role": "ranger",
        "zodiac": "scales",
        "self_devotion": {
            "type": "att",
            "grades": {
                "D": 36,
                "C": 54,
                "B": 72,
                "A": 90,
                "S": 108,
                "SS": 126,
                "SSS": 144
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3061_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3061_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.95,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.8,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11520,
                "atk": 704,
                "hp": 3867,
                "spd": 110,
                "def": 424,
                "chc": 0.27,
                "chd": 1.6,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 14585,
                "atk": 920,
                "hp": 4855,
                "spd": 110,
                "def": 525,
                "chc": 0.27,
                "chd": 1.6,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Ocean Breeze Luluca": {
        "code": "c5082",
        "_id": "ocean-breeze-luluca",
        "name": "Ocean Breeze Luluca",
        "moonlight": false,
        "rarity": 5,
        "attribute": "wind",
        "role": "manauser",
        "zodiac": "twins",
        "self_devotion": {
            "type": "res",
            "grades": {
                "B": 0.09,
                "A": 0.135,
                "S": 0.18,
                "SS": 0.225,
                "SSS": 0.27
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c5082_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c5082_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 15706,
                "atk": 520,
                "hp": 3972,
                "spd": 105,
                "def": 559,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.3
            },
            "lv60SixStarFullyAwakened": {
                "cp": 19986,
                "atk": 649,
                "hp": 5254,
                "spd": 105,
                "def": 694,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.3
            }
        }
    },
    "Operator Sigret": {
        "code": "c2072",
        "_id": "operator-sigret",
        "name": "Operator Sigret",
        "moonlight": true,
        "rarity": 5,
        "attribute": "dark",
        "role": "ranger",
        "zodiac": "scales",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2072_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2072_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "note": "100% penetration",
                "rate": 0.75,
                "pow": 1,
                "targets": 1,
                "penetration": 1,
                "selfSpdScaling": 0.00075,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1.1,
                "targets": 3,
                "selfSpdScaling": 0.001125,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13144,
                "atk": 824,
                "hp": 4382,
                "spd": 115,
                "def": 455,
                "chc": 0.27,
                "chd": 1.6,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16680,
                "atk": 1079,
                "hp": 5502,
                "spd": 115,
                "def": 564,
                "chc": 0.27,
                "chd": 1.6,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Orte": {
        "code": "c3133",
        "_id": "orte",
        "name": "Orte",
        "moonlight": false,
        "rarity": 3,
        "attribute": "wind",
        "role": "assassin",
        "zodiac": "waterbearer",
        "self_devotion": {
            "type": "att",
            "grades": {
                "D": 36,
                "C": 54,
                "B": 72,
                "A": 90,
                "S": 108,
                "SS": 126,
                "SSS": 144
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3133_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3133_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.65,
                "pow": 0.9,
                "targets": 1,
                "selfSpdScaling": 0.00075,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "note": "70% penetration",
                "rate": 0.7,
                "pow": 0.95,
                "targets": 1,
                "penetration": 0.7,
                "selfSpdScaling": 0.00075,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11607,
                "atk": 833,
                "hp": 4171,
                "spd": 108,
                "def": 364,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 14773,
                "atk": 857,
                "hp": 4531,
                "spd": 125,
                "def": 483,
                "chc": 0.35,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Otillie": {
        "code": "c3045",
        "_id": "otillie",
        "name": "Otillie",
        "moonlight": true,
        "rarity": 3,
        "attribute": "dark",
        "role": "mage",
        "zodiac": "bull",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "D": 0.045,
                "C": 0.068,
                "B": 0.09,
                "A": 0.112,
                "S": 0.135,
                "SS": 0.158,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3045_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3045_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.8,
                "pow": 1,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12250,
                "atk": 709,
                "hp": 3739,
                "spd": 110,
                "def": 497,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.06,
                "efr": 0.18
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15718,
                "atk": 885,
                "hp": 4693,
                "spd": 110,
                "def": 617,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0.18
            }
        }
    },
    "Pavel": {
        "code": "c1080",
        "_id": "pavel",
        "name": "Pavel",
        "moonlight": false,
        "rarity": 5,
        "attribute": "wind",
        "role": "ranger",
        "zodiac": "maiden",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1080_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1080_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc101601",
                "id": "exc101601",
                "name": "Azure Dragon's Spirit",
                "description": "A ribbon with special powers that allows the wearer to harness their innate dragon powers.",
                "unit": "c1016",
                "role": "warrior",
                "rarity": 5,
                "stat": {
                    "type": "cri",
                    "value": 0.06
                },
                "skills": [
                    {
                        "skill": 1,
                        "description": "35% chance to extend the caster's buff durations by 1 turn when using Double Slash.",
                        "skill_description": "Attacks by swinging their weapon, with a {{variable}} chance to decrease Defense for 2 turns, before a 35% chance to extend the caster's buff durations by 1 turn.",
                        "values": [
                            18
                        ],
                        "_id": 0
                    },
                    {
                        "skill": 1,
                        "description": "Damage dealt is increased by 30% when using Double Slash.",
                        "skill_description": null,
                        "values": [],
                        "_id": 1
                    },
                    {
                        "skill": 2,
                        "description": "Increases chance of inflicting silence with Dragon's Roar by 15%.",
                        "skill_description": null,
                        "values": [],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1016.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 1.1,
                "targets": 1,
                "selfSpdScaling": 0.00075,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.8,
                "pow": 1,
                "targets": 3,
                "selfSpdScaling": 0.001125,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.3,
                "pow": 1,
                "targets": 1,
                "selfSpdScaling": 0.0015,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12952,
                "atk": 983,
                "hp": 3964,
                "spd": 124,
                "def": 432,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16448,
                "atk": 1283,
                "hp": 4976,
                "spd": 124,
                "def": 536,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Peacemaker Furious": {
        "code": "c2087",
        "_id": "peacemaker-furious",
        "name": "Peacemaker Furious",
        "moonlight": true,
        "rarity": 4,
        "attribute": "dark",
        "role": "ranger",
        "zodiac": "scorpion",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "C": 0.042,
                "B": 0.063,
                "A": 0.084,
                "S": 0.105,
                "SS": 0.126,
                "SSS": 0.147
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2087_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2087_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.5,
                "pow": 0.9,
                "targets": 1,
                "selfDefScaling": 0.8,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "note": "60% penetration",
                "rate": 0.5,
                "pow": 0.9,
                "targets": 3,
                "penetration": 0.6,
                "selfDefScaling": 1.3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12452,
                "atk": 778,
                "hp": 4726,
                "spd": 106,
                "def": 449,
                "chc": 0.19,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15955,
                "atk": 970,
                "hp": 5935,
                "spd": 106,
                "def": 557,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Pearlhorizon": {
        "code": "c3073",
        "_id": "pearlhorizon",
        "name": "Pearlhorizon",
        "moonlight": false,
        "rarity": 3,
        "attribute": "wind",
        "role": "mage",
        "zodiac": "bull",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "D": 0.045,
                "C": 0.068,
                "B": 0.09,
                "A": 0.112,
                "S": 0.135,
                "SS": 0.158,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3073_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3073_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.6,
                "pow": 1,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 0.9,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12694,
                "atk": 738,
                "hp": 3867,
                "spd": 112,
                "def": 508,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.06,
                "efr": 0.18
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16292,
                "atk": 921,
                "hp": 4855,
                "spd": 112,
                "def": 631,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0.18
            }
        }
    },
    "Peira": {
        "code": "c1125",
        "_id": "peira",
        "name": "Peira",
        "moonlight": false,
        "rarity": 5,
        "attribute": "ice",
        "role": "assassin",
        "zodiac": "maiden",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "B": 0.09,
                "A": 0.135,
                "S": 0.18,
                "SS": 0.225,
                "SSS": 0.27
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1125_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1125_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12898,
                "atk": 897,
                "hp": 4253,
                "spd": 125,
                "def": 390,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16285,
                "atk": 1075,
                "hp": 5562,
                "spd": 128,
                "def": 487,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "Penelope": {
        "code": "c3125",
        "_id": "penelope",
        "name": "Penelope",
        "moonlight": true,
        "rarity": 3,
        "attribute": "dark",
        "role": "assassin",
        "zodiac": "scorpion",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "D": 0.028,
                "C": 0.042,
                "B": 0.056,
                "A": 0.07,
                "S": 0.084,
                "SS": 0.098,
                "SSS": 0.112
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3125_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3125_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S2 barrier",
                        "rate": 0,
                        "pow": 0,
                        "selfAtkScaling": 0.65
                    }
                ]
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.8,
                "pow": 1.2,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11607,
                "atk": 833,
                "hp": 4171,
                "spd": 108,
                "def": 364,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 14773,
                "atk": 1039,
                "hp": 5517,
                "spd": 108,
                "def": 452,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Pirate Captain Flan": {
        "code": "c2110",
        "_id": "pirate-captain-flan",
        "name": "Pirate Captain Flan",
        "moonlight": true,
        "rarity": 5,
        "attribute": "dark",
        "role": "ranger",
        "zodiac": "twins",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2110_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2110_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 0.95,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.8,
                "pow": 1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13288,
                "atk": 904,
                "hp": 4221,
                "spd": 114,
                "def": 460,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 0,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0.5,
                "overrideAdditionalRes": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16848,
                "atk": 1182,
                "hp": 5299,
                "spd": 114,
                "def": 571,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 0,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0.5,
                "overrideAdditionalRes": 0
            }
        }
    },
    "Politis": {
        "code": "c1112",
        "_id": "politis",
        "name": "Politis",
        "moonlight": false,
        "rarity": 5,
        "attribute": "fire",
        "role": "mage",
        "zodiac": "twins",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "B": 0.09,
                "A": 0.135,
                "S": 0.18,
                "SS": 0.225,
                "SSS": 0.27
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1112_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1112_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.9,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1.1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13525,
                "atk": 960,
                "hp": 3642,
                "spd": 106,
                "def": 551,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17342,
                "atk": 1197,
                "hp": 4572,
                "spd": 106,
                "def": 683,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.3,
                "efr": 0
            }
        }
    },
    "Purrgis": {
        "code": "c1035",
        "_id": "purrgis",
        "name": "Purrgis",
        "moonlight": false,
        "rarity": 4,
        "attribute": "wind",
        "role": "warrior",
        "zodiac": "scorpion",
        "self_devotion": {
            "type": "max_hp_rate",
            "grades": {
                "C": 0.04,
                "B": 0.06,
                "A": 0.08,
                "S": 0.1,
                "SS": 0.12,
                "SSS": 0.14
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1035_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1035_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "selfHpScaling": 0.05,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.8,
                "pow": 1,
                "targets": 3,
                "selfHpScaling": 0.1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12819,
                "atk": 854,
                "hp": 4850,
                "spd": 100,
                "def": 479,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16221,
                "atk": 1119,
                "hp": 6091,
                "spd": 100,
                "def": 594,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Pyllis": {
        "code": "c3005",
        "_id": "pyllis",
        "name": "Pyllis",
        "moonlight": true,
        "rarity": 3,
        "attribute": "dark",
        "role": "knight",
        "zodiac": "crab",
        "self_devotion": {
            "type": "def",
            "grades": {
                "D": 18,
                "C": 27,
                "B": 36,
                "A": 45,
                "S": 54,
                "SS": 63,
                "SSS": 72
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3005_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3005_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 1,
                "targets": 1,
                "selfDefScaling": 0.5,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.3,
                "pow": 0.95,
                "targets": 1,
                "selfDefScaling": 0.7,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12139,
                "atk": 549,
                "hp": 5098,
                "spd": 91,
                "def": 535,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15518,
                "atk": 685,
                "hp": 6403,
                "spd": 91,
                "def": 703,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Ram": {
        "code": "c1115",
        "_id": "ram",
        "name": "Ram",
        "moonlight": false,
        "rarity": 5,
        "attribute": "wind",
        "role": "mage",
        "zodiac": "twins",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "B": 0.09,
                "A": 0.135,
                "S": 0.18,
                "SS": 0.225,
                "SSS": 0.27
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1115_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1115_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.8,
                "pow": 1,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13525,
                "atk": 960,
                "hp": 3642,
                "spd": 106,
                "def": 551,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0,
                "bonusMaxAtkPercent": 30,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 0,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17342,
                "atk": 1197,
                "hp": 4572,
                "spd": 106,
                "def": 683,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.3,
                "efr": 0,
                "bonusMaxAtkPercent": 30,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 0,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            }
        }
    },
    "Ran": {
        "code": "c1118",
        "_id": "ran",
        "name": "Ran",
        "moonlight": false,
        "rarity": 5,
        "attribute": "ice",
        "role": "assassin",
        "zodiac": "ram",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1118_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1118_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 0.9,
                "targets": 1,
                "selfSpdScaling": 0.00075,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.8,
                "pow": 1,
                "targets": 3,
                "selfSpdScaling": 0.00075,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12898,
                "atk": 897,
                "hp": 4285,
                "spd": 125,
                "def": 390,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16285,
                "atk": 1119,
                "hp": 5380,
                "spd": 129,
                "def": 483,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Ras": {
        "code": "c1001",
        "_id": "ras",
        "name": "Ras",
        "moonlight": false,
        "rarity": 3,
        "attribute": "fire",
        "role": "knight",
        "zodiac": "scales",
        "self_devotion": {
            "type": "max_hp",
            "grades": {
                "D": 180,
                "C": 270,
                "B": 360,
                "A": 450,
                "S": 540,
                "SS": 630,
                "SSS": 720
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1001_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1001_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 1,
                "targets": 1,
                "selfHpScaling": 0.04,
                "increasedValue": 0.1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 1,
                "targets": 3,
                "selfHpScaling": 0.04,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12124,
                "atk": 607,
                "hp": 4640,
                "spd": 95,
                "def": 511,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.12
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15498,
                "atk": 758,
                "hp": 5826,
                "spd": 95,
                "def": 672,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.12
            }
        }
    },
    "Ravi": {
        "code": "c1019",
        "_id": "ravi",
        "name": "Ravi",
        "moonlight": false,
        "rarity": 5,
        "attribute": "fire",
        "role": "warrior",
        "zodiac": "goat",
        "self_devotion": {
            "type": "def_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1019_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1019_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc101901",
                "id": "exc101901",
                "name": "Flame of Life",
                "description": "When Ravi was reborn as a wraith, fire energy was infused into her body, deriving its strength from the lives taken by her axe.",
                "unit": "c1019",
                "role": "warrior",
                "rarity": 5,
                "stat": {
                    "type": "att_rate",
                    "value": 0.07
                },
                "skills": [
                    {
                        "skill": 1,
                        "description": "Has a 40% chance to dispel one debuff from the caster when using Slaughter.",
                        "skill_description": "Attacks the enemy with a double-edged axe, with a 35% chance to stun for 1 turn, before recovering Health proportional to damage dealt, with a 40% chance to dispel one debuff from the caster.",
                        "values": [],
                        "_id": 0
                    },
                    {
                        "skill": 1,
                        "description": "Has a 35% chance to burn for 2 turns when using Slaughter.",
                        "skill_description": "Attacks the enemy with a double-edged axe, with a 35% chance each to stun for 1 turn and burn for 2 turns, before recovering Health proportional to damage dealt.",
                        "values": [
                            20,
                            31
                        ],
                        "_id": 1
                    },
                    {
                        "skill": 3,
                        "description": "Increases stun chance by 10% when using Devil Drive.",
                        "skill_description": "Brutally attacks all enemies, with a 85% chance to stun for 1 turn, decreasing Combat Readiness of stunned enemies by 100%.",
                        "values": [
                            20
                        ],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1019.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.85,
                "pow": 0.95,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13730,
                "atk": 775,
                "hp": 5551,
                "spd": 102,
                "def": 530,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17484,
                "atk": 966,
                "hp": 7323,
                "spd": 102,
                "def": 657,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Ray": {
        "code": "c1090",
        "_id": "ray",
        "name": "Ray",
        "moonlight": false,
        "rarity": 5,
        "attribute": "wind",
        "role": "manauser",
        "zodiac": "bull",
        "self_devotion": {
            "type": "max_hp_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1090_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1090_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc202201",
                "id": "exc202201",
                "name": "Ruele's Sad Promise",
                "description": "A mysterious concoction of life created by combining the laws of light and nature and the love of a noble soul.",
                "unit": "c2022",
                "role": "manauser",
                "rarity": 5,
                "stat": {
                    "type": "res",
                    "value": 0.08
                },
                "skills": [
                    {
                        "skill": 1,
                        "description": "Dispels one debuff from the ally with the lowest Health when using Key to an Oath.",
                        "skill_description": "Attacks the enemy with a staff and heals the ally with the lowest Health, before dispelling one debuff. Healing increases proportional to the target's max Health.",
                        "values": [],
                        "_id": 0
                    },
                    {
                        "skill": 2,
                        "description": "Has a 30% chance to reset skill cooldown of Regen when using Regen.",
                        "skill_description": "Blesses an ally, recovering their Health and increasing their Combat Readiness by 50%. Healing increases proportional to the caster's max Health. When this skill is used, has a 30% chance to reset this skill's cooldown.",
                        "values": [],
                        "_id": 1
                    },
                    {
                        "skill": 3,
                        "description": "Decreases skill cooldown of Destina's Grace by 1 turn.",
                        "skill_description": null,
                        "values": [],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c2022.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S2 barrier",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.15
                    }
                ]
            },
            "S3": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S3 heal",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.15
                    }
                ]
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 15716,
                "atk": 556,
                "hp": 3867,
                "spd": 117,
                "def": 528,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.18
            },
            "lv60SixStarFullyAwakened": {
                "cp": 20057,
                "atk": 694,
                "hp": 4855,
                "spd": 117,
                "def": 655,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.3
            }
        }
    },
    "Rem": {
        "code": "c1114",
        "_id": "rem",
        "name": "Rem",
        "moonlight": false,
        "rarity": 5,
        "attribute": "ice",
        "role": "warrior",
        "zodiac": "scorpion",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "B": 0.056,
                "A": 0.084,
                "S": 0.112,
                "SS": 0.14,
                "SSS": 0.168
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1114_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1114_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.95,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.5,
                "pow": 1,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 16221,
                "atk": 1208,
                "hp": 6488,
                "spd": 102,
                "def": 616,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16221,
                "atk": 1208,
                "hp": 6488,
                "spd": 102,
                "def": 616,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Remnant Violet": {
        "code": "c2074",
        "_id": "remnant-violet",
        "name": "Remnant Violet",
        "moonlight": true,
        "rarity": 5,
        "attribute": "dark",
        "role": "assassin",
        "zodiac": "lion",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "B": 0.056,
                "A": 0.084,
                "S": 0.112,
                "SS": 0.14,
                "SSS": 0.168
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2074_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2074_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1.3,
                "targets": 1,
                "penetration": 0.5,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13126,
                "atk": 983,
                "hp": 4092,
                "spd": 116,
                "def": 421,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16674,
                "atk": 1283,
                "hp": 5138,
                "spd": 116,
                "def": 522,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Requiem Roana": {
        "code": "c2102",
        "_id": "requiem-roana",
        "name": "Requiem Roana",
        "moonlight": true,
        "rarity": 5,
        "attribute": "dark",
        "role": "mage",
        "zodiac": "waterbearer",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "B": 0.09,
                "A": 0.135,
                "S": 0.18,
                "SS": 0.225,
                "SSS": 0.27
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2102_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2102_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["normal", "miss"],
                "rate": 0.3,
                "pow": 1,
                "penetration": 1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 14048,
                "atk": 1056,
                "hp": 3806,
                "spd": 108,
                "def": 576,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.06,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 18032,
                "atk": 1316,
                "hp": 4777,
                "spd": 108,
                "def": 715,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "Requiemroar": {
        "code": "c3075",
        "_id": "requiemroar",
        "name": "Requiemroar",
        "moonlight": true,
        "rarity": 3,
        "attribute": "dark",
        "role": "manauser",
        "zodiac": "archer",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "D": 0.045,
                "C": 0.068,
                "B": 0.09,
                "A": 0.112,
                "S": 0.135,
                "SS": 0.158,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3075_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3075_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.8,
                "pow": 1,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 14181,
                "atk": 680,
                "hp": 3224,
                "spd": 106,
                "def": 494,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.12,
                "efr": 0.06
            },
            "lv60SixStarFullyAwakened": {
                "cp": 18090,
                "atk": 848,
                "hp": 4046,
                "spd": 106,
                "def": 613,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.12,
                "efr": 0.18
            }
        }
    },
    "Researcher Carrot": {
        "code": "c4051",
        "_id": "researcher-carrot",
        "name": "Researcher Carrot",
        "moonlight": false,
        "rarity": 3,
        "attribute": "fire",
        "role": "mage",
        "zodiac": "archer",
        "self_devotion": {
            "type": "att",
            "grades": {
                "D": 36,
                "C": 54,
                "B": 72,
                "A": 90,
                "S": 108,
                "SS": 126,
                "SSS": 144
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4051_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4051_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.95,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S2 barrier",
                        "rate": 0,
                        "pow": 0,
                        "selfAtkScaling": 0.78
                    }
                ]
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11614,
                "atk": 833,
                "hp": 3128,
                "spd": 110,
                "def": 489,
                "chc": 0.19,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 932,
                "overrideHp": 3825,
                "overrideDef": 537,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 14932,
                "atk": 1039,
                "hp": 3925,
                "spd": 110,
                "def": 606,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 1161,
                "overrideHp": 4801,
                "overrideDef": 666,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            }
        }
    },
    "Righteous Thief Roozid": {
        "code": "c4013",
        "_id": "righteous-thief-roozid",
        "name": "Righteous Thief Roozid",
        "moonlight": false,
        "rarity": 3,
        "attribute": "wind",
        "role": "assassin",
        "zodiac": "twins",
        "self_devotion": {
            "type": "max_hp",
            "grades": {
                "D": 180,
                "C": 270,
                "B": 360,
                "A": 450,
                "S": 540,
                "SS": 630,
                "SSS": 720
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4013_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4013_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.8,
                "pow": 1,
                "targets": 1,
                "selfSpdScaling": 0.00075,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.2,
                "pow": 1,
                "targets": 1,
                "selfSpdScaling": 0.001125,
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 10214,
                "atk": 650,
                "hp": 3481,
                "spd": 106,
                "def": 373,
                "chc": 0.19,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.12,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 4109,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 8,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 13100,
                "atk": 812,
                "hp": 4370,
                "spd": 106,
                "def": 462,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.12,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 5160,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 8,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            }
        }
    },
    "Rikoris": {
        "code": "c3034",
        "_id": "rikoris",
        "name": "Rikoris",
        "moonlight": true,
        "rarity": 3,
        "attribute": "light",
        "role": "warrior",
        "zodiac": "scales",
        "self_devotion": {
            "type": "max_hp",
            "grades": {
                "D": 180,
                "C": 270,
                "B": 360,
                "A": 450,
                "S": 540,
                "SS": 630,
                "SSS": 720
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3034_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3034_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.6,
                "pow": 1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11788,
                "atk": 762,
                "hp": 4171,
                "spd": 104,
                "def": 469,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15002,
                "atk": 951,
                "hp": 5517,
                "spd": 104,
                "def": 583,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Rima": {
        "code": "c3062",
        "_id": "rima",
        "name": "Rima",
        "moonlight": false,
        "rarity": 3,
        "attribute": "ice",
        "role": "ranger",
        "zodiac": "waterbearer",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "D": 0.045,
                "C": 0.068,
                "B": 0.09,
                "A": 0.112,
                "S": 0.135,
                "SS": 0.158,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3062_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3062_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.8,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.3,
                "pow": 0.95,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11248,
                "atk": 659,
                "hp": 3739,
                "spd": 117,
                "def": 452,
                "chc": 0.19,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 14419,
                "atk": 822,
                "hp": 4693,
                "spd": 117,
                "def": 561,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Rimuru": {
        "code": "c1121",
        "_id": "rimuru",
        "name": "Rimuru",
        "moonlight": false,
        "rarity": 5,
        "attribute": "wind",
        "role": "warrior",
        "zodiac": "scales",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1121_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1121_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.65,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.8,
                "pow": 1,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13440,
                "atk": 897,
                "hp": 4735,
                "spd": 109,
                "def": 505,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17097,
                "atk": 1119,
                "hp": 6266,
                "spd": 109,
                "def": 627,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Rin": {
        "code": "c1054",
        "_id": "rin",
        "name": "Rin",
        "moonlight": false,
        "rarity": 4,
        "attribute": "wind",
        "role": "manauser",
        "zodiac": "maiden",
        "self_devotion": {
            "type": "max_hp_rate",
            "grades": {
                "C": 0.04,
                "B": 0.06,
                "A": 0.08,
                "S": 0.1,
                "SS": 0.12,
                "SSS": 0.14
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1054_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1054_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc105401",
                "id": "exc105401",
                "name": "Rin's Sparkling Rings",
                "description": "A pair of rings Basar gave Rin on her first birthday after he adopted her. They never lose their sheen, and they're much lighter than her other rings.",
                "unit": "c1054",
                "role": "manauser",
                "rarity": 5,
                "stat": {
                    "type": "acc",
                    "value": 0.08
                },
                "skills": [
                    {
                        "skill": 2,
                        "description": "Increases chance of activating Ring Throw by 20% when using Dazzling Dance.",
                        "skill_description": "Dazzles the enemy with a dance, with a {{variable}} chance to decrease Defense for 2 turns, before a 70% chance to use Ring Throw. Damage dealt increases proportional to the caster's max Health.",
                        "values": [],
                        "_id": 0
                    },
                    {
                        "skill": 3,
                        "description": "Amount recovered is increased by 15% when using Showtime.",
                        "skill_description": null,
                        "values": [],
                        "_id": 1
                    },
                    {
                        "skill": 3,
                        "description": "Dispels one debuff from all allies before the skill effect when using Showtime.",
                        "skill_description": "Dispels 1 debuff from all allies and heals them with an elegant dance, before granting two random buffs for 3 turns. Amount recovered increases proportional to the target's max Health.",
                        "values": [],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1054.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 0.9,
                "targets": 1,
                "selfHpScaling": 0.05,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 1,
                "targets": 1,
                "selfHpScaling": 0.07,
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S3 heal",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.2
                    }
                ]
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 14786,
                "atk": 476,
                "hp": 4028,
                "spd": 104,
                "def": 556,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.06,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 18895,
                "atk": 594,
                "hp": 5057,
                "spd": 104,
                "def": 691,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "Riza Hawkeye": {
        "code": "c1136",
        "_id": "riza-hawkeye",
        "name": "Riza Hawkeye",
        "moonlight": false,
        "rarity": 5,
        "attribute": "ice",
        "role": "ranger",
        "zodiac": "goat",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "B": 0.056,
                "A": 0.084,
                "S": 0.112,
                "SS": 0.14,
                "SSS": 0.168
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1136_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1136_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.15,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 2,
                "pow": 1,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13285,
                "atk": 804,
                "hp": 4542,
                "spd": 115,
                "def": 472,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17052,
                "atk": 1003,
                "hp": 5704,
                "spd": 115,
                "def": 585,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.3,
                "efr": 0
            }
        }
    },
    "Roaming Warrior Leo": {
        "code": "c2029",
        "_id": "roaming-warrior-leo",
        "name": "Roaming Warrior Leo",
        "moonlight": true,
        "rarity": 4,
        "attribute": "dark",
        "role": "ranger",
        "zodiac": "twins",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "C": 0.068,
                "B": 0.102,
                "A": 0.136,
                "S": 0.17,
                "SS": 0.204,
                "SSS": 0.238
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2029_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2029_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc102029",
                "id": "exc102029",
                "name": "Golden Horn of Vengenance",
                "description": "A slingshot he bought after selling everything that he inherited from his parents. He reconfigured the handle as a flute so that he can call Racoo.",
                "unit": "c2029",
                "role": "ranger",
                "rarity": 5,
                "stat": {
                    "type": "speed",
                    "value": 5
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.2,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.8,
                "pow": 1.1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12468,
                "atk": 833,
                "hp": 3996,
                "spd": 111,
                "def": 446,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15786,
                "atk": 1088,
                "hp": 5016,
                "spd": 111,
                "def": 553,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "Roana": {
        "code": "c1102",
        "_id": "roana",
        "name": "Roana",
        "moonlight": false,
        "rarity": 5,
        "attribute": "wind",
        "role": "manauser",
        "zodiac": "fish",
        "self_devotion": {
            "type": "max_hp_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1102_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1102_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S2 heal",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.0775
                    }
                ]
            },
            "S3": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S3 heal",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.25
                    },
                    {
                        "name": "S3 barrier",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.15
                    }
                ]
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 16093,
                "atk": 498,
                "hp": 4359,
                "spd": 102,
                "def": 610,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.12
            },
            "lv60SixStarFullyAwakened": {
                "cp": 20659,
                "atk": 621,
                "hp": 5474,
                "spd": 102,
                "def": 802,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.12
            }
        }
    },
    "Romann": {
        "code": "c1043",
        "_id": "romann",
        "name": "Romann",
        "moonlight": false,
        "rarity": 4,
        "attribute": "ice",
        "role": "mage",
        "zodiac": "twins",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "C": 0.068,
                "B": 0.102,
                "A": 0.136,
                "S": 0.17,
                "SS": 0.204,
                "SSS": 0.238
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1043_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1043_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc104301",
                "id": "exc104301",
                "name": "A Treatise on Logic",
                "description": "An old book found in the royal library. Other than Romann, nobody has read it in a very long time.",
                "unit": "c1043",
                "role": "mage",
                "rarity": 5,
                "stat": {
                    "type": "speed",
                    "value": 5
                },
                "skills": [
                    {
                        "skill": 1,
                        "description": "75% chance to dispel one buff from the enemy when using Gravity Arrow.",
                        "skill_description": "Shoots gravity arrows at the enemy, decreasing Combat Readiness by {{variable}}, with a 75% chance to dispel one buff, and increasing Combat Readiness of the caster by {{variable}}.",
                        "values": [],
                        "_id": 0
                    },
                    {
                        "skill": 2,
                        "description": "Grants a barrier to the caster for 2 turns when using Gravitation. Barrier strength increases proportional to the caster's max Health.",
                        "skill_description": "Attacks all enemies with a magic circle, with a 50% chance each to decrease Combat Readiness by {{variable}} four times, before granting the caster a barrier for 2 turns. Barrier strength increases proportional to the caster's max Health.",
                        "values": [
                            5
                        ],
                        "_id": 1
                    },
                    {
                        "skill": 2,
                        "description": "50% chance to dispel one buff each from all enemies when using Gravitation.",
                        "skill_description": "Attacks all enemies with a magic circle, with a 50% chance each to decrease Combat Readiness by {{variable}} four times, and a 50% chance to dispel one buff each from all enemies.",
                        "values": [],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1043.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 1,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 0.85,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12741,
                "atk": 889,
                "hp": 3449,
                "spd": 105,
                "def": 528,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16342,
                "atk": 1109,
                "hp": 4329,
                "spd": 105,
                "def": 655,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.3,
                "efr": 0
            }
        }
    },
    "Roozid": {
        "code": "c3013",
        "_id": "roozid",
        "name": "Roozid",
        "moonlight": false,
        "rarity": 3,
        "attribute": "wind",
        "role": "assassin",
        "zodiac": "twins",
        "self_devotion": {
            "type": "max_hp",
            "grades": {
                "D": 180,
                "C": 270,
                "B": 360,
                "A": 450,
                "S": 540,
                "SS": 630,
                "SSS": 720
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3013_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3013_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.8,
                "pow": 1,
                "targets": 1,
                "selfSpdScaling": 0.00075,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.2,
                "pow": 1,
                "targets": 1,
                "selfSpdScaling": 0.001125,
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 10214,
                "atk": 650,
                "hp": 3481,
                "spd": 106,
                "def": 373,
                "chc": 0.19,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.12,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 13100,
                "atk": 812,
                "hp": 4370,
                "spd": 106,
                "def": 462,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.12,
                "efr": 0
            }
        }
    },
    "Rose": {
        "code": "c1003",
        "_id": "rose",
        "name": "Rose",
        "moonlight": false,
        "rarity": 4,
        "attribute": "ice",
        "role": "knight",
        "zodiac": "scales",
        "self_devotion": {
            "type": "def_rate",
            "grades": {
                "C": 0.04,
                "B": 0.06,
                "A": 0.08,
                "S": 0.1,
                "SS": 0.12,
                "SSS": 0.14
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1003_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1003_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc100301",
                "id": "exc100301",
                "name": "Valkyrie Wing",
                "description": "A mysterious circlet that symbolizes strength and beauty, and is the source of Rose's Fighting Spirit.",
                "unit": "c1003",
                "role": "knight",
                "rarity": 5,
                "stat": {
                    "type": "speed",
                    "value": 5
                },
                "skills": [
                    {
                        "skill": 1,
                        "description": "Activates each effect regardless of current Health when using Sequential Cutter.",
                        "skill_description": "Attacks with a sword, with a {{variable}} chance to provoke for 1 turn, before increasing Defense of the caster for 1 turn. Damage dealt increases proportional to the caster's Defense.",
                        "values": [
                            25,
                            2
                        ],
                        "_id": 0
                    },
                    {
                        "skill": 2,
                        "description": "Applies the same effect to the caster when using Shield of Light.",
                        "skill_description": "Covers an ally and the caster with the Shield of Light, dispelling two debuffs and granting a barrier for 2 turns before increasing Combat Readiness by {{variable}}. Barrier strength is proportional to the caster's Defense.",
                        "values": [
                            5
                        ],
                        "_id": 1
                    },
                    {
                        "skill": 3,
                        "description": "Decreases skill cooldown of Goddess of Victory by 1 turn.",
                        "skill_description": null,
                        "values": [],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1003.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.5,
                "pow": 1,
                "targets": 1,
                "selfDefScaling": 0.7,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S3 barrier",
                        "rate": 0,
                        "pow": 0,
                        "selfDefScaling": 1
                    }
                ]
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12975,
                "atk": 658,
                "hp": 4991,
                "spd": 97,
                "def": 535,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.12
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16569,
                "atk": 821,
                "hp": 6266,
                "spd": 97,
                "def": 703,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.12
            }
        }
    },
    "Roy Mustang": {
        "code": "c1135",
        "_id": "roy-mustang",
        "name": "Roy Mustang",
        "moonlight": false,
        "rarity": 5,
        "attribute": "fire",
        "role": "mage",
        "zodiac": "lion",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1135_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1135_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.8,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "note": "S1 proc",
                "rate": 0.8,
                "pow": 1,
                "targets": 1,
                "penetration": 0.5,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.2,
                "pow": 0.9,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13169,
                "atk": 1079,
                "hp": 3385,
                "spd": 112,
                "def": 520,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16722,
                "atk": 1412,
                "hp": 4248,
                "spd": 112,
                "def": 645,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Ruele of Light": {
        "code": "c1022",
        "_id": "ruele-of-light",
        "name": "Ruele of Light",
        "moonlight": true,
        "rarity": 5,
        "attribute": "light",
        "role": "manauser",
        "zodiac": "fish",
        "self_devotion": {
            "type": "max_hp_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1022_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1022_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.81,
                "pow": 0.95,
                "targets": 1,
                "selfHpScaling": 0.07,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S2 heal",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.35
                    }
                ]
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 16093,
                "atk": 498,
                "hp": 4359,
                "spd": 102,
                "def": 610,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.12
            },
            "lv60SixStarFullyAwakened": {
                "cp": 20659,
                "atk": 621,
                "hp": 5474,
                "spd": 102,
                "def": 802,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.12
            }
        }
    },
    "Sage Baal & Sezan": {
        "code": "c2015",
        "_id": "sage-baal-sezan",
        "name": "Sage Baal & Sezan",
        "moonlight": true,
        "rarity": 5,
        "attribute": "light",
        "role": "mage",
        "zodiac": "bull",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "B": 0.09,
                "A": 0.135,
                "S": 0.18,
                "SS": 0.225,
                "SSS": 0.27
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2015_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2015_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1.1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.85,
                "pow": 1.3,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["normal", "miss"],
                "note": "no missing health",
                "rate": 0.5,
                "pow": 1,
                "targets": 1,
                "penetration": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13970,
                "atk": 833,
                "hp": 4221,
                "spd": 115,
                "def": 542,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.06,
                "efr": 0.18
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17925,
                "atk": 1039,
                "hp": 5299,
                "spd": 115,
                "def": 673,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0.18
            }
        }
    },
    "Savior Adin": {
        "code": "c4144",
        "_id": "savior-adin",
        "name": "Savior Adin",
        "moonlight": true,
        "rarity": 3,
        "attribute": "light",
        "role": "assassin",
        "zodiac": "lion",
        "self_devotion": {
            "type": "att",
            "grades": {
                "D": 36,
                "C": 54,
                "B": 72,
                "A": 90,
                "S": 108,
                "SS": 126,
                "SSS": 144
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4144_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4144_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 1.3,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.1,
                "pow": 1,
                "targets": 1,
                "penetration": 0.5,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11477,
                "atk": 828,
                "hp": 3642,
                "spd": 111,
                "def": 398,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 923,
                "overrideHp": 0,
                "overrideDef": 0,
                "overrideAdditionalCr": 0.1,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 5,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 14563,
                "atk": 1081,
                "hp": 4572,
                "spd": 111,
                "def": 494,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 1199,
                "overrideHp": 0,
                "overrideDef": 0,
                "overrideAdditionalCr": 0.1,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 5,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            }
        }
    },
    "Schuri": {
        "code": "c1020",
        "_id": "schuri",
        "name": "Schuri",
        "moonlight": false,
        "rarity": 4,
        "attribute": "fire",
        "role": "ranger",
        "zodiac": "lion",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "C": 0.042,
                "B": 0.063,
                "A": 0.084,
                "S": 0.105,
                "SS": 0.126,
                "SSS": 0.147
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1020_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1020_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12530,
                "atk": 857,
                "hp": 4271,
                "spd": 110,
                "def": 432,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15920,
                "atk": 1068,
                "hp": 5650,
                "spd": 110,
                "def": 536,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Seaside Bellona": {
        "code": "c5071",
        "_id": "seaside-bellona",
        "name": "Seaside Bellona",
        "moonlight": false,
        "rarity": 5,
        "attribute": "ice",
        "role": "ranger",
        "zodiac": "twins",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "B": 0.09,
                "A": 0.135,
                "S": 0.18,
                "SS": 0.225,
                "SSS": 0.27
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c5071_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c5071_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc106601",
                "id": "exc106601",
                "name": "Dragon Emerald",
                "description": "Jewelry that Luna's father passed on to her. It is the only thing her mother left behind when she left.",
                "unit": "c1066",
                "role": "warrior",
                "rarity": 5,
                "stat": {
                    "type": "att_rate",
                    "value": 0.07
                },
                "skills": [],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1066.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 1,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 3,
                "cdmgIncrease": 0.2,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13288,
                "atk": 904,
                "hp": 4221,
                "spd": 114,
                "def": 460,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16848,
                "atk": 1182,
                "hp": 5299,
                "spd": 114,
                "def": 571,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "Senya": {
        "code": "c1106",
        "_id": "Senya",
        "name": "Senya",
        "moonlight": false,
        "rarity": 5,
        "attribute": "wind",
        "role": "knight",
        "zodiac": "bull",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1106_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1106_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc101701",
                "id": "exc101701",
                "name": "Untainted Heart",
                "description": "A staff decorated with a bright red orb that encapsulates both the spirit of charity, and the unwavering determination of Achates.",
                "unit": "c1017",
                "role": "manauser",
                "rarity": 5,
                "stat": {
                    "type": "max_hp_rate",
                    "value": 0.07
                },
                "skills": [
                    {
                        "skill": 1,
                        "description": "Increases the chance to decrease Attack when using Magic Design by 25%.",
                        "skill_description": null,
                        "values": [],
                        "_id": 0
                    },
                    {
                        "skill": 2,
                        "description": "Amount recovered is increased by 67% when using Rapid Cure.",
                        "skill_description": null,
                        "values": [],
                        "_id": 1
                    },
                    {
                        "skill": 3,
                        "description": "Increases Effect Resistance of the caster for 2 turns when using Curing Prayer.",
                        "skill_description": "Dispels debuffs from all allies before healing them. Increases Effect Resistance of the caster for 2 turns. Healing increases proportional to the caster's max Health.",
                        "values": [
                            57
                        ],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1017.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["normal", "miss"],
                "rate": 0.95,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S2 barrier",
                        "rate": 0,
                        "pow": 0,
                        "selfAtkScaling": 0.25
                    }
                ]
            },
            "S3": {
                "hitTypes": ["normal", "miss"],
                "rate": 1.5,
                "pow": 1.1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "bonusMaxAtkPercent": 30,
            "bonusMaxDefPercent": 0,
            "bonusMaxHpPercent": 0,
            "overrideAtk": 0,
            "lv50FiveStarFullyAwakened": {
                "cp": 13166,
                "atk": 852,
                "hp": 5032,
                "spd": 100,
                "def": 520,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 30,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 0,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16900,
                "atk": 1112,
                "hp": 6321,
                "spd": 100,
                "def": 645,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 30,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 0,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            }
        }
    },
    "Serene Purity Adin": {
        "code": "c4142",
        "_id": "serene-purity-adin",
        "name": "Serene Purity Adin",
        "moonlight": false,
        "rarity": 3,
        "attribute": "ice",
        "role": "assassin",
        "zodiac": "lion",
        "self_devotion": {
            "type": "att",
            "grades": {
                "D": 36,
                "C": 54,
                "B": 72,
                "A": 90,
                "S": 108,
                "SS": 126,
                "SSS": 144
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4142_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4142_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.85,
                "pow": 1.05,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.6,
                "pow": 1,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.3,
                "pow": 1.05,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11477,
                "atk": 828,
                "hp": 3642,
                "spd": 111,
                "def": 398,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 4137,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 5,
                "overrideAdditionalEff": 0.2,
                "overrideAdditionalRes": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 14563,
                "atk": 1081,
                "hp": 4572,
                "spd": 111,
                "def": 494,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 5194,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 5,
                "overrideAdditionalEff": 0.2,
                "overrideAdditionalRes": 0
            }
        }
    },
    "Serila": {
        "code": "c1040",
        "_id": "serila",
        "name": "Serila",
        "moonlight": false,
        "rarity": 4,
        "attribute": "fire",
        "role": "mage",
        "zodiac": "waterbearer",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "C": 0.068,
                "B": 0.102,
                "A": 0.136,
                "S": 0.17,
                "SS": 0.204,
                "SSS": 0.238
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1040_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1040_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc104001",
                "id": "exc104001",
                "name": "Witch Hat",
                "description": "A magic hat that keeps your skin clear and wrinkle-free by completely blocking heat and UV rays.",
                "unit": "c1040",
                "role": "mage",
                "rarity": 5,
                "stat": {
                    "type": "att_rate",
                    "value": 0.07
                },
                "skills": [
                    {
                        "skill": 2,
                        "description": "30% chance to grant the caster an extra turn when using Spirit Absorb.",
                        "skill_description": "Absorbs the enemy's Attack, increasing Attack of the caster for 2 turns before recovering Health proportional to the damage dealt, with a {{variable}} chance to decrease Attack of the enemy for 2 turns. Has a 30% chance of granting the caster an extra turn after attacking. When the enemy is defeated, cooldown does not increase.",
                        "values": [
                            1,
                            17,
                            35
                        ],
                        "_id": 0
                    },
                    {
                        "skill": 3,
                        "description": "Inflicts vampiric touch for 2 turns when using Flame Kiss.",
                        "skill_description": "Swallows the enemy in the flame of Chatty, the magic lantern, with a {{variable}} chance each to inflict two burn effects for 2 turns, and inflicts vampiric touch for 2 turns.",
                        "values": [
                            31,
                            23
                        ],
                        "_id": 1
                    },
                    {
                        "skill": 3,
                        "description": "Dispels two buffs when using Flame Kiss. (Applies prior to inflicting burn debuff)",
                        "skill_description": "Swallows the enemy in the flame of Chatty, the magic lantern, dispelling two buffs, with a {{variable}} chance each to inflict two burn effects for 2 turns.",
                        "values": [
                            31
                        ],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1040.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 1.05,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.8,
                "pow": 1.05,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13166,
                "atk": 976,
                "hp": 3601,
                "spd": 106,
                "def": 551,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.06,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16900,
                "atk": 1218,
                "hp": 4521,
                "spd": 106,
                "def": 683,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "Sez": {
        "code": "c1038",
        "_id": "sez",
        "name": "Sez",
        "moonlight": false,
        "rarity": 5,
        "attribute": "ice",
        "role": "assassin",
        "zodiac": "scorpion",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "B": 0.056,
                "A": 0.084,
                "S": 0.112,
                "SS": 0.14,
                "SSS": 0.168
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1038_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1038_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.95,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.5,
                "pow": 1,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 2,
                "pow": 0.95,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13275,
                "atk": 984,
                "hp": 4735,
                "spd": 113,
                "def": 381,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16901,
                "atk": 1228,
                "hp": 6266,
                "spd": 113,
                "def": 473,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Shadow Knight Pyllis": {
        "code": "c4005",
        "_id": "shadow-knight-pyllis",
        "name": "Shadow Knight Pyllis",
        "moonlight": true,
        "rarity": 3,
        "attribute": "dark",
        "role": "knight",
        "zodiac": "crab",
        "self_devotion": {
            "type": "def",
            "grades": {
                "D": 18,
                "C": 27,
                "B": 36,
                "A": 45,
                "S": 54,
                "SS": 63,
                "SSS": 72
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4005_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4005_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 1,
                "targets": 1,
                "selfDefScaling": 0.5,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.3,
                "pow": 0.95,
                "targets": 1,
                "selfDefScaling": 0.7,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12139,
                "atk": 549,
                "hp": 5098,
                "spd": 91,
                "def": 535,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 685,
                "overrideHp": 6403,
                "overrideDef": 703,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 6,
                "overrideAdditionalEff": 0.25,
                "overrideAdditionalRes": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15518,
                "atk": 685,
                "hp": 6403,
                "spd": 91,
                "def": 703,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 685,
                "overrideHp": 6403,
                "overrideDef": 703,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 6,
                "overrideAdditionalEff": 0.25,
                "overrideAdditionalRes": 0
            }
        }
    },
    "Shadow Rose": {
        "code": "c2003",
        "_id": "shadow-rose",
        "name": "Shadow Rose",
        "moonlight": true,
        "rarity": 4,
        "attribute": "dark",
        "role": "knight",
        "zodiac": "twins",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "C": 0.068,
                "B": 0.102,
                "A": 0.136,
                "S": 0.17,
                "SS": 0.204,
                "SSS": 0.238
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2003_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2003_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc200301",
                "id": "exc200301",
                "name": "Shadow Wing",
                "description": "A circlet shaped like a pair of wings and consumed by an inner shadow. It reinvigorates the distorted desires of its wearer with new life.",
                "unit": "c2003",
                "role": "knight",
                "rarity": 5,
                "stat": {
                    "type": "acc",
                    "value": 0.08
                },
                "skills": [
                    {
                        "skill": 2,
                        "description": "Dispels one more buff when using Spear of Darkness.",
                        "skill_description": "Leaps into the air and strikes at the enemy with a swordstorm, dispelling two buffs and decreasing Defense for 2 turns.",
                        "values": [
                            18
                        ],
                        "_id": 0
                    },
                    {
                        "skill": 3,
                        "description": "Increases Combat Readiness of the caster by an additional 25% when using Goddess of Ruin.",
                        "skill_description": "Attacks all enemies with the Portent of Destruction, decreasing their Combat Readiness by 25%, and increases Combat Readiness of all allies by 25%, before increasing Combat Readiness of the caster by an additional 25%. Increases Effectiveness of the caster for 2 turns.",
                        "values": [],
                        "_id": 1
                    },
                    {
                        "skill": 3,
                        "description": "Increases Combat Readiness effects of Goddess of Ruin by 5% each.",
                        "skill_description": "Attacks all enemies with the Portent of Destruction, decreasing their Combat Readiness by 30%, and increases Combat Readiness of all allies by 30%. Increases Effectiveness of the caster for 2 turns.",
                        "values": [],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c2003.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 0.9,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.8,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12456,
                "atk": 713,
                "hp": 4607,
                "spd": 107,
                "def": 491,
                "chc": 0.19,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15933,
                "atk": 889,
                "hp": 5784,
                "spd": 107,
                "def": 610,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Sharun": {
        "code": "c1132",
        "_id": "sharun",
        "name": "Sharun",
        "moonlight": false,
        "rarity": 5,
        "attribute": "wind",
        "role": "manauser",
        "zodiac": "maiden",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "B": 0.09,
                "A": 0.135,
                "S": 0.18,
                "SS": 0.225,
                "SSS": 0.27
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1132_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1132_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc104601",
                "id": "exc104601",
                "name": "Eternal Rose",
                "description": "A rose that Lidica picked when she was excommunicated from the Rose Apostles. It has been specially treated to ensure it never withers but also lost its scent in the process.",
                "unit": "c1046",
                "role": "ranger",
                "rarity": 5,
                "stat": {
                    "type": "acc",
                    "value": 0.08
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S2 barrier",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.1
                    }
                ]
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 15694,
                "atk": 513,
                "hp": 4253,
                "spd": 106,
                "def": 580,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.06,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 20045,
                "atk": 640,
                "hp": 5340,
                "spd": 106,
                "def": 720,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "Shepherd Jena": {
        "code": "c4052",
        "_id": "shepherd-jena",
        "name": "Shepherd Jena",
        "moonlight": false,
        "rarity": 3,
        "attribute": "ice",
        "role": "mage",
        "zodiac": "ram",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "D": 0.045,
                "C": 0.068,
                "B": 0.09,
                "A": 0.112,
                "S": 0.135,
                "SS": 0.158,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4052_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4052_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.95,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.85,
                "pow": 0.95,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12313,
                "atk": 852,
                "hp": 3578,
                "spd": 111,
                "def": 483,
                "chc": 0.19,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 4499,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15808,
                "atk": 1063,
                "hp": 4491,
                "spd": 111,
                "def": 599,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 5549,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            }
        }
    },
    "Shooting Star Achates": {
        "code": "c2017",
        "_id": "shooting-star-achates",
        "name": "Shooting Star Achates",
        "moonlight": true,
        "rarity": 4,
        "attribute": "dark",
        "role": "manauser",
        "zodiac": "crab",
        "self_devotion": {
            "type": "max_hp_rate",
            "grades": {
                "C": 0.04,
                "B": 0.06,
                "A": 0.08,
                "S": 0.1,
                "SS": 0.12,
                "SSS": 0.14
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2017_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2017_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.95,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S3 heal",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.15
                    }
                ]
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 15120,
                "atk": 462,
                "hp": 4326,
                "spd": 98,
                "def": 598,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 19232,
                "atk": 576,
                "hp": 5700,
                "spd": 98,
                "def": 743,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Shuna": {
        "code": "c1123",
        "_id": "shuna",
        "name": "Shuna",
        "moonlight": false,
        "rarity": 5,
        "attribute": "fire",
        "role": "manauser",
        "zodiac": "twins",
        "self_devotion": {
            "type": "res",
            "grades": {
                "B": 0.09,
                "A": 0.135,
                "S": 0.18,
                "SS": 0.225,
                "SSS": 0.27
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1123_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1123_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc100301",
                "id": "exc100301",
                "name": "Valkyrie Wing",
                "description": "A mysterious circlet that symbolizes strength and beauty, and is the source of Rose's Fighting Spirit.",
                "unit": "c1003",
                "role": "knight",
                "rarity": 5,
                "stat": {
                    "type": "max_hp_rate",
                    "value": 0.07
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.75,
                "pow": 1,
                "targets": 1,
                "selfHpScaling": 0.09,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S2 barrier",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.18
                    }
                ]
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 15706,
                "atk": 520,
                "hp": 3972,
                "spd": 105,
                "def": 559,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.3
            },
            "lv60SixStarFullyAwakened": {
                "cp": 19989,
                "atk": 649,
                "hp": 5254,
                "spd": 105,
                "def": 694,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.3
            }
        }
    },
    "Sigret": {
        "code": "c1072",
        "_id": "sigret",
        "name": "Sigret",
        "moonlight": false,
        "rarity": 5,
        "attribute": "ice",
        "role": "warrior",
        "zodiac": "bull",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1072_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1072_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc107201",
                "id": "exc107201",
                "name": "Queen's Keepsake",
                "description": "The only gift Sigret has ever received. Though little more than a decoration, she wears it daily.",
                "unit": "c1072",
                "role": "warrior",
                "rarity": 5,
                "stat": {
                    "type": "att_rate",
                    "value": 0.07
                },
                "skills": [
                    {
                        "skill": 1,
                        "description": "Increases the damage dealt by Sever by 20%.",
                        "skill_description": null,
                        "values": [],
                        "_id": 0
                    },
                    {
                        "skill": 1,
                        "description": "Increases the chance of inflicting bleeding when using Sever by 20%.",
                        "skill_description": null,
                        "values": [],
                        "_id": 1
                    },
                    {
                        "skill": 2,
                        "description": "Changes the conditions necessary to activate Sever when using Smash from 50% remaining Health to 75% remaining Health.",
                        "skill_description": "Batters the enemy with a scythe, with a {{variable}} chance each to make them unhealable and inflict bleeding for 2 turns. When the enemy's Health is 75% or less after the attack, activates Sever as an extra attack with a 100% chance of inflicting bleeding.",
                        "values": [
                            27,
                            32
                        ],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1072.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.25,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "note": "30% penetration",
                "rate": 1.7,
                "pow": 0.8,
                "penetration": 0.3,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13624,
                "atk": 984,
                "hp": 4607,
                "spd": 109,
                "def": 446,
                "chc": 0.22999999999999998,
                "chd": 1.55,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17106,
                "atk": 1228,
                "hp": 5784,
                "spd": 109,
                "def": 553,
                "chc": 0.22999999999999998,
                "chd": 1.65,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Silk": {
        "code": "c1004",
        "_id": "silk",
        "name": "Silk",
        "moonlight": false,
        "rarity": 4,
        "attribute": "wind",
        "role": "ranger",
        "zodiac": "maiden",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "C": 0.04,
                "B": 0.06,
                "A": 0.08,
                "S": 0.1,
                "SS": 0.12,
                "SSS": 0.14
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1004_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1004_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 0.9,
                "targets": 1,
                "selfSpdScaling": 0.00075,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.85,
                "pow": 1.05,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12121,
                "atk": 910,
                "hp": 3739,
                "spd": 121,
                "def": 418,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15378,
                "atk": 1188,
                "hp": 4693,
                "spd": 121,
                "def": 518,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Silver Blade Aramintha": {
        "code": "c2048",
        "_id": "silver-blade-aramintha",
        "name": "Silver Blade Aramintha",
        "moonlight": true,
        "rarity": 5,
        "attribute": "light",
        "role": "mage",
        "zodiac": "twins",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2048_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2048_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.5,
                "pow": 1.3,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13525,
                "atk": 960,
                "hp": 3642,
                "spd": 106,
                "def": 551,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17342,
                "atk": 1197,
                "hp": 4572,
                "spd": 106,
                "def": 683,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.3,
                "efr": 0
            }
        }
    },
    "Sinful Angelica": {
        "code": "c2062",
        "_id": "sinful-angelica",
        "name": "Sinful Angelica",
        "moonlight": true,
        "rarity": 4,
        "attribute": "dark",
        "role": "manauser",
        "zodiac": "bull",
        "self_devotion": {
            "type": "res",
            "grades": {
                "C": 0.068,
                "B": 0.102,
                "A": 0.136,
                "S": 0.17,
                "SS": 0.204,
                "SSS": 0.238
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2062_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2062_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc100301",
                "id": "exc100301",
                "name": "Valkyrie Wing",
                "description": "A mysterious circlet that symbolizes strength and beauty, and is the source of Rose's Fighting Spirit.",
                "unit": "c1003",
                "role": "knight",
                "rarity": 5,
                "stat": {
                    "type": "speed",
                    "value": 5
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.95,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S2 heal",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.24
                    }
                ]
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 14749,
                "atk": 520,
                "hp": 3642,
                "spd": 114,
                "def": 508,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.18
            },
            "lv60SixStarFullyAwakened": {
                "cp": 18832,
                "atk": 649,
                "hp": 4572,
                "spd": 114,
                "def": 631,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.3
            }
        }
    },
    "Sol": {
        "code": "c1092",
        "_id": "sol",
        "name": "Sol",
        "moonlight": false,
        "rarity": 5,
        "attribute": "fire",
        "role": "warrior",
        "zodiac": "archer",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1092_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1092_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.6,
                "pow": 1,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13219,
                "atk": 945,
                "hp": 4253,
                "spd": 119,
                "def": 446,
                "chc": 0.19,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17044,
                "atk": 1177,
                "hp": 5340,
                "spd": 119,
                "def": 553,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Solitaria of the Snow": {
        "code": "c2111",
        "_id": "solitaria-of-the-snow",
        "name": "Solitaria of the Snow",
        "moonlight": true,
        "rarity": 5,
        "attribute": "light",
        "role": "mage",
        "zodiac": "bull",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "B": 0.09,
                "A": 0.135,
                "S": 0.18,
                "SS": 0.225,
                "SSS": 0.27
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2111_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2111_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "note": "S1 proc",
                "rate": 0.8,
                "pow": 1.3,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.8,
                "pow": 1,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13970,
                "atk": 833,
                "hp": 4221,
                "spd": 115,
                "def": 542,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.06,
                "efr": 0.18
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17925,
                "atk": 1039,
                "hp": 5299,
                "spd": 115,
                "def": 673,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0.18
            }
        }
    },
    "Sonia": {
        "code": "c3104",
        "_id": "sonia",
        "name": "Sonia",
        "moonlight": true,
        "rarity": 3,
        "attribute": "light",
        "role": "manauser",
        "zodiac": "fish",
        "self_devotion": {
            "type": "max_hp",
            "grades": {
                "D": 180,
                "C": 270,
                "B": 360,
                "A": 450,
                "S": 540,
                "SS": 630,
                "SSS": 720
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3104_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3104_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S2 heal",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.07
                    }
                ]
            },
            "S3": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S3 heal",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.18
                    }
                ]
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 14246,
                "atk": 433,
                "hp": 3904,
                "spd": 98,
                "def": 556,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.12
            },
            "lv60SixStarFullyAwakened": {
                "cp": 18267,
                "atk": 540,
                "hp": 4900,
                "spd": 98,
                "def": 729,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.12
            }
        }
    },
    "Specimen Sez": {
        "code": "c2038",
        "_id": "specimen-sez",
        "name": "Specimen Sez",
        "moonlight": true,
        "rarity": 5,
        "attribute": "light",
        "role": "assassin",
        "zodiac": "scorpion",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2038_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2038_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.8,
                "pow": 1,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "note": "100% penetration",
                "rate": 1.5,
                "pow": 1,
                "targets": 1,
                "penetration": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13275,
                "atk": 984,
                "hp": 4735,
                "spd": 113,
                "def": 381,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16901,
                "atk": 1228,
                "hp": 6266,
                "spd": 113,
                "def": 473,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Specter Tenebria": {
        "code": "c2050",
        "_id": "specter-tenebria",
        "name": "Specter Tenebria",
        "moonlight": true,
        "rarity": 5,
        "attribute": "dark",
        "role": "mage",
        "zodiac": "twins",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2050_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2050_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.2,
                "pow": 1,
                "targets": 2,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.8,
                "pow": 0.95,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13525,
                "atk": 960,
                "hp": 3642,
                "spd": 106,
                "def": 551,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17342,
                "atk": 1197,
                "hp": 4572,
                "spd": 106,
                "def": 683,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.3,
                "efr": 0
            }
        }
    },
    "Spirit Eye Celine": {
        "code": "c2103",
        "_id": "spirit-eye-celine",
        "name": "Spirit Eye Celine",
        "moonlight": true,
        "rarity": 5,
        "attribute": "light",
        "role": "assassin",
        "zodiac": "archer",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "B": 0.056,
                "A": 0.084,
                "S": 0.112,
                "SS": 0.14,
                "SSS": 0.168
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2103_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2103_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.9,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "note": "S1 proc",
                "rate": 1.3,
                "pow": 0.9,
                "penetration": 0.35,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 16901,
                "atk": 1158,
                "hp": 5016,
                "spd": 122,
                "def": 532,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16901,
                "atk": 1158,
                "hp": 5016,
                "spd": 122,
                "def": 532,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Straze": {
        "code": "c1034",
        "_id": "straze",
        "name": "Straze",
        "moonlight": true,
        "rarity": 5,
        "attribute": "dark",
        "role": "warrior",
        "zodiac": "bull",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1034_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1034_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 1,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "note": "100% penetration",
                "rate": 0.95,
                "pow": 1,
                "targets": 3,
                "penetration": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13624,
                "atk": 984,
                "hp": 4607,
                "spd": 109,
                "def": 446,
                "chc": 0.22999999999999998,
                "chd": 1.55,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17106,
                "atk": 1228,
                "hp": 5784,
                "spd": 109,
                "def": 553,
                "chc": 0.22999999999999998,
                "chd": 1.65,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Summer Break Charlotte": {
        "code": "c5009",
        "_id": "summer-break-charlotte",
        "name": "Summer Break Charlotte",
        "moonlight": false,
        "rarity": 5,
        "attribute": "ice",
        "role": "knight",
        "zodiac": "twins",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c5009_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c5009_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 1,
                "penetration": 0.5,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13243,
                "atk": 767,
                "hp": 4896,
                "spd": 109,
                "def": 511,
                "chc": 0.19,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 0,
                "overrideDef": 0,
                "overrideAdditionalCr": 0.3,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16949,
                "atk": 957,
                "hp": 6148,
                "spd": 109,
                "def": 634,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 0,
                "overrideDef": 0,
                "overrideAdditionalCr": 0.3,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            }
        }
    },
    "Summer's Disciple Alexa": {
        "code": "c4012",
        "_id": "summers-disciple-alexa",
        "name": "Summer's Disciple Alexa",
        "moonlight": false,
        "rarity": 3,
        "attribute": "ice",
        "role": "assassin",
        "zodiac": "lion",
        "self_devotion": {
            "type": "att",
            "grades": {
                "D": 36,
                "C": 54,
                "B": 72,
                "A": 90,
                "S": 108,
                "SS": 126,
                "SSS": 144
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4012_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4012_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": [],
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11477,
                "atk": 828,
                "hp": 3642,
                "spd": 111,
                "def": 398,
                "chc": 0.23,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 930,
                "overrideHp": 4137,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0.05,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 14563,
                "atk": 1081,
                "hp": 4572,
                "spd": 111,
                "def": 494,
                "chc": 0.23,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 1159,
                "overrideHp": 5194,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0.05,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            }
        }
    },
    "Summertime Iseria": {
        "code": "c5024",
        "_id": "summertime-iseria",
        "name": "Summertime Iseria",
        "moonlight": false,
        "rarity": 5,
        "attribute": "fire",
        "role": "ranger",
        "zodiac": "goat",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "B": 0.09,
                "A": 0.135,
                "S": 0.18,
                "SS": 0.225,
                "SSS": 0.27
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c5024_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c5024_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["normal", "miss"],
                "rate": 1.2,
                "pow": 1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13285,
                "atk": 804,
                "hp": 4542,
                "spd": 115,
                "def": 472,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0,
                "bonusMaxAtkPercent": 50,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 0,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17052,
                "atk": 1003,
                "hp": 5704,
                "spd": 115,
                "def": 585,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.3,
                "efr": 0,
                "bonusMaxAtkPercent": 50,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 0,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            }
        }
    },
    "Surin": {
        "code": "c1065",
        "_id": "surin",
        "name": "Surin",
        "moonlight": false,
        "rarity": 4,
        "attribute": "fire",
        "role": "assassin",
        "zodiac": "twins",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "C": 0.068,
                "B": 0.102,
                "A": 0.136,
                "S": 0.17,
                "SS": 0.204,
                "SSS": 0.238
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1065_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1065_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.9,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.4,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.8,
                "pow": 0.8,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12203,
                "atk": 809,
                "hp": 4060,
                "spd": 117,
                "def": 401,
                "chc": 0.19,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.12,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15716,
                "atk": 1010,
                "hp": 5097,
                "spd": 117,
                "def": 497,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.12,
                "efr": 0
            }
        }
    },
    "Suthan": {
        "code": "c3155",
        "_id": "suthan",
        "name": "Suthan",
        "moonlight": false,
        "rarity": 3,
        "attribute": "dark",
        "role": "mage",
        "zodiac": "waterbearer",
        "self_devotion": {
            "type": "att",
            "grades": {
                "D": 36,
                "C": 54,
                "B": 72,
                "A": 90,
                "S": 108,
                "SS": 126,
                "SSS": 144
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3155_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3155_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.8,
                "pow": 1.1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12152,
                "atk": 936,
                "hp": 3090,
                "spd": 101,
                "def": 537,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.06,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15595,
                "atk": 1168,
                "hp": 3877,
                "spd": 101,
                "def": 666,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "Sven": {
        "code": "c3015",
        "_id": "sven",
        "name": "Sven",
        "moonlight": true,
        "rarity": 3,
        "attribute": "dark",
        "role": "assassin",
        "zodiac": "scorpion",
        "self_devotion": {
            "type": "att",
            "grades": {
                "D": 36,
                "C": 54,
                "B": 72,
                "A": 90,
                "S": 108,
                "SS": 126,
                "SSS": 144
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3015_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3015_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.95,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "note": "S1 proc",
                "rate": 0.7,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.8,
                "pow": 0.8,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11607,
                "atk": 833,
                "hp": 4171,
                "spd": 108,
                "def": 364,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 14773,
                "atk": 1039,
                "hp": 5517,
                "spd": 108,
                "def": 452,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Sylvan Sage Vivian": {
        "code": "c2088",
        "_id": "sylvan-sage-vivian",
        "name": "Sylvan Sage Vivian",
        "moonlight": true,
        "rarity": 5,
        "attribute": "light",
        "role": "mage",
        "zodiac": "crab",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "B": 0.056,
                "A": 0.084,
                "S": 0.112,
                "SS": 0.14,
                "SSS": 0.168
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2088_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2088_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.1,
                "pow": 1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13929,
                "atk": 1040,
                "hp": 3899,
                "spd": 110,
                "def": 525,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17685,
                "atk": 1359,
                "hp": 4895,
                "spd": 110,
                "def": 652,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Taeyou": {
        "code": "c1127",
        "_id": "taeyou",
        "name": "Taeyou",
        "moonlight": false,
        "rarity": 5,
        "attribute": "ice",
        "role": "warrior",
        "zodiac": "maiden",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1127_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1127_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.98,
                "pow": 0.9,
                "targets": 1,
                "selfSpdScaling": 0.00075,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "note": "S1 proc",
                "rate": 1.2,
                "pow": 1.3,
                "targets": 1,
                "selfSpdScaling": 0.00075,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.9,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13569,
                "atk": 833,
                "hp": 4253,
                "spd": 115,
                "def": 497,
                "chc": 0.19,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17434,
                "atk": 1039,
                "hp": 5340,
                "spd": 115,
                "def": 617,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "Talaz": {
        "code": "c3152",
        "_id": "talaz",
        "name": "Talaz",
        "moonlight": false,
        "rarity": 3,
        "attribute": "ice",
        "role": "warrior",
        "zodiac": "lion",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "D": 0.028,
                "C": 0.042,
                "B": 0.056,
                "A": 0.07,
                "S": 0.084,
                "SS": 0.098,
                "SSS": 0.112
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3152_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3152_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 0.9,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11978,
                "atk": 878,
                "hp": 3899,
                "spd": 101,
                "def": 438,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15164,
                "atk": 1144,
                "hp": 4895,
                "spd": 101,
                "def": 543,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Talia": {
        "code": "c3154",
        "_id": "talia",
        "name": "Talia",
        "moonlight": false,
        "rarity": 3,
        "attribute": "light",
        "role": "assassin",
        "zodiac": "goat",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "D": 0.045,
                "C": 0.068,
                "B": 0.09,
                "A": 0.112,
                "S": 0.135,
                "SS": 0.158,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3154_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3154_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S2 barrier",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.7
                    }
                ]
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 1,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11710,
                "atk": 802,
                "hp": 3899,
                "spd": 114,
                "def": 418,
                "chc": 0.19,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15062,
                "atk": 903,
                "hp": 4895,
                "spd": 113,
                "def": 501,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.3,
                "efr": 0
            }
        }
    },
    "Tamarinne": {
        "code": "c1067",
        "_id": "tamarinne",
        "name": "Tamarinne",
        "moonlight": false,
        "rarity": 5,
        "attribute": "fire",
        "role": "manauser",
        "zodiac": "archer",
        "self_devotion": {
            "type": "max_hp_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1067_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1067_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.75,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S2 heal",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.25
                    }
                ]
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 15700,
                "atk": 767,
                "hp": 3481,
                "spd": 111,
                "def": 525,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.12,
                "efr": 0.06
            },
            "lv60SixStarFullyAwakened": {
                "cp": 20041,
                "atk": 957,
                "hp": 4370,
                "spd": 111,
                "def": 652,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.12,
                "efr": 0.18
            }
        }
    },
    "Taranor Guard": {
        "code": "c3032",
        "_id": "taranor-guard",
        "name": "Taranor Guard",
        "moonlight": false,
        "rarity": 3,
        "attribute": "ice",
        "role": "warrior",
        "zodiac": "scales",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "D": 0.028,
                "C": 0.042,
                "B": 0.056,
                "A": 0.07,
                "S": 0.084,
                "SS": 0.098,
                "SSS": 0.112
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3032_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3032_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.8,
                "pow": 1,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11788,
                "atk": 762,
                "hp": 4171,
                "spd": 104,
                "def": 469,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15002,
                "atk": 951,
                "hp": 5517,
                "spd": 104,
                "def": 583,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Taranor Royal Guard": {
        "code": "c3002",
        "_id": "taranor-royal-guard",
        "name": "Taranor Royal Guard",
        "moonlight": false,
        "rarity": 3,
        "attribute": "ice",
        "role": "knight",
        "zodiac": "scorpion",
        "self_devotion": {
            "type": "max_hp",
            "grades": {
                "D": 180,
                "C": 270,
                "B": 360,
                "A": 450,
                "S": 540,
                "SS": 630,
                "SSS": 720
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3002_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3002_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.8,
                "pow": 1,
                "targets": 1,
                "selfHpScaling": 0.025,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 0.95,
                "targets": 1,
                "selfHpScaling": 0.05,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12037,
                "atk": 675,
                "hp": 4902,
                "spd": 90,
                "def": 497,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15336,
                "atk": 842,
                "hp": 6463,
                "spd": 90,
                "def": 617,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Tempest Surin": {
        "code": "c2065",
        "_id": "tempest-surin",
        "name": "Tempest Surin",
        "moonlight": true,
        "rarity": 4,
        "attribute": "light",
        "role": "assassin",
        "zodiac": "twins",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "C": 0.04,
                "B": 0.06,
                "A": 0.08,
                "S": 0.1,
                "SS": 0.12,
                "SSS": 0.14
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2065_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2065_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc109501",
                "id": "exc109501",
                "name": "Soul Tailor",
                "description": "A medal bestowed only to the most talented of tailors. As it is a family heirloom, Lilibet received it from her mother, with whom she has been separated from childhood.",
                "unit": "c1095",
                "role": "warrior",
                "rarity": 5,
                "stat": {
                    "type": "cri",
                    "value": 0.06
                },
                "skills": [],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1095.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.05,
                "pow": 1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12203,
                "atk": 809,
                "hp": 4060,
                "spd": 117,
                "def": 401,
                "chc": 0.19,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.12,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15716,
                "atk": 1010,
                "hp": 5097,
                "spd": 117,
                "def": 497,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.12,
                "efr": 0
            }
        }
    },
    "Tenebria": {
        "code": "c1050",
        "_id": "tenebria",
        "name": "Tenebria",
        "moonlight": false,
        "rarity": 5,
        "attribute": "fire",
        "role": "mage",
        "zodiac": "crab",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "B": 0.09,
                "A": 0.135,
                "S": 0.18,
                "SS": 0.225,
                "SSS": 0.27
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1050_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1050_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc101601",
                "id": "exc101601",
                "name": "Azure Dragon's Spirit",
                "description": "A ribbon with special powers that allows the wearer to harness their innate dragon powers.",
                "unit": "c1016",
                "role": "mage",
                "rarity": 5,
                "stat": {
                    "type": "acc",
                    "value": 0.08
                },
                "skills": [],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1016.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.2,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.8,
                "pow": 1,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.1,
                "pow": 1.05,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13929,
                "atk": 1040,
                "hp": 3899,
                "spd": 110,
                "def": 525,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17685,
                "atk": 1359,
                "hp": 4895,
                "spd": 110,
                "def": 652,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Tieria": {
        "code": "c3021",
        "_id": "tieria",
        "name": "Tieria",
        "moonlight": false,
        "rarity": 3,
        "attribute": "fire",
        "role": "warrior",
        "zodiac": "ram",
        "self_devotion": {
            "type": "att",
            "grades": {
                "D": 36,
                "C": 54,
                "B": 72,
                "A": 90,
                "S": 108,
                "SS": 126,
                "SSS": 144
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3021_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3021_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1.05,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.8,
                "pow": 0.9,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11377,
                "atk": 673,
                "hp": 4171,
                "spd": 100,
                "def": 477,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 14466,
                "atk": 839,
                "hp": 5517,
                "spd": 100,
                "def": 591,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Top Model Luluca": {
        "code": "c2082",
        "_id": "top-model-luluca",
        "name": "Top Model Luluca",
        "moonlight": true,
        "rarity": 5,
        "attribute": "dark",
        "role": "mage",
        "zodiac": "archer",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "B": 0.056,
                "A": 0.084,
                "S": 0.112,
                "SS": 0.14,
                "SSS": 0.168
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2082_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2082_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.6,
                "pow": 1,
                "targets": 1,
                "selfSpdScaling": 0.0015,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13302,
                "atk": 984,
                "hp": 3481,
                "spd": 115,
                "def": 534,
                "chc": 0.19,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17151,
                "atk": 1228,
                "hp": 4370,
                "spd": 115,
                "def": 662,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Troublemaker Crozet": {
        "code": "c2036",
        "_id": "troublemaker-crozet",
        "name": "Troublemaker Crozet",
        "moonlight": true,
        "rarity": 4,
        "attribute": "dark",
        "role": "knight",
        "zodiac": "fish",
        "self_devotion": {
            "type": "max_hp_rate",
            "grades": {
                "C": 0.04,
                "B": 0.06,
                "A": 0.08,
                "S": 0.1,
                "SS": 0.12,
                "SSS": 0.14
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2036_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2036_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc203601",
                "id": "exc203601",
                "name": "Silver Lion's Protection",
                "description": "A shield with a lion motif regarded by Troublemaker Crozet as his most valued possession, which he uses in honor of his one true love.",
                "unit": "c2036",
                "role": "knight",
                "rarity": 5,
                "stat": {
                    "type": "max_hp_rate",
                    "value": 0.07
                },
                "skills": [
                    {
                        "skill": 2,
                        "description": "Increases Chivalry's counterattack chance by 15% when the ally in the back row is attacked.",
                        "skill_description": "Receives {{variable}} of damage suffered by the ally in the back row in their place. Only the highest damage distribution effect will be applied. Has a 50% chance to counterattack when the ally in the back row is attacked.",
                        "values": [],
                        "_id": 0
                    },
                    {
                        "skill": 3,
                        "description": "Recovers the caster's Health when using Oath of Protection. Amount recovered increases proportional to the caster's max Health.",
                        "skill_description": "Swears an oath of protection, dispelling all debuffs from the caster and one ally, before increasing Defense for 3 turns. Grants class enhancement to the ally for 3 turns, and recovers the caster's Health. Amount recovered increases proportional to the caster's max Health.",
                        "values": [
                            "c2036_r",
                            2
                        ],
                        "_id": 1
                    },
                    {
                        "skill": 3,
                        "description": "Increases Combat Readiness of the target by 40% when using Oath of Protection.",
                        "skill_description": "Swears an oath of protection, dispelling all debuffs from the caster and one ally, before increasing Defense for 3 turns. Grants class enhancement to the ally for 3 turns, and increases their Combat Readiness by 40%.",
                        "values": [
                            "c2036_r",
                            2
                        ],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c2036.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.95,
                "targets": 1,
                "selfHpScaling": 0.04,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S3 barrier",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.2
                    }
                ]
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12870,
                "atk": 622,
                "hp": 4794,
                "spd": 98,
                "def": 578,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.06
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16543,
                "atk": 776,
                "hp": 6021,
                "spd": 98,
                "def": 718,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.18
            }
        }
    },
    "Twisted Eidolon Kayron": {
        "code": "c2023",
        "_id": "twisted-eidolon-kayron",
        "name": "Twisted Eidolon Kayron",
        "moonlight": true,
        "rarity": 5,
        "attribute": "light",
        "role": "assassin",
        "zodiac": "scorpion",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "B": 0.056,
                "A": 0.084,
                "S": 0.112,
                "SS": 0.14,
                "SSS": 0.168
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2023_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2023_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.85,
                "pow": 1,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13275,
                "atk": 984,
                "hp": 4735,
                "spd": 113,
                "def": 381,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16901,
                "atk": 1228,
                "hp": 6266,
                "spd": 113,
                "def": 473,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Tywin": {
        "code": "c1042",
        "_id": "tywin",
        "name": "Tywin",
        "moonlight": false,
        "rarity": 5,
        "attribute": "ice",
        "role": "knight",
        "zodiac": "ram",
        "self_devotion": {
            "type": "max_hp_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1042_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1042_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc104201",
                "id": "exc104201",
                "name": "Estyria",
                "description": "A beautiful, silver sword that cuts through its enemies delicately, like the winter wind.",
                "unit": "c1042",
                "role": "knight",
                "rarity": 5,
                "stat": {
                    "type": "max_hp_rate",
                    "value": 0.07
                },
                "skills": [
                    {
                        "skill": 1,
                        "description": "Dispels one more buff when using Sword Storm.",
                        "skill_description": "Attacks with a swordstorm, with a {{variable}} chance to dispel two buffs. Damage dealt increases proportional to the caster's max Health.",
                        "values": [],
                        "_id": 0
                    },
                    {
                        "skill": 1,
                        "description": "Decreases cooldown of All-Out Attack by 1 turn when a buff is dispelled with Sword Storm.",
                        "skill_description": "Attacks with a swordstorm, with a {{variable}} chance to dispel one buff. Cooldown of All-Out Attack decreases by 1 turn when a buff is dispelled. Damage dealt increases proportional to the caster's max Health.",
                        "values": [],
                        "_id": 1
                    },
                    {
                        "skill": 2,
                        "description": "Increases Combat Readiness of the caster by an additional 20% when using Commanding Shout.",
                        "skill_description": "Increases Attack and Critical Hit Chance of an ally for 2 turns, before increasing Combat Readiness by 30%. Increases Attack and Critical Hit Chance of the caster for 2 turns, before increasing Combat Readiness by 50%.",
                        "values": [
                            1,
                            4
                        ],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1042.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.8,
                "pow": 0.95,
                "targets": 1,
                "selfHpScaling": 0.04,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S2 barrier",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.20
                    }
                ]
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.5,
                "pow": 0.95,
                "targets": 3,
                "selfHpScaling": 0.1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13403,
                "atk": 658,
                "hp": 5375,
                "spd": 110,
                "def": 523,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.06,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17219,
                "atk": 821,
                "hp": 6751,
                "spd": 110,
                "def": 648,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "Unbound Knight Arowell": {
        "code": "c4004",
        "_id": "unbound-knight-arowell",
        "name": "Unbound Knight Arowell",
        "moonlight": true,
        "rarity": 3,
        "attribute": "light",
        "role": "knight",
        "zodiac": "scales",
        "self_devotion": {
            "type": "max_hp",
            "grades": {
                "D": 180,
                "C": 270,
                "B": 360,
                "A": 450,
                "S": 540,
                "SS": 630,
                "SSS": 720
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4004_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4004_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 0.95,
                "targets": 1,
                "selfHpScaling": 0.05,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 0.95,
                "targets": 1,
                "selfHpScaling": 0.15,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12124,
                "atk": 607,
                "hp": 4640,
                "spd": 95,
                "def": 511,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.12,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 5429,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0.35
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15498,
                "atk": 758,
                "hp": 5826,
                "spd": 95,
                "def": 672,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.12,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 6818,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0.35
            }
        }
    },
    "Verdant Adin": {
        "code": "c4143",
        "_id": "verdant-adin",
        "name": "Verdant Adin",
        "moonlight": false,
        "rarity": 3,
        "attribute": "wind",
        "role": "assassin",
        "zodiac": "lion",
        "self_devotion": {
            "type": "att",
            "grades": {
                "D": 36,
                "C": 54,
                "B": 72,
                "A": 90,
                "S": 108,
                "SS": 126,
                "SSS": 144
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4143_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4143_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "TODO": "find multis",
                "hitTypes": [],
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11477,
                "atk": 828,
                "hp": 3642,
                "spd": 111,
                "def": 398,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 0,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 5,
                "overrideAdditionalEff": 0.2,
                "overrideAdditionalRes": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 14563,
                "atk": 1081,
                "hp": 4572,
                "spd": 111,
                "def": 494,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 0,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 5,
                "overrideAdditionalEff": 0.2,
                "overrideAdditionalRes": 0
            }
        }
    },
    "Vigilante Leader Glenn": {
        "code": "c4103",
        "_id": "vigilante-leader-glenn",
        "name": "Vigilante Leader Glenn",
        "moonlight": false,
        "rarity": 3,
        "attribute": "wind",
        "role": "ranger",
        "zodiac": "scales",
        "self_devotion": {
            "type": "att",
            "grades": {
                "D": 36,
                "C": 54,
                "B": 72,
                "A": 90,
                "S": 108,
                "SS": 126,
                "SSS": 144
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4103_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4103_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 0.9,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11520,
                "atk": 704,
                "hp": 3867,
                "spd": 110,
                "def": 424,
                "chc": 0.27,
                "chd": 1.6,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 1026,
                "overrideHp": 5298,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 14585,
                "atk": 920,
                "hp": 4855,
                "spd": 110,
                "def": 525,
                "chc": 0.27,
                "chd": 1.6,
                "dac": 0.03,
                "eff": 0,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 1026,
                "overrideHp": 5298,
                "overrideDef": 0,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            }
        }
    },
    "Vildred": {
        "code": "c1007",
        "_id": "vildred",
        "name": "Vildred",
        "moonlight": false,
        "rarity": 5,
        "attribute": "wind",
        "role": "assassin",
        "zodiac": "lion",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1007_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1007_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc106601",
                "id": "exc106601",
                "name": "Dragon Emerald",
                "description": "Jewelry that Luna's father passed on to her. It is the only thing her mother left behind when she left.",
                "unit": "c1066",
                "role": "warrior",
                "rarity": 5,
                "stat": {
                    "type": "att_rate",
                    "value": 0.07
                },
                "skills": [
                    {
                        "skill": 1,
                        "description": "Increases the caster's Combat Readiness by 15% after using Infinity Slash.",
                        "skill_description": "Stabs the target a random number of times, before increasing Combat Readiness of the caster by 15%. Skill cooldown decreases by 1-3 turns and damage dealt increases according to the number of attacks.",
                        "values": [],
                        "_id": 0
                    },
                    {
                        "skill": 3,
                        "description": "Decreases the enemy's Attack for 2 turns after using Ragnar Spear.",
                        "skill_description": "Soars into the air and hits the enemy with a spear, with a {{variable}} chance to decrease Defense for 2 turns and a 100% chance to decrease Attack for 2 turns. Attacks using an advantageous element.",
                        "values": [
                            18,
                            17
                        ],
                        "_id": 1
                    },
                    {
                        "skill": 3,
                        "description": "Grants an extra turn to the caster when the enemy is defeated by Ragnar Spear.",
                        "skill_description": "Soars into the air and hits the enemy with a spear, with a {{variable}} chance to decrease Defense for 2 turns. Attacks using an advantageous element. Grants an extra turn to the caster when the enemy is defeated.",
                        "values": [
                            18,
                            35
                        ],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1066.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 0.95,
                "targets": 2,
                "selfSpdScaling": 0.00075,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 1,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.85,
                "pow": 1,
                "targets": 3,
                "selfSpdScaling": 0.1125,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13126,
                "atk": 983,
                "hp": 4092,
                "spd": 116,
                "def": 421,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16674,
                "atk": 1283,
                "hp": 5138,
                "spd": 116,
                "def": 522,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Violet": {
        "code": "c1074",
        "_id": "violet",
        "name": "Violet",
        "moonlight": false,
        "rarity": 5,
        "attribute": "wind",
        "role": "assassin",
        "zodiac": "scorpion",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1074_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1074_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 0.9,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S2 heal",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.15
                    }
                ]
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 0.9,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13275,
                "atk": 984,
                "hp": 4735,
                "spd": 113,
                "def": 381,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16901,
                "atk": 1228,
                "hp": 6266,
                "spd": 113,
                "def": 473,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Vivian": {
        "code": "c1088",
        "_id": "vivian",
        "name": "Vivian",
        "moonlight": false,
        "rarity": 5,
        "attribute": "wind",
        "role": "mage",
        "zodiac": "archer",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "B": 0.056,
                "A": 0.084,
                "S": 0.112,
                "SS": 0.14,
                "SSS": 0.168
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1088_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1088_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc108801",
                "id": "exc108801",
                "name": "True Sight",
                "description": "An object that has been passed down among the greatest sorcerers since ancient times. It is said that even in total darkness, its blue light does not fade.",
                "unit": "c1088",
                "role": "mage",
                "rarity": 5,
                "stat": {
                    "type": "max_hp_rate",
                    "value": 0.07
                },
                "skills": [
                    {
                        "skill": 1,
                        "description": "Combat Readiness of the caster increases by an additional 5% when Vitality Drain results in a critical hit.",
                        "skill_description": "Smashes the enemy with a rock, increasing the caster's Combat Readiness by {{variable}}. A critical hit will increase the caster's Combat Readiness by an additional 15%.",
                        "values": [],
                        "_id": 0
                    },
                    {
                        "skill": 3,
                        "description": "Increases the caster's Combat Readiness by 50% when using Mana Amplification.",
                        "skill_description": "Fully amplifies mana, granting immunity to all allies for 3 turns before granting increased Attack (Greater) to the caster for 3 turns while increasing Attack of all allies except for the caster for 3 turns. Increases the caster's Combat Readiness by 50%.",
                        "values": [],
                        "_id": 1
                    },
                    {
                        "skill": 3,
                        "description": "Dispels one debuff from all allies before the skill effect when using Mana Amplification.",
                        "skill_description": "Fully amplifies mana, dispelling one debuff each from all allies before granting immunity to all allies for 3 turns and granting increased Attack (Greater) to the caster for 3 turns while increasing Attack of all allies except for the caster for 3 turns.",
                        "values": [],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1088.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.2,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.05,
                "pow": 0.9,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13302,
                "atk": 984,
                "hp": 3481,
                "spd": 115,
                "def": 534,
                "chc": 0.19,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17151,
                "atk": 1228,
                "hp": 4370,
                "spd": 115,
                "def": 662,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Wanda": {
        "code": "c3065",
        "_id": "wanda",
        "name": "Wanda",
        "moonlight": true,
        "rarity": 3,
        "attribute": "dark",
        "role": "ranger",
        "zodiac": "twins",
        "self_devotion": {
            "type": "att",
            "grades": {
                "D": 36,
                "C": 54,
                "B": 72,
                "A": 90,
                "S": 108,
                "SS": 126,
                "SSS": 144
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3065_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3065_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 0.95,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.8,
                "pow": 0.9,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11667,
                "atk": 769,
                "hp": 3739,
                "spd": 109,
                "def": 429,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 14767,
                "atk": 1005,
                "hp": 4693,
                "spd": 109,
                "def": 532,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "Wanderer Silk": {
        "code": "c2004",
        "_id": "wanderer-silk",
        "name": "Wanderer Silk",
        "moonlight": true,
        "rarity": 4,
        "attribute": "light",
        "role": "ranger",
        "zodiac": "goat",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "C": 0.068,
                "B": 0.102,
                "A": 0.136,
                "S": 0.17,
                "SS": 0.204,
                "SSS": 0.238
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2004_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2004_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc200401",
                "id": "exc200401",
                "name": "Dun Blyraia's Dark Blessing",
                "description": "A quiver made with Mana from the dimension that Wanderer Silk came from, known to maximize her concentration.",
                "unit": "c2004",
                "role": "ranger",
                "rarity": 5,
                "stat": {
                    "type": "speed",
                    "value": 5
                },
                "skills": [
                    {
                        "skill": 2,
                        "description": "Grants the caster an extra attack regardless of whether the enemy is debuffed when using Automatic Fire.",
                        "skill_description": "Fires a volley of arrows at the enemy, decreasing Combat Readiness by 10%. After the attack, grants the caster an extra attack with the same skill. Damage dealt increases proportional to the caster's Speed.",
                        "values": [],
                        "_id": 0
                    },
                    {
                        "skill": 3,
                        "description": "Dispels one buff from the enemy when using Shock Arrow. (This effect is applied before inflicting silence.)",
                        "skill_description": "Shoots an arrow infused with the power of lightning, dispelling one buff before inflicting silence and making them unhealable for 2 turns, and decreasing Combat Readiness by 100%. Damage dealt increases proportional to the caster's Speed.",
                        "values": [
                            28,
                            27
                        ],
                        "_id": 1
                    },
                    {
                        "skill": 3,
                        "description": "Increases Speed of all allies for 2 turns when using Shock Arrow.",
                        "skill_description": "Shoots an arrow infused with the power of lightning, inflicting silence and making them unhealable for 2 turns, and decreasing Combat Readiness by 100%, before increasing Speed of all allies for 2 turns. Damage dealt increases proportional to the caster's Speed.",
                        "values": [
                            28,
                            27,
                            3
                        ],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c2004.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.2,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.3,
                "pow": 0.9,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 2,
                "pow": 0.8,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12475,
                "atk": 746,
                "hp": 4285,
                "spd": 112,
                "def": 455,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16007,
                "atk": 930,
                "hp": 5380,
                "spd": 112,
                "def": 564,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.3,
                "efr": 0
            }
        }
    },
    "Watcher Schuri": {
        "code": "c2020",
        "_id": "watcher-schuri",
        "name": "Watcher Schuri",
        "moonlight": true,
        "rarity": 4,
        "attribute": "light",
        "role": "ranger",
        "zodiac": "scorpion",
        "self_devotion": {
            "type": "cri",
            "grades": {
                "C": 0.042,
                "B": 0.063,
                "A": 0.084,
                "S": 0.105,
                "SS": 0.126,
                "SSS": 0.147
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2020_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c2020_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc100301",
                "id": "exc100301",
                "name": "Valkyrie Wing",
                "description": "A mysterious circlet that symbolizes strength and beauty, and is the source of Rose's Fighting Spirit.",
                "unit": "c1003",
                "role": "knight",
                "rarity": 5,
                "stat": {
                    "type": "speed",
                    "value": 5
                },
                "skills": [
                    {
                        "skill": 1,
                        "description": "Activates each effect regardless of current Health when using Sequential Cutter.",
                        "skill_description": "Attacks with a sword, with a {{variable}} chance to provoke for 1 turn, before increasing Defense of the caster for 1 turn. Damage dealt increases proportional to the caster's Defense.",
                        "values": [
                            25,
                            2
                        ],
                        "_id": 0
                    },
                    {
                        "skill": 2,
                        "description": "Applies the same effect to the caster when using Shield of Light.",
                        "skill_description": "Covers an ally and the caster with the Shield of Light, dispelling two debuffs and granting a barrier for 2 turns before increasing Combat Readiness by {{variable}}. Barrier strength is proportional to the caster's Defense.",
                        "values": [
                            5
                        ],
                        "_id": 1
                    },
                    {
                        "skill": 3,
                        "description": "Decreases skill cooldown of Goddess of Victory by 1 turn.",
                        "skill_description": null,
                        "values": [],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1003.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 1.05,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.8,
                "pow": 0.95,
                "targets": 1,
                "penetration": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12452,
                "atk": 778,
                "hp": 4726,
                "spd": 106,
                "def": 449,
                "chc": 0.19,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15955,
                "atk": 970,
                "hp": 5935,
                "spd": 106,
                "def": 557,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Wild Angara": {
        "code": "m0171",
        "_id": "wild-angara",
        "name": "Wild Angara",
        "moonlight": false,
        "rarity": 2,
        "attribute": "fire",
        "role": "warrior",
        "zodiac": "bull",
        "self_devotion": {
            "type": "max_hp",
            "grades": {
                "C": 0,
                "B": 0,
                "A": 0,
                "S": 0,
                "SS": 0,
                "SSS": 0
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/m0171_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/m0171_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": [],
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12452,
                "atk": 778,
                "hp": 4726,
                "spd": 106,
                "def": 449,
                "chc": 0.19,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15955,
                "atk": 1089,
                "hp": 5237,
                "spd": 106,
                "def": 525,
                "chc": 0.23,
                "chd": 1.6,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Yoonryoung": {
        "code": "c3134",
        "_id": "yoonryoung",
        "name": "Yoonryoung",
        "moonlight": true,
        "rarity": 3,
        "attribute": "light",
        "role": "knight",
        "zodiac": "ram",
        "self_devotion": {
            "type": "max_hp",
            "grades": {
                "D": 180,
                "C": 270,
                "B": 360,
                "A": 450,
                "S": 540,
                "SS": 630,
                "SSS": 720
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3134_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c3134_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.8,
                "pow": 0.95,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.5,
                "pow": 1,
                "options": []
            },
            "S3": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S3 barrier",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.16
                    }
                ]
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 11779,
                "atk": 564,
                "hp": 4709,
                "spd": 105,
                "def": 480,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.06,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15140,
                "atk": 703,
                "hp": 5914,
                "spd": 105,
                "def": 596,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "Yufine": {
        "code": "c1016",
        "_id": "yufine",
        "name": "Yufine",
        "moonlight": false,
        "rarity": 5,
        "attribute": "wind",
        "role": "warrior",
        "zodiac": "bull",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1016_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1016_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc101601",
                "id": "exc101601",
                "name": "Azure Dragon's Spirit",
                "description": "A ribbon with special powers that allows the wearer to harness their innate dragon powers.",
                "unit": "c1016",
                "role": "warrior",
                "rarity": 5,
                "stat": {
                    "type": "acc",
                    "value": 0.08
                },
                "skills": [
                    {
                        "skill": 1,
                        "description": "35% chance to extend the caster's buff durations by 1 turn when using Double Slash.",
                        "skill_description": "Attacks by swinging their weapon, with a {{variable}} chance to decrease Defense for 2 turns, before a 35% chance to extend the caster's buff durations by 1 turn.",
                        "values": [
                            18
                        ],
                        "_id": 0
                    },
                    {
                        "skill": 1,
                        "description": "Damage dealt is increased by 30% when using Double Slash.",
                        "skill_description": null,
                        "values": [],
                        "_id": 1
                    },
                    {
                        "skill": 2,
                        "description": "Increases chance of inflicting silence with Dragon's Roar by 15%.",
                        "skill_description": null,
                        "values": [],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1016.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.9,
                "pow": 1,
                "targets": 3,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "note": "70% penetration",
                "rate": 2,
                "pow": 0.95,
                "penetration": 0.7,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13624,
                "atk": 984,
                "hp": 4607,
                "spd": 109,
                "def": 446,
                "chc": 0.22999999999999998,
                "chd": 1.55,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17106,
                "atk": 1228,
                "hp": 5784,
                "spd": 109,
                "def": 553,
                "chc": 0.22999999999999998,
                "chd": 1.65,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Yulha": {
        "code": "c1131",
        "_id": "yulha",
        "name": "Yulha",
        "moonlight": false,
        "rarity": 5,
        "attribute": "wind",
        "role": "knight",
        "zodiac": "archer",
        "self_devotion": {
            "type": "max_hp_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1131_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1131_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.5,
                "pow": 1,
                "targets": 1,
                "selfHpScaling": 0.1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S2 barrier",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.35
                    }
                ]
            },
            "S3": {
                "hitTypes": ["normal", "miss"],
                "note": "no missing health",
                "rate": 0.5,
                "pow": 1,
                "targets": 1,
                "penetration": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13591,
                "atk": 716,
                "hp": 5446,
                "spd": 100,
                "def": 559,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17114,
                "atk": 894,
                "hp": 6840,
                "spd": 104,
                "def": 694,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Yuna": {
        "code": "c1030",
        "_id": "yuna",
        "name": "Yuna",
        "moonlight": false,
        "rarity": 5,
        "attribute": "ice",
        "role": "ranger",
        "zodiac": "lion",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1030_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1030_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc103001",
                "id": "exc103001",
                "name": "Small Drone Tuna",
                "description": "Tuna is a drone made by Yuna. No matter where she goes, on Earth or on Orbis, Tuna is there to protect her.",
                "unit": "c1030",
                "role": "ranger",
                "rarity": 5,
                "stat": {
                    "type": "speed",
                    "value": 5
                },
                "skills": [
                    {
                        "skill": 1,
                        "description": "Combat Readiness increases by an additional 1% per target when using Homing Laser.",
                        "skill_description": "Attacks all enemies with a drone before increasing Combat Readiness of the caster by 7% per target and all other allies by 3% per target. Damage dealt increases proportional to the caster's Speed. When there are three or fewer enemies, damage dealt increases with fewer enemies.",
                        "values": [],
                        "_id": 0
                    },
                    {
                        "skill": 2,
                        "description": "Has a 30% chance each to grant allies increased Attack (Greater) for 2 turns when using Upgrade.",
                        "skill_description": "Buffs all allies with a drone and increases Attack and Speed for 2 turns, with a 30% chance each to grant allies increased Attack (Greater) for 2 turns.",
                        "values": [
                            1,
                            3,
                            44
                        ],
                        "_id": 1
                    },
                    {
                        "skill": 3,
                        "description": "Damage dealt is increased by 30% when using Meteor Cannon.",
                        "skill_description": null,
                        "values": [],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c1030.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.6,
                "pow": 0.8,
                "targets": 3,
                "selfSpdScaling": 0.00075,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 0.8,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13356,
                "atk": 928,
                "hp": 4536,
                "spd": 112,
                "def": 446,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16976,
                "atk": 1158,
                "hp": 6002,
                "spd": 112,
                "def": 553,
                "chc": 0.22999999999999998,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Zahhak": {
        "code": "c1119",
        "_id": "zahhak",
        "name": "Zahhak",
        "moonlight": false,
        "rarity": 5,
        "attribute": "wind",
        "role": "warrior",
        "zodiac": "archer",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1119_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1119_l.png"
        },
        "ex_equip": [
            {
                "_id": "exc111901",
                "id": "exc111901",
                "name": "A Spell of Tragic Love",
                "description": "A talisman given by Amid long ago. Though it does not have any noticeable effects, Zahhak cherishes it more than anything.",
                "unit": "c1119",
                "role": "warrior",
                "rarity": 5,
                "stat": {
                    "type": "att_rate",
                    "value": 0.07
                },
                "skills": [
                    {
                        "skill": 2,
                        "description": "Increases Attack of the target and the caster for 2 turns when using Elaborate Plan.",
                        "skill_description": null,
                        "values": [],
                        "_id": 0
                    },
                    {
                        "skill": 3,
                        "description": "Inflicts resource reduction on the target by 60% before the skill's effect when using Execute.",
                        "skill_description": null,
                        "values": [],
                        "_id": 1
                    },
                    {
                        "skill": 3,
                        "description": "Decreases skill cooldown of Execute by 1 turn.",
                        "skill_description": null,
                        "values": [],
                        "_id": 2
                    }
                ],
                "assets": {
                    "icon": "https://assets.epicsevendb.com/_source/item/icon_eq_exclusive_c2033.png"
                }
            }
        ],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "rate": 0,
                "pow": 0,
                "options": [
                    {
                        "name": "S2 barrier",
                        "rate": 0,
                        "pow": 0,
                        "selfHpScaling": 0.2
                    }
                ]
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.9,
                "pow": 1,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13380,
                "atk": 945,
                "hp": 4414,
                "spd": 119,
                "def": 446,
                "chc": 0.19,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17246,
                "atk": 1177,
                "hp": 5542,
                "spd": 119,
                "def": 553,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0
            }
        }
    },
    "Zealot Carmainerose": {
        "code": "c4071",
        "_id": "zealot-carmainerose",
        "name": "Zealot Carmainerose",
        "moonlight": false,
        "rarity": 3,
        "attribute": "fire",
        "role": "mage",
        "zodiac": "waterbearer",
        "self_devotion": {
            "type": "def",
            "grades": {
                "D": 18,
                "C": 27,
                "B": 36,
                "A": 45,
                "S": 54,
                "SS": 63,
                "SSS": 72
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4071_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c4071_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 1.05,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 0.95,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 12152,
                "atk": 936,
                "hp": 3090,
                "spd": 101,
                "def": 537,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.06,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 3479,
                "overrideDef": 590,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0.1,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 15595,
                "atk": 1168,
                "hp": 3877,
                "spd": 101,
                "def": 666,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0,
                "bonusMaxAtkPercent": 0,
                "bonusMaxDefPercent": 0,
                "bonusMaxHpPercent": 0,
                "overrideAtk": 0,
                "overrideHp": 4367,
                "overrideDef": 732,
                "overrideAdditionalCr": 0,
                "overrideAdditionalCd": 0.1,
                "overrideAdditionalSpd": 0,
                "overrideAdditionalEff": 0,
                "overrideAdditionalRes": 0
            }
        }
    },
    "Zeno": {
        "code": "c1083",
        "_id": "zeno",
        "name": "Zeno",
        "moonlight": false,
        "rarity": 5,
        "attribute": "ice",
        "role": "mage",
        "zodiac": "bull",
        "self_devotion": {
            "type": "def_rate",
            "grades": {
                "B": 0.06,
                "A": 0.09,
                "S": 0.12,
                "SS": 0.15,
                "SSS": 0.18
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1083_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1083_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.5,
                "pow": 1,
                "targets": 1,
                "selfHpScaling": 0.1,
                "options": []
            },
            "S2": {
                "hitTypes": [],
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.5,
                "pow": 1,
                "targets": 3,
                "selfHpScaling": 0.12,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13970,
                "atk": 833,
                "hp": 4221,
                "spd": 115,
                "def": 542,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.06,
                "efr": 0.18
            },
            "lv60SixStarFullyAwakened": {
                "cp": 17925,
                "atk": 1039,
                "hp": 5299,
                "spd": 115,
                "def": 673,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0.18
            }
        }
    },
    "Zerato": {
        "code": "c1010",
        "_id": "zerato",
        "name": "Zerato",
        "moonlight": false,
        "rarity": 4,
        "attribute": "ice",
        "role": "mage",
        "zodiac": "ram",
        "self_devotion": {
            "type": "att_rate",
            "grades": {
                "C": 0.04,
                "B": 0.06,
                "A": 0.08,
                "S": 0.1,
                "SS": 0.12,
                "SSS": 0.14
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1010_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1010_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.05,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1.5,
                "pow": 0.95,
                "targets": 1,
                "options": []
            },
            "S3": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 1,
                "pow": 1,
                "targets": 3,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 13209,
                "atk": 929,
                "hp": 3771,
                "spd": 104,
                "def": 506,
                "chc": 0.19,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            },
            "lv60SixStarFullyAwakened": {
                "cp": 16974,
                "atk": 1159,
                "hp": 4733,
                "spd": 104,
                "def": 627,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    },
    "Zio": {
        "code": "c1133",
        "_id": "zio",
        "name": "Zio",
        "moonlight": true,
        "rarity": 5,
        "attribute": "dark",
        "role": "mage",
        "zodiac": "ram",
        "self_devotion": {
            "type": "acc",
            "grades": {
                "B": 0.09,
                "A": 0.135,
                "S": 0.18,
                "SS": 0.225,
                "SSS": 0.27
            }
        },
        "assets": {
            "icon": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1133_s.png",
            "image": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/question_circle.png",
            "thumbnail": "https://raw.githubusercontent.com/fribbels/Fribbels-Epic-7-Optimizer/main/data/cachedimages/c1133_l.png"
        },
        "ex_equip": [],
        "skills": {
            "S1": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "rate": 0.7,
                "pow": 1,
                "targets": 1,
                "options": []
            },
            "S2": {
                "hitTypes": ["crit", "crushing", "normal", "miss"],
                "note": "S1 proc",
                "rate": 1,
                "pow": 1,
                "targets": 1,
                "penetration": 0.5,
                "options": []
            },
            "S3": {
                "hitTypes": ["normal", "miss"],
                "rate": 0,
                "pow": 0,
                "targets": 1,
                "options": []
            }
        },
        "calculatedStatus": {
            "lv50FiveStarFullyAwakened": {
                "cp": 17217,
                "atk": 1007,
                "hp": 3996,
                "spd": 106,
                "def": 525,
                "chc": 0.15,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0,
                "efr": 0.18
            },
            "lv60SixStarFullyAwakened": {
                "cp": 18123,
                "atk": 1255,
                "hp": 5016,
                "spd": 106,
                "def": 652,
                "chc": 0.27,
                "chd": 1.5,
                "dac": 0.03,
                "eff": 0.18,
                "efr": 0
            }
        }
    }
}


// Simple script I made to parse data I need from https://api.epicsevendb.com/#/default/get_hero / https://github.com/fribbels/Fribbels-Epic-7-Optimizer/blob/main/data/cache/herodata.json
for (const hero in heroData) {
    console.log(hero)
    let parsedData = { value: heroData[hero].name, viewValue: heroData[hero].name, thumbnail: heroData[hero].assets.icon, image: heroData[hero].assets.icon }
    data.push(parsedData)
}

data.sort(function (current, next) {
  let currentHero = current.value.toUpperCase();
  let nextHero = next.value.toUpperCase();
  return (currentHero < nextHero) ? - 1 : (currentHero > nextHero) ? 1 : 0;
})

fsPromises.writeFile('./newHeroData.json', JSON.stringify(data, null, 1), (err) => {
    if (err) throw err
    console.log('complete');
})


