const express = require("express");
const router = express.Router();
const { Category } = require("../models/Category");
const { Food, validate } = require("../models/Food");
const admin = require("../middleware/admin");
const auth = require("../middleware/auth");

router.get("/", async (req, res) => {
  const foods = await Food.find().sort("name");
  return res.send(foods);
});

router.get("/:id", async (req, res) => {
  const food = await Food.findById(req.params.id);

  if (!food) {
    return res.status(404).send("The food with the given id was not found.");
  }
  return res.send(food);
});

router.post("/", [auth, admin], async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.message);
  }

  const category = await Category.findById(req.body.categoryId);
  if (!category) {
    return res.status(404).send("The category with the given id was not found.");
  }

  let food = new Food({
    name: req.body.name,
    category: {
      _id: category._id,
      name: category.name,
    },
    numberInStock: req.body.numberInStock,
    price: req.body.price,
  });

  food = await food.save();
  return res.send(food);
});

router.put("/:id", [auth, admin], async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.message);
  }

  const category = await Category.findById(req.body.categoryId);
  if (!category) {
    return res.status(404).send("The category with the given id was not found.");
  }

  const food = await Food.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      category: {
        _id: category._id,
        name: category.name,
      },
      numberInStock: req.body.numberInStock,
      price: req.body.price,
      isLiked: req.body.isLiked
    },
    { new: true }
  );

  if (!food) {
    return res.status(404).send("The food with the given id was not found.");
  }
  return res.send(food);
});

router.delete("/:id", [auth, admin], async (req, res) => {
  const food = await Food.findByIdAndDelete(req.params.id);

  if (!food) {
    return res.status(404).send("The food with the given id was not found.");
  }
  return res.send(food);
});

module.exports = router;
