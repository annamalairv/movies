import * as React from "react";
import { Route, Routes } from "react-router";

import { Home } from "./components/home";
import { MovieDetail } from "./components/movieDetail";

function App() {
  return <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/:movieId" element={<MovieDetail />} />
    </Routes>
}


const NoPage = () => <div>sdcnsd</div>

export default App;
