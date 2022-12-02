import { Link, useLocation } from 'react-router-dom';
import './menu-item.styles.scss'

const MenuItem = ({ title, imgUrl, size}) => {
  const pathname = useLocation().pathname;
  console.log(pathname);
  console.log(title);
  const link = pathname+title;
  return(
  <div className={`${size} menu-item`}//string interpolation adding one more class to the element
  >
  <div className='background-image' style={{
    backgroundImage: `url(${imgUrl})`,
  }} />
    <div className="content">
    <Link to  = {`${link}`}>
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
</Link>
    </div>
  </div>
)};

export default MenuItem;