import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import LoadigFallBack from "./components/loading/LoadingFallback";

const Home = lazy(() => import("./views/Home/Home"));

const App = () => {
  return (
    <Suspense fallback={<LoadigFallBack />}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default App;
