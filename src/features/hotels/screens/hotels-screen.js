import React, { useContext } from "react";
import { Searchbar, ActivityIndicator, MD2Colors } from "react-native-paper";
import { StatusBar, StyleSheet, SafeAreaView, Text, View, FlatList, TouchableOpacity } from "react-native";
import { HotelsInfoCard } from "../components/hotels-infoCard-component";
import { styled } from "styled-components/native";
import { HotelsContext } from "../../../services/hotels/hotels.context";
import { Search } from "../components/search.component";


const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`} ;
`;

const ListContainer = styled.View`
    flex: 1;
    padding: ${(props) => props.theme.space[3]};
    backgroundColor: ${(props) => props.theme.colors.ui.quaternary};
`;

const Loading = styled(ActivityIndicator)`
    margin-left: -25px;
`;

const LoadingContainer = styled.View`
    position: abosolute;
    top: 50%;
    left: 0%
`;

export const HotelsScreen = ({ navigation }) => {
    const { isLoading, error, hotels } = useContext(HotelsContext);

    return (
        <SafeArea>
            {isLoading &&
                <LoadingContainer>
                    <Loading size={50} animating={true} color={MD2Colors.red800} />
                </LoadingContainer>
            }
            <Search />
            <FlatList
                data={hotels}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("HotelsDeatils", { hotel: item })}>
                            <><HotelsInfoCard hotel={item} /></>
                        </TouchableOpacity>
                    );
                }}
                keyExtractor={(item) => item.name}
                contentContainerStyle={{ padding: 16 }}
            />
        </SafeArea>
    )
}