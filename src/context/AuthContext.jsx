import React, { createContext, useContext, useState, useEffect } from 'react';
import { getCurrentUser, setCurrentUser, clearCurrentUser, getUsers, saveUsers } from '../utils/storage';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        setUser(getCurrentUser());
    }, []);

    const login = (email, password) => {
        const users = getUsers();
        const found = users.find(u => u.email === email && u.password === password);
        if (found) {
            setCurrentUser(found);
            setUser(found);
            return true;
        }
        return false;
    };

    const register = (firstName, lastName, email, password) => {
        const users = getUsers();
        if (users.find(u => u.email === email)) return false;
        const newUser = { firstName, lastName, email, password, createdAt: new Date().toISOString() };
        users.push(newUser);
        saveUsers(users);
        setCurrentUser(newUser);
        setUser(newUser);
        return true;
    };

    const logout = () => {
        clearCurrentUser();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);