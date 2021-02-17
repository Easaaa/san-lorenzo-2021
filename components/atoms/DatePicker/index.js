import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function DateRowPicker({
  arrival,
  departure,
  errors,
  register,
  submitted,
}) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const popperCustomStyle = {
    offset: {
      enabled: true,
      offset: '5px, 10px',
    },
    preventOverflow: {
      enabled: true,
      escapeWithReference: false,
      boundariesElement: 'viewport',
    },
  };

  const CustomInputArrival = ({ value, onClick }) => (
    <input
      onClick={onClick}
      ref={register({ required: true })}
      value={value}
      placeHolder='Select an arrival date'
      type='text'
      id='arrival'
      name='arrival'
      className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
    />
  );

  const CustomInputDeparture = ({ value, onClick }) => (
    <input
      onClick={onClick}
      ref={register({ required: true })}
      value={value}
      placeHolder='Select a departure date'
      type='text'
      id='departure'
      name='departure'
      className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
    />
  );

  return (
    <>
      <div className='p-2 w-1/2'>
        <div className='relative grid'>
          <label
            for='arrival'
            className='leading-7 capitalize text-sm text-gray-600'>
            {arrival}
          </label>
          <DatePicker
            customInput={<CustomInputArrival />}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            popperPlacement='top-end'
            popperModifiers={popperCustomStyle}
            className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
          />
          {errors.arrival && (
            <span className='text-red-600'>This field is required</span>
          )}
        </div>
      </div>
      <div className='p-2 w-1/2'>
        <div className='relative grid'>
          <label
            for='departure'
            className='leading-7 capitalize text-sm text-gray-600'>
            {departure}
          </label>
          <DatePicker
            customInput={<CustomInputDeparture />}
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            popperPlacement='top-end'
            popperModifiers={popperCustomStyle}
            className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
          />
          {errors.departure && (
            <span className='text-red-600'>This field is required</span>
          )}
        </div>
      </div>
    </>
  );
}