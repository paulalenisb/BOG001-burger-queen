import db from './firebaseConfig'
//import firebase from 'firebase/app';
import 'firebase/firestore'

//import * as firebase from 'firebase';

/* async function newOrder (orderObj) {
	try {
		const order = await db.collection('order').add({
      name: orderObj.name,
			uid:orderObj.uid,
      products: orderObj.products,
      date: firebase.firestore.Timestamp.now(),
      totalOrder: orderObj.totalOrder,
      sending: orderObj.sending,
      ready: orderObj.ready,
      delivery: orderObj.delivery
    });
    console.log(order)
		return order;
	} catch (error) {
		return error.message;
	}
}; */

//  -----------gettingDataOrderByCondition------------
export default async function gettingDataOrdered(collection, param, asds) {
	try {
		const dataPost = await db.collection(collection).orderBy(param, asds).get();
		return dataPost;
	} catch (error) {
		return error.message;
	}
};

