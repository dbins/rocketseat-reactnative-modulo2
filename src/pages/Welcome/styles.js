import { StyleSheet } from "react-native";
import { colors, metrics } from "../../styles/index";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secundary,
    padding: metrics.basePadding * 2,
    justifyContent: "center",
    alignItems: "stretch", //Usar toda a largura
    height: metrics.screenHeight
  },
  title: {
    textAlign: "center",
    color: colors.white,
    fontSize: 24,
    fontWeight: "bold"
  },
  title: {
    textAlign: "center",
    marginTop: metrics.baseMargin,
    fontSize: 15,
    color: colors.light,
    lineHeight: 21
  },
  error: {
    color: colors.danger,
    textAlign: "center",
    marginTop: metrics.baseMargin
  },
  form: {
    marginTop: metrics.baseMargin * 2
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 44,
    paddingHorizontal: metrics.basePadding
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: metrics.baseRadius,
    height: 44,
    marginTop: metrics.baseMargin,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontSize: 14,
    color: colors.white,
    fontWeight: "bold"
  }
});

export default styles;
