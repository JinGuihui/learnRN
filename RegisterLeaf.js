import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Image,
  ImageBackground,
  TouchableHighlight,
 } from 'react-native';

import ImagePicker from 'react-native-image-crop-picker'; 
import { checkRegisterData } from './tools/checkData';
 
 let sWidth = Dimensions.get('window').width;
 let sHeight = Dimensions.get('window').height;
 var phoneNumber='';
 
export default class RegisterLeaf extends Component<props> {
  constructor(props) {
    super(props);
    this.state = {
       iconImage: require('./source/images/icon.png')
    };

  };
  
   //点击注册按钮
  registerButtonClicked () {
    console.log('ah');  
    checkRegisterData(phoneNumber);
    
  }
   //账号内容改变
  userChanged(text) {
    console.log(text);
    phoneNumber=text;
    
  }
   //密码改变
  PWcahnged(text) {
    console.log(text);
  }

   // 头像点击
  iconClicked() {
    console.log('头像点击了');
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {      
      this.setState({        
        iconImage: {uri: image['path']},
        // 上传至服务器
      });
    });
    
  }


  render() {
    return (
    <View style={styles.container}>
    <ImageBackground source={require('./source/images/bg.png')} style={styles.BGImage}>
      <TouchableHighlight  underlayColor='gray' onPress={this.iconClicked.bind(this)} style={styles.iconImage}>
        <Image source={this.state.iconImage} style={{width: sWidth *0.5, height: sWidth *0.5, borderRadius: sWidth *0.25}}/>
      </TouchableHighlight>
      <View style={{backgroundColor: 'green', width: sWidth, height: 190, marginTop: 60, alignItems: 'center'}}>
        <View style={{backgroundColor: 'yellow', width: sWidth*0.8, height: 50, marginTop: 30, alignItems: 'center',flexDirection: 'row'}}>
          <Image source={require('./source/images/icon_我的2.png')} style={{width: 21, height: 21}}/>
          <TextInput keyboardType="numeric" onChangeText={this.userChanged} placeholder='请输入手机号码' borderBottomColor='gray'  style={{marginLeft: 8,  marginRight: 12,borderBottomWidth: 1,flex: 1,fontSize: 18}}></TextInput>
        </View>
        <View style={{backgroundColor: 'yellow', width: sWidth*0.8, height: 50,marginTop: 30,alignItems: 'center',flexDirection: 'row'}}>
          <Image source={require('./source/images/btn_查看游记.png')} style={{width: 21, height: 21}}/>
          <TextInput onChangeText={this.PWcahnged} placeholder='请输入密码' borderBottomColor='gray'  style={{marginLeft: 8,  marginRight: 12,borderBottomWidth: 1,flex: 1,fontSize: 18}}></TextInput>
        </View>
      </View>
      <TouchableHighlight onPress={this.registerButtonClicked} style={{marginTop: 30,borderRadius: 10}}>
          <ImageBackground source={require('./source/images/btn_注册.png')} style={{width: 100,height: 30, alignItems: 'center', justifyContent: 'center',}}>
           <Text>注册</Text>
          </ImageBackground>
      </TouchableHighlight>
    </ImageBackground>
    </View>
    );   
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  BGImage: {
    width: sWidth,
    height: sHeight,
    alignItems: 'center',
  },
  iconImage: {
    marginTop: 80,
    width: sWidth *0.5,
    height: sWidth *0.5,
    borderRadius: sWidth *0.25,
  }

});
