import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

const Contact = () => {
  return (
    <ScrollView>
      <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>

        <Card title="Contact Information" wrapperStyle={{ margin: 20 }}>
          <Text style={styles.headline} > FIND US </Text>
          <Text> Address: Anywhere, USA 12345 </Text>
          <Text> Phone: 123 456 7890 </Text>
          <Text> Email: info@domain.com </Text>
        </Card>

        <Card title="Form" wrapperStyle={{ margin: 20 }}>
          <Text>This will be the form</Text>
          <Button
                            title="Send Email"
                            buttonStyle={{backgroundColor: '#5637DD', margin: 40}}
                 
                            onPress={() => this.sendMail()}
                        />
        </Card>

      </Animatable.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  card:{

  },
    headline: {
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
 });

export default Contact;