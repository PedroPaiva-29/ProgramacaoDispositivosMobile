import { Stack } from "expo-router";
import { StackScreen } from "react-native-screens";

export default function Layout(){
    return(
        <Stack
        screenOptions={{
            headerStyle:{
                backgroundColor:'green'
            },
            headerTintColor: '#fff'
        }}
        >
            <Stack.Screen name="index" options={{title:"Inicial"}}/>
            <Stack.Screen name="medicamentos/cadastro" options={{title:"Cadastro"}}/>
            <Stack.Screen name="medicamentos/listar" options={{title:"Treinos Cadastrados"}}/>
            <Stack.Screen name="login/login" options={{title:"Login"}}/>
        </Stack>
    );
}