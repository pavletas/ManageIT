import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import type { ProjectProps, TaskModel } from './Project';
import Task from './Task';

export interface TasksProps {
  label: string;
  tasks: TaskModel[];
  project: ProjectProps;
}

const useStyles = makeStyles(() => ({
  label: {
    backgroundColor: '#ffcc66'
  },
  tasks: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

export default function Tasks({ label, tasks, project}: TasksProps) {
  const classes = useStyles();

  const currentTasks = tasks.filter(task => task.label === label);

  return (
    <>
      <Typography variant="h6" className={classes.label}>{label}</Typography>
      {currentTasks.map(task => <Task task={task} project={project} tasks={tasks} />)}
    </>
  );
}