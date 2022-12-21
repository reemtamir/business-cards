import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import CardSignUp from './components/CardSignUp';
import CardSignIn from './components/CardSignIn';
import CardLogOut from './components/CardLogOut';
import { ToastContainer } from 'react-toastify';
import CardMyCards from './components/CardMyCards';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './common/Footer';

import PrivateRout from './components/PrivateRout';
import CardCreateCard from './components/CardCreateCard';
import CardDeleteCard from './components/CardDeleteCard';
import CardEditCard from './components/CardEditCard';
import Clock from './components/Clock';
import { useState } from 'react';
import Flag from './components/Flag';
import './styles/navbar.scss';
import './styles/home.scss';
import './styles/main.scss';
import './styles/sign-up.scss';
import './styles/my-cards.scss';
import './styles/card.scss';

import './styles/input.scss';
import { useAuth } from './hooks/useAuth';

function App() {
  const [isDark, setIsDark] = useState(false);
  const { user } = useAuth();

  return (
    <div
      style={{
        backgroundColor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black',
      }}
      className="container "
    >
      <ToastContainer />
      <div className="text-center mt-3">
        <i
          onClick={() => setIsDark((isDark) => !isDark)}
          className="bi bi-lightbulb-fill "
        ></i>
      </div>
      <Clock />
      <header>
        <NavBar />
      </header>
      <main className="main">
        {(!user || !user?.biz) && <Flag />}
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route
            path="my-cards"
            element={
              <PrivateRout>
                <CardMyCards />
              </PrivateRout>
            }
          ></Route>

          <Route
            path="create-card"
            element={
              <PrivateRout>
                <CardCreateCard />
              </PrivateRout>
            }
          ></Route>

          <Route
            path={`delete-card/:id`}
            element={
              <PrivateRout>
                <CardDeleteCard />
              </PrivateRout>
            }
          ></Route>
          <Route
            path={`edit-card/:id`}
            element={
              <PrivateRout>
                <CardEditCard />
              </PrivateRout>
            }
          ></Route>
          <Route path="sign-in" element={<CardSignIn />}></Route>
          <Route path="sign-up" element={<CardSignUp />}></Route>
          <Route path="log-out" element={<CardLogOut />}></Route>
        </Routes>
      </main>
      <div className="space"></div>

      <Footer isDark={isDark} />
    </div>
  );
}

export default App;
