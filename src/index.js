import { sequelize } from "./config/db.js";
import app from "./app.js";
const port = process.env.PORT;

(async () => {
  try {
    await sequelize.sync({ force: false });
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
