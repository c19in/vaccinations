import {API_DOMAIN} from '../constants';

import {memo} from 'react';
// import {Twitter, GitHub, Instagram, Database, Mail, Send} from 'react-feather';
import {GitHub, Database} from 'react-feather';
// import {useTranslation} from 'react-i18next';

function Footer() {
  // const {t} = useTranslation();

  return (
    <footer>
      <div className="links">
        <a
          href="https://github.com/c19in/"
          className="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </a>
        <a
          className="api"
          href={API_DOMAIN}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Database />
        </a>
      </div>
    </footer>
  );
}

export default memo(Footer);
