import React, { useState } from 'react';
import { Navbar, FormControl, Button, Form, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const Header = ({ onSearchHandler, homeClickHandler }) => {
  const [inputData, setInputData] = useState('');
  return (
    <Navbar bg='dark' variant='dark' sticky='top'>
      <Navbar.Brand href='#home' onClick={homeClickHandler}>
        <h2>
          Movie{' '}
          <Badge variant='info'>
            <FontAwesomeIcon icon={faShoppingBasket} />
          </Badge>
        </h2>
      </Navbar.Brand>
      <Form className='ml-auto' inline>
        <FormControl
          type='text'
          value={inputData}
          onChange={(e) => {
            setInputData(e.target.value);
          }}
          placeholder='Search'
          className='mr-sm-2'
        />
        <Button
          onClick={() => {
            onSearchHandler(inputData);
            setInputData('');
          }}
          variant='outline-info'
        >
          Search
        </Button>
      </Form>
    </Navbar>
  );
};

export default Header;
