import { BrowserRouter, Route, Routes } from 'react-router';
import { Home, NotFound, RootErrorBoundary } from './page';
import { HocExample } from './page/hoc';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
          errorElement={<RootErrorBoundary />}
        />

        <Route path="/hoc" element={<HocExample />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
