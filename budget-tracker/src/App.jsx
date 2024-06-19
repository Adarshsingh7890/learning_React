import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Layouts
import Main, { mainLoader } from "./layouts/Main";

// Actions
import { logoutAction } from "./actions/logout";

// Routes
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ExpensesPage, { expensesLoader, expenseAction } from "./pages/ExpensesPage";
import BudgetPage, { budgetLoader } from "./pages/BudgetPage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        errorElement: <Error />,
        action: dashboardAction
      },
      {
        path:"budget/:id",
        element: <BudgetPage/>,
        errorElement: <Error />,
        loader: budgetLoader
      },
      {
        path:"expenses",
        element: <ExpensesPage />,
        loader:expensesLoader,
        action: expenseAction,
        errorElement: <Error />,
      },
      {
        path: "logout",
        action: logoutAction
      }
    ]
  },
]);

function App() {
  return <div className="App">
    <ToastContainer />
    <RouterProvider router={router} />
  </div>;
}

export default App;