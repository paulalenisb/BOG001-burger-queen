import db from './firebaseConfig'
//import * as firebase from 'firebase';

export async function newOrder (orderObj) {
	try {
		const order = await db.collection('order').add({
			uid:orderObj.uid,
			products: orderObj.products
		});
		return order;
	} catch (error) {
		return error.message;
	}
}

/* export const savePost = (uid, name, userPhoto, title, description, typeOfFood, price, quality, location, foodPhoto, date, likes, users) => db.collection('review').doc().set({
	uid,
	name,
	userPhoto,
	title,
	description,
	typeOfFood,
	price,
	quality,
	location,
	foodPhoto,
	date: firebase.firestore.Timestamp.now(),
	likes,
	users,
  }); */