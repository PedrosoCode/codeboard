/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, Button, useColorScheme } from 'react-native';
import { Colors, Header, ReloadInstructions, DebugInstructions, LearnMoreLinks } from 'react-native/Libraries/NewAppScreen';

import Home from './src/pages/Home';
import About from './src/pages/About';

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const Section = ({ children, title }: SectionProps): React.ReactElement => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text style={[styles.sectionTitle, { color: isDarkMode ? Colors.white : Colors.black }]}>{title}</Text>
      <Text style={[styles.sectionDescription, { color: isDarkMode ? Colors.light : Colors.dark }]}>{children}</Text>
    </View>
  );
};

const App = (): React.ReactElement => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = { backgroundColor: isDarkMode ? Colors.darker : Colors.lighter };
  const Stack = createStackNavigator();

  const MyStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
          <Header />
          <View style={{ backgroundColor: isDarkMode ? Colors.black : Colors.white }}>
            <Section title="Step One">Edit <Text style={styles.highlight}>App.tsx</Text> to change this screen and then come back to see your edits.</Section>
            <Section title="See Your Changes"><ReloadInstructions /></Section>
            <Section title="Debug"><DebugInstructions /></Section>
            <Section title="Learn More">Read the docs to discover what to do next:</Section>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
