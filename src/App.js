import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home';
import SimpleSwiper from './components/SimpleSwiper';
import Menu from './components/Menu';
function App() {
    return (
        <>
            <Header />
            <Menu />
            <SimpleSwiper />
            <Home />
        </>
    );
}

export default App;
