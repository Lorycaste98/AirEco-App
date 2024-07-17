import { FaInstagram, FaLinkedin, FaGithub, FaSpotify } from 'react-icons/fa';

const socialMediaData = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/lorycastelletti/',
    icon: <FaInstagram size={30} />,
    color: '#c13584',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/lorenzo-castelletti-532b9b191/',
    icon: <FaLinkedin size={30} />,
    color: '#0072b1',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Lorycaste98',
    icon: <FaGithub size={30} />,
    color: '#333',
  },
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/user/21recw65jk3fvspadgve6ciui',
    icon: <FaSpotify size={30} />,
    color: '#1db954',
  },
];

export default socialMediaData;
