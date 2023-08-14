import { v4 as uuidv4 } from "uuid";

const newHero = () => {
  const id = uuidv4()
  return {
    id : id,
    necklaceStat : "",
    ringStat : "",
    bootStat : "",
    name : "",
    attack : "",
    defense : "",
    health : "",
    speed : "",
    criticalHitChance : "",
    criticalHitDamage : "",
    effectiveness : "",
    effectResistance : "",
    dualAttackChance : "",
    artifact : "",
    artifactLevel : "",
    setEffect1: "",
    setEffect2: "",
    setEffect3: "",
    imprintLevel: "",
    imprintType: "",
    awakeningLevel: ""
  }
}

const getHeroPortrait = (hero) => {

}

const newInitialHero = () => {
  return {
    necklaceStat : "",
    ringStat : "",
    bootStat : "",
    name : "",
    attack : "",
    defense : "",
    health : "",
    speed : "",
    criticalHitChance : "",
    criticalHitDamage : "",
    effectiveness : "",
    effectResistance : "",
    dualAttackChance : "",
    artifact : "",
    artifactLevel : "",
    setEffect1: "",
    setEffect2: "",
    setEffect3: "",
    imprintLevel: "",
    imprintType: "",
    awakeningLevel: ""
  }
}

const getDbUrl = async () => {
  return process.env.DB_URL_WEB ? process.env.DB_URL_WEB : process.env.DB_URL_DEV;
}

export { newHero, newInitialHero, getDbUrl };