
import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Main from './layouts/Main';
import Topics from './components/Topics/Topics';
import Statistic from './components/Statistic/Statistic';
import Blog from './components/Blog/Blog';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Topics></Topics>
        },
        {
          path: "/statistics",
          element: <Statistic></Statistic>
        },
        {
          path: "/blog",
          element: <Blog></Blog>
        }
        
      ]
    },
  ]);


  return (
    <div >
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
