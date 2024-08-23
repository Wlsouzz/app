import { Text, View, Image, TouchableOpacity } from "react-native";
import estilo from "./style";
import { useNavigation } from "@react-navigation/native";

export default function card({ porcentagem, titulo, imagem, texto, texto2 }) {
  const navigation = useNavigation();


    return(
        <TouchableOpacity style={estilo.cardTarefa} onPress = {()=>navigation.navigate('Details')} >
            <Image style={estilo.imagemCard} source={{ uri: imagem }} />
            <View style={{  marginLeft: 15,width:150 }}>
                 <Text style={estilo.tituloCard}>{titulo}</Text>
                <Text style={estilo.textoCard}>{texto}</Text>
                <Text style={estilo.textoCard}>{texto2}</Text>
            </View>
            <Text style={{ fontSize: 25 }}>{porcentagem}</Text>
        </TouchableOpacity>
    )
}
