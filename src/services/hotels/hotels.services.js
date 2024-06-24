import camelize from "camelize";
import { mocks, mockImages } from "./mock";

export const hotelsRequest = (location) => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if (!mock) {
            reject("not found");
        }
        resolve(mock);
    });
};

export const hotelsTransform = ({ results = [] }) => {
    const mappedResults = results.map((hotel) => {
        hotel.photos = hotel.photos.map((p) => {
            return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
        });

        return {
            ...hotel,
            address: hotel.vicinity,
            isOpenNow: hotel.opening_hours && hotel.opening_hours.open_now,
            isClosedTemporarily: hotel.business_status === "CLOSED_TEMPORARILY",
        };
    });

    return camelize(mappedResults);
};