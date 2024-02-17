import './App.css'
import { DateTime } from 'luxon'
import { Calendar, luxonLocalizer } from 'react-big-calendar'

function App() {

  const currentDate = DateTime.local();

  const localizer = luxonLocalizer(DateTime);

  const calendar1 = [
    {
      id: 1,
      title: 'Noahs Breakfast',
      start: currentDate.startOf('day').plus({ hours: 8 }).toJSDate(),
      end: currentDate.startOf('day').plus({ hours: 9 }).toJSDate(),
    },
  ];

  const calendar2 = [
    {
      id: 2,
      title: 'Ali Lunch',
      start: currentDate.startOf('day').plus({ hours: 12 }).toJSDate(),
      end: currentDate.startOf('day').plus({ hours: 13 }).toJSDate(),
    },
  ];

  const eventsMerged = [...calendar1, ...calendar2];

  return (
    <>
      <h1>
        Hello React
      </h1>

      <Calendar
        localizer={localizer}
        events={eventsMerged}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </>
  )
}

export default App
