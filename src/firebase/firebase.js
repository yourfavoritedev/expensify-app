import * as firebase from "firebase";

const config = {
	apiKey: "AIzaSyDPP7sj0qNrW_yK3xG9LqQIFLrD1wcxwaM",
	authDomain: "expensify-app-92d40.firebaseapp.com",
	databaseURL: "https://expensify-app-92d40.firebaseio.com",
	projectId: "expensify-app-92d40",
	storageBucket: "expensify-app-92d40.appspot.com",
	messagingSenderId: "131623980326"
};

firebase.initializeApp(config);

firebase.database().ref().set({
	name: "Chris",
	age: 24,
	isSingle: true,
	location: {
		city: "Los Angeles",
		country: "United States"
	}
})