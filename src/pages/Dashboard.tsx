import React, { useState } from 'react';
import { Button, Grid, makeStyles } from '@material-ui/core';
import Tasks from '../components/Tasks';
import { useParams } from 'react-router-dom';
import { projects } from './Projects';
import TaskForm from '../pages/CreateTaskForm';

const useStyles = makeStyles((theme) => ({
  tasks: {
    height: '800px',
    width: '220px',
    textAlign: 'center',
    border: '1px solid #424242',
    padding: 0,
    "& > :not(:first-child)": {
      marginTop: '25px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      border: '1px solid #424242',
      borderRadius: '20px',
      maxWidth: '200px',
      paddingBottom: '7px',
      marginLeft: '10px'
    },
  },
  control: {
    padding: theme.spacing(2),
  },
  gridPadding: {
    padding: '0px'
  },
  gridItem: {
    padding: '0px',
    paddingTop: '30px',
    paddingBottom: '60px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  button: {
    marginLeft: '22rem',
    marginTop: '2rem',
    backgroundColor: '#dba0be',
    border: '1px solid #AD3E73',
    padding: ' 10px 40px',
    '&:hover': {
      backgroundColor: '#dba0be'
    }
  }
}));

export default function Dashboard() {
  const classes = useStyles();
  const { id } = useParams<{ id: string }>();
  const [taskToCreate, setTaskToCreate] = useState(false);
  const [value, setValue] = React.useState("");

  function handleChange(newValue: any) {
    setValue(newValue);
  }

  const currentProject = projects.filter(project => project.id === id)[0];

  let [tasks, setTasks] = useState(currentProject.tasks);

  const handleOpenDialog = () => {
    setTaskToCreate(true);
  };

  const handleCloseDialog = () => {
    setTaskToCreate(false);
  };

  return (
    <div>
      <Button
        onClick={handleOpenDialog}
        size="large"
        className={classes.button}>Add new task</Button>
      <TaskForm open={taskToCreate} onClose={handleCloseDialog} project={currentProject} />
      <Grid container spacing={0} classes={{ root: classes.gridPadding }}>
        <Grid item xs={12} classes={{ root: classes.gridItem }}>
          <Grid container justify="center" spacing={0} classes={{ root: classes.gridPadding }}>
            {['New', 'In Progress', 'Ready For Code Review',
              'Ready For Testing', 'In Testing', 'Closed'].map((value) => (
                <Grid key={value} item className={classes.tasks}>
                  <Tasks value={value} onChange={handleChange} label={value} tasks={tasks} project={currentProject} />
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}