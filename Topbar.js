function Topbar({ user }) {
  try {
    const handleLogout = () => {
      localStorage.removeItem('currentUser');
      window.location.href = 'index.html';
    };

    const getRoleBadgeColor = (role) => {
      if (role === 'superuser') return 'bg-purple-100 text-purple-700';
      if (role === 'administrator') return 'bg-blue-100 text-blue-700';
      return 'bg-gray-100 text-gray-700';
    };

    const getRoleLabel = (role) => {
      if (role === 'superuser') return 'Super Usuario';
      if (role === 'administrator') return 'Administrador';
      return 'Usuario';
    };

    return (
      <div className="bg-white border-b border-[var(--border-color)] h-16 flex items-center justify-between px-6 fixed top-0 left-0 right-0 z-50" data-name="topbar" data-file="components/Topbar.js" style={{ marginLeft: 'var(--sidebar-width)' }}>
        <div className="flex items-center space-x-4">
          <div className="icon-menu text-xl text-[var(--text-secondary)] cursor-pointer hover:text-[var(--primary-color)]"></div>
          <h2 className="text-lg font-semibold text-[var(--text-primary)]">Sistema de Gestión Empresarial</h2>
        </div>

        <div className="flex items-center space-x-4">
          <div className="icon-bell text-xl text-[var(--text-secondary)] cursor-pointer hover:text-[var(--primary-color)]"></div>
          <div className="icon-mail text-xl text-[var(--text-secondary)] cursor-pointer hover:text-[var(--primary-color)]"></div>
          
          <div className="flex items-center space-x-3 pl-4 border-l border-[var(--border-color)]">
            <div>
              <p className="text-sm font-medium text-[var(--text-primary)] text-right">{user.fullName}</p>
              <span className={`text-xs px-2 py-0.5 rounded-full ${getRoleBadgeColor(user.role)}`}>
                {getRoleLabel(user.role)}
              </span>
            </div>
            <div className="w-10 h-10 rounded-full bg-[var(--primary-color)] flex items-center justify-center text-white font-semibold">
              {user.fullName.charAt(0)}
            </div>
            <button onClick={handleLogout} className="icon-log-out text-xl text-[var(--text-secondary)] hover:text-red-600" title="Cerrar sesión"></button>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Topbar component error:', error);
    return null;
  }
}