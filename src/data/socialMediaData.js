import { FaInstagram, FaLinkedin, FaGithub, FaSpotify } from 'react-icons/fa';

const socialMediaData = [
  {
    name: 'Instagram',
    url: 'https://instagram.com',
    icon: <FaInstagram size={30} />,
    color: '#c13584',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: <FaLinkedin size={30} />,
    color: '#0072b1',
  },
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: <FaGithub size={30} />,
    color: '#333',
  },
  {
    name: 'Spotify',
    url: 'https://spotify.com',
    icon: <FaSpotify size={30} />,
    color: '#1db954',
  },
];

export default socialMediaData;
