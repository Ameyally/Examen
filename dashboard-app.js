class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Algo salió mal</h1>
            <button onClick={() => window.location.reload()} className="bg-blue-600 text-white px-6 py-2 rounded-lg">
              Recargar
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function DashboardApp() {
  try {
    const [currentUser, setCurrentUser] = React.useState(null);

    React.useEffect(() => {
      const user = localStorage.getItem('currentUser');
      if (!user) {
        window.location.href = 'index.html';
        return;
      }
      setCurrentUser(JSON.parse(user));
    }, []);

    if (!currentUser) {
      return <div className="min-h-screen flex items-center justify-center">Cargando...</div>;
    }

    return (
      <div className="min-h-screen bg-[var(--bg-light)]" data-name="dashboard-app" data-file="dashboard-app.js">
        <Topbar user={currentUser} />
        <div className="flex">
          <Sidebar user={currentUser} />
          <main className="flex-1 p-8" style={{ marginLeft: 'var(--sidebar-width)' }}>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">Dashboard</h1>
              <p className="text-[var(--text-secondary)]">Bienvenido, {currentUser.fullName}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatsCard title="Usuarios Activos" value="1,234" icon="users" color="blue" trend="+12%" />
              <StatsCard title="Ventas Totales" value="$45,678" icon="trending-up" color="green" trend="+8%" />
              <StatsCard title="Proyectos" value="56" icon="briefcase" color="purple" trend="+15%" />
              <StatsCard title="Tareas Pendientes" value="23" icon="clipboard-list" color="orange" trend="-5%" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Chart type="line" title="Ventas Mensuales" />
                <Chart type="bar" title="Rendimiento por Categoría" />
              </div>
              <div>
                <Calendar />
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  } catch (error) {
    console.error('DashboardApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <DashboardApp />
  </ErrorBoundary>
);