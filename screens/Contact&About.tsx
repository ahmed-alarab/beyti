import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  Pressable,
} from "react-native";

export default function AboutContact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");

  const clearInputs = () => {
    setFirstName("");
    setLastName("");
    setMessage("");
  };

  return (
    <ScrollView style={styles.AboutContactContainer}>
      <View style={styles.contactUsContainer1}>
        <View style={styles.contactUsContainer}>
          <View style={styles.firstPartContainer}>
            <Text style={styles.contactUsTitle}>contact us</Text>
            <View style={styles.inputs}>
              <TextInput
                style={styles.firstNameInput}
                placeholder="first name"
                value={firstName}
                onChangeText={setFirstName}
              />
              <TextInput
                style={styles.lastNameInput}
                placeholder="last name"
                value={lastName}
                onChangeText={setLastName}
              />
              <TextInput
                style={styles.textArea}
                placeholder="enter your message"
                multiline={true}
                numberOfLines={4}
                value={message}
                onChangeText={setMessage}
              />
            </View>
            <Pressable onPress={clearInputs} style={styles.clearButton}>
              <Text style={styles.clearButtonText}>send</Text>
            </Pressable>
          </View>
          <View style={styles.imagesContainer}>
            <Image
              source={require("./images/twitter.png")}
              style={styles.xImage}
            />
            <Image
              source={require("./images/gmail.png")}
              style={styles.gmailImage}
            />
            <Text style={styles.xName}>ahmed alarab</Text>
            <Text style={styles.gmailName}>ahmadalarab011@gmail.com</Text>
            <Image
              source={require("./images/phone-call.png")}
              style={styles.phoneImage}
            />
            <Image
              source={require("./images/instagram.png")}
              style={styles.instaImage}
            />
            <Text style={styles.phoneName}>+961 81 826 492</Text>
            <Text style={styles.instaName}>ahmed.alarab.011</Text>
          </View>
        </View>
      </View>
      <View style={styles.aboutUsContainer}>
        <Text style={styles.aboutUsTitle}>about us</Text>
        <Text style={styles.aboutUsInfo}>
          Beyti is here to connect you with safe and reliable housing, providing
          a trusted platform to find or offer a home across Lebanon
        </Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>
            Your trusted connection to homes across Lebanon
          </Text>
          <Text style={styles.details}>
            Beyti is a platform dedicated to helping individuals and families in
            Lebanon find safe and reliable housing during challenging times. Our
            mission is to make housing accessible to everyone by connecting
            renters and property owners through a user-friendly and secure
            platform. We prioritize safety, quality, and transparency, offering
            features like tailored search filters and an easy listing process to
            ensure a seamless experience. More than just a website, Beyti is a
            community-driven solution aimed at rebuilding hope and stability,
            making a real difference in people’s lives across the country.
          </Text>
        </View>
        <Text style={styles.myName}>ahmad al arab</Text>
        <Text style={styles.myUni}>student at antonine university</Text>
        <Image source={require("./images/me.jpg")} style={styles.me} />
      </View>
    </ScrollView>
  );
}

const styles= StyleSheet.create({
 AboutContactContainer:{
    flex:1,
 },
 firstPartContainer:{
    width:"100%",
    

 },
 contactUsContainer1:{
    backgroundColor:"rgba(55,55,55,0.1)"
 },
 contactUsContainer:{
    marginLeft:"25%",
    height:600,
    
 },
 inputs:{
    marginLeft:"8%",
 },

 contactUsTitle:{
    fontSize:50,
    width:"70%",
    fontWeight:"bold",
    },
    firstNameInput:{
        width:"50%",
        height:40,
        borderColor:"black",
        borderWidth:1,
        marginTop:30,
        borderRadius:20,
        fontSize:20,
        paddingLeft:20,
    },
    lastNameInput:{
        width:"50%",
        height:40,
        borderColor:"black",
        borderWidth:1,
        marginTop:10,
        borderRadius:20,
        fontSize:20,
        paddingLeft:20,
    },
    textArea:{
        width:"50%",
        height:100,
        borderColor:"black",
        borderWidth:1,
        marginTop:20,
        borderRadius:20,
        fontSize:20,
        paddingLeft:20,
    },
    instaImage:{
        width:60,
        height:60,
        marginTop:-60,
        marginLeft:"50%",
        
    },
    xImage:{
        width:60,
        height:60,
        marginTop:20,
        marginLeft:"-15%"
    },
    gmailImage:{
        width:60,
        height:60,
        marginTop:-60,
        marginLeft:"50%"
    },
    phoneImage:{
        width:60,
        height:60,
        marginTop:20,
        marginLeft:"-15%",

    },
    xName:{
        fontSize:15,
        marginLeft:"-32%",
        borderWidth:1 ,
        width:170,
        borderColor:"green",
        textAlign:"center",
        borderRadius:5,
    },
    gmailName:{
        fontSize:15,
        marginTop:-17,
        marginLeft:"35%",
        borderWidth:1 ,
        width:170,
        borderColor:"green",
        textAlign:"center",
        borderRadius:5,
    },
    phoneName:{
        width:170,
        borderWidth:1 ,
        borderColor:"green",
        textAlign:"center",
        borderRadius:5,
        marginLeft:"-32%",
    },
    instaName:{
        width:170,
        borderWidth:1 ,
        borderColor:"green",
        textAlign:"center",
        borderRadius:5,
        marginTop:-17,
        marginLeft:"35%",
    },
    imagesContainer:{
        width:"100%",
        marginLeft:"2%",
    },
    aboutUsContainer:{
        marginTop:40,
        marginBottom:50,

    },
    aboutUsTitle:{
        fontSize:50,
        textAlign:"center",
        fontWeight:"bold",

    },
    aboutUsInfo:{
        fontSize:20,
        width:"90%",
        textAlign:"center",
        alignSelf:"center",
    },
    detailsContainer:{
        marginTop:50,
        width:"95%",
        alignSelf:"center",
        backgroundColor:"rgba(32,56,12,0.3)",
        paddingBottom:30,
        paddingTop:10,
        paddingLeft:5,
    },
    detailsTitle:{
        fontSize:24,

    },
    details:{
        width:"90%",
        marginLeft:"3%",
        marginTop:20,
        fontSize:18,

    },
    myName:{
        fontSize:30,
        marginTop:20,
        textAlign:"center",

    },
    myUni:{
        fontSize:24,
        textAlign:"center",
        marginTop:5,
    },
    me:{
        width:200,
        height:200,
        alignSelf:"center",
        borderRadius:100,
        marginTop:20,
    },
    clearButton: {
    marginTop: 20,
    backgroundColor: "red",
    borderRadius: 10,
    width: "50%",
    alignSelf: "center",
    padding: 10,
    marginLeft:"-35%"
  },
  clearButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },



})