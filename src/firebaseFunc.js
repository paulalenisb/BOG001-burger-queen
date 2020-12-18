import firebase from 'firebase/app';
import 'firebase/firestore'

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
async function updateData(collection, id, time, estado) {
	try {
		const dataUpdate = await db.collection(collection).doc(id)
		const updateObj = dataUpdate.update({
			time: time,
			ready: estado,
		});
		return updateObj;
	} catch (error) {
		return error.message;
	}
};


async function updateDelivery(collection, id, estado) {
	try {
		const dataUpdate = await db.collection(collection).doc(id)
		const updateObj = dataUpdate.update({
			delivery:estado,
		});
		return updateObj;
	} catch (error) {
		return error.message;
	}
};

 function snapshotGettingData(collection, arrayData, setState) {
	db.collection(collection).onSnapshot((querySnapshot) =>{
		
		querySnapshot.forEach((doc) => {
			const data = doc.data()
			arrayData.push({...data, idDoc: doc.id})
		});
		return setState(arrayData);
	});
};

export {gettingData, updateData, updateDelivery, snapshotGettingData}



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