import React from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
//import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'
import Home from './pages/Home'
import Contacts from './pages/Contacts'

function App() {
    const HomeWrapper = (props) => {
        const params = useParams();
        return <Home {...{ ...props, match: { params } }} />
    }

    return (
        <div className="wrapper clear">
            <Drawer />
            <Header />

            <BrowserRouter>
                <Routes>
                    <Route path="/" init element={<Home />} />
                    <Route path="/:cat" element={<HomeWrapper />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
