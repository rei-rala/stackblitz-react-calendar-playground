import { useState } from 'react';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';

const values = {
  calendar: {
    day: 'day',
    month: 'month',
    year: 'year',
  },
  locale: {
    spanish: 'es',
    english: 'en',
    default: 'es',
  },
};

const CustomCalendar = () => {
  const [value, setValue] = useState(new Date());

  function changeHandler(val, e) {
    setValue(val);
    console.log({
      e,
      val,
    });
  }

  return (
    <div className="calendar__container">
      <Calendar
        value={value}
        onChange={changeHandler}
        locale={navigator.language ?? values.locale.default}
        minDetail={'year'}
        maxDetail={'month'}
        showNeighboringMonth={true}
        showWeekNumbers={true}
        showNavigation={true}
        selectRange={true}
        onClickWeekNumber={(weekNumber, firstDateWeek, e) => {
          let startDate = new Date(firstDateWeek);
          startDate.setDate(startDate.getDate() + 1);
          let endDate = new Date(firstDateWeek);
          endDate.setDate(endDate.getDate() + 8);
          endDate.setMilliseconds(endDate.getMilliseconds() - 1);

          console.log({
            startDate,
            endDate,
          });

          setValue([startDate.toISOString(), endDate.toISOString()]);
        }}
      />

      <div>{JSON.stringify(value)}</div>
      <p>{navigator.language}</p>
    </div>
  );
};

export default CustomCalendar;
