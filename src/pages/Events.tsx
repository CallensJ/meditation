import { useState } from "react";
import styles from "./Events.module.css";

export default function Events() {
  return (
    <section className={styles.eventSection}>
      <h2>evenements</h2>
    
      <WeeklyCalendar />
    </section>
  );
}



type Session = {
  sessionName: string;
  time: string;
  duration: number;
  instructor: string;
};

type Schedule = {
  [key: string]: Session[];
};

const daysOfWeek: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const baseSchedule: Session[] = [
  { sessionName: 'Hatha Yoga', time: '8:00 am - 9:30 am', duration: 90, instructor: 'Wendy Daniel' },
  { sessionName: 'Ashtanga Yoga', time: '9:30 am - 10:50 am', duration: 80, instructor: 'Andy Gottlieb' },
  { sessionName: 'Meditation', time: '12:30 pm - 1:30 pm', duration: 60, instructor: 'Simon Hayes Jr.' },
  { sessionName: 'Kundalini Yoga', time: '3:30 pm - 5:00 pm', duration: 90, instructor: 'Audrey Berge' },
  { sessionName: 'Vinyasa Flow', time: '5:00 pm - 6:15 pm', duration: 75, instructor: 'Sheryl Hayes' },
  { sessionName: 'Restorative Yoga', time: '6:30 pm - 7:30 pm', duration: 60, instructor: 'Lindsay Corwin' },
];

const randomizeSessions = (sessions: Session[]): Session[] => {
  return sessions.map(session => ({
    ...session,
    duration: session.duration + Math.floor(Math.random() * 10) - 5, // Randomize duration slightly
  }));
};

const schedule: Schedule = daysOfWeek.reduce((acc, day) => {
  acc[day] = randomizeSessions(baseSchedule);
  return acc;
}, {} as Schedule);

function WeeklyCalendar()  {
  const [selectedDay, setSelectedDay] = useState<string>('Monday');
  return (
    <div className={styles.calendarContainer}>
      <div className={styles.daysMenu}>
        {daysOfWeek.map((day) => (
          <button
            key={day}
            className={`${styles.dayButton} ${selectedDay === day ? styles.active : ''}`}
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </button>
        ))}
      </div>
      <div className={styles.calendar}>
        <div className={styles.dayColumn}>
          <h2>{selectedDay}</h2>
          {schedule[selectedDay].map((session, index) => (
            <div key={index} className={styles.session}>
              <h3>{session.sessionName}</h3>
              <p>Time: {session.time}</p>
              <p>Duration: {session.duration} minutes</p>
              <p className={styles.instructor}>
                <span className={styles.instructorIcon}></span> {session.instructor}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )}
  


