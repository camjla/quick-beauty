const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import HomeAutomatico from "./screens/HomeAutomatico";
import Selected2 from "./components/Selected2";
import Property1Default from "./components/Property1Default";
import IPhoneStatusBarupper from "./components/IPhoneStatusBarupper";
import DarkModefalse from "./components/DarkModefalse";
import VisibleNOIcon from "./components/VisibleNOIcon";
import ColorClearIcon from "./components/ColorClearIcon";
import Property1Default1 from "./components/Property1Default1";
import DarkThemeTrue from "./components/DarkThemeTrue";
import Conta from "./screens/Conta";
import HistoricoServios from "./screens/HistoricoServios";
import Servio from "./screens/Servio";
import SeTorneUmProfissionalRegi from "./screens/SeTorneUmProfissionalRegi";
import SeTorneUmProfissionalFoto from "./screens/SeTorneUmProfissionalFoto";
import ConfiguraesUserNormal from "./screens/ConfiguraesUserNormal";
import AdicionarEndereo from "./screens/AdicionarEndereo";
import Informaes from "./screens/Informaes";
import PerfilDoProfisisonal from "./screens/PerfilDoProfisisonal";
import CarregamentoLogin from "./screens/CarregamentoLogin";
import ContaProfissional from "./screens/ContaProfissional";
import SeTorneUmProfissionalInici from "./screens/SeTorneUmProfissionalInici";
import SeTorneUmProfissionalCont from "./screens/SeTorneUmProfissionalCont";
import Privacidade from "./screens/Privacidade";
import Segurana from "./screens/Segurana";
import Telefone from "./screens/Telefone";
import HistoricoMensagens from "./screens/HistoricoMensagens";
import AlterarEndereo from "./screens/AlterarEndereo";
import Carregamento from "./screens/Carregamento";
import ChatProfissional from "./screens/ChatProfissional";
import PerfilDoProfisisonalPagame from "./screens/PerfilDoProfisisonalPagame";
import AdicionarUmaContaBancria from "./screens/AdicionarUmaContaBancria";
import HomeLogin from "./screens/HomeLogin";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Raleway-Light": require("./assets/fonts/Raleway-Light.ttf"),
    "Raleway-Regular": require("./assets/fonts/Raleway-Regular.ttf"),
    "Raleway-Medium": require("./assets/fonts/Raleway-Medium.ttf"),
    "Raleway-SemiBold": require("./assets/fonts/Raleway-SemiBold.ttf"),
    "Raleway-Bold": require("./assets/fonts/Raleway-Bold.ttf"),
    "Raleway-ExtraBold": require("./assets/fonts/Raleway-ExtraBold.ttf"),
    "Raleway-Italic": require("./assets/fonts/Raleway-Italic.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Carregamento"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="HomeAutomatico"
              component={HomeAutomatico}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Conta"
              component={Conta}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HistoricoServios"
              component={HistoricoServios}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Servio"
              component={Servio}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SeTorneUmProfissionalRegioEServio"
              component={SeTorneUmProfissionalRegi}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SeTorneUmProfissionalFotoEPerfilEAvaliaes"
              component={SeTorneUmProfissionalFoto}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ConfiguraesUserNormal"
              component={ConfiguraesUserNormal}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdicionarEndereo"
              component={AdicionarEndereo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Informaes"
              component={Informaes}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PerfilDoProfisisonal"
              component={PerfilDoProfisisonal}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CarregamentoLogin"
              component={CarregamentoLogin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ContaProfissional"
              component={ContaProfissional}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SeTorneUmProfissionalInicio"
              component={SeTorneUmProfissionalInici}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SeTorneUmProfissionalContaBancaria"
              component={SeTorneUmProfissionalCont}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Privacidade"
              component={Privacidade}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Segurana"
              component={Segurana}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Telefone"
              component={Telefone}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HistoricoMensagens"
              component={HistoricoMensagens}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AlterarEndereo"
              component={AlterarEndereo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Carregamento"
              component={Carregamento}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChatProfissional"
              component={ChatProfissional}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PerfilDoProfisisonalPagamento"
              component={PerfilDoProfisisonalPagame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdicionarUmaContaBancria"
              component={AdicionarUmaContaBancria}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeLogin"
              component={HomeLogin}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
