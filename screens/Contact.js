import React from 'react';
import { Linking, StyleSheet, Text, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Contact = () => {

    return (
        <View style={styles.container} >
            <Text style={styles.headline} > FIND US </Text>
            <Text style={styles.text}> HUMMA FITNESS & TRAINING </Text>
             <Text style={styles.text}> 1234 SE 202 ST </Text>
            <Text style={styles.text}> Anywhere, USA </Text>

            <TouchableOpacity>
            <Button
                title="EMAIL"
                titleStyle={{
                    fontSize: 15
                }}
                buttonStyle={{ backgroundColor: '#5637DD', borderRadius: 6, marginTop: 40, marginBottom: 10 }} 
                icon={<Icon
                    name='envelope-o'
                    type='font-awesome'
                    color='#F0E68C'
                    iconStyle={{ marginRight: 10 }}
                />}
                onPress={() => Linking.openURL('mailto:info@domain.com?subject=SendMail&body=Description')}
            />
            </TouchableOpacity>
            <TouchableOpacity>
            <Button 
                title="CALL US"
                titleStyle={{
                    fontSize: 15,
                }}
                buttonStyle={{ backgroundColor: '#5637DD', borderRadius: 6, }}
                icon={<Icon
                    name='phone'
                    type='font-awesome'
                    color='#F0E68C'
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
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
    },

    wrapper: {},

    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    headline: {
        color: '#F0E68C',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
    },
    text: {
        color: '#F0E68C',
    }, 
});

export default Contact;