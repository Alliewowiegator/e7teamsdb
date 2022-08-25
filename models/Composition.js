const mongoose = require("mongoose");

const CompositionSchema = new mongoose.Schema({
  userInfo: {
    type: {
      username: { type: String },
      server: { type: String },
    },
  },
  teamInfo: {
    type: {
      teamType: { type: String },
      teamDescription: { type: String },
    },
  },
  heroes: {
    type: [
      {
        id: { type: String },
        neckLaceStat: { type: String },
        ringStat: { type: String },
        bootStat: { type: String },
        name: { type: String },
        power: { type: Number },
        attack: { type: Number },
        defense: { type: Number },
        health: { type: Number },
        speed: { type: Number },
        criticalHitChance: { type: Number },
        criticalHitDamage: { type: Number },
        effectiveness: { type: Number },
        effectResistance: { type: Number },
        dualAttackChance: { type: Number },
      },
    ],
  },
});


module.exports = mongoose.models.CompositionSchema || mongoose.model('CompositionSchema', CompositionSchema)
