import { StyleSheet } from "react-native"

export const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#373841',
    },
    logo: {
        height: 157,
        width: 302,
        marginBottom: 40,
    },
    subtitle: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
        marginTop: 10,
    },
    input: {
        height: 45,
        borderColor: '#494C6B',
        backgroundColor: '#494C6B',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#434DC0',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FFFFFF',
    },
    text: {
        fontSize: 16,
        color: '#FFFFFF',
    },
    footer: {
        marginTop: 20,
        alignItems: 'center',
        backgroundColor: '#373841',
    },
    link: {
        color: '#007bff',
    },
})