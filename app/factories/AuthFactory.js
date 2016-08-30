"use strict";
app.factory("AuthFactory", function() {
  let currentUserId = null;
  let provider = new firebase.auth.GoogleAuthProvider();
  console.log("provider", provider );

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("User logged in, Dude", user.uid);
      currentUserId = user.uid;
    } else {
      console.log("User not logged in");
    }
  });

  let authWithProvider = function() {
    return firebase.auth().signInWithPopup(provider);
  };

  let isAuthenticated = function() {
    return (currentUserId) ? true : false;
  };

  let getUser = function() {
    return currentUserId;
  };

  return {authWithProvider, isAuthenticated, getUser};
});