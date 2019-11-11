import React, {useEffect} from 'react';
import {getNewsPosts} from "../../store";
import {connect} from "react-redux";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// из редюсера initialState берем название такое же -news_posts
// из редюсера state.news_post
const mapStateToProps = (state) => ({
    news_posts: state.news.news_posts
});

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    description: {
        height: 77,
    }
});

export const NewsList = connect(mapStateToProps, {getNewsPosts})(props => {
    const {getNewsPosts, news_posts} = props;
    // useEffect отрисовывает посты
    useEffect(()=>{
       getNewsPosts()
    },
    [getNewsPosts]
    );

    const classes = useStyles();

    return (
        news_posts.map(item => {
      return (
          <Card className={classes.card}>
              <CardActionArea>
                  <CardMedia
                      className={classes.media}
                      image={item.image}
                      title={item.title}
                  />
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                          {item.title}
                      </Typography>
                      <Typography noWrap className={classes.description} variant="body2" color="textSecondary" component="p">
                          {item.description}
                      </Typography>
                  </CardContent>
              </CardActionArea>
              <CardActions>
                  <Button size="small" color="primary">
                      Share
                  </Button>
                  <Button size="small" color="primary">
                      Learn More
                  </Button>
              </CardActions>
          </Card>
        // <div  key={item._id}>
        //     <h2>{item.title}</h2>
        //     <img src={item.image} alt=""/>
        //     <p>{item.description}</p>
        //     <p>{item.data}</p>
        //     <span>{item.author}</span>
        //     <span>{item.category}</span>
        // </div>
          )
    })
  )
});