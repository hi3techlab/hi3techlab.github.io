/**
 * Created by Ishu Singh
 * Edited by Sophie Azula, 3/9/2023
 * Edited by Katelyn Wyandt, 03/20/2023
 * File to route internal page links
 */

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/navbar/NavBar";
import { Err, Home, Team, Research, Publications } from './pages';
//Personsonal Pages
import { DezhiPage, YangPage, FritzPage, QinyanPage,
ZehaoPage, HannahPage, KatelynPage, HarveyPage, NupurPage,
SophiePage, GabePage, BrycePage, SaiPage, VidheePage,
AlainaPage, CalliePage, JonathanPage, KimPage, MiaPage,
SabornyPage, EdwardPage, CassidyPage, PrathamjeetPage, 
KarenPage, BrittanyPage, YuqiPage, KausikPage } 
from './components/team/PersonalPages';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/team" element={<Team />}></Route>
            {/*Individual member pages start */}
              <Route path = "/team/Dezhi" element={<DezhiPage/>}></Route>
              <Route path = "/team/Yang" element={<YangPage/>}></Route>
              <Route path = "/team/Fritz" element={<FritzPage/>}></Route>
              <Route path = "/team/Qinyan" element={<QinyanPage/>}></Route>
              <Route path = "/team/Zehao" element={<ZehaoPage/>}></Route>
              <Route path = "/team/Hannah" element={<HannahPage/>}></Route>
              <Route path = "/team/Katelyn" element={<KatelynPage/>}></Route>
              <Route path = "/team/Harvey" element={<HarveyPage/>}></Route>
              <Route path = "/team/Nupur" element={<NupurPage/>}></Route>
              <Route path = "/team/Sophie" element={<SophiePage/>}></Route>
              <Route path = "/team/Gabe" element={<GabePage/>}></Route>
              <Route path = "/team/Bryce" element={<BrycePage/>}></Route>
              <Route path = "/team/Sai" element={<SaiPage/>}></Route>
              <Route path = "/team/Vidhee" element={<VidheePage/>}></Route>
              <Route path = "/team/Alaina" element={<AlainaPage/>}></Route>
              <Route path = "/team/Callie" element={<CalliePage/>}></Route>
              <Route path = "/team/Jonathan" element={<JonathanPage/>}></Route>
              <Route path = "/team/Kim" element={<KimPage/>}></Route>
              <Route path = "/team/Mia" element={<MiaPage/>}></Route>
              <Route path = "/team/Saborny" element={<SabornyPage/>}></Route>
              <Route path = "/team/Edward" element={<EdwardPage/>}></Route>
              <Route path = "/team/Cassidy" element={<CassidyPage/>}></Route>
              <Route path = "/team/Prathamjeet" element={<PrathamjeetPage/>}></Route>
              <Route path = "/team/Karen" element={<KarenPage/>}></Route>
              <Route path = "/team/Brittany" element={<BrittanyPage/>}></Route>
              <Route path = "/team/Yuqi" element={<YuqiPage/>}></Route>
              <Route path = "/team/Kausik" element={<KausikPage/>}></Route>
            {/* Research */}
            <Route path="/research" element={<Research />}></Route>
            {/* Publications */}
            <Route path="/publications" element={<Publications />}></Route>
            <Route path="*" element={<Err />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
