import { styled } from "styled-components/native";
import { Card } from 'react-native-paper';

export const HotelCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
    border-radius: ${(props) => props.theme.space[0]};
    margin-bottom: ${(props) => props.theme.space[3]};
`;

export const HotelCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[2]};
    background-color: ${(props) => props.theme.colors.bg.primary};
    border-radius:${(props) => props.theme.space[0]};
`;

export const Address = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.button};
    color: ${(props) => props.theme.colors.ui.primary};
`;

export const Info = styled.View`
    padding: ${(props) => props.theme.space[2]};
`;

export const Rating = styled.View`
    flex-direction: row;
    padding-top: ${(props) => props.theme.space[1]};
`;

export const Section = styled.View`
    flex-direction: row;
    align-center: center;
`;

export const SectionEnd = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
`;

export const Icon = styled.Image`
    width: 15px;
    height: 15px;
    padding:0;
`;