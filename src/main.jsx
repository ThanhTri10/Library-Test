
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './app';
import TabContext from './pages/admin/hooks/TabContext';
import { BrowserRouter as Router } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(

    <Router>
        <TabContext>
            <App />
        </TabContext>
    </Router>
)
