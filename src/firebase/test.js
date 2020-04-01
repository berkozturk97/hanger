import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('vGvvH6IwrLLMv0cQND6f').collection('cartItems').doc('ZhxJhpFaxXCC7Jw7I2cc');
firestore.doc('/users/vGvvH6IwrLLMv0cQND6f/cartItem/ZhxJhpFaxXCC7Jw7I2cc') // Both are same