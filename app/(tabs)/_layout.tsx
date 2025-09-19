import { Tabs } from 'expo-router';
import React from 'react';
import { IconSymbol } from '@/components/IconSymbol';


export default function TabLayout() {


  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FFD93D',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: '#11111367',
          height: 80,
          position: 'absolute',
          bottom: 20,
          left: 20,
          backdropFilter: 'blur(10px)',
          borderColor: '#222',
          borderBottomWidth: 1,
          borderTopWidth: 1,
          borderLeftWidth: 1,
          borderRightWidth: 1,
          right: 20,
          borderRadius: 30,
          marginLeft: '10%',
          marginRight: '10%',
          paddingBottom: 10,
          paddingTop: 10,
        },
        headerTransparent: true,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
       <Tabs.Screen
        name="create"
        options={{
          title: 'create',
          headerShown: false,
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="add.fill" color={color} />,
          
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'profile',
          headerShown: false,
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.2.circle.fill" color={color} />,
        }}
      />
     
    </Tabs>
  );
}