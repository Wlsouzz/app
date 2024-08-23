import { View, Text, Image } from "react-native";

import estilo from "./style";

export default function Header() {
  return (
    <>
      <Image
        source={{
          uri: 'https://oggisorvetes.com.br/wp-content/uploads/2020/12/logo.png',
        }}
        style={estilo.image}
      />

     

      <View
        style={{
          width: "95%",
          flexDirection: "row",
          marginTop: 20,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >


      </View>
    </>
  );
}

