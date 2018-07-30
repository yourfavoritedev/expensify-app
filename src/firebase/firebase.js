import * as firebase from "firebase";

const config = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database()

export { firebase, database as default }

// database.ref("expenses").on("child_removed", (snapshot) => {
// 	console.log(snapshot.key, snapshot.val())
// })

// database.ref("expenses").on("child_changed", (snapshot) => {
// 	console.log(snapshot.key, snapshot.val())
// })

// database.ref("expenses").on("child_added", (snapshot) => {
// 	console.log(snapshot.key, snapshot.val())
// })



// database.ref("expenses").once("value").then((snapshot) => {
// 	const expenses = []
// 	snapshot.forEach((childSnapshot) => {
// 		expenses.push({
// 			id: childSnapshot.key,
// 			...childSnapshot.val()
// 		})
// 	})
// })

// database.ref("expenses").on("value", () >= {
// 	const expenses = []
// 	snapshot.forEach((childSnapshot) => {
// 		expenses.push({
// 			id: childSnapshot.key,
// 			...childSnapshot.val()
// 		})
// 	})

// 	console.log(expenses)	
// })

// database.ref("expenses").push({
// 	description: "Rent",
// 	amount: 500,
// 	createdAt: "7/11/2018"
// })

// database.ref("expenses").push({
// 	description: "Groceries",
// 	amount: 200,
// 	createdAt: "7/1/2018"
// })

// database.ref("expenses").push({
// 	description: "Utilities",
// 	amount: 100,
// 	createdAt: "7/12/2018"
// })

// database.ref().on("value", (snapshot) => {
// 	const val = snapshot.val()
// 	console.log(val.name + " is a " + val.job.title + " at " + val.job.company)
// })

// database.ref().once("value").then((snapshot) => {
// 	const val = snapshot.val();
// 	console.log(val)
// }).catch((error) => {
// 	console.log("Error fetching data", error)
// })

// database.ref().set({
// 	name: "Chris",
// 	age: 24,
// 	isSingle: true,
// 	stressLevel: 3,
// 	job: {
// 		title: "Software Developer",
// 		company: "Google"
// 	},
// 	location: {
// 		city: "Los Angeles",
// 		country: "United States"
// 	}
// }).then(() => {
// 	console.log("data is saved")
// }).catch((error) => {
// 	console.log(error)
// })


// database.ref("age").set(27)
// database.ref("location/city").set("San Francisco")


// database.ref("attributes").set({
// 	height: 67,
// 	weight: 165
// }).then(() => {
// 	console.log("updated attributes")
// }).catch((error) => {
// 	console.log(error)
// })

// database.ref("isSingle").remove().then(() => {
// 	console.log("removed isSingle")
// }).catch((error) => {
// 	console.log(error)
// })

// database.ref().update({
// 	stressLevel: 5,
// 	"job/company": "Facebook",
// 	"location/city": "Menlo Park"
// }).then(() => {
// 	console.log("made updates")
// }).catch((error) => {
// 	console.log(error)
// })