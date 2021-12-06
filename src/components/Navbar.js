import {
  SLIDE_IN,
  SLIDE_OUT,
  SLIDE_IN_MOBILE,
  SLIDE_OUT_MOBILE,
} from '../animations';
import locales from '../i18n/locales.json';

import {useState, useCallback, useRef} from 'react';
// import {Book, HelpCircle, Home, Moon, Sun, Users} from 'react-feather';
import {Home, Moon, Sun} from 'react-feather';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import {useTransition, animated} from 'react-spring';
import {useLockBodyScroll, usePageLeave, useWindowSize} from 'react-use';
import useDarkMode from 'use-dark-mode';

function Navbar({pages, showLanguageSwitcher, setShowLanguageSwitcher}) {
  const {i18n, t} = useTranslation();
  const currentLanguage = Object.keys(locales).includes(i18n?.language)
    ? i18n?.language
    : i18n?.options?.fallbackLng[0];

  const [expand, setExpand] = useState(false);
  const darkMode = useDarkMode(false);

  useLockBodyScroll(expand);
  const windowSize = useWindowSize();

  usePageLeave(() => setExpand(false));

  const navbarTransition = useTransition(true, {
    from: {opacity: 0},
    enter: {opacity: 1},
  });

  // eslint-disable-next-line
  const expandTransition = useTransition(expand, {
    from: windowSize.width < 769 ? SLIDE_IN_MOBILE : SLIDE_IN,
    enter: windowSize.width < 769 ? SLIDE_OUT_MOBILE : SLIDE_OUT,
    leave: windowSize.width < 769 ? SLIDE_IN_MOBILE : SLIDE_IN,
    config: {mass: 1, tension: 210, friction: 26},
  });

  const handleMouseEnter = useCallback(() => {
    if (windowSize.width >= 769) {
      setExpand(true);
    }
  }, [windowSize.width]);

  const handleLanguageSwitcher = useCallback(() => {
    if (expand) setExpand(false);
    setShowLanguageSwitcher(!showLanguageSwitcher);
  }, [expand, showLanguageSwitcher, setExpand, setShowLanguageSwitcher]);

  // FIXME: used incovid19 below because ${process.env.PUBLIC_URL} encodes slash

  return navbarTransition((style, item) => (
    <animated.div className="Navbar" {...{style}}>
      <div className="navbar-left" onClick={handleLanguageSwitcher}>
        {locales[currentLanguage]}
      </div>

      <div
        className="navbar-right"
        onMouseEnter={handleMouseEnter}
        {...(windowSize.width < 769 && {
          onClick: setExpand.bind(this, !expand),
        })}
      >
        {windowSize.width < 769 && (
          <span>{expand ? t('Close') : t('Menu')}</span>
        )}

        {windowSize.width >= 769 && (
          <>
            <Link to="/incovid19">
              <span>
                <Home {...activeNavIcon('/')} />
              </span>
            </Link>
            <span>
              <SunMoon {...{darkMode}} />
            </span>
          </>
        )}
      </div>
    </animated.div>
  ));
}

// eslint-disable-next-line
function Expand({pages, setExpand, darkMode, windowSize}) {
  const expandElement = useRef(null);
  const {t} = useTranslation();

  const handleMouseLeave = useCallback(() => {
    windowSize.width >= 769 && setExpand(false);
  }, [setExpand, windowSize.width]);

  return (
    <div className="expand" ref={expandElement} onMouseLeave={handleMouseLeave}>
      {pages.map((page, i) => {
        if (page.showInNavbar === true) {
          return (
            <Link
              to={page.pageLink}
              key={i}
              {...(windowSize.width < 769 && {
                onClick: setExpand.bind(this, false),
              })}
            >
              <span
                {...navLinkProps(page.pageLink, page.animationDelayForNavbar)}
              >
                {t(page.displayName)}
              </span>
            </Link>
          );
        }
        return null;
      })}
      {windowSize.width < 769 && <SunMoon {...{darkMode}} />}
    </div>
  );
}

export default Navbar;

const navLinkProps = (path, animationDelay) => ({
  className: `${window.location.pathname === path ? 'focused' : ''}`,
});

const activeNavIcon = (path) => ({
  style: {
    stroke: window.location.pathname === path ? '#4c75f2' : '',
  },
});

const SunMoon = ({darkMode}) => {
  return (
    <div className="SunMoon" onClick={darkMode.toggle}>
      <div>{darkMode.value ? <Sun color={'#ffc107'} /> : <Moon />}</div>
    </div>
  );
};
