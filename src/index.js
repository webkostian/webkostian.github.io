import { createRoot } from "react-dom/client";
import App from './components/app/App';
import './style/style.scss';

const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App tab="home" />);
