import React, { useState, useContext, createContext, useEffect, useMemo, Children } from "react";
import { hotelsRequest, hotelsTransform } from "./hotels.services";
import { LocationContext } from "../location/location.context";

export const HotelsContext = createContext();

export const HotelsContextProvider = ({ children }) => {
    const [hotels, setHotels] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { location } = useContext(LocationContext);

    const retrieveRestaurants = (locationString) => {
        setIsLoading(true);
        setHotels([])
        setTimeout(() => {
            hotelsRequest(locationString)
                .then(hotelsTransform)
                .then((results) => {
                    setIsLoading(false);
                    setHotels(results);
                    console.log('setHotels', results)

                })
                .catch((err) => {
                    setIsLoading(false);
                    setError(err);
                });
        }, 2000);
    };

    useEffect(() => {
        if (location) {
            const locationString = `${location.lat},${location.lng}`;
            retrieveRestaurants(locationString);
        }

    }, [location]);

    return (
        <HotelsContext.Provider
            value={{
                hotels,
                isLoading,
                error,
            }}
        >
            {children}
        </HotelsContext.Provider>
    );
};