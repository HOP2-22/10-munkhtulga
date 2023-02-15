const Link = require("../model/urlModel");

const makeid = (length) => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

exports.createLink = async (request, response) => {
  const { long, user } = request.body;

  if (!long || !user) {
    response.status(400).json({ message: "Invalid request" });
    return;
  }

  try {
    const url = await Link.create({
      long,
      short: makeid(5),
      user,
    });

    response.status(200).json({ data: url });
  } catch (error) {
    response.send({ message: error.message });
  }
};

exports.getDatas = async (request, response) => {
  try {
    const data = await Link.find();
    response.status(200).send(data);
  } catch (error) {
    response.status(400).send({ message: error.message });
  }
};
exports.getHistory = async (request, response) => {
  const page = Number(request.params.page);
  const limit = Number(request.params.limit);
  const user = request?.body?.user;

  if (!user) {
    return response.status(400).send({ message: "Invalid user" });
  }
  try {
    const posts = await Link.find()
      .limit(limit)
      .skip(limit * (page - 1))
      .exec();

    response.status(200).json({ message: "success", posts });
  } catch (error) {
    response.status(400).json({ error });
  }

  console.log(request.body);
};

exports.getData = async (request, response) => {
  const short = request.body.short;
  try {
    const data = await Link.findOne({ short });
    response.send(data);
  } catch (error) {}
};
