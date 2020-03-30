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
} from 'react-native';
import {Card} from 'react-native-paper';
import Carousel, {getInputRangeFromIndexes} from 'react-native-snap-carousel';
import background from '../../../assets/images/abstract.png';

import backgroundC from '../../../assets/images/abstract2.png';
import back from '../../../assets/images/back.png';
import circle from '../../../assets/images/circaleBack.png';
import style from './Style/style';
import {FlatList} from 'react-native-gesture-handler';
let screenWidth = Dimensions.get('window').width;
class RegisterScreen extends React.Component {
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
      <View style={{width:`100%`,height:`100%`}} >
        <ImageBackground source={background} resizeMode="stretch" style={viewFull}>
          <View style={viewRegister}>
          <View style={viewForm}>
            <Text style={textTitle}>کانون فرهنگی آموزش</Text>
            <Text style={detail}>اپلیکیشن دبیران</Text>

            <Text style={titleRegister}>کدملی</Text>
            <View style={viewFullCardButton}>
            <Card style={cardButton}>
             <TextInput/>
            </Card>
          </View>
          <View style={buttonItem}>
                <Text style={textButton}>{'ثبت نام'}</Text>
              </View>
              <View style={buttonLogin}>
                <Text style={textButtonLogin}>{'ورود'}</Text>
              </View>
          </View>
</View>
        </ImageBackground>
      </View>
    );
  }
}

export default RegisterScreen;