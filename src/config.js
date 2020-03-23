
import Firebase from 'firebase';
const settings = {timestampsInSnapshots: true};
let firebaseConfig = {
    apiKey: 'AIzaSyDSp3Z3tbkUuDPqCNp8fDoAHmVXMYMQT4g',
    authDomain: 'test-9b07b.firebaseapp.com',
    databaseURL: 'https://test-9b07b.firebaseio.com',
    projectId: 'test-9b07b',
    storageBucket: 'test-9b07b.appspot.com',
    messagingSenderId: '735344567004',
    appId: "1:735344567004:web:43878ce285a7e725230a19",
    measurementId: "G-T90SV6NCLX"
};
let app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();