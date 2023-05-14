const express = require("express");
const cors = require("cors");
const firebaseConfig = {
  apiKey: "AIzaSyB8jdkFimL95M8rG-lfXosmKTxDugWM7m4",
  authDomain: "jakeoliverlee-main.firebaseapp.com",
  databaseURL:
    "https://jakeoliverlee-main-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "jakeoliverlee-main",
  storageBucket: "jakeoliverlee-main.appspot.com",
  messagingSenderId: "618141223590",
  appId: "1:618141223590:web:366d1923d96092621e4267",
};

import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

const app = express();

app.use(cors());

app.use(express.static(__dirname + "/src/pages/home"));

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/src/pages/home/index.html");
});

app.listen(3000, function () {
  console.log("Server started on :3000");
});
