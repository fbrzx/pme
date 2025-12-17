import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import DesignPage from './pages/design';
import ActionsPage from './pages/design/Actions';
import DataDisplayPage from './pages/design/DataDisplay';
import DataInputPage from './pages/design/DataInput';
import LayoutPage from './pages/design/Layout';
import NavigationPage from './pages/design/Navigation';
import FeedbackPage from './pages/design/Feedback';
import ThemePage from './pages/design/Theme';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/design" element={<DesignPage />} />
                <Route path="/design/theme" element={<ThemePage />} />
                <Route path="/design/actions" element={<ActionsPage />} />
                <Route path="/design/data-display" element={<DataDisplayPage />} />
                <Route path="/design/data-input" element={<DataInputPage />} />
                <Route path="/design/layout" element={<LayoutPage />} />
                <Route path="/design/navigation" element={<NavigationPage />} />
                <Route path="/design/feedback" element={<FeedbackPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
