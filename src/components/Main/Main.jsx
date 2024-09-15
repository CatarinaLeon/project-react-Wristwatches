import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
const Home = lazy(() => import("../../pages/Home/Home"));
const Watches = lazy(() => import("../../pages/Watches/Watches"));
const AboutUs = lazy(() => import("../../pages/AboutUs/AboutUs"));
const Store = lazy(() => import("../../pages/Store/Store"));

export default function Main() {
  return (
    <main>
      <Suspense fallback={"Loader..."}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="watches" element={<Watches />}></Route>
          <Route path="about" element={<AboutUs />}></Route>
          <Route path="store" element={<Store />}></Route>
        </Routes>
      </Suspense>
    </main>
  );
}
