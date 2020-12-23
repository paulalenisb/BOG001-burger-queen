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

function snapshotGettingData(collection, arrayData, setState) {
	db.collection(collection).onSnapshot((querySnapshot) => {
		
		querySnapshot.forEach((doc) => {
			const data = doc.data()
			arrayData.push({...data, idDoc: doc.id})
		});
		return setState(arrayData);
	});
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

export { gettingData, updateData, updateDelivery, snapshotGettingData }