function Sidebar({ user }) {
  try {
    const menuItems = [
      { icon: 'layout-dashboard', label: 'Dashboard', active: true },
      { icon: 'users', label: 'Usuarios', active: false },
      { icon: 'chart-bar', label: 'Reportes', active: false },
      { icon: 'folder', label: 'Proyectos', active: false },
      { icon: 'calendar', label: 'Calendario', active: false },
      { icon: 'settings', label: 'Configuración', active: false }
    ];

    return (
      <div className="bg-white border-r border-[var(--border-color)] h-screen fixed left-0 top-0 pt-20 pb-6" data-name="sidebar" data-file="components/Sidebar.js" style={{ width: 'var(--sidebar-width)' }}>
        <div className="px-6 mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg bg-[var(--primary-color)] flex items-center justify-center">
              <div className="icon-zap text-2xl text-white"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-[var(--text-primary)]">Sistema</h1>
              <p className="text-xs text-[var(--text-secondary)]">Versión 2.0</p>
            </div>
          </div>
        </div>

        <nav className="px-3">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg mb-1 cursor-pointer transition-all ${
                item.active 
                  ? 'bg-[var(--secondary-color)] text-[var(--primary-color)]' 
                  : 'text-[var(--text-secondary)] hover:bg-gray-50'
              }`}
            >
              <div className={`icon-${item.icon} text-xl`}></div>
              <span className="font-medium">{item.label}</span>
            </div>
          ))}
        </nav>

        <div className="absolute bottom-6 left-0 right-0 px-6">
          <div className="bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg p-4 text-white">
            <div className="icon-crown text-2xl mb-2"></div>
            <p className="font-semibold mb-1">Actualizar Plan</p>
            <p className="text-xs text-pink-100">Desbloquea más funciones</p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Sidebar component error:', error);
    return null;
  }
}