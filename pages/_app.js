import '../styles/globals.scss';
import { Header } from '../components/common';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Header />
            <div style={{height: '4.5rem'}}/>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
