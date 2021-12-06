import './App.scss';
// import Blog from './components/Blog';
// eslint-disable-next-line
import Navbar from './components/Navbar';
// To have Navbar, add
// <Navbar {...{pages, showLanguageSwitcher, setShowLanguageSwitcher}} />
// before <Banner...

import {retry} from './utils/commonFunctions';

import {lazy, useState, Suspense, useEffect} from 'react';
import {Route, Redirect, Switch, useLocation} from 'react-router-dom';

const Home = lazy(() => retry(() => import('./components/Home')));
// const Volunteers = lazy(() => retry(() => import('./components/Volunteers')));
// const About = lazy(() => retry(() => import('./components/About')));
const State = lazy(() => retry(() => import('./components/State')));
const LanguageSwitcher = lazy(() =>
  retry(() => import('./components/LanguageSwitcher'))
);
const Banner = lazy(() => retry(() => import('./components/Banner')));

const App = () => {
  const [showLanguageSwitcher, setShowLanguageSwitcher] = useState(false);
  const location = useLocation();

  const pages = [
    {
      pageLink: process.env.PUBLIC_URL,
      view: Home,
      displayName: 'Home',
      showInNavbar: false,
    },
    // {
    //   pageLink: '/blog',
    //   view: Blog,
    //   displayName: 'Blog',
    //   showInNavbar: true,
    // },
    // {
    //   pageLink: '/volunteers',
    //   view: Volunteers,
    //   displayName: 'Volunteers',
    //   showInNavbar: true,
    // },
    {
      pageLink: 'https://c19in.github.io/about',
      displayName: 'About',
      showInNavbar: false,
    },
    {
      pageLink: process.env.PUBLIC_URL + '/state/:stateCode',
      view: State,
      displayName: 'State',
      showInNavbar: false,
    },
  ];

  useEffect(() => {
    if (showLanguageSwitcher) {
      // For Chrome, Firefox, IE and Opera
      document.documentElement.scrollTo({top: 0, behavior: 'smooth'});
      // For Safari
      document.body.scrollTo({top: 0, behavior: 'smooth'});
    }
  }, [showLanguageSwitcher]);

  return (
    <div className="App">
      <Suspense fallback={<div />}>
        <LanguageSwitcher
          {...{showLanguageSwitcher, setShowLanguageSwitcher}}
        />
      </Suspense>
      <Banner />
      <Navbar {...{pages, showLanguageSwitcher, setShowLanguageSwitcher}} />
      <Suspense fallback={<div />}>
        <Switch location={location}>
          {pages.map((page, index) => {
            return (
              <Route
                exact
                path={page.pageLink}
                render={({match}) => <page.view />}
                key={index}
              />
            );
          })}
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
