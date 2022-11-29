import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      Header
      <Link to='/video/1'>test1</Link>
      <Link to='/channel/1'>videos</Link>
      <Link to='/search/search'>videos</Link>
    </div>
  );
};

export default Header;
