import { useState, useEffect, useRef } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import useOutsideClicker from "../../hooks/useOutsideClicker";
import api from '../../api/inspectionAPI'

const CarInspection = ({ carId }) => {
  const [date, setDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const calendar = useRef(null);
  useOutsideClicker(calendar, setIsOpen);

  const getDate = async () => {
    await api.getInspectionDate(carId).then(res => {
      setDate(res.inspection.end_date)
    })
  }

  const updateDate = async () => {
    await api.updateInspectionDate(carId, date)
  }

  const deleteDate = async () => {
    try {
      await api.deleteInspectionDate(carId)
      setDate('none')
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    try {
      getDate()
    } catch (err) {
      console.log(err)
    }
  }, [])

  useEffect(() => {
    try {
      updateDate()
    } catch (err) {
      console.log(err)
    }
  }, [date])

  return (
    <div className="w-72 text-center mt-10">
      <p className="font-bold text-xl">Car Inspection Date: </p>
      <p className="bg-white border text-center rounded-lg p-5 mt-2">
        {date ? date.toLocaleDateString() : 'none'}
      </p>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-indigo-600 px-8 text-white rounded-xl text-lg mt-2"
      >
        Set
      </button>
      <button onClick={deleteDate} className="bg-red-600 ml-5 px-8 text-white rounded-xl text-lg mt-2">
        Clear
      </button>
      {isOpen && (
        <div ref={calendar} className="relative">
          <Calendar
          className="mt-5 absolute"
          onChange={setDate}
          value={date}
        />
        </div>
        
      )}
    </div>
  );
};

export default CarInspection;
