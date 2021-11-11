import React from 'react';
import { TextInput } from 'react-native-gesture-handler';
/*import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable'; */



const Contact = () => {

    /*  return (
          <ScrollView>
              <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
  
                  <Card title="Contact Information" wrapperStyle={{ margin: 20 }}>
                      <Text> Address: Anywhere, USA 12345 </Text>
                      <Text Style={{ marginBottom: 10 }}> Phone: 123 456 7890 </Text>
                      <Text> Email: info@domain.com </Text>
                  </Card>
  
              </Animatable.View>
          </ScrollView>
      ); */

    return (
        <div>
            <section class="colorlib-contact" data-section="contact">
                <div className="col-md-7 col-md-push-1">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box" data-animate-effect="fadeInRight">
                            <form action="">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Subject" />
                                </div>
                                <div className="form-group">
                                    <textarea name="" id="message" cols="30" rows="7" className="form-control" placeholder="Message"></textarea >
                                </div>
                                <div className="form-group">
                                    <input type="submit" className="btn btn-primary btn-send-message" value="Send Message" />
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;