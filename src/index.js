import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { GlobalStyle, theme } from './utils';
import Button from './components/Buttons';
const DisplaySection = styled.section`
    display: flex;    
    &> div {
        margin-top: .5rem;
        margin-right: 2rem;
        &>p {
            font-size: ${theme.typeScale.fs_small};
            margin-bottom: 1rem;
        }
    }
`;
const TopLevelSection = styled.section`
    margin:2rem;
    &>h5 {
        margin-bottom:.5rem;
    }
`;
const App = () => (
    <>       
        <GlobalStyle />    
        <main>
            <h3>Buttons</h3>
            <TopLevelSection>
                <h5>Normal Buttons</h5>
                <DisplaySection>
                    <div>
                    <p>Primary Button</p>
                    <Button primary>Sign In</Button>
                    </div>
                    <div>
                    <p>Secondary Button</p>
                    <Button secondary>Sign In</Button>
                    </div>
                    <div>
                    <p>Tertiary Button</p>
                    <Button tertiary>Sign In</Button>
                    </div>
                </DisplaySection>           
            </TopLevelSection>
            <TopLevelSection>
                <h5>Large Buttons</h5>
                <DisplaySection>
                    <div>
                    <p>Small Primary Button</p>
                    <Button primary modifiers={['small', 'disabled']}>Sign In</Button>
                    </div>
                    <div>
                    <p>Large Secondary Button</p>
                    <Button secondary modifiers={['large']}>Sign In</Button>
                    </div>
                    <div>
                    <p>Disabled Button</p>
                    <Button tertiary modifiers={['disabled']}>Sign In</Button>
                    </div>
                </DisplaySection>           
            </TopLevelSection>
        </main>
    </>
)
ReactDOM.render(<App />, document.querySelector("#root"));