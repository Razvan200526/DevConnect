// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: Bun.env.API_KEY as string,
	authDomain: Bun.env.AUTH_DOMAIN as string,
	projectId: Bun.env.PROJECT_ID as string,
	storageBucket: Bun.env.STORAGE_BUCKET as string,
	messagingSenderId: Bun.env.MESSAGING_BUCKET as string,
	appId: Bun.env.APP_ID as string,
	measurementId: Bun.env.MEASUREMENT_ID as string,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
