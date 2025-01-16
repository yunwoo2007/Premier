import { createBrowserRouter } from "react-router-dom";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import SubjectDrive from "../pages/SubjectDrive";
import Test from "../pages/Test";

const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/sign-up", element: <SignUpPage /> },
  { path: "/subject-drive", element: <SubjectDrive /> },
  { path: "/test", element: <Test /> },
]);



export default router;
