import React from 'react';
import {   
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const CleverTap = require('clevertap-react-native');


export default class App extends React.Component {
	 
	 displayAlert = () => {
			alert('I am an alert for on button click');
  
		//console.log('Display on called: ', res, err);
			
		
		//Show Inbox 
		CleverTap.showInbox({'tabs':['Offers','Promotions'],'navBarTitle':'My App Inbox','navBarTitleColor':'#FF0000','navBarColor':'#FFFFFF','inboxBackgroundColor':'#AED6F1','backButtonColor':'#00FF00'
                                ,'unselectedTabColor':'#0000FF','selectedTabColor':'#FF0000','selectedTabIndicatorColor':'#000000',
                                'noMessageText':'No message(s)','noMessageTextColor':'#FF0000'});
								
								
		}; 		
   
	 componentDidMount() {
		 
		CleverTap.addListener(CleverTap.CleverTapProfileSync, (event) => { this._handleCleverTapEvent(CleverTap.CleverTapProfileSync, event); });
		
     
		CleverTap.setDebugLevel(10);
		
		//Setting up a Push Notification
		CleverTap.setPushToken("111056687894", CleverTap.FCM);
			
		//Recording an Event	
		CleverTap.recordEvent('testEvent');
        
		CleverTap.recordEvent('testEventWithProps', {'foo': 'bar'});
        if (Platform.OS === 'android') {
             CleverTap.setPushToken("111056687894", CleverTap.FCM);
        }
    
		//On user Login 
		CleverTap.onUserLogin({'Name': 'v', 'Identity': '45671890', 'Email': 'v@gmail.com', 'custom1': 13});

		//Updating user profile after user logs in.
		CleverTap.profileSet({"Identity":45671890, "Name":"V","Email":"v@gmail.com","Gender":"Male","DOB":"1995-10-14", "custom":1.73});
		 
            
		//Setting Multiple Values
		CleverTap.profileSetMultiValuesForKey(['a', 'b', 'c'], 'letters');
        
		//Adding Multiple Value (Single Value)
		CleverTap.profileAddMultiValueForKey('d', 'letters');
        
		//Adding Multiple Value (Multiple Values)
		CleverTap.profileAddMultiValuesForKey(['e', 'f'], 'letters');
        
		//Removing a Value from the Multiple Values
		CleverTap.profileRemoveMultiValueForKey('b', 'letters');
        
		//Removing Multiple Values
		CleverTap.profileRemoveMultiValuesForKey(['a', 'c'], 'letters');
		
		CleverTap.profileAddMultiValuesForKey(["V1","V2"],"Values");
        
		//Set Location
		CleverTap.setLocation(34.15, -118.20);
    
		//Recording the charged events
		CleverTap.recordChargedEvent({'totalValue': 20, 'category': 'books'}, [{'title': 'book1'}, {'title': 'book2'}, {'title': 'book3'}]);
	
		//Creating Notification Channel
		 CleverTap.createNotificationChannel("RNTesting", "React Native Testing", "React Native Testing", 4, true);
		 
		//initialize the App Inbox
        CleverTap.initializeInbox();  
		
		//{this.displayAlert}				
		
		//Get Total messagecount
		CleverTap.getInboxMessageCount((err, res) => {
				console.log('Total Messages: ', res, err);
			});
		
		//Get the count of unread messages
		CleverTap.getInboxMessageUnreadCount((err, res) => {
				console.log('Unread Messages: ', res, err);
			});
		
		//Get All Inbox Messages
		CleverTap.getAllInboxMessages((err, res) => {
				console.log('All Inbox Messages: ', res, err);
			 });
		
		//get all Inbox unread messages
		CleverTap.getUnreadInboxMessages((err, res) => {
				 console.log('Unread Inbox Messages: ', res, err);
			 });
		//Get inbox Id
		CleverTap.getInboxMessageForId('Message Id',(err, res) => {
            console.log("marking message read = "+res);
        });

        CleverTap.deleteInboxMessageForId('Message Id');
        CleverTap.markReadInboxMessageForId('Message Id');
        CleverTap.pushInboxNotificationViewedEventForId('Message Id');
        CleverTap.pushInboxNotificationClickedEventForId('Message Id');		

		//Get CleverTap Id
		CleverTap.profileGetCleverTapID((err, res) => {
            console.log('CleverTapID', res, err);
        });
		
	}
	 
		componentWillUnmount() {
		 CleverTap.removeListener(CleverTap.CleverTapProfileSync);
		 
	 }
	 
	
       
   render() {
      return (
         <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
               This Works
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Which Is Good</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>FINAL RUN
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Click on the Button to Open Inbox
              </Text>
            </View>
             <View style={{ marginTop: 100 }}>
			<Button title="Click Here" color="blue" onPress={this.displayAlert} />

        
      </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
      );
   }
}


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
