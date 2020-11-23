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
export default async function gettingData(collection) {
	try {
		const orderData = await db.collection(collection).get();
		return orderData;
	} catch (error) {
		return error.message;
	}
};

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