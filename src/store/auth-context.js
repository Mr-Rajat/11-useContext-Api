import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: (email, password) => { }
});
// better practice to pass all props or values inside main context Api for suggestion of available props where we use it.

// if we want to pass multiple props then its better to create different Provider for better management.

export const AuthContextProvider = (props) => {
    // console.log(typeof(storedUserLoggedInInformation));
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

        if (storedUserLoggedInInformation === '1') {
            setIsLoggedIn(true);
        }


    }, [])

    const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
    };

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);


    }

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogin: loginHandler,
                onLogout: logoutHandler
            }}>
            {props.children}
        </AuthContext.Provider>)
}
export default AuthContext;