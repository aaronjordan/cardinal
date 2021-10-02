import React from 'react';
import { useHistory } from 'react-router-dom';
import UserWidget from '../Authentication/View/UserWidget';
import Button from '../../components/Button/Button';

const Header = () => {
  const history = useHistory();

  return (
    <header>
      <div className="content-area">
        <span className="left-group">
          <Button 
            variant="link" 
            className="logo"
            onClick={() => history.push('/')}
          >
            Cardinal
          </Button>
        </span>
        <span className="right-group">
          <UserWidget />
        </span>
      </div>
    </header>
  )
}

export default Header;
