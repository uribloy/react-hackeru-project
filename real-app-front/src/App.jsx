import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import CreateCard from "./components/CardManage/cardCreate";
import DeleteCard from "./components/CardManage/cardDelete";
import MyCards from "./components/CardManage/myCards";
import About from "./components/about";
import ProtectedRoute from "./components/common/protectedRoute";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Footer from "./components/pageFooter";
import SignIn from "./components/userInterface/signIn";
import SignUp from "./components/userInterface/signUp";
import SignOut from "./components/userInterface/signout";
import EditCard from "./components/CardManage/cardEdit";
import ViewCard from "./components/CardManage/cardView";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100 text-primary">
      <ToastContainer />
      <header className="sticky-sm-top">
        <Navbar />
      </header>
      <main className="flex-fill container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />

          <Route
            path="my-cards"
            element={
              <ProtectedRoute onlyBiz="true">
                <MyCards />
              </ProtectedRoute>
            }
          />
          <Route
            path="create-card"
            element={
              <ProtectedRoute onlyBiz>
                <CreateCard />
              </ProtectedRoute>
            }
          />
          <Route
            path="my-cards/edit/:id"
            element={
              <ProtectedRoute onlyBiz>
                <EditCard />
              </ProtectedRoute>
            }
          />
          <Route
            path="my-cards/:id"
            element={
              <ProtectedRoute onlyBiz>
                <ViewCard />
              </ProtectedRoute>
            }
          />
          <Route
            path="my-cards/delete/:id"
            element={
              <ProtectedRoute onlyBiz>
                <DeleteCard />
              </ProtectedRoute>
            }
          />

          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-out" element={<SignOut />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
