import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomeSection from "./components/HomeSection.jsx";
import OurWorksPage from "./components/OurWorksPage.jsx";
import AiMlPage from "./Pages/Services/ai-ml/AiMlPage.jsx";
import AppDevPage from "./Pages/Services/application-development/AppDevPage.jsx";
import ArVrPage from "./Pages/Services/ar-vr/ArVrPage.jsx";
import UiUxPage from "./Pages/Services/ui-ux/UiUxPage.jsx";
import WebDevPage from "./Pages/Services/web-dev/WebDevPage.jsx";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/react';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/web-dev" element={<WebDevPage />} />
        <Route path="/ui-ux" element={<UiUxPage />} />
        <Route path="/ar-vr" element={<ArVrPage />} />
        <Route path="/app-dev" element={<AppDevPage />} />
        <Route path="/ai-ml" element={<AiMlPage />} />
        <Route path="/our-works" element={<OurWorksPage />} />

      </Routes>
      <Analytics />
      <SpeedInsights />
    </Router>
  );
};

export default App;
