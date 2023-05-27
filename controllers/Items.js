'use strict';

var utils = require('../utils/writer.js');
var Items = require('../service/ItemsService');

module.exports.createNewItem = function createNewItem (req, res, next, body) {
  Items.createNewItem(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllItems = function getAllItems (req, res, next) {
  Items.getAllItems()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getItem = function getItem (req, res, next, item_id) {
  Items.getItem(item_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.itemItem_idDELETE = function itemItem_idDELETE (req, res, next, item_id) {
  Items.itemItem_idDELETE(item_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateItem = function updateItem (req, res, next, body, item_id) {
  Items.updateItem(body, item_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
