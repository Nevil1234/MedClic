import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    Pressable
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const handleLogin = () => {
        // Add your authentication logic here
        router.replace('/(tabs)/Home');
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardAvoid}
            >
                {/* Header and Logo */}
                <Animated.View entering={FadeInUp.duration(1000).springify()} style={styles.headerContainer}>
                    <Image
                        source={require('../../assets/images/landingpg.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.welcomeText}>Welcome Back</Text>
                    <Text style={styles.subtitle}>Sign in to your account</Text>
                </Animated.View>

                {/* Form Inputs */}
                <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <Ionicons name="mail-outline" size={20} color="#007bfe" style={styles.inputIcon} />
                        <TextInput
                            placeholder="Email"
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Ionicons name="lock-closed-outline" size={20} color="#007bfe" style={styles.inputIcon} />
                        <TextInput
                            placeholder="Password"
                            style={styles.input}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={!showPassword}
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                            <Ionicons name={showPassword ? "eye-outline" : "eye-off-outline"} size={20} color="#777" />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={() => { }} style={styles.forgotPassword}>
                        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
                        <Text style={styles.loginButtonText}>Sign In</Text>
                    </TouchableOpacity>
                </Animated.View>

                {/* Social Login Options */}
                <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} style={styles.socialContainer}>
                    <Text style={styles.orText}>Or continue with</Text>

                    <View style={styles.socialButtons}>
                        <TouchableOpacity style={styles.socialButton}>
                            <Ionicons name="logo-google" size={24} color="#DB4437" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.socialButton}>
                            <Ionicons name="logo-apple" size={24} color="#000" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.socialButton}>
                            <Ionicons name="logo-facebook" size={24} color="#4267B2" />
                        </TouchableOpacity>
                    </View>
                </Animated.View>

                {/* Sign Up Link */}
                <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} style={styles.signupContainer}>
                    <Text style={styles.noAccountText}>Don't have an account? </Text>
                    <TouchableOpacity onPress={() => router.push('/(auth)/Signup')}>
                        <Text style={styles.signupText}>Sign Up</Text>
                    </TouchableOpacity>
                </Animated.View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    keyboardAvoid: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    headerContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    welcomeText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
    },
    formContainer: {
        width: '100%',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 12,
        marginBottom: 16,
        paddingHorizontal: 15,
        height: 55,
        backgroundColor: '#f9f9f9',
    },
    inputIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: '100%',
        fontSize: 16,
    },
    eyeIcon: {
        padding: 5,
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        marginBottom: 20,
    },
    forgotPasswordText: {
        color: '#007bfe',
        fontWeight: '600',
    },
    loginButton: {
        backgroundColor: '#007bfe',
        borderRadius: 12,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#007bfe',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 8,
    },
    loginButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    socialContainer: {
        marginBottom: 30,
    },
    orText: {
        color: '#666',
        textAlign: 'center',
        marginVertical: 20,
    },
    socialButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    socialButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#f9f9f9',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: '#eee',
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    noAccountText: {
        fontSize: 15,
        color: '#666',
    },
    signupText: {
        fontSize: 15,
        color: '#007bfe',
        fontWeight: 'bold',
    },
});