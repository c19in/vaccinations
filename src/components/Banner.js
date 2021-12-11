// import {AlertIcon} from '@primer/octicons-react';
// import {useTranslation} from 'react-i18next';

function Banner(props) {
  // const {t} = useTranslation();

  return (
    <div className="Banner fadeInDown" style={{animationDelay: '0.4s'}}>
      <div className="wrapper">
        Status of vaccinations using data from &nbsp;
        <a href="https://data.incovid19.org">data.incovid19.org</a>. &nbsp;
        Details&nbsp; <a href="https://c19in.github.io">here</a>.
      </div>
    </div>
  );
}

export default Banner;
