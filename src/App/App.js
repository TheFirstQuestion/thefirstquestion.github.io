import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Index from "../Index/Index";
import Timeline from "../Timeline/Timeline";
import Contact from "../Contact/Contact";

export default function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<Index />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}
