import React from "react";
import { Text } from "react-native";
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { HotelsScreen } from "../../features/hotels/screens/hotels-screen";
import { HotelsDetailScreen } from "../../features/hotels/screens/hotels-details.screen";

const HotelsStack = createStackNavigator();

export const HotelsNavigator = () => {
    return (
        <HotelsStack.Navigator headerMode="none" screenOptions={{
            ...TransitionPresets.ModalPresentationIOS,
        }}>
            <HotelsStack.Screen
                name="Hotels"
                component={HotelsScreen}
            />
            <HotelsStack.Screen
                name="HotelsDeatils"
                component={HotelsDetailScreen}
            />
        </HotelsStack.Navigator>
    )
}