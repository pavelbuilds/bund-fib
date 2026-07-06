import NavBar from '@/components/Layout/NavBar';
import Footer from '@/components/Layout/Footer';
import AosInit from '@/components/AosInit';

/**
 * Layout for all regular pages: fixed navigation bar on top, footer at the
 * bottom, and the AOS scroll-animation library initialised once.
 *
 * Standalone pages without navigation (e.g. /datenschutz, /material,
 * /partner) live outside the (site) route group, directly under app/.
 */
export default function SiteLayout({ children }) {
  return (
    <>
      <AosInit />
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
