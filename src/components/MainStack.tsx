import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { ScreenOne } from "./ScreenOne";
import { ScreenTwo } from "./ScreenTwo";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="One"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#65adf1",
                },
                headerTintColor: "white",
            }}
        >
            <StackNavigator.Screen
                name="One"
                component={ScreenOne}
            />
            <StackNavigator.Screen
                name="Two"
                component={ScreenTwo}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);