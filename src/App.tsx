import React from 'react';
import './App.css';
import DefaultPage from './components/DefaultPage';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from './pages/homepage';
import ExploreAll from './pages/ExploreAll';
import ExploreAges from './pages/ExploreAges';
import ExploreDepartments from './pages/ExploreDepartments';
import Age from './pages/ExploreAges/ExploreAge';

function App() {
  return (
    <DefaultPage>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/explore" element={<ExploreAll />} />
          <Route path="/ages" element={<ExploreAges />} />
          <Route path="/departments" element={<ExploreDepartments />} />
          <Route path="/ages/:age" element={<Age />} />
          <Route path="*" element={<ExploreDepartments />} />
        </Routes>
      </HashRouter>
    </DefaultPage>
  );
}

export default App;
