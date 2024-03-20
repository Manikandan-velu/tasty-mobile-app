import Reacr from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, SafeAreaView, Text, View, FlatList } from "react-native";
import { HotelsInfoCard } from "../components/hotels-infoCard-component";
import { styled } from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`} ;
`;

const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
`;

const ListContainer = styled.View`
    flex: 1;
    padding: ${(props) => props.theme.space[3]};
    backgroundColor: ${(props) => props.theme.colors.ui.quaternary};
`;

export const HotelsScreen = () => {
    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar />
            </SearchContainer>
            <FlatList
                data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }]}
                renderItem={() => <HotelsInfoCard />}
                keyExtractor={(item) => item.name}
                contentContainerStyle={{ padding: 16 }}
            />
        </SafeArea>
    )
}