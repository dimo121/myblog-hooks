import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BlogPage from "../components/BlogPage";
import CreateEntry from "../components/CreateEntry";
import CreateBlog from "../components/CreateBlog";
import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import MyBlogsPage from "../components/MyBlogsPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Dashboard} exact={true} />
        <Route path="/createblog" component={CreateBlog} />
        <Route path="/createentry" component={CreateEntry} />
        <Route path="/myblogs" component={MyBlogsPage} />
        <Route path="/blog/:id" component={BlogPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
