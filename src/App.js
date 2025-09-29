import React from "react";
import Layout from "./components/layout";
import Profile from "./components/profile";
import { ResetCss } from "./global/resetCss";
import Repositories from "./components/repositories";
import GithubProvider from "./components/providers/github-provider";
import useGithub from "./components/hooks/github-hooks";
import NoSearch from "./components/no-search";


function App() {
  const { githubState } = useGithub()
  return (
    <Layout>
      {githubState.hasUser ? <>
        {githubState.loading
          ? <p>Loading</p>
          : <>
            <Profile />
            <Repositories />
          </>}
      </> : <NoSearch />}

    </Layout>
  );
}

export default App;
