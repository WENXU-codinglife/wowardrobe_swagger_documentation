'use strict';

var utils = require('../utils/writer.js');
var Images = require('../service/ImagesService');

module.exports.deleteImage = function deleteImage (req, res, next, item_id) {
  Images.deleteImage(item_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllImages = function getAllImages (req, res, next) {
  Images.getAllImages()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getImage = function getImage (req, res, next, item_id) {
  Images.getImage(item_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.uploadImages = function uploadImages (req, res, next, body) {
  Images.uploadImages(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
