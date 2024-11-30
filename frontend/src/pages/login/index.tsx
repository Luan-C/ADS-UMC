import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { style } from "./styles";
import Logo from "../../assets/logo.png";

export default function Login({ navigation }: { navigation: any }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleLogin() {
        try {
            setLoading(true)

            if (!email || !password) return Alert.alert("Atenção", "Informe os campos obrigatórios");

            Alert.alert("Logado com sucesso");

            navigation.navigate("Menu");

            // setTimeout(() => {
            //     Alert.alert("Logado com sucesso");
            //         setLoading(false)
            // }, 2000)

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    };

    return (
        <View style={style.container}>
            <Image
                source={Logo}
                style={style.logo}
                resizeMode="contain"
            />
            <Text style={style.subtitle}>Faça o login para acessar</Text>

            <View style={style.inputContainer}>
                <TextInput
                    style={style.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <TextInput
                    style={style.input}
                    placeholder="Senha"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>

            <TouchableOpacity onPress={handleLogin} style={style.button}>
                {
                    loading ?
                        <ActivityIndicator color={"#FFFF"} size={"small"} />
                        :
                        <Text style={style.buttonText}>Entrar</Text>
                }

            </TouchableOpacity>

            <View style={style.footer}>
                <Text style={style.text}>
                    Não tem login? <Text style={style.link} onPress={() => navigation.navigate("Signup")}>Cadastre-se</Text>
                </Text>
            </View>

        </View>
    )
}