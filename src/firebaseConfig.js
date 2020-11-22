//import * as firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_wBUzkDaeX6XwcAoJjCMLixvtfUlSDzU",
  authDomain: "burguerqueen11.firebaseapp.com",
  databaseURL: "https://burguerqueen11.firebaseio.com",
  projectId: "burguerqueen11",
  storageBucket: "burguerqueen11.appspot.com",
  messagingSenderId: "72504541503",
  appId: "1:72504541503:web:3d44143cf3340ca87e138a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default async function newOrder (orderObj) {
	try {
		const order = await db.collection('order').add({
      name: orderObj.name,
			uid:orderObj.uid,
      products: orderObj.products,
      date: firebase.firestore.Timestamp.now(),
      totalOrder: orderObj.totalOrder
    });
    console.log(order)
		return order;
	} catch (error) {
		return error.message;
	}
};

