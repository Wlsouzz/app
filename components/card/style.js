import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  cardTarefa: {
    marginTop: 20,
    backgroundColor: "#00FF7F",
    width: 350,
    height: 230,
    justifyContent: "space-between",
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 2,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },

  textoCard: {
    fontSize: 10,
    marginTop: 3,
  },

  imagemCard: {
    width: "100%",
    height: 120,
    marginRight: 15,
  },

  tituloCard: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#1d3557",
  },
});

export default estilo;
