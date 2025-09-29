import React from 'react'
import { ResetCss } from './global/resetCss';
import GithubProvider from './components/providers/github-provider';
import App from './App';

function Providers() {
    return (
        <main>
            <GithubProvider>
                <ResetCss />
                <App />
            </GithubProvider>
        </main>

    )
}

export default Providers;
