import React from "react";
import { SvgXml } from "react-native-svg";
import star from '../../../../assets/icons/star';
import open from "../../../../assets/icons/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { HotelCard, HotelCardCover, Address, Info, Rating, Section, SectionEnd, Icon } from "./hotels-infoCard-styles";

export const HotelsInfoCard = ({ hotels = {} }) => {
    const {
        name = "FoodsToGo",
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"],
        address = "152, Rayban Street, IND",
        isOpenNow = true,
        rating = 4,
        isClosedNow = true
    } = hotels;

    const ratingArr = Array.from(new Array(Math.floor(rating)));

    return (
        <HotelCard elevation={3}>
            <HotelCardCover source={{ uri: photos[0] }} />
            <Info>
                <Text variant="label">{name}</Text>
                <Section>
                    <Rating>
                        {
                            ratingArr.map(() => (
                                <SvgXml xml={star} width={20} height={20} />
                            ))
                        }
                    </Rating>
                    <SectionEnd>
                        {isClosedNow && (
                            <Text variant="error">CLOSED TEMPRORARLY</Text>
                        )}
                        <Spacer position="left" size="large">
                            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
                        </Spacer>
                        <Spacer position="left" size="large">
                            <Icon source={{ uri: icon }} />
                        </Spacer>
                    </SectionEnd>
                </Section>

                <Address>{address}</Address>
            </Info>
        </HotelCard>
    )
} 