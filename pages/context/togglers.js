import React, { useContext, useState } from 'react';

const TogglersContext = React.createContext({
    mobileNavbar: false,
    setMobileNavbar: () => {},
    bookingFields: {
        red: false,
        green: false,
    },
    setBookingFields: () => {},
    bookingModal: false,
    setBookingModal: () => {},
    goUp: false,
    setGoUp: () => {},
    showAnswer: { q1: false, q2: false, q3: false },
    setShowAnswer: () => {},
});

export const useTogglersContext = () => useContext(TogglersContext);

export const TogglersProvider = ({ children }) => {
    const [mobileNavbar, setMobileNavbar] = useState(false);
    const [bookingFields, setBookingFields] = useState({
        red: false,
        green: false,
    });
    const [bookingModal, setBookingModal] = useState(false);
    const [goUp, setGoUp] = useState(false);
    const [showAnswer, setShowAnswer] = useState({
        q1: false,
        q2: false,
        q3: false,
    });

    return (
        <TogglersContext.Provider
            value={{
                mobileNavbar,
                setMobileNavbar,
                bookingFields,
                setBookingFields,
                bookingModal,
                setBookingModal,
                goUp,
                setGoUp,
                showAnswer,
                setShowAnswer,
            }}
        >
            {children}
        </TogglersContext.Provider>
    );
};
