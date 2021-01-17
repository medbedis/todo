import React from 'react';
import ReactDOM from 'react-dom';
import Content from './layouts/Content';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import SideBar from './layouts/SideBar';

function Index() {
    return (
        <div>
            <Header />
            <SideBar />
            <Content />
            <Footer />
        </div>
    );
}

export default Index;

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
