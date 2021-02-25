/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {DeviceEventEmitter, NativeEventEmitter, NativeModules} from 'react-native';

const CleverTapReact = NativeModules.CleverTapReact;
const EventEmitter = NativeModules.CleverTapReactEventEmitter ? new NativeEventEmitter(NativeModules.CleverTapReactEventEmitter) : DeviceEventEmitter;

function defaultCallback(method, err, res) {
    if (err) {
        console.log('CleverTap ' + method + ' default callback error', err);
    } else {
        console.log('CleverTap ' + method + ' default callback result', res);
    }
}







AppRegistry.registerComponent(appName, () => App);
