import {ThemeProvider} from "@material-ui/core/styles";
import DefaultTheme from "./themes/DefaultTheme";
import {Provider} from "react-redux";
import store from "./state/store";
import MainPage from "./components/MainPage";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MovieDetailPage from "./components/MovieDetailPage";


function App() {
    const theme = DefaultTheme;
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Router>
                    <Routes>
                        <Route path='/' element={<MainPage/>}/>
                        <Route path='/movie/:imdbId?' element={<MovieDetailPage/>}/>
                    </Routes>
                </Router>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
