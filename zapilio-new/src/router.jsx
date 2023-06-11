import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './component/LoginPage';
import QuestionPage from './component/QuestionPage';
import ResultPage from './component/ResultPage';

const Router = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<LoginPage />} />
          <Route path="/questions-page" element={<QuestionPage />} />
          <Route path='/result-page' element={<ResultPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
);

export default Router;