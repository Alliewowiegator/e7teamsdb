import {v4 as uuidv4} from "uuid";

const newHero = () => {
    const id = uuidv4()
    return {
        id: id,
        necklaceStat: "",
        ringStat: "",
        bootStat: "",
        name: "",
        attack: "",
        defense: "",
        health: "",
        speed: "",
        criticalHitChance: "",
        criticalHitDamage: "",
        effectiveness: "",
        effectResistance: "",
        dualAttackChance: "",
        artifact: "",
        artifactLevel: "",
        setEffect1: "",
        setEffect2: "",
        setEffect3: "",
        imprintLevel: "",
        imprintType: "",
        awakeningLevel: ""
    }
}

const newInitialHero = () => {
    return {
        necklaceStat: "",
        ringStat: "",
        bootStat: "",
        name: "",
        attack: "",
        defense: "",
        health: "",
        speed: "",
        criticalHitChance: "",
        criticalHitDamage: "",
        effectiveness: "",
        effectResistance: "",
        dualAttackChance: "",
        artifact: "",
        artifactLevel: "",
        setEffect1: "",
        setEffect2: "",
        setEffect3: "",
        imprintLevel: "",
        imprintType: "",
        awakeningLevel: ""
    }
}

const setEffects = ["Attack Set", "Defense Set", "Health Set", "Speed Set",
    "Critical Set", "Destruction Set", "Hit Set", "Resist Set", "Lifesteal Set",
    "Counter Set", "Unity Set", "Immunity Set", "Rage Set", "Penetration Set",
    "Revenge Set", "Injury Set"
]

const imprints = ["B", "A", "S", "SS", "SSS"]

const accessoryMainstats = {
    necklace: ["Critical Hit Chance", "Critical Hit Damage" ,"Health %", "Health", "Defense %", "Defense", "Attack %", "Attack"],
    ring: ["Health %", "Health", "Defense %", "Defense", "Attack %", "Attack"],
    boots: ["Speed", "Health %", "Health", "Defense %", "Defense", "Attack %", "Attack"],
}

const heroStats = {
    attack: "Attack", defense: "Defense", health: "Health", speed: "Speed",
    criticalHitChance: "Critical Hit Chance", criticalHitDamage: "Critical Hit Damage", effectiveness: "Effectiveness", effectResistance: "Effect Resistance", dualAttackChance: "Dual Attack Chance",
}

const getDbUrl = async () => {
    return process.env.DB_URL_WEB ? process.env.DB_URL_WEB : process.env.DB_URL_DEV;
}

export {newHero, newInitialHero, getDbUrl, setEffects, imprints, accessoryMainstats, heroStats};