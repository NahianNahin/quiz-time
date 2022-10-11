
import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Main from './layouts/Main';
import Topics from './components/Topics/Topics';
import Statistic from './components/Statistic/Statistic';
import TopicQuiz from './components/TopicQuiz/TopicQuiz';
import Blogs from './components/Blogs/Blogs';
import Error from './components/Error/Error';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader:() => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topics></Topics>
        },
        {
          path: "/quiz/:quizId",
          loader:({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
          element: <TopicQuiz></TopicQuiz>
        },
        {
          path: "/statistics",
          loader:() => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistic></Statistic>
        },
        {
          path: "/blogs",
          loader:() => fetch('blogs.json'),
          element: <Blogs></Blogs>
        }
        
      ]
    },
    {
      path: "*",
      element: <Error></Error>
    }
  ]);


  return (
    <div>
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
