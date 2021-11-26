import React from 'react';
import { Linking, StyleSheet, Text, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Contact = () => {

    return (
        <View style={styles.container} >
            <Text style={styles.headline} > CORPORATE OFFICE </Text>
            <Text> Address: Anywhere, USA 12345 </Text>
            <Text> Phone: 123 456 7890 </Text>
            <Text> Email: info@domain.com </Text>
            <TouchableOpacity>
            <Button style={styles.button}
                title="Send Email"
                titleStyle={{
                    fontSize: 15
                }}
                buttonStyle={{ backgroundColor: '#5637DD', margin: 40 }}
                icon={<Icon
                    name='envelope-o'
                    type='font-awesome'
                    color='#fff'
                    iconStyle={{ marginRight: 10 }}
                />}
                onPress={() => Linking.openURL('mailto:info@domain.com?subject=SendMail&body=Description')}
            />
            </TouchableOpacity>
            <TouchableOpacity>
            <Button style={styles.button}
                title="123 456 7890"
                titleStyle={{
                    fontSize: 15
                }}
                buttonStyle={{ backgroundColor: '#5637DD', margin: 40 }}
                icon={<Icon
                    name='phone'
                    type='font-awesome'
                    color='#fff'
                    iconStyle={{ marginRight: 10 }}
                />}
                onPress={() => Linking.openURL(`tel:${1234567890}`)}
            />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    wrapper: {},

    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    headline: {
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
    },
    Button: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      },
});

export default Contact;