import React from 'react';
import ReactDOM from 'react-dom';
import Header from '@components/header';
import Footer from '@components/footer';
import '@assets/normalize.scss';
import './registerSW';


class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <section style={{ textAlign: 'center' }}>Hello react!</section>
                <Footer />
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
