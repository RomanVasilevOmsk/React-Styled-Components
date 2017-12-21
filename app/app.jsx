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

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;
     ReactDOM.render(
       <div>
    <Button>Normal Button</Button>
    <Button primary>Primary Button</Button>
  </div>,
        document.getElementById("app")
    );
