import React, { useContext, useState } from 'react';

const CurrentValueContext = React.createContext({
    rentalFleet: 'Audi A1',
    setRentalFleet: () => {},
});

export const useCurrentValueContext = () => useContext(CurrentValueContext);

export const CurrentValueProvider = ({ children }) => {
    const [rentalFleet, setRentalFleet] = useState('Audi A1');

    return (
        <CurrentValueContext.Provider
            value={{
                rentalFleet,
                setRentalFleet,
            }}
        >
            {children}
        </CurrentValueContext.Provider>
    );
};
