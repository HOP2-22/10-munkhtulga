const asyncHandler = require("../middleware/async");
const shortModel = require("../model/short");

exports.getShorts = asyncHandler(async (req, res, next) => {
  try {
    const shorts = await shortModel.find();
    res.status(200).json({
      isDone: true,
      data: shorts,
      message: "Amjimlttai avlaa",
    });
  } catch (error) {
    console.error(error);
  }
});
