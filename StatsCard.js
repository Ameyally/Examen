function StatsCard({ title, value, icon, color, trend }) {
  try {
    const colorMap = {
      blue: { bg: 'bg-blue-50', icon: 'text-blue-600' },
      green: { bg: 'bg-green-50', icon: 'text-green-600' },
      purple: { bg: 'bg-purple-50', icon: 'text-purple-600' },
      orange: { bg: 'bg-orange-50', icon: 'text-orange-600' },
      pink: { bg: 'bg-pink-50', icon: 'text-pink-600' },
      rose: { bg: 'bg-rose-50', icon: 'text-rose-600' }
    };

    const colors = colorMap[color] || colorMap.blue;
    const trendUp = trend.startsWith('+');

    return (
      <div className="bg-white rounded-xl shadow-sm border border-[var(--border-color)] p-6 hover:shadow-md transition-shadow" data-name="stats-card" data-file="components/StatsCard.js">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 rounded-lg ${colors.bg} flex items-center justify-center`}>
            <div className={`icon-${icon} text-xl ${colors.icon}`}></div>
          </div>
          <span className={`text-sm font-semibold ${trendUp ? 'text-green-600' : 'text-red-600'}`}>
            {trend}
          </span>
        </div>
        <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-1">{value}</h3>
        <p className="text-sm text-[var(--text-secondary)]">{title}</p>
      </div>
    );
  } catch (error) {
    console.error('StatsCard component error:', error);
    return null;
  }
}