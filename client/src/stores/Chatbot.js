import { defineStore } from "pinia";
import * as tf from "@tensorflow/tfjs";
import bots from "../json/bots.json";
import college from "../json/college.json";
import entertainment from "../json/entertainment.json";
import general from "../json/general.json";
import healthcare from "../json/healthcare.json";
import words from "../json/words.json";
import classes from "../json/classes.json";

export default defineStore({
  id: "chatbot",
  state: () => ({
    dataset: [...bots, ...college, ...entertainment, ...general, ...healthcare],
  }),
  actions: {
    replace(message) {
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
    },
    bag_of_words(message) {
      message = this.replace(message);
      message = message.split(" ");
      let bag = Array(words.length).fill(0);
      for (const word of message) {
        if (words.includes(word)) {
          bag[words.indexOf(word)] = 1;
        }
      }
      return bag;
    },
    async predict_class(message) {
      const model = await tf.loadLayersModel(
        "https://upload-files-nine.vercel.app/api/dmce-committee-portal/model.json"
      );
      const predict = model.predict(tf.tensor([this.bag_of_words(message)]));
      const result = await predict.argMax(1).dataSync()[0];
      return classes[result];
    },
    async get_response(message) {
      const tag = await this.predict_class(message);
      for (const data of this.dataset) {
        if (data.tag === tag) {
          return data.responses[
            Math.floor(Math.random() * data.responses.length)
          ];
        }
      }
    },
  },
});
