import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentToken, selectCurrentUser, logOut } from './authSlice';
import { Link } from 'react-router-dom';

const Welcome = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);
  const welcome = user ? `Welcome ${user.firstName}!` : 'Welcome!';
  const tokenAbbr = `${token.slice(0, 9)}...`;

  const content = (
    <section>
      <h1>{welcome}</h1>
      <p>Token: {tokenAbbr}</p>
      <p>
        <Link to='/cart'>Go to Cart</Link>
      </p>
      <button className='btn' onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </section>
  );
  return content;
};

export default Welcome;
