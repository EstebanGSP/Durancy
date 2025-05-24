import React from "react";

const appointments = [
  { day: 8, name: "Eleanor Pena", time: "12:00" },
  { day: 8, name: "Robert Fox", time: "17:00" },
  { day: 13, name: "Savannah Nguyen", time: "17:30" },
  { day: 25, name: "Ronald Richards", time: "18:00" },
];

const AdminCalendar = () => {
  const daysInMonth = 31;
  const firstDay = 1; // Lundi (0 = Dimanche, 1 = Lundi)

  const generateCalendarCells = () => {
    const cells = [];
    const emptyStart = firstDay;
    const totalCells = emptyStart + daysInMonth;

    for (let i = 0; i < totalCells; i++) {
      if (i < emptyStart) {
        cells.push(<div key={`empty-${i}`} className="h-28 border border-transparent" />);
      } else {
        const day = i - emptyStart + 1;
        const dayAppointments = appointments.filter((a) => a.day === day);
        cells.push(
          <div key={day} className="h-28 border border-gray-100 p-2 text-sm relative">
            <div className="text-gray-500 font-medium">{String(day).padStart(2, "0")}</div>
            <div className="space-y-1 mt-1">
              {dayAppointments.map((appt, index) => (
                <div
                  key={index}
                  className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full w-fit"
                >
                  {appt.name} <span className="ml-1 font-semibold">{appt.time}</span>
                </div>
              ))}
            </div>
          </div>
        );
      }
    }

    return cells;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Juillet</h2>
        <div className="flex gap-2">
          <button className="text-gray-500 hover:text-purple-600">◀</button>
          <button className="text-gray-500 hover:text-purple-600">▶</button>
        </div>
      </div>

      {/* Entêtes jours */}
      <div className="grid grid-cols-7 text-sm font-medium text-gray-400">
        <div>LUNDI</div>
        <div>MARDI</div>
        <div>MERCREDI</div>
        <div>JEUDI</div>
        <div>VENDREDI</div>
        <div>SAMEDI</div>
        <div>DIMANCHE</div>
      </div>

      {/* Grille jours */}
      <div className="grid grid-cols-7 gap-px bg-gray-100 rounded overflow-hidden">
        {generateCalendarCells()}
      </div>
    </div>
  );
};

export default AdminCalendar;
