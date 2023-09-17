import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home';
import SimpleSwiper from './components/SimpleSwiper';
function App() {
    return (
        <>
            <Header />
            <SimpleSwiper />
            <Home />
        </>
    );
}

export default App;
