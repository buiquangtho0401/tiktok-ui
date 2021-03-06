import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from './components/Layout';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        //nếu mà layoout bằng null thì fragment conf nguowcj lai thi lay defau
                        // const Layout = route.layout === null ? Fragment : DefaultLayout;
                        const Page = route.component;
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            // Fragment la k co layout
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        console.log(route.layout);
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
