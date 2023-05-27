'use strict';

var utils = require('../utils/writer.js');
var Wardrobes = require('../service/WardrobesService');

module.exports.createNewWardrobe = function createNewWardrobe (req, res, next, body) {
  Wardrobes.createNewWardrobe(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllWardrobes = function getAllWardrobes (req, res, next) {
  Wardrobes.getAllWardrobes()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getWardrobe = function getWardrobe (req, res, next, wardrobe_id) {
  Wardrobes.getWardrobe(wardrobe_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.wardrobeWardrobe_idDELETE = function wardrobeWardrobe_idDELETE (req, res, next, wardrobe_id) {
  Wardrobes.wardrobeWardrobe_idDELETE(wardrobe_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.wardrobeWardrobe_idPUT = function wardrobeWardrobe_idPUT (req, res, next, body, wardrobe_id) {
  Wardrobes.wardrobeWardrobe_idPUT(body, wardrobe_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
