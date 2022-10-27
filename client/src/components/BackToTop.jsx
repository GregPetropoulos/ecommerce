import { useState, useEffect } from 'react';
import { BiUpArrow } from 'react-icons/bi';

const BackToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    console.log('scroll mounted useEffect');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
    return window.removeEventListener(
      'scroll',
      console.log('removed scroll event listener on un mount in useEffect ')
    );
  }, [showTopBtn]);

  console.log('scroll component render');
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <>
      {showTopBtn && (
        <div className='block right-3 bottom-12 fixed border-2 rounded-full border-neutral-content p-1'>
          <button onClick={goToTop} className='btn btn-circle'>
            <BiUpArrow size={30} />
          </button>
        </div>
      )}
    </>
  );
};
export default BackToTop;
