import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import type { ProjectProps, TaskModel } from './Project';
import Task from './Task';

export interface TasksProps {
  label: string;
  tasks: TaskModel[];
  project: ProjectProps;
  value: any;
  onChange: (newValue: any) => void;
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

export default function Tasks({ label, tasks, project, onChange}: TasksProps) {
  const classes = useStyles();
  const [value, setValue] = React.useState("");

  function handleChange(newValue: any) {
    onChange(newValue);
    setValue(newValue);
  }

  const currentTasks = tasks.filter(task => task.label === label);

  return (
    <>
      <Typography variant="h6" className={classes.label}>{label}</Typography>
      {currentTasks.map(task => <Task value={value} onChange={handleChange} task={task} project={project} tasks={tasks} />)}
    </>
  );
}