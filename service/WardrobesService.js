'use strict';


/**
 * Create a new wardrobe
 *
 * body Wardrobe_req  (optional)
 * returns Wardrobe_create_res
 **/
exports.createNewWardrobe = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "wardrobe_description" : "quite a small and delicate one",
  "wardrobe_image" : "http://url_yellow_wardrobe",
  "wardrobe_id" : "8476bb52b5f4488ba9a34bebf55bb9e7",
  "wardrobe_name" : "Yellow Wardrobe",
  "user" : {
    "user_email" : "testerJoe@gmail.com",
    "user_id" : "066ce054ec62440296f495091934ce5a",
    "user_name" : "Joe Doe"
  },
  "items" : [ ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all wardrobes in the database
 * This is a dev mode method. No access_token is required.
 *
 * returns Wardrobe_all_res
 **/
exports.getAllWardrobes = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "wardrobe_description" : "quite a small and delicate one",
  "wardrobe_image" : "http://url_yellow_wardrobe",
  "wardrobe_id" : "8476bb52b5f4488ba9a34bebf55bb9e7",
  "wardrobe_name" : "Yellow Wardrobe",
  "user" : {
    "user_email" : "testerJoe@gmail.com",
    "user_id" : "066ce054ec62440296f495091934ce5a",
    "user_name" : "Joe Doe"
  },
  "items" : [ {
    "item_season" : "summer",
    "item_color" : "black",
    "item_id" : "7dca7e31945a463fb3a5fdc5c7869f71",
    "item_price" : 19.99,
    "item_time" : "2023-05-23",
    "item_category" : "hat",
    "item_suitability" : "baskball games"
  }, {
    "item_season" : "summer",
    "item_color" : "black",
    "item_id" : "7dca7e31945a463fb3a5fdc5c7869f71",
    "item_price" : 19.99,
    "item_time" : "2023-05-23",
    "item_category" : "hat",
    "item_suitability" : "baskball games"
  } ]
}, {
  "wardrobe_description" : "quite a small and delicate one",
  "wardrobe_image" : "http://url_yellow_wardrobe",
  "wardrobe_id" : "8476bb52b5f4488ba9a34bebf55bb9e7",
  "wardrobe_name" : "Yellow Wardrobe",
  "user" : {
    "user_email" : "testerJoe@gmail.com",
    "user_id" : "066ce054ec62440296f495091934ce5a",
    "user_name" : "Joe Doe"
  },
  "items" : [ {
    "item_season" : "summer",
    "item_color" : "black",
    "item_id" : "7dca7e31945a463fb3a5fdc5c7869f71",
    "item_price" : 19.99,
    "item_time" : "2023-05-23",
    "item_category" : "hat",
    "item_suitability" : "baskball games"
  }, {
    "item_season" : "summer",
    "item_color" : "black",
    "item_id" : "7dca7e31945a463fb3a5fdc5c7869f71",
    "item_price" : 19.99,
    "item_time" : "2023-05-23",
    "item_category" : "hat",
    "item_suitability" : "baskball games"
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a wardrobe by wardrobe_id
 *
 * wardrobe_id String 
 * returns Wardrobe_get_res
 **/
exports.getWardrobe = function(wardrobe_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "wardrobe_description" : "quite a small and delicate one",
  "wardrobe_image" : "http://url_yellow_wardrobe",
  "wardrobe_id" : "8476bb52b5f4488ba9a34bebf55bb9e7",
  "wardrobe_name" : "Yellow Wardrobe",
  "user" : {
    "user_email" : "testerJoe@gmail.com",
    "user_id" : "066ce054ec62440296f495091934ce5a",
    "user_name" : "Joe Doe"
  },
  "items" : [ {
    "item_season" : "summer",
    "item_color" : "black",
    "item_id" : "7dca7e31945a463fb3a5fdc5c7869f71",
    "item_price" : 19.99,
    "item_time" : "2023-05-23",
    "item_category" : "hat",
    "item_suitability" : "baskball games"
  }, {
    "item_season" : "summer",
    "item_color" : "black",
    "item_id" : "7dca7e31945a463fb3a5fdc5c7869f71",
    "item_price" : 19.99,
    "item_time" : "2023-05-23",
    "item_category" : "hat",
    "item_suitability" : "baskball games"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a wardrobe by wardrobe_id
 * This is a dev mode method. No access_token is required. A user cannot delete any user account.
 *
 * wardrobe_id String 
 * no response value expected for this operation
 **/
exports.wardrobeWardrobe_idDELETE = function(wardrobe_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update a wardrobe by wardrobe_id
 *
 * body Wardrobe_update_req  (optional)
 * wardrobe_id String 
 * returns Wardrobe_update_res
 **/
exports.wardrobeWardrobe_idPUT = function(body,wardrobe_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "wardrobe_description" : " a medium-sized and delicate one",
  "wardrobe_image" : "http://url_yellow_wardrobe",
  "wardrobe_id" : "8476bb52b5f4488ba9a34bebf55bb9e7",
  "wardrobe_name" : "Yellow Wardrobe",
  "user" : {
    "user_email" : "testerJoe@gmail.com",
    "user_id" : "066ce054ec62440296f495091934ce5a",
    "user_name" : "Joe Doe"
  },
  "items" : [ ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

