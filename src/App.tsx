import { BrowserRouter, Route, Routes } from 'react-router';
import { Home, NotFound, RootErrorBoundary } from './page';

// pages
import { FunctionChildren } from './page/function-children';
import { HocExample } from './page/hoc';
import { RenderProps } from './page/render-props';

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
        <Route path="/render-props" element={<RenderProps />} />
        <Route path="/function-children" element={<FunctionChildren />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
