import firebase from 'firebase';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('SgIla3aC0FOq5W3O404A').collection('cartItems').doc('WiU7bvOxOEj05Nbh6pBS');

firestore.doc('/users/SgIla3aC0FOq5W3O404A/cartItems/WiU7bvOxOEj05Nbh6pBS');

firestore.collection('users/SgIla3aC0FOq5W3O404A/cartItems');