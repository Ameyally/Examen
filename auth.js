async function authenticateUser(username, password) {
  try {
    const users = await trickleListObjects('user', 100, true);
    
    const user = users.items.find(
      item => item.objectData.username === username && item.objectData.password === password
    );

    if (user) {
      return {
        success: true,
        user: {
          id: user.objectId,
          username: user.objectData.username,
          fullName: user.objectData.fullName,
          email: user.objectData.email,
          role: user.objectData.role
        }
      };
    } else {
      return {
        success: false,
        message: 'Usuario o contraseña incorrectos'
      };
    }
  } catch (error) {
    console.error('Authentication error:', error);
    return {
      success: false,
      message: 'Error al verificar credenciales'
    };
  }
}