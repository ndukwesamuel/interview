import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Switch,
} from "react-native";
import Button from "../components/Button";
import colors from "../layouts/colors";
import fonts from '../layouts/fonts';
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { Dialog, CheckBox, ListItem, Avatar, Chip } from '@rneui/themed';





const Settings = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [difficulty, setDifficulty] = useState('Easy');
  const [num, setNum] = useState(0);
  const [visible5, setVisible5] = useState(false);
  const [visible6, setVisible6] = useState(false);
  const [checked, setChecked] = useState(1);
  //This is used for the sixth/last Dialog
const userlist = [
  {
    name: 'Mongopark',
    avatar_url: require('../../assets/profile3.jpg'),
    subtitle: 'amy.farha@gmail.com',
  },
  {
    name: 'Silasico',
    avatar_url: require('../../assets/profile1.jpg'),
    subtitle: 'cjackson@gmail.com',
  },
  {
    name: 'OneBoyFromIfe',
    avatar_url: require('../../assets/profile2.jpg'),
    subtitle: 'amandam@gmail.com',
  },
];


  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };
  const toggleSwitch2 = () => {
    setEnabled(!enabled);
  };
  const toggleDialog5 = () => {
    setVisible5(!visible5);
  };
  const toggleDialog6 = () => {
    setVisible6(!visible6);
  };

  const decreaseDifficulty = () => {
    if (num === -2) {
      setNum(0);
      setDifficulty('Easy');
    } else if (num === 0) {
      setNum(-1);
      setDifficulty('Medium');
    } else if (num === -1) {
      setNum(-2);
      setDifficulty('Hard');
    }
  };
  
  const increaseDifficulty = () => {
    if (num === -2) {
      setNum(-1);
      setDifficulty('Medium');
    } else if (num === -1) {
      setNum(0);
      setDifficulty('Easy');
    } else if (num === 0) {
      setNum(-2);
      setDifficulty('Hard');
    }
  };
  

  return (
    <LinearGradient
      // Button Linear Gradient
      colors={[colors.primarylight, colors.primarydark]}
      style={styles.container}>
        <Button
          title="Go Back"
          textstyle={{ fontSize: 20, fontFamily: fonts.extraBold }}
          style={{ width: '30%', height: 30, padding: 0, alignSelf: 'flex-start' }}
          onPress={() => navigation.goBack()}
        />
        <View style={styles.cont}>      
      <Text style={styles.heading}>Setting</Text>
      <View
        style={styles.soundview}>
        <Text style={styles.sound}>SOUND</Text>
        <Switch
          thumbColor='gold'
          ios_backgroundColor="white"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={styles.switch}
          trackColor={{ false: "white", true: "white" }} />
      </View>

      <View
        style={styles.soundview}>
        <Text style={styles.sound}>MUSIC</Text>
        <Switch
          thumbColor='gold'
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch2}
          value={enabled}
          style={styles.switch} />
      </View>

      <View style={styles.difficultyview}>
        <Text style={styles.sound}>DIFFICULTY</Text>
      </View>

      <View style={styles.difficultybar}>
        <View style={styles.difficultyicon}>
          <FontAwesome name="chevron-left" size={24} color={colors.buttontext} onPress={decreaseDifficulty} />
        </View>
        <TouchableOpacity
          style={{ padding: 10, borderRadius: 30, backgroundColor: "white" }}>
          <Text style={styles.difficulty}>     {difficulty}     </Text>
        </TouchableOpacity>
        <View style={styles.difficultyicon}>
          <FontAwesome name="chevron-right" size={24} color={colors.buttontext} onPress={increaseDifficulty} />
     </View>
      </View>

           <Button title="ABOUT DEVELOPER" textstyle={{ fontSize: 20, fontFamily: fonts.extraBold, }}
            style={{ width: 200, height: 30, padding: 0 }} onPress={toggleDialog6} />
{/* The Sixth Dialog- a dialog with three social-media accounts(username, email & picture) to choose one */}
<Dialog
      isVisible={visible6}
      onBackdropPress={toggleDialog6} >
      <Dialog.Title title="Developers"/>
      {userlist.map((l, i) => (
        <ListItem
          key={i}
          containerStyle={{ marginHorizontal: -10, borderRadius: 8, }}
          onPress={toggleDialog6} >
          {/* <Avatar rounded source={{ uri: l.avatar_url }} /> */}
          <Image style={{ borderRadius: 50 }} source={l.avatar_url} />
          <ListItem.Content>
            <ListItem.Title style={{ fontWeight: '700' }}>
              {l.name}
            </ListItem.Title>
            <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem> ))}
    </Dialog>


          <Button title="GAME INSTRUCTIONS" textstyle={{ fontSize: 20, fontFamily: fonts.extraBold, }}
            style={{ width: 230, height: 30, padding: 0 }} onPress={toggleDialog5} />
            {/* The Fifth Dialog- a dialog with three options and a cancel and confirm button below */}
    <Dialog
      isVisible={visible5}
      onBackdropPress={toggleDialog5} >
      <Dialog.Title title="Game Instructions"/>
      {['Objective: The primary objective of the game is to achieve the highest score possible within a limited time frame. Players earn points by successfully completing specific in-game tasks or challenges', 'Gameplay: Players can control their in-game character using intuitive touch and button controls.', 'Challenges and Power-ups: Challenges includes avoiding obstacles. Power-ups can enhance the characters abilities temporarily'].map((l, i) => (
        <CheckBox
          key={i}
          title={l}
          containerStyle={{ backgroundColor: 'white', borderWidth: 0 }}
          checkedIcon="dot-circle-o"
          uncheckedIcon="dot-circle-o"
          checked={checked}
          onPress={() => setChecked(i + 1)} /> ))}
      <Dialog.Actions>
        <Dialog.Button title="OK" onPress={toggleDialog5} />
      </Dialog.Actions>
    </Dialog>

    <Button title="CHANGE USER" textstyle={{ fontSize: 20, fontFamily: fonts.extraBold, }}
            style={{ width: 230, height: 30, padding: 0 }} onPress={()=> navigation.navigate('Changeuser')} />

            </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
  cont: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    color: colors.primarydark,
    fontSize: 90,
    alignSelf: 'center',
    fontFamily: fonts.extraBold,
  },
  soundview: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: '80%',
    paddingVertical: 20,
  },
  sound: {
    color: 'white',
    fontSize: 20,
    fontFamily: fonts.extraBold,
  },
  difficulty: { 
    fontSize: 25, 
    color: colors.primarydark,
    fontFamily: fonts.extraBold, 
  },
  difficultyview: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",          
    width: '80%',
    paddingTop: 20,
  },
  difficultybar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 20,
  },
  difficultyicon: {
    borderRadius: 30,
    padding: 5,
    width: 40,
    height: 40,
    backgroundColor: colors.secondarylight,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Settings;
