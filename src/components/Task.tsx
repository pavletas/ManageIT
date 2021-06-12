import React, { useState } from 'react';
import type { ProjectProps, TaskModel } from './Project';
import { makeStyles, Typography, Avatar, CardActionArea } from '@material-ui/core';
import TaskForm from '../pages/EditTaskForm';

export interface TaskProps {
  task: TaskModel;
  project: ProjectProps;
  tasks: TaskModel[];
  value: any;
  onChange: (newValue: any) => void;
}

const useStyles = makeStyles(() => ({
  taskCard: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100%',
    maxHeight: '250px',
    gap: '5px'
  },
  avatar: {
    backgroundColor: '#AD3E73',
    width: '30px',
    height: '30px',
    fontSize: '16px',
    marginLeft: '75%'
  },
  id: {
    backgroundColor: '#f5e3bf',
    width: '100%',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
  },
  title: {
    fontSize: '16px',
    padding: '0 1px'
  }
}));

export default function Task({ task, project, tasks, onChange }: TaskProps) {
  const classes = useStyles();
  const [taskToEdit, setTaskToEdit] = useState(false);
  const [value, setValue] = React.useState("");

  function handleChange(newValue: any) {
    onChange(newValue);
    setValue(newValue);
  }

  const handleCloseDialog = () => {
    setTaskToEdit(false);
  };

  const handleOpenDialog = () => {
    setTaskToEdit(true);
  };

  return (
    <div className={classes.taskCard}>
      <CardActionArea onClick={handleOpenDialog}>
        <Typography variant="h6" className={classes.id}>#{task.id}</Typography>
        <Typography variant="body1" className={classes.title}>{task.title}</Typography>
        <Avatar className={classes.avatar}>{task.asignee[0].toLocaleUpperCase()}</Avatar>
      </CardActionArea>
      <TaskForm open={taskToEdit} value={value} onChange={handleChange} onClose={handleCloseDialog} task={task} project={project} tasks={tasks} />
    </div>
  );
}