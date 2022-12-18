import React, { useState } from 'react';

const Accordion = () => {
  const [isPrice, setIsPrice] = useState(false);
  const [isCategory, setIsCategory] = useState(false);
  const [isFormat, setIsFormat] = useState(false);
  const [isSize, setIsSize] = useState(false);
  const [isColor, setIsColor] = useState(false);

  return (
    <div className='flex flex-row justify-center w-full'>
    <div className='flex flex-col w-full sm:w-1/2  border-bg-primary-content border-2  p-4 my-4'>
      <h4 className='  text-center text-neutral uppercase'>
        <strong>Shopping Options</strong>
      </h4>
      <div className='divider'></div>
      {/* PRICES */}
      <div className='flex flex-row justify-between'>
        <p className='text-neutral text-[13px] uppercase'>
          <strong>Price</strong>
        </p>
        <button
          className='btn btn-xs btn-primary'
          onClick={() => setIsPrice(!isPrice)}
          value={isPrice}
          name='isPrice'
          id={1}>
          {isPrice ? (
            <span className='text-2xl text-secondary '>-</span>
          ) : (
            <span className='ease-in rotate-180 text-base'>&#94;</span>
          )}
        </button>
      </div>
      {isPrice && <div>HELLOPRICESS</div>}
      {/* CATEGORY */}
      <div className='flex flex-row justify-between'>
        <p className='text-neutral text-[13px] uppercase'>
          <strong>Category</strong>
        </p>
        <button
          className='btn btn-xs btn-primary'
          onClick={() => setIsCategory(!isCategory)}
          value={isCategory}
          name='isCategory'
          id={2}>
          {isCategory ? (
            <span className='text-2xl text-secondary '>-</span>
          ) : (
            <span className='ease-in rotate-180 text-base'>&#94;</span>
          )}
        </button>
      </div>
      {isCategory && <div>HELLOCATEGORY</div>}
      {/* SIZE */}
      <div className='flex flex-row justify-between'>
        <p className='text-neutral text-[13px] uppercase'>
          <strong>Size</strong>
        </p>
        <button
          className='btn btn-xs btn-primary'
          onClick={() => setIsSize(!isSize)}
          value={isSize}
          name='isSize'
          id={3}>
          {isSize ? (
            <span className='text-2xl text-secondary '>-</span>
          ) : (
            <span className='ease-in rotate-180 text-base'>&#94;</span>
          )}
        </button>
      </div>
      {isSize && <div>HELLOSIZE</div>}
      {/* Color */}
      <div className='flex flex-row justify-between'>
        <p className='text-neutral text-[13px] uppercase'>
          <strong>Color</strong>
        </p>
        <button
          className='btn btn-xs btn-primary'
          onClick={() => setIsColor(!isColor)}
          value={isColor}
          name='isColor'
          id={4}>
          {isColor ? (
            <span className='text-2xl text-secondary '>-</span>
          ) : (
            <span className='ease-in rotate-180 text-base'>&#94;</span>
          )}
        </button>
      </div>
      {isColor && <div>HELLOColor</div>}
      {/* FORMAT */}
      <div className='flex flex-row justify-between'>
        <p className='text-neutral text-[13px] uppercase'>
          <strong>Format</strong>
        </p>
        <button
          className='btn btn-xs btn-primary'
          onClick={() => setIsFormat(!isFormat)}
          value={isFormat}
          name='isFormat'
          id={5}>
          {isFormat ? (
            <span className='text-2xl text-secondary '>-</span>
          ) : (
            <span className='ease-in rotate-180 text-base'>&#94;</span>
          )}
        </button>
      </div>
      {isFormat && <div>HELLOFORMAT</div>}
    </div>
    </div>
  );
};

export default Accordion;
