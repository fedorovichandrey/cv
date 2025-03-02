import Panel from './Panel';
import Social from './Social';
import s from './personal-info.module.scss';

const PersonalInfo = () => (
  <>
    <div className={s.line}>
      <h1 className={s.name}>Andrey Fedorovich</h1>
      <div className={s.mobLine}>
        <Social />
        <Panel />
      </div>
    </div>
    <div className={s.posLine}>
      <p className={s.position}>Software Developer</p>
      <p className={s.location}>
        <span className={s.separator}>-</span>
        <span className={s.locationContent}>Kraków, Poland</span>
        <span role="img" aria-label='The flag of Poland'>🇵🇱</span>
      </p>
    </div>
  </>
);

export default PersonalInfo;
