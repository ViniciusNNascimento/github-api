import React from "react";
import Layout from "./components/layout";
import Profile from "./components/profile";
import { ResetCss } from "./global/resetCss";
import Repositories from "./components/repositories";
import GithubProvider from "./components/providers/github-provider";


function App() {
  return (
    <main>
      <GithubProvider>
        <ResetCss />
        <Layout>
          <Profile />
          <Repositories />

        </Layout>
      </GithubProvider>
    </main>
  );
}

export default App;
