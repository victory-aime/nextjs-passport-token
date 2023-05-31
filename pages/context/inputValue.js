import React, { useContext, useState } from 'react';

const InputValueContext = React.createContext({
  bookingSelect: {
    "car-type": "Audi A1 S-Line",
    "pickup-location": "Bandung",
    "dropof-location": "Bandung",
  },
  setBookingSelect: () => {},
  bookingDate: {
    "pickup-date": "",
    "dropof-date": "",
  },
  setBookingDate: () => {},
  clearBookingInputs: () => {},
});

export const useInputValueContext = () => useContext(InputValueContext);

export const InputValueProvider = ({ children }) => {
  const [bookingSelect, setBookingSelect] = useState({
    "car-type": "Audi A1 S-Line",
    "pickup-location": "Bandung",
    "dropof-location": "Bandung",
  });
  const [bookingDate, setBookingDate] = useState({
    "pickup-date": "",
    "dropof-date": "",
  });

  function clearBookingInputs() {
    setBookingSelect({
      "car-type": "Audi A1 S-Line",
      "pickup-location": "Bandung",
      "dropof-location": "Bandung",
    });
    setBookingDate({
      "pickup-date": "",
      "dropof-date": "",
    });
  }

  return (
      <InputValueContext.Provider
          value={{
            bookingSelect,
            setBookingSelect,
            bookingDate,
            setBookingDate,
            clearBookingInputs,
          }}
      >
        {children}
      </InputValueContext.Provider>
  );
};
