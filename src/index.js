import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './utils';
import Button from './components/Buttons';



const App = () => (

    <>       
        <GlobalStyle />       
        <h1>Hello World</h1>
        <Button primary>Sign In</Button>
    </>
)

ReactDOM.render(<App />, document.querySelector("#root"));
