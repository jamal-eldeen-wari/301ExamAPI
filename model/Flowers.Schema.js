const mongoose = require("mongoose");

const flowersSchema = new mongoose.Schema({
    name:{type:String},
    instructions: {type:String},
    photo: {type:String}
});
const flowerModel = mongoose.model('flowers',flowersSchema);

module.exports={flowerModel,
}