'use strict';


/**
 * Create a new wardrobe
 *
 * body Item_req  (optional)
 * returns Item_create_res
 **/
exports.createNewItem = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "item_season" : "spring",
  "images" : "[]",
  "item_color" : "black",
  "item_price" : 19.99,
  "item_time" : "2023-05-23",
  "wardrobe" : {
    "wardrobe_description" : "quite a small and delicate one",
    "wardrobe_image" : "http://url_yellow_wardrobe",
    "wardrobe_id" : "8476bb52b5f4488ba9a34bebf55bb9e7",
    "wardrobe_name" : "Yellow Wardrobe"
  },
  "item_category" : "hat",
  "item_suitability" : "baskball games"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all items in the database
 * This is a dev mode method. No access_token is required.
 *
 * returns Item_all_res
 **/
exports.getAllItems = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "item_season" : "summer",
  "images" : [ {
    "image_url" : "https://url_7",
    "image_id" : "7f78c19a17894d3ea7b9aac20cf14211"
  }, {
    "image_url" : "https://url_7",
    "image_id" : "7f78c19a17894d3ea7b9aac20cf14211"
  } ],
  "item_color" : "black",
  "item_price" : 19.99,
  "item_time" : "2023-05-23",
  "wardrobe" : {
    "wardrobe_description" : "quite a small and delicate one",
    "wardrobe_image" : "http://url_yellow_wardrobe",
    "wardrobe_id" : "8476bb52b5f4488ba9a34bebf55bb9e7",
    "wardrobe_name" : "Yellow Wardrobe"
  },
  "item_category" : "hat",
  "item_suitability" : "baskball games"
}, {
  "item_season" : "summer",
  "images" : [ {
    "image_url" : "https://url_7",
    "image_id" : "7f78c19a17894d3ea7b9aac20cf14211"
  }, {
    "image_url" : "https://url_7",
    "image_id" : "7f78c19a17894d3ea7b9aac20cf14211"
  } ],
  "item_color" : "black",
  "item_price" : 19.99,
  "item_time" : "2023-05-23",
  "wardrobe" : {
    "wardrobe_description" : "quite a small and delicate one",
    "wardrobe_image" : "http://url_yellow_wardrobe",
    "wardrobe_id" : "8476bb52b5f4488ba9a34bebf55bb9e7",
    "wardrobe_name" : "Yellow Wardrobe"
  },
  "item_category" : "hat",
  "item_suitability" : "baskball games"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get an item by item_id
 *
 * item_id String 
 * returns Item_res
 **/
exports.getItem = function(item_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "item_season" : "spring",
  "images" : [ {
    "image_url" : "https://url_7",
    "image_id" : "7f78c19a17894d3ea7b9aac20cf14211"
  }, {
    "image_url" : "https://url_7",
    "image_id" : "7f78c19a17894d3ea7b9aac20cf14211"
  } ],
  "item_color" : "black",
  "item_price" : 19.99,
  "item_time" : "2023-05-23",
  "wardrobe" : {
    "wardrobe_description" : "quite a small and delicate one",
    "wardrobe_image" : "http://url_yellow_wardrobe",
    "wardrobe_id" : "8476bb52b5f4488ba9a34bebf55bb9e7",
    "wardrobe_name" : "Yellow Wardrobe"
  },
  "item_category" : "hat",
  "item_suitability" : "baskball games"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete an item by item_id
 *
 * item_id String 
 * no response value expected for this operation
 **/
exports.itemItem_idDELETE = function(item_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update an item by item_id
 *
 * body Item_update_req  (optional)
 * item_id String 
 * returns Item_update_res
 **/
exports.updateItem = function(body,item_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "item_season" : "spring",
  "images" : [ {
    "image_url" : "https://url_7",
    "image_id" : "7f78c19a17894d3ea7b9aac20cf14211"
  }, {
    "image_url" : "https://url_7",
    "image_id" : "7f78c19a17894d3ea7b9aac20cf14211"
  } ],
  "item_color" : "black",
  "item_price" : 29.99,
  "item_time" : "2023-05-25",
  "wardrobe" : {
    "wardrobe_description" : "quite a small and delicate one",
    "wardrobe_image" : "http://url_yellow_wardrobe",
    "wardrobe_id" : "8476bb52b5f4488ba9a34bebf55bb9e7",
    "wardrobe_name" : "Yellow Wardrobe"
  },
  "item_category" : "hat",
  "item_suitability" : "baskball games"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

