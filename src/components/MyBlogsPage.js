import React from 'react';
import { connect } from "react-redux";
import { BlogItem } from "./BlogItem";


class MyBlogsPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        blogsDisplayed : []
    }
  }

  static getDerivedStateFromProps (props,state) {
  
    if(props.filters.currentUser.id){
      state.blogsDisplayed = props.blogs.filter(item => item.owner == props.filters.currentUser.id);
    }

    return state;
  }
   
    render () {
    return (
    <div className="main__container">
      {
        this.state.blogsDisplayed.map((item) => (
        <BlogItem key={item.id} blog={item} />
      ))}
    </div>
    )};
}


const mapStateToProps = (state) => ({
      blogs: state.blogs,
      filters: state.filters
});
  
export default connect(mapStateToProps)(MyBlogsPage);
