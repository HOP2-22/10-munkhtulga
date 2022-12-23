const { request } = require("express");

let users=[
  {
    id:1,
    firstName:"tulgaa",
    lastName:"miigaa"
  },
  {
    id:2,
    firstName:"itgel",
    lastName:"baterdene",
  },
];


exports.getUsers= (request, response) =>{
  response.se;
  response.status(200).json({
    users:users,
    });
};

