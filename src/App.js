import "./App.css";
import Nav from "./component/nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landingpage";
import NFT from "./pages/nftShow";
import NotFound from "./pages/pageNotFound";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <BrowserRouter>
        <div>
          <Nav />

          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/view_nft" element={<NFT />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
      />
    </>
  );
}

export default App;
