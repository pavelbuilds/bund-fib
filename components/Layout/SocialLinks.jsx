import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { siteConfig } from '../../lib/siteConfig';

const links = [
  { href: siteConfig.social.tiktok, icon: faTiktok, label: 'TikTok', external: true },
  { href: siteConfig.social.instagram, icon: faInstagram, label: 'Instagram', external: true },
  { href: siteConfig.social.linkedin, icon: faLinkedin, label: 'LinkedIn', external: true },
  { href: `mailto:${siteConfig.contact.email}`, icon: faEnvelope, label: 'E-Mail' },
];

/** Row of round social media / e-mail icon buttons used in NavBar and Footer. */
const SocialLinks = () => (
  <>
    {links.map(({ href, icon, label, external }) => (
      <a
        key={label}
        href={href}
        aria-label={label}
        {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
        className='flex h-10 w-10 items-center justify-center rounded-full bg-darkYellow text-black'
      >
        <FontAwesomeIcon className='w-5 text-black' icon={icon} />
      </a>
    ))}
  </>
);

export default SocialLinks;
