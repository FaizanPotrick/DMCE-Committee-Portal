const express = require("express");
const tf = require("@tensorflow/tfjs-node");
const bots = require("../json/bots.json");
const college = require("../json/college.json");
const entertainment = require("../json/entertainment.json");
const general = require("../json/general.json");
const healthcare = require("../json/healthcare.json");
const words = require("../json/words.json");
const classes = require("../json/classes.json");

const router = express.Router();
const dataset = [
  ...bots,
  ...college,
  ...entertainment,
  ...general,
  ...healthcare,
];

const replace = (message) => {
  message = message
    .replaceAll("'t", " not")
    .replaceAll("'re", " are")
    .replaceAll("'s", " is")
    .replaceAll("'d", " would")
    .replaceAll("'ll", " will")
    .replaceAll("'t", " not")
    .replaceAll("'ve", " have")
    .replaceAll("'m", " am")
    .replaceAll(/[&\/\\#`,+()$~%.'":*!?<>{}]/g, "")
    .replaceAll(/^\s+|\s+$/g, " ");
  message = message.toLowerCase();
  return message;
};

const bag_of_words = (message) => {
  message = replace(message);
  message = message.split(" ");
  let bag = Array(words.length).fill(0);
  for (word of message) {
    if (words.includes(word)) {
      bag[words.indexOf(word)] = 1;
    }
  }
  return bag;
};

const predict_class = async (message) => {
  const model = await tf.loadLayersModel(
    `file://${process.cwd()}/json/model.json`
  );
  const predict = model.predict(tf.tensor([bag_of_words(message)]));
  const result = await predict.argMax(1).dataSync()[0];
  return classes[result];
};

const get_response = async (message) => {
  const tag = await predict_class(message);
  for (data of dataset) {
    if (data.tag === tag) {
      return data.responses[Math.floor(Math.random() * data.responses.length)];
    }
  }
};

router.get("/api/chatbot/:message", async (req, res) => {
  const { message } = req.params;
  const response = await get_response(message);
  res.json(response);
});

module.exports = router;
