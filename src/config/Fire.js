import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyA3kyEdzw18OG3lFZX6VvlMnbpWyjukbEk',
    authDomain: 'yunt-243514.firebaseapp.com',
    databaseURL: 'https://yunt-243514.firebaseio.com',
    projectId: 'yunt-243514',
    storageBucket: '',
    messagingSenderId: '1091456080531',
    appId: '1:1091456080531:web:4a351f6cd7169177'
};
const fire = firebase.initializeApp(config);
export default fire;