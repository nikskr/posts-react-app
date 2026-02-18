import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { privateRoutes, publicRoutes } from '../router/Routes';
import { AuthContext } from '../context/context';
import Loader from './UI/loader/Loader';

function AppRouter() {
    const {isAuth, setIsAuth, isLoading} = useContext(AuthContext);

    if (isLoading) {
        return <Loader />
    }
    return ( 
        <>
        {
            isAuth
                ? 
                    <Routes>
                            {privateRoutes.map(route => 
                                <Route key={route.path} exact={route.exact} path={route.path} element={route.element} />
                            )}
                            <Route path='*' element={<Navigate to='/posts' replace />}/>
                    </Routes>
                : 
                    <Routes>
                        {publicRoutes.map(route => 
                            <Route key={route.path} exact={route.exact} path={route.path} element={route.element} />
                        )}
                        <Route path='*' element={<Navigate to='/login' replace />}/>
                    </Routes>
        }
        </>
    );
}

export default AppRouter;