import React, { lazy, Suspense } from "react";
import Nav from "./components/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import Spinner from "./components/Spinner/Spinner";
const About = lazy(() => import("./pages/About/About"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const Testimonials = lazy(() => import("./pages/Testimonials/Testimonials"));
const Work = lazy(() => import("./pages/Work/Work"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Admin = lazy(() => import("./pages/Admin/Admin"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Error = lazy(() => import("./pages/Error/Error"));

const App = () => {
  return (
    <>
      <Nav />

      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
};

export default App;
