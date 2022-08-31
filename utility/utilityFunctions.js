import { v4 as uuidv4 } from "uuid";

const newHero = () => {
  const id = uuidv4()
  return {
    id : id,
    necklaceStat : "",
    ringStat : "",
    bootStat : "",
    name : "",
    artifact : "",
    artifactLevel : "",
    power : "",
    attack : "",
    defense : "",
    health : "",
    speed : "",
    criticalHitChance : "",
    criticalHitDamage : "",
    effectiveness : "",
    effectResistance : "",
    dualAttackChance : ""
  }
}

const newInitialHero = () => {
  return {
    necklaceStat : "",
    ringStat : "",
    bootStat : "",
    name : "",
    artifact : "",
    artifactLevel : "",
    power : "",
    attack : "",
    defense : "",
    health : "",
    speed : "",
    criticalHitChance : "",
    criticalHitDamage : "",
    effectiveness : "",
    effectResistance : "",
    dualAttackChance : ""
  }
}

export { newHero, newInitialHero };