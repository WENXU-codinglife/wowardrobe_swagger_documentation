'use strict';


/**
 * Get all users in the database
 * This is a dev mode method. No access_token is required.
 *
 * returns User_all_res
 **/
exports.getAllUsers = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "wardrobes" : [ ],
  "user_email" : "testerJoe@gmail.com",
  "user_id" : "066ce054ec62440296f495091934ce5a",
  "user_name" : "Joe Doe"
}, {
  "wardrobes" : [ ],
  "user_email" : "testerJoe@gmail.com",
  "user_id" : "066ce054ec62440296f495091934ce5a",
  "user_name" : "Joe Doe"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Login a user
 * If logging in successfully, an access token will be sent back to client.
 *
 * body User_login Create a new user
 * returns User_login_res
 **/
exports.userLogin = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "access_token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY4NDc4OTQ3NCwianRpIjoiZmYzMzJjZGMtMTM4OS00MTJlLTllMDctMGM4ZmFmMjY1ZWI3IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IjA2NmNlMDU0ZWM2MjQ0MDI5NmY0OTUwOTE5MzRjZTVhIiwibmJmIjoxNjg0Nzg5NDc0LCJleHAiOjE2ODQ3OTAzNzR9.CUHfOW5N6-fU1VOpzce8qYYCCmLnYutqng2NTWyu6wY"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Register a new user
 * Register a new user. After registration, a new entry associated with the new user will be added to db.
 *
 * body User_registration Create a new user
 * returns User_registration_res
 **/
exports.userRegistering = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "wardrobes" : [ ],
  "user_email" : "testerJoe@gmail.com",
  "user_id" : "066ce054ec62440296f495091934ce5a",
  "user_name" : "Joe Doe"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a user by ID
 * This is a dev mode method. No access_token is required. A user cannot delete any user account.
 *
 * user_id Integer 
 * no response value expected for this operation
 **/
exports.userUser_idDELETE = function(user_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a user by ID
 *
 * user_id String 
 * returns User_get_res
 **/
exports.userUser_idGET = function(user_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "wardrobes" : [ {
    "wardrobe_description" : "quite a small and delicate one",
    "wardrobe_image" : "http://url_yellow_wardrobe",
    "wardrobe_id" : "8476bb52b5f4488ba9a34bebf55bb9e7",
    "wardrobe_name" : "Yellow Wardrobe"
  }, {
    "wardrobe_description" : "quite a small and delicate one",
    "wardrobe_image" : "http://url_yellow_wardrobe",
    "wardrobe_id" : "8476bb52b5f4488ba9a34bebf55bb9e7",
    "wardrobe_name" : "Yellow Wardrobe"
  } ],
  "user_email" : "testerJoe@gmail.com",
  "user_id" : "066ce054ec62440296f495091934ce5a",
  "user_name" : "Joe Doe"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

