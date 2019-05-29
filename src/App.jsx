import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import RouterMap from './router';
import Header from '@components/header';
import Footer from '@components/footer';
import '@assets/normalize.scss';
import './registerSW';


class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <React.Fragment>
                    <Header />
                    <RouterMap />
                    <Footer />
                </React.Fragment>
            </HashRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

module.hot && module.hot.accept(); // hot reload
