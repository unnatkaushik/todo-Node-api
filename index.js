import app from "./src/app.js";
import mongoose, { mongo } from "mongoose";
import config from "./src/config/index.js";

(async () => {
  try {
    mongoose.connect(config.DBURL);
    app.on("error", (Err) => {
      console.log(Err);
      throw Err;
    });

    app.listen(5000, function () {
      console.log("hello");
    });
  } catch (error) {
    console.log(error);
  }
})();
