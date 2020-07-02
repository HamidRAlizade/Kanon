/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
  AsyncStorage,
} from 'react-native';
import {Card} from 'react-native-paper';
import Carousel, {getInputRangeFromIndexes} from 'react-native-snap-carousel';
import background from '../../../assets/images/abstract.png';

import backgroundC from '../../../assets/images/abstract2.png';
import back from '../../../assets/images/back.png';
import circle from '../../../assets/images/circaleBack.png';
import style from './Style/style';
import {FlatList} from 'react-native-gesture-handler';
import LoginAction from '../../action/LoginAction';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Res from '../../Color/color';
import {UserData} from '../../model/userData';

let screenWidth = Dimensions.get('window').width;
class RegisterScreen extends React.Component {
  state = {
    nationalCode: '',
  };
  componentDidMount() {
    let {navigation} = this.props;

    AsyncStorage.multiGet(['userid', 'dataUser']).then(data => {
      console.log("",JSON.parse(data[1][1]));
      if (data[0][1] != null) {
        UserData.jsonData = JSON.parse(data[1][1]);
        console.log("", UserData.jsonData );
        navigation.navigate('Home');
      }
    });
  }

  onLogin = e => {
    let {navigation} = this.props;

    LoginAction._onLogin(this.state.nationalCode).then(data => {
      if (data !== '0') {
        console.log(data.Rid);
       

        navigation.navigate('Home');
      }
    });
  };
  onChangeTextUser(e) {
    this.setState({
      nationalCode: e,
    });
  }
  render() {
    let {
      imageBottom,
      viewFull,
      textTitle,
      detail,
      viewForm,
      space,
      viewRegister,
      titleRegister,
      buttonItem,
      buttonLogin,
      cardButton,
      textButton,
      textButtonLogin,
      textCardButton,
      viewFullCardButton,
    } = style;
    return (
      <View style={{width: '100%', height: '100%'}}>
        <Image
          style={{width: '100%', height: '100%', position: 'absolute'}}
          source={background}
          resizeMode="stretch"
        />
        {/* <ImageBackground
          resizeMode="stretch"
          style={viewFull}> */}
        <KeyboardAwareScrollView
          contentContainerStyle={{flexGrow: 1}}
          enableOnAndroid={true}
          style={{width: '100%', height: '100%'}}>
          <View style={viewRegister}>
            <View style={viewForm}>
              <Text style={textTitle}>کانون فرهنگی آموزش</Text>
              <Text style={detail}>اپلیکیشن دبیران</Text>
              <View style={{width: '85%', marginTop: '18%'}}>
                <Text style={titleRegister}>کدملی</Text>
              </View>

              <View style={viewFullCardButton}>
                <Card style={cardButton}>
                  <TextInput
                    style={{
                      textAlign: 'center',
                      textAlignVertical: 'center',
                      fontSize: 16,
                      color: Res.Color.primers,
                      fontFamily: 'BYekanBold',
                    }}
                    maxLength={11}
                    onChangeText={text => this.onChangeTextUser(text)}
                  />
                </Card>
              </View>
              <View style={viewFullCardButton}>
                <TouchableOpacity
                  activeOpacity={10}
                  style={buttonItem}
                  onPress={() => this.onLogin()}>
                  <View>
                    <Text style={textButton}>{'ثبت نام'}</Text>
                  </View>
                </TouchableOpacity>
                <View style={buttonLogin}>
                  <Text style={textButtonLogin}>{'ورود'}</Text>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
        {/* </ImageBackground> */}
      </View>
    );
  }
}

export default RegisterScreen;
