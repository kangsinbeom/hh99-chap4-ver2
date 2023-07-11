import { Fa500Px, FaAccessibleIcon, FaAccusoft,FaAcquisitionsIncorporated } from "react-icons/fa";


const Pencil = () => {
  return <Fa500Px />;
};

const Bomb = () => {
  return <FaAccessibleIcon />;
};
const Heart = () => {
  return <FaAccusoft />;
};

const LeftArrow = () => {
  return <FaAcquisitionsIncorporated />
}

const Icon = {Pencil, Bomb, Heart, LeftArrow} ;

export default Icon;

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPencil, faBomb, faHeart, faArrowLeft} from '@fortawesome/free-solid-svg-icons';

// const Icon = {
//   Pencil: () => <FontAwesomeIcon icon={faPencil} />,
//   Bomb: () => <FontAwesomeIcon icon={faBomb} />,
//   Heart: () => <FontAwesomeIcon icon={faHeart} />,
//   LeftArrow: () => <FontAwesomeIcon icon={faArrowLeft} />
// };

// export default Icon;