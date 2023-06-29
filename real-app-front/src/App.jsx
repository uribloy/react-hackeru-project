import { Route, Routes } from "react-router-dom";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import Navbar from "./components/navbar";
import Footer from "./components/pageFooter";
import MyCards from "./components/CardManage/myCards";
import CreateCard from "./components/CardManage/cardCreate";
import EditCard from "./components/CardManage/cardEdit";
import ViewCard from "./components/CardManage/cardView";
import DeleteCard from "./components/CardManage/cardDelete";
import SignIn from "./components/userInterface/signIn";
import SignUp from "./components/userInterface/signUp";
import SignOut from "./components/userInterface/signout";
import ProtectedRoute from "./components/common/protectedRoute";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100 text-primary">
      <ToastContainer
        position="top-center"
        autoClose={1500}
        transition={Zoom}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
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
