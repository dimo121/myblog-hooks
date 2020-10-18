import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BlogPage from "../components/BlogPage";
import CreateEntry from "../components/CreateEntry";
import CreateBlog from "../components/CreateBlog";
import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import theme from "../theme";
import { ThemeProvider } from "@material-ui/core";

const AppRouter = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Dashboard} exact={true} />
          <Route path="/createblog" component={CreateBlog} />
          <Route path="/createentry" component={CreateEntry} />
          <Route path="/blog/:id" component={BlogPage} />
        </Switch>
      </div>
    </ThemeProvider>
  </BrowserRouter>
);

export default AppRouter;
