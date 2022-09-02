import { v4 as uuidv4 } from "uuid";

const newHero = () => {
  const id = uuidv4()
  return {
    id : id,
    necklaceStat : "",
    ringStat : "",
    bootStat : "",
    name : "",
    power : "",
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

const newInitialHero = () => {
  return {
    necklaceStat : "",
    ringStat : "",
    bootStat : "",
    name : "",
    power : "",
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

export { newHero, newInitialHero };