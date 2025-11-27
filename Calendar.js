function Calendar() {
  try {
    const [currentDate, setCurrentDate] = React.useState(new Date());

    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    
    const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const dayNames = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-10"></div>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = day === new Date().getDate() && 
                      currentDate.getMonth() === new Date().getMonth() &&
                      currentDate.getFullYear() === new Date().getFullYear();
      days.push(
        <div
          key={day}
          className={`h-10 flex items-center justify-center rounded-lg cursor-pointer transition-all ${
            isToday 
              ? 'bg-[var(--primary-color)] text-white font-bold' 
              : 'hover:bg-gray-100 text-[var(--text-primary)]'
          }`}
        >
          {day}
        </div>
      );
    }

    return (
      <div className="bg-white rounded-xl shadow-sm border border-[var(--border-color)] p-6" data-name="calendar" data-file="components/Calendar.js">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-[var(--text-primary)]">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h3>
          <div className="flex space-x-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100">
              <div className="icon-chevron-left text-lg text-[var(--text-secondary)]"></div>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100">
              <div className="icon-chevron-right text-lg text-[var(--text-secondary)]"></div>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-2 mb-2">
          {dayNames.map(day => (
            <div key={day} className="text-center text-xs font-semibold text-[var(--text-secondary)]">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {days}
        </div>

        <div className="mt-6 pt-6 border-t border-[var(--border-color)]">
          <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3">Eventos Próximos</h4>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-pink-500 mt-1.5"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-[var(--text-primary)]">Reunión de equipo</p>
                <p className="text-xs text-[var(--text-secondary)]">Hoy, 10:00 AM</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-rose-500 mt-1.5"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-[var(--text-primary)]">Presentación cliente</p>
                <p className="text-xs text-[var(--text-secondary)]">Mañana, 3:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Calendar component error:', error);
    return null;
  }
}
