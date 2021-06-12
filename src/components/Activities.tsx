import { Grid, Typography, Tabs, Tab, Box, Avatar, TextField, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import useCurrentUser from '../contexts/CurrentUser';
import { useStyles } from '../pages/CreateProjectForm';
import projects from '../pages/Projects';
import type { ProjectProps } from './Project';

export interface activitiesProps {
  comments: string[],
  history: string[],
  value: any,
  onChange: (newValue: any) => void;
  project: ProjectProps;
}
const useCustomStyles = makeStyles(() => ({
  avatar: {
    backgroundColor: '#ffcc66',
    marginLeft: '2rem'
  },
  muiAvatar: {
    width: '30px',
    height: '30px',
    margin: 0
  },
  description: {
    top: '-5rem',
    position: 'relative'
  },
  tab: {
    borderRadius: '50px'
  },
  comment: {
    fontSize: '15px'
  },
  addNewComment: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '10px'
  },
  addComment: {
    marginLeft: '10px',
    height: '40px'
  }
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function Activities({ comments, history, onChange, project }: activitiesProps) {
  const classes = useStyles();
  const myClasses = useCustomStyles();
  const user = useCurrentUser();
  const [newComments, setNewComments] = useState<string[]>([]);
  const [comment, setComment] = useState('');
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      comments.push(comment);
      setNewComments(comments);
      onChange(value);
      setComment('');
    }
  }

  return (
    <Grid item xs={7} classes={{ root: myClasses.description }}>
      <Typography variant="h6" className={classes.title}>Activity</Typography>
      <Tabs
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
      >
        <Tab label="Comments" classes={{ root: myClasses.tab }} />
        <Tab label="History" classes={{ root: myClasses.tab }} />
      </Tabs>
      <TabPanel value={value} index={0}>
        {comments.map((c) => <>
          <Typography
            variant="body2"
            className={myClasses.comment}
          >
            {c}
          </Typography>
        </>)}
        <Box className={myClasses.addNewComment}>
          <Avatar className={myClasses.avatar} classes={{ root: myClasses.muiAvatar }}>{user && <>{user?.username[0].toUpperCase()} </>}</Avatar>
          <TextField
            variant="outlined"
            label="Add a comment"
            size="small"
            color="secondary"
            type="text"
            value={comment}
            onChange={(event: any) => setComment(event.target.value)}
            className={myClasses.addComment}
            onKeyPress={handleKeyPress}
          />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography>hitory</Typography>
      </TabPanel>
    </Grid>
  );
}