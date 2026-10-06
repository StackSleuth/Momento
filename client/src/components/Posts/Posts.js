import React, { useRef } from 'react';
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  const loaded = useRef(false);

  if (posts.length > 0) loaded.current = true;

  if (!loaded.current) return <CircularProgress />;

  if (posts.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 20px' }}>
        <Typography variant="h5" color="textSecondary" gutterBottom>
          📭 No memories yet!
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Be the first to share a memory. Use the form on the right to create one.
        </Typography>
      </div>
    );
  }

  return (
    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
