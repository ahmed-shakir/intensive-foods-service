const mongoose = require("mongoose");
const Joi = require("joi");
const { categorySchema } = require("./Category");

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 50,
    required: true,
  },
  category: {
    type: categorySchema,
    required: true,
  },
  numberInStock: {
    type: Number,
    min: 0,
    max: 100,
    required: true,
  },
  price: {
    type: Number,
    min: 0,
    max: 10,
    required: true,
  },
  isLiked: {
    type: Boolean,
    required: false,
  }
});

const Food = mongoose.model("Food", foodSchema);

function validateFood(food) {
  const schema = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    categoryId: Joi.objectId().required(),
    numberInStock: Joi.number().min(0).max(100).required(),
    price: Joi.number().min(0).max(10).required(),
    isLiked: Joi.boolean().optional()
  });
  return schema.validate(food);
}

exports.Food = Food;
exports.validate = validateFood;
