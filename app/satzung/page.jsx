import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Container from '../../components/Container';

export const metadata = {
  title: 'Satzung - Bund-fiB',
  description: 'Satzung der Bund-fiB gUG',
};

export default function Satzung() {
  return (
    <main className='fixed z-50 h-screen min-h-[600px] w-screen overflow-scroll bg-lightYellow pt-24 transition-all duration-700 ease-out sm:pt-36 lg:pt-24'>
      {/* Container */}
      <Container styling='overflow-scroll'></Container>
    </main>
  );
}
