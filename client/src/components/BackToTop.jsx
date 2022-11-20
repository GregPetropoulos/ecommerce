import { useState, useEffect } from 'react';
import { BiUpArrow } from 'react-icons/bi';

const BackToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
      // If bottom of page reached remove back top to top button
      window.onscroll = () => {
        if (
          window.innerHeight + window.pageYOffset >=
          document.body.offsetHeight
        ) {
          setShowTopBtn(false);
        }
      };
    });

    return window.removeEventListener('scroll', console.log('cleanup'));
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {showTopBtn && (
        <div className='bg-primary-content block right-3 bottom-12 fixed border-2 rounded-full border-neutral-content p-1'>
          <button onClick={goToTop} className='btn btn-sm btn-circle '>
            <BiUpArrow size={20} className='' />
          </button>
        </div>
      )}
    </>
  );
};
export default BackToTop;
