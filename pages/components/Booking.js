import React from 'react';
import { AiFillCalendar, AiOutlineClose } from 'react-icons/ai';
import { useInputValueContext } from '../context/inputValue';
import { useTogglersContext } from '../context/togglers';
import {bookingInputs} from "@/pages/data/input";

const Booking = () => {

    const { bookingSelect, setBookingSelect, bookingDate, setBookingDate } =
        useInputValueContext();
    const { bookingFields, setBookingFields, setBookingModal } =
        useTogglersContext();

    function getSelectValue(id) {
        switch (id) {
            case 'car-type':
                return bookingSelect['car-type'];
            case 'pickup-location':
                return bookingSelect['pickup-location'];
            case 'dropof-location':
                return bookingSelect['dropof-location'];
            default:
                break;
        }
    }

    return (
        <section id="booking">
            <div className="mx-8 my-16 p-6 lg:p-12 lg:mx-28 bg-white bg-book-bg rounded shadow-white-box space-y-8">
                <div>
                    <h1 className="text-2xl font-bold">Book a car</h1>
                </div>
                {bookingFields.red && (
                    <div className="flex items-center justify-between bg-custom-pink py-2 px-4 rounded text-custom-maroon font-medium">
                        <p>All fields required!</p>
                        <button
                            onClick={() =>
                                setBookingFields({ ...bookingFields, red: false })
                            }
                        >
                            <AiOutlineClose />
                        </button>
                    </div>
                )}
                {bookingFields.green && (
                    <div className="flex items-center justify-between bg-light-green py-2 px-4 rounded text-dark-green font-medium">
                        <p>Successfully booked!</p>
                        <button
                            onClick={() =>
                                setBookingFields({ ...bookingFields, green: false })
                            }
                        >
                            <AiOutlineClose />
                        </button>
                    </div>
                )}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-end">
                    {bookingInputs.select.map((data) => (
                        <div key={data.id} className="flex flex-col gap-4">
                            <label htmlFor={data.htmlId} className="flex items-center gap-2">
                <span className="text-custom-blue text-xl">
                  <data.label.icon />
                </span>
                                <span className="font-semibold">{data.label.text}</span>
                                <span className="text-custom-blue font-bold">*</span>
                            </label>
                            <select
                                id={data.htmlId}
                                className="p-2 border border-lightest-grey text-custom-grey rounded text-sm bg-transparent"
                                onChange={(e) =>
                                    setBookingSelect({
                                        ...bookingSelect,
                                        [data.htmlId]: e.target.value,
                                    })
                                }
                                value={getSelectValue(data.htmlId)}
                            >
                                {data.options.map((optionData) => (
                                    <option key={optionData.id} value={optionData.option} className="m-8">
                                        {optionData.option}
                                    </option>
                                ))}
                            </select>
                        </div>
                    ))}
                    {bookingInputs.input.map((data) => (
                        <div key={data.id} className="flex flex-col gap-4">
                            <label htmlFor={data.htmlId} className="flex items-center gap-2">
                <span className="text-custom-blue text-xl">
                  <AiFillCalendar />
                </span>
                                <span className="font-semibold">{data.label}</span>
                                <span className="text-custom-blue font-bold">*</span>
                            </label>
                            <input
                                type="date"
                                id={data.htmlId}
                                className="p-2 border border-lightest-grey text-custom-grey rounded text-sm w-full bg-transparent"
                                onChange={(e) =>
                                    setBookingDate({
                                        ...bookingDate,
                                        [data.htmlId]: e.target.value,
                                    })
                                }
                                value={
                                    data.htmlId === 'pickup-date'
                                        ? bookingDate['pickup-date']
                                        : bookingDate['dropof-date']
                                }
                            />
                        </div>
                    ))}
                    <div>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                            onClick={() => {
                                setBookingFields({
                                    ...bookingFields,
                                    red:
                                        bookingDate['pickup-date'] !== '' &&
                                        bookingDate['dropof-date'] !== '',
                                });
                                if (
                                    bookingDate['pickup-date'] !== '' &&
                                    bookingDate['dropof-date'] !== ''
                                ) {
                                    setBookingModal(true);
                                }
                            }}
                        >
                            Book now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Booking;
