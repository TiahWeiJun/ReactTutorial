import React from 'react';
import './App.css';
import BlogListPage from './page/blogListpage.js'
import {Switch, Route, Link} from 'react-router-dom'
import BlogDetailPage from './page/blogDetailPage.js'
import createBlogPage from './page/createBlogPage.js'


class App extends React.Component {

  render(){
    return (
      <div>
        <Link to ='/' exact><h1>Nav</h1></Link>
        <Link to ='/create' exact><h1>Create blog</h1></Link>
        <Switch>
          <Route path = '/' exact component={BlogListPage} />
          <Route path = '/blogs/:id' exact component={BlogDetailPage} />
          <Route path = '/create' exact component={createBlogPage} />
        </Switch>
        <h1>Footer</h1>
      </div>
    );
  }
  }
  


export default (App)
