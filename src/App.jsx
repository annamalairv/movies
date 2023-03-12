import * as React from "react";
import { Route, Routes } from "react-router";

import { Home } from "./components/home";
import { MovieDetail } from "./components/movieDetail";
import { Watched } from "./components/watched";
import GlobalProvider from "./components/context/GlobalState";

function App() {
  return(
    <GlobalProvider>
   <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/:movieId" element={<MovieDetail />} />
      <Route exact path="/watched" element={<Watched />} />
    </Routes>
    </GlobalProvider>
  )
}




export default App;
