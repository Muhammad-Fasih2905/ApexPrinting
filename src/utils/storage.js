export const getUsers = () => {
  try {
    return JSON.parse(sessionStorage.getItem('apex_users') || '[]');
  } catch {
    return [];
  }
};

export const saveUsers = (users) => {
  sessionStorage.setItem('apex_users', JSON.stringify(users));
};

export const getCurrentUser = () => {
  try {
    return JSON.parse(sessionStorage.getItem('apex_current_user') || 'null');
  } catch {
    return null;
  }
};

export const setCurrentUser = (user) => {
  sessionStorage.setItem('apex_current_user', JSON.stringify(user));
};

export const clearCurrentUser = () => {
  sessionStorage.removeItem('apex_current_user');
};