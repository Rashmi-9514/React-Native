/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {DeviceEventEmitter, NativeEventEmitter, NativeModules} from 'react-native';

const CleverTapReact = NativeModules.CleverTapReact;
const EventEmitter = NativeModules.CleverTapReactEventEmitter ? new NativeEventEmitter(NativeModules.CleverTapReactEventEmitter) : DeviceEventEmitter;
const CleverTap = require('clevertap-react-native');




//CleverTap.setDebugLevel(3);
 


CleverTap.recordEvent('testEvent');

	//User Properties
		//Creating User profile when the user logs in for first time
	//	CleverTap.onUserLogin({'Name': 'P', 'Identity': '45213', 'Email': 'p@gmail.com', 'custom1': 173});

		//Updating user profile after user logs in.
	//	CleverTap.profileSet({"Identity":347687, "Name":"P","Email":"p@gmail.com","Gender":"Male","DOB":"1995-10-15", "custom":1.3});
		   
		//Setting multiple Values for keys profiles   
	//	CleverTap.profileSetMultiValuesForKey(['V1', 'V2', 'V3'], 'Many Values');
		
		//Adding Multiple values for keys
	//	 CleverTap.profileAddMultiValuesForKey(['V1', 'V2'], 'Many Values');

		//removing multiple profiles
	//	CleverTap.profileRemoveMultiValueForKey('b', 'letters');

		//Adding location
	//	CleverTap.setLocation(34.15, -118.20);
		
		
		
	//Enables Push Notifications   
	//CleverTap.setPushToken("FCM-Token", CleverTap.FCM);
    
	//Create notification channel for Android O and above
	//CleverTap.createNotificationChannel("RNTesting", "React Native Testing", "React Native Testing", 4, true);
	//initialize the App Inbox
	//CleverTap.initializeInbox();
	
	





function defaultCallback(method, err, res) {
    if (err) {
        console.log('CleverTap ' + method + ' default callback error', err);
    } else {
        console.log('CleverTap ' + method + ' default callback result', res);
    }
};


AppRegistry.registerComponent(appName, () => App);
