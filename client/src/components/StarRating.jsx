import React from 'react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import { FaStarHalf } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';

const StarRating = ({ value, text }) => {
  return (
    <div className='rating'>
      {value >= 1 ? <FaStar /> : value >= 0.5 ? <FaStarHalf /> : <FaRegStar />}
      {value >= 2 ? <FaStar /> : value >= 1.5 ? <FaStarHalf /> : <FaRegStar />}
      {value >= 3 ? <FaStar /> : value >= 2.5 ? <FaStarHalf /> : <FaRegStar />}
      {value >= 4 ? <FaStar /> : value >= 3.5 ? <FaStarHalf /> : <FaRegStar />}
      {value >= 5 ? <FaStar /> : value >= 4.5 ? <FaStarHalf /> : <FaRegStar />}
      <span className='ml-2'>{text ? text : ''}</span>
    </div>
  );
};

StarRating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};
export default StarRating;
