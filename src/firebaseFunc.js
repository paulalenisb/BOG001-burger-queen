import firebase from 'firebase/app';
//import db from './firebaseConfig'
import 'firebase/firestore'


//  -----------gettingDataOrderByCondition------------
/* async function gettingDataOrdered(collection, param, asds) {
	try {
		const dataPost = await db.collection(collection).orderBy(param, asds).get();
		return dataPost;
	} catch (error) {
		return error.message;
	}
}; */
const db = firebase.firestore();
//  -----------gettingData------------
async function gettingData(collection) {
	try {
		const orderData = await db.collection(collection).get()
		return orderData;
	} catch (error) {
		return error.message;
	}
};

//  -----------updateData------------
async function updateData(collection, id, time) {
	try {
		const dataUpdate = await db.collection(collection).doc(id)
		return dataUpdate.update({
			time: time,
		});
	} catch (error) {
		return error.message;
	}
};
export {gettingData, updateData}

/* export default async function gettingData(collection) {
	try {
		const orderData = await db.collection(collection).onSnapshot((querySnapshot) =>{
			const arrayData = querySnapshot.map((doc) => {
				const data = doc.data()
				return {...data, idDoc: doc.id}
			});
			return arrayData;
		});
		return orderData;
	} catch (error) {
		return error.message;
	}
}; */

//const onGetPosts = (callback) => db.collection('review').orderBy('date', 'desc').onSnapshot(callback);
// export const getPosts = () => db.collection('review').get();

// useEffect(() => {
//     db.collection('orders')
//       .orderBy('date', 'desc')
//       .onSnapshot((querySnapshot) => {
//         const arrayData = []
//         querySnapshot.forEach((doc) => {
//           const data = doc.data()
//           arrayData.push({ ...data, idDoc: doc.id })
//         })
//         setOrder(arrayData);
//         setIdOrder(arrayData.length)
//       })
//   }, [])