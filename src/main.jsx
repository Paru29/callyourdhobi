import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import Home from './Home.jsx'
import NoPage from './NoPage.jsx'

export default function Main() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="/video" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);