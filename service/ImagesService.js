'use strict';


/**
 * Delete an image by image_id
 *
 * item_id String 
 * no response value expected for this operation
 **/
exports.deleteImage = function(item_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get all images in the database
 * This is a dev mode method. No access_token is required.
 *
 * returns Images_res
 **/
exports.getAllImages = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "item" : {
    "item_season" : "summer",
    "item_color" : "black",
    "item_id" : "7dca7e31945a463fb3a5fdc5c7869f71",
    "item_price" : 19.99,
    "item_time" : "2023-05-23",
    "item_category" : "hat",
    "item_suitability" : "baskball games"
  },
  "image_url" : "https://url_7",
  "image_id" : "24c9536306f74297a23a9f5afc19fcac"
}, {
  "item" : {
    "item_season" : "summer",
    "item_color" : "black",
    "item_id" : "7dca7e31945a463fb3a5fdc5c7869f71",
    "item_price" : 19.99,
    "item_time" : "2023-05-23",
    "item_category" : "hat",
    "item_suitability" : "baskball games"
  },
  "image_url" : "https://url_7",
  "image_id" : "24c9536306f74297a23a9f5afc19fcac"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get an image by image_id
 *
 * item_id String 
 * returns Image_req
 **/
exports.getImage = function(item_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "item_id" : "7dca7e31945a463fb3a5fdc5c7869f71",
  "url" : "https://url_7"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Upload images
 *
 * body List  (optional)
 * returns Images_upload_res
 **/
exports.uploadImages = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "image_url" : "https://url_7",
  "image_id" : "7f78c19a17894d3ea7b9aac20cf14211"
}, {
  "image_url" : "https://url_7",
  "image_id" : "7f78c19a17894d3ea7b9aac20cf14211"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

