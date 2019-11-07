import React, {useEffect} from 'react';
import {getNewsPosts} from "../../store";
import {connect} from "react-redux";

// из редюсера initialState берем название такое же -news_posts
// из редюсера state.news_post
const mapStateToProps = (state) => ({
    news_posts: state.news.news_posts
});


export const NewsList = connect(mapStateToProps, {getNewsPosts})(props => {
    const {getNewsPosts, news_posts} = props;
    useEffect(()=>{
       getNewsPosts()
    },
    [getNewsPosts]
    );

    return (
    news_posts.map(item => {
      return (
          <div>
            <h2 key={item._id} >{item.title}</h2>
            <p>{item.description}</p>
            <span>{item.data}</span>
          </div>
          )
    })
  )
});