'use strict';

var utils = require('../utils/writer.js');
var Users = require('../service/UsersService');

module.exports.getAllUsers = function getAllUsers (req, res, next) {
  Users.getAllUsers()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userLogin = function userLogin (req, res, next, body) {
  Users.userLogin(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userRegistering = function userRegistering (req, res, next, body) {
  Users.userRegistering(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userUser_idDELETE = function userUser_idDELETE (req, res, next, user_id) {
  Users.userUser_idDELETE(user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userUser_idGET = function userUser_idGET (req, res, next, user_id) {
  Users.userUser_idGET(user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
