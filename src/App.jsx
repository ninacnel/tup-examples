import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './components/routes/NotFound';
import MainLayout from './components/layout/MainLayout';
import NewProduct from './components/newProduct/NewProduct';
import Private from './components/routes/Private';
import Login from './components/login/Login';
import ProductInfo from './productInfo/ProductInfo';
import Parent from './components/parent/Parent';
import { useState } from 'react';
import './App.css'

function App() {
    const [isSignedIn, setIsSignedIn] = useState(false);

    const handleSignIn = () => {
        setIsSignedIn(true);
    };

    const handleSignOut = () => {
        setIsSignedIn(false);
    };

    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <MainLayout>
                    <Parent />
                </MainLayout>
            ),
        },
        {
            path: "/product-form",
            element: (
                <Private isSignedIn={isSignedIn}>
                    <MainLayout>
                        <NewProduct />
                    </MainLayout>
                </Private>
            ),
        },
        {
            path: "/login",
            element: (
                <MainLayout>
                    <Login
                        isSignedIn={isSignedIn}
                        onLogIn={handleSignIn}
                        onLogOut={handleSignOut}
                    />
                </MainLayout>
            ),
        },
        {
            path: "/product/:id",
            element: (
                <MainLayout>
                    <ProductInfo />
                </MainLayout>
            ),
        },
        {
            path: "*",
            element: <NotFound />,
        },
    ]);
    return <RouterProvider router={router} />;
}

export default App;
