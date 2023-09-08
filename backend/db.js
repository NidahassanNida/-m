const mongoose = require("mongoose");

const mongoDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/FoodSystem');
    console.log("mongodb connected");
    const fetchData = mongoose.connection.db.collection("fooditems");
    const data = await fetchData.find({}).toArray();

    const foodcategory= await mongoose.connection.db.collection("foodcategory");
    const category = await foodcategory.find({}).toArray();
    global.fooditems=data;
    global.foodcategory=category;
    // console.log(global.fooditems);
  } catch (error) {
    console.log("failed to connect or fetch data:", error);
  } 
};

module.exports = mongoDB;
