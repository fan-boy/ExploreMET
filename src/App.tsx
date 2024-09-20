import React from 'react';
import './App.css';
import DefaultPage from './components/DefaultPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './pages/homepage';
import ExploreAll from './pages/ExploreAll';
import ExploreAges from './pages/ExploreAges';
import ExploreDepartments from './pages/ExploreDepartments';
import Age from './pages/ExploreAges/ExploreAge';

//Defining the routes for the app

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
  },
  {
    path: "/explore",
    element: <ExploreAll/>,
  },
  {
    path: "/ages",
    element: <ExploreAges/>,
  },
  {
    path: "/departments",
    element: <ExploreDepartments/>,
  },
  {
    path: "/ages/:age",
    element: <Age/>,
  },

  {
    path: "*", //catch all
    element: <ExploreDepartments/>,
  }

 
]);

function App() {
  return (
    <DefaultPage>
       <RouterProvider router={router} />
    </DefaultPage>
  );
}

export default App;
