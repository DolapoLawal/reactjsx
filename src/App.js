import React from 'react';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import Name from './Name';
import {Card} from "react-bootstrap";
import "./styles.css";

const App = () => {
  const firstName = "DOLAPO";
  
  return (
    <div>
    <Card>
      <Card.Body>
        <Card.Title>
          <Name />
        </Card.Title>
          <Card.Text>
            <Price />
            <Description />
            <Image />
          </Card.Text>
      </Card.Body>
    </Card>
      <p className="greeting-text"> HELLO, {firstName ? firstName : "there"}!</p>
    </div>
  );
};
  
export default App;
