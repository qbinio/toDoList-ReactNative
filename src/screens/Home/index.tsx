import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { ScrollView } from "react-native";

const Home = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.welcomeTextWrapper}>
          <Image
            style={styles.photoStyle}
            source={require("../../assets/logo.png")}
          />
          <Text style={styles.welcomeText}>Welcome</Text>
        </View>
        <View style={styles.descTextWrapper}>
          <Text style={styles.descText}>
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perspiciatis nemo quas repellendus incidunt exercitationem
            temporibus alias, suscipit atque veniam deserunt blanditiis ipsam
            vitae facilis odio nostrum nihil ipsa. Accusantium, error in, atque
            culpa minus delectus explicabo doloribus corporis quidem distinctio
            iure deleniti ipsa placeat magnam sint, libero numquam ducimus
            sequi!
          </Text>
        </View>
        <View style={styles.descTextWrapper}>
          <Text style={styles.descText}>
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perspiciatis nemo quas repellendus incidunt exercitationem
            temporibus alias, suscipit atque veniam deserunt blanditiis ipsam
            vitae facilis odio nostrum nihil ipsa. Accusantium, error in, atque
            culpa minus delectus explicabo doloribus corporis quidem distinctio
            iure deleniti ipsa placeat magnam sint, libero numquam ducimus
            sequi!
          </Text>
        </View>
        <View style={styles.descTextWrapper}>
          <Text style={styles.descText}>
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perspiciatis nemo quas repellendus incidunt exercitationem
            temporibus alias, suscipit atque veniam deserunt blanditiis ipsam
            vitae facilis odio nostrum nihil ipsa. Accusantium, error in, atque
            culpa minus delectus explicabo doloribus corporis quidem distinctio
            iure deleniti ipsa placeat magnam sint, libero numquam ducimus
            sequi!
          </Text>
        </View>
        <View style={styles.descTextWrapper}>
          <Text style={styles.descText}>
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perspiciatis nemo quas repellendus incidunt exercitationem
            temporibus alias, suscipit atque veniam deserunt blanditiis ipsam
            vitae facilis odio nostrum nihil ipsa. Accusantium, error in, atque
            culpa minus delectus explicabo doloribus corporis quidem distinctio
            iure deleniti ipsa placeat magnam sint, libero numquam ducimus
            sequi!
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  welcomeTextWrapper: {
    flexDirection: "row",
    alignItems: "center",
    height: 120,
    backgroundColor: "grey",
  },
  photoStyle: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginLeft: 10,
  },
  welcomeText: {
    fontSize: 30,
    paddingLeft: 40,
    color: "white",
  },
  descTextWrapper: {
    borderBottomWidth: 2,
    height: 200,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  descText: {
    width: "80%",
  },
});

export default Home;
