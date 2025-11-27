function Alert({ type, message, onClose }) {
  try {
    const bgColor = type === 'error' ? 'bg-red-50 border-red-200' : 'bg-green-50 border-green-200';
    const textColor = type === 'error' ? 'text-red-800' : 'text-green-800';
    const iconName = type === 'error' ? 'circle-x' : 'circle-check';
    const iconColor = type === 'error' ? 'text-red-600' : 'text-green-600';

    return (
      <div className={`${bgColor} border rounded-lg p-4 mb-6 flex items-start`} data-name="alert" data-file="components/Alert.js">
        <div className={`icon-${iconName} text-xl ${iconColor} mr-3 mt-0.5`}></div>
        <div className="flex-1">
          <p className={`${textColor} font-medium`}>{message}</p>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          <div className="icon-x text-lg"></div>
        </button>
      </div>
    );
  } catch (error) {
    console.error('Alert component error:', error);
    return null;
  }
}