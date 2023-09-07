import ReactDOM from 'react-dom/client';
import './index.css';
import Page from './components/Page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFound } from 'library-sb';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Page />} errorElement={<NotFound />} />
    </Routes>
  </BrowserRouter>,
);
