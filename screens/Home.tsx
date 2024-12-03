import React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  const goToSearch = () => {
    navigation.navigate("Search"); 
  };

  return (
    <ScrollView style={styles.HomeContainer}>
      <Text style={styles.redFlagTop}></Text>
      <ImageBackground
        source={require("./images/homePage.jpg")}
        style={styles.headerImage}
      >
        <Text style={styles.headerTitle}>
          I am not only perfect I'm{" "}
          <Text style={styles.lebaneseWord}>lebanese</Text> {"\n"} too!
        </Text>
        <Pressable onPress={goToSearch}>
          <Text style={styles.buttonText}>Search</Text>
        </Pressable>
      </ImageBackground>
      <Text style={styles.redFlagBottom}></Text>
      <Text style={styles.text}>
        <Text style={styles.title}>what is beyti?</Text> {"\n"}
        <Text style={styles.content}>
          Beyti is a platform dedicated to connecting people in Lebanon with
          safe and affordable housing options during these challenging times.
          Whether you're looking for a place to call home or have a property to
          offer, Beyti provides a simple and trusted way to connect and support
          each other in finding shelter and stability.
        </Text>
      </Text>
      <Text style={styles.text}>
        <Text style={styles.title}>how it works?</Text> {"\n"}
        <Text style={styles.content}>
          Beyti makes it easy for users to find or share housing. If you're
          looking for a place, explore our listings page with filters to find
          homes that match your needs. Property owners can use the post
          listings page to quickly add available rentals to the platform. With
          just a few clicks,
        </Text>
      </Text>
      <Text style={styles.text}>
        <Text style={styles.title}>how to use?</Text> {"\n"}
        <Text style={styles.content}>
          To Add a Property: Go to the Post Listing page and click on Add
          Property. Fill in the details about your property, such as location,
          price, and amenities, and upload photos to help renters see what
          you’re offering. Once you’re done, submit the listing to make it
          available on the site.To Rent a House: Visit the Rent Houses page to
          browse available properties.
        </Text>
      </Text>
      <Text style={styles.text}>
        <Text style={styles.title}>what is the purpose?</Text> {"\n"}
        <Text style={styles.content}>
          Beyti was created to support people in Lebanon by providing a trusted
          platform for finding housing amid challenging circumstances. Our
          mission is to help individuals and families find a safe place to call
          home, whether temporarily or long-term, by connecting them with
          available properties across the country.
        </Text>
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  HomeContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  headerImage: {
    width: "100%",
    height: 200,
  },
  headerTitle: {
    fontSize: 20,
    color: "red",
    width: "25%",
    marginLeft: "20%",
    marginTop: "7%",
    textAlign: "center",
  },
  lebaneseWord: {
    fontWeight: "bold",
    color: "green",
  },
  redFlagTop: {
    width: "100%",
    backgroundColor: "red",
    height: 10,
  },
  redFlagBottom: {
    width: "100%",
    backgroundColor: "red",
    height: 10,
  },
  buttonText: {
    width: 60,
    backgroundColor: "green",
    height: 25,
    borderRadius: 15,
    marginLeft: "28.5%",
    textAlign: "center",
    alignContent: "center",
    color: "white",
    marginTop: "3%",
    paddingTop: 2,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
  text: {
    marginTop: 20,
    paddingBottom: 20,
    width: "80%",
    marginLeft: "10%",
    backgroundColor: "rgba(40,15,10,0.2)",
    borderRadius: 20,
  },
  content: {},
});
