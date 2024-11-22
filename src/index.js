import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './routes';
import 'antd/dist/antd.css';
import './styles/index.scss'
import './styles/general.scss'
import './styles/animate.scss'

// swiper css 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import { RecoilRoot } from 'recoil';
// import { QueryClient, QueryClientProvider } from "react-query";

// const queryClient = new QueryClient();
// const history = createHashHistory()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/*  <div className="w-100 d-flex flex-column justify-content-center align-items-center text-center p-5">
      <p className="fs-2">This domain and host certificate is expired  : (</p>
      <p className="fs-5">to view and proceed with site activity renew hosting and domain subscription if you're the owner or contact the owner to review this issue to avoid losing this hosting and domain name.</p>
    </div> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
