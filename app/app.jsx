var ReactDOM = require('react-dom');
var React = require('react');
// var ItemsList = require('./components/ItemsList.jsx');


import styled, { css } from 'styled-components';

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
  
  // &.primary{
  //   color: blue;
  // }

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: ${props => props.primary ? 'blue' : 'purple'};
`;


     ReactDOM.render(
       <div>
        <Button>Normal Button</Button>
        <Button primary>Primary Button</Button>
        <Title primary>Hello World</Title>
      </div>,
        document.getElementById("app")
    );
