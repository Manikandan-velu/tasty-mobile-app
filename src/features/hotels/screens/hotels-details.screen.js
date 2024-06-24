import React, { useState } from "react";
import { HotelsInfoCard } from "../components/hotels-infoCard-component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { List } from 'react-native-paper';

export const HotelsDetailScreen = ({ route }) => {
    const { hotel } = route.params;
    const [breakfastExpanded, setBreakfastExpanded] = useState(false);
    const [lunchExpanded, setLunchExpanded] = useState(false);
    const [dinnerExpanded, setDinnerExpanded] = useState(false);
    const [drinksExpanded, setDrinksExpanded] = useState(false);

    return (
        <SafeArea>
            <HotelsInfoCard hotel={hotel} />
            <List.Accordion
                title="Breakfast"
                left={props => <List.Icon {...props} icon="bread-slice" />}
                expanded={breakfastExpanded}
                onPress={() => setBreakfastExpanded(!breakfastExpanded)}>
            </List.Accordion>
            <List.Accordion
                title="Lunch"
                left={props => <List.Icon {...props} icon="bread-slice" />}
                expanded={breakfastExpanded}
                onPress={() => setBreakfastExpanded(!breakfastExpanded)}>
            </List.Accordion>
            <List.Accordion
                title="Breakfast"
                left={props => <List.Icon {...props} icon="bread-slice" />}
                expanded={breakfastExpanded}
                onPress={() => setBreakfastExpanded(!breakfastExpanded)}>
            </List.Accordion>
        </SafeArea>
    )
}