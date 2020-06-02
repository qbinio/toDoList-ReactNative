import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { ScrollView } from "react-native";

const About = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.aboutTextWrapper}>
          <Text style={styles.aboutText}>About us</Text>
        </View>
        <View style={styles.aboutSectionWrapper}>
          <Text style={styles.aboutSectionText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aut
            possimus enim distinctio illo vel debitis recusandae ad minus animi
            veniam incidunt corrupti, labore, officiis nisi suscipit quod
            tenetur. Laborum!
          </Text>
          <Image
            style={styles.aboutPhotoStyle}
            source={require("../../assets/logo.png")}
          />
        </View>
        <View style={styles.aboutSectionWrapper}>
          <Image
            style={styles.aboutPhotoStyle}
            source={require("../../assets/logo.png")}
          />
          <Text style={styles.aboutSectionText}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
            cum nostrum quae nemo accusantium neque animi repudiandae, esse
            soluta. Veritatis sed sapiente qui ab possimus, ex labore
            repellendus quaerat error!
          </Text>
        </View>
        <View style={styles.aboutSectionWrapper}>
          <Text style={styles.aboutSectionText}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
            labore id nisi ducimus iure praesentium autem cumque voluptate
            exercitationem tempore repellendus, veritatis dolorem aperiam
            sapiente eum vel. Error, optio pariatur!
          </Text>
          <Image
            style={styles.aboutPhotoStyle}
            source={require("../../assets/logo.png")}
          />
        </View>
        <View style={styles.aboutSectionWrapper}>
          <Image
            style={styles.aboutPhotoStyle}
            source={require("../../assets/logo.png")}
          />
          <Text style={styles.aboutSectionText}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
            excepturi necessitatibus provident optio quas officia! Impedit amet
            sint culpa. Quis dolores ut animi possimus cumque cupiditate vero
            minima iusto perspiciatis.
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  aboutTextWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 120,
    backgroundColor: "grey",
  },
  aboutPhotoStyle: {
    height: 80,
    width: 80,
    borderRadius: 10,
  },
  aboutText: {
    fontSize: 30,
    color: "white",
  },
  aboutSectionWrapper: {
    flexDirection: "row",
    borderWidth: 2,
    borderRadius: 10,
    height: 200,
    width: "90%",
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  aboutSectionText: {
    width: "80%",
  },
});

export default About;
