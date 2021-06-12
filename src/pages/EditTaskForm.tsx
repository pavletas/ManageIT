import {
  Avatar, Box, Dialog, DialogContent, Grid, IconButton, makeStyles,
  TextField, Typography, InputBase, FormControl, Select, Button,
  InputLabel, DialogActions, Tab, Tabs
} from "@material-ui/core";
import React, { useState } from "react";
import CloseIcon from '@material-ui/icons/Close';
import { useStyles } from "./CreateProjectForm";
import type { ProjectProps, TaskModel } from "../components/Project";
import useCurrentUser from "../contexts/CurrentUser";
import { projects } from './Projects';
import Activities from "../components/Activities";

export interface taskFormProps {
  open: boolean;
  onClose: () => void;
  task: TaskModel;
  project: ProjectProps;
  tasks: TaskModel[];
};

const useCustomStyles = makeStyles((theme) => ({
  inputContainer: {
    display: 'flex',
    width: '100%',
    marginBottom: '15px'
  },
  icon: {
    padding: '10px',
    background: 'dodgerblue',
    color: 'white',
    minWidth: '50px',
    textAlign: 'center'
  },
  inputField: {
    width: '100%',
    padding: '10px',
    outline: 'none'
  },
  avatar: {
    backgroundColor: '#ffcc66',
    marginLeft: '2rem'
  },
  userBox: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center'
  },
  header: {
    fontSize: '1.10rem'
  },
  muiAvatar: {
    width: '30px',
    height: '30px',
    margin: 0
  },
  muiMargin: {
    margin: '1rem'
  },
  alignLeftLabel: {
    left: '5rem'
  },
  alignLeftEstimate: {
    left: '4rem'
  },
  titleSize: {
    fontSize: '1.65rem'
  },
  description: {
    top: '-5rem',
    position: 'relative'
  },
  gridPadding: {
    padding: '0.7rem'
  },
  formContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  button: {
    right: '-12rem',
    margin: theme.spacing(3),
    backgroundColor: '#dba0be',
    border: '1px solid #AD3E73',
    '&:hover': {
      backgroundColor: '#dba0be'
    }
  },
  tab: {
    borderRadius: '50px'
  },
  customInput: {
    borderRadius: '4px',
    width: '67%',
    left: '1rem',
    position: 'absolute',
    padding: '0.3rem'
  },
  comment: {
    fontSize: '12px'
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

export default function EditTaskForm({ open, onClose, task, project, tasks }: taskFormProps) {
  const classes = useStyles();
  const myClasses = useCustomStyles();
  const [id] = useState(task.id);
  const [title] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [assignee, setAssignee] = useState(task.asignee);
  const [reporter, setReporter] = useState(task.reporter);
  const [label, setLabel] = useState(task.label);
  const [estimate, setEstimate] = useState(task.estimated);
  const [history, setHistory] = useState(task.history);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(task.comments);
  const [openButtonLabel, setOpenButtonLabel] = React.useState(false);
  const [openButtonReporter, setOpenButtonReporter] = React.useState(false);
  const [openButtonAssignee, setOpenButtonAssignee] = React.useState(false);
  const [value, setValue] = React.useState("");
  const user = useCurrentUser();

  function handleChange(newValue: any) {
    setValue(newValue);
  }
  
  const labels: string[] = ['New', 'In Progress', 'Ready For Code Review', 'Ready For Testing', 'In Testing', 'Closed'];

  const closeAndCleanUp = () => {
    let returnedtask: TaskModel = project.tasks.filter(item => item.id === id)[0];
    setDescription(returnedtask.description);
    setAssignee(returnedtask.asignee);
    setReporter(returnedtask.reporter);
    setLabel(returnedtask.label);
    setEstimate(returnedtask.estimated);
    onClose();
  }

  const handleClickOpenLabel = () => {
    setOpenButtonLabel(true);
  };

  const handleCloseLabel = () => {
    setOpenButtonLabel(false);
  };

  const onButtonFormLabelClose = (event: any) => {
    event.preventDefault();
    let returnedtask: TaskModel = project.tasks.filter(item => item.id === id)[0];
    setLabel(returnedtask.label);
    handleCloseLabel();
  }

  const onButtonFormLabelSubmit = (event: any) => {
    event.preventDefault();
    let returnedtask: TaskModel = project.tasks.filter(item => item.id === id)[0];
    returnedtask.label = label;
    setLabel(label);
    handleCloseLabel();
  }

  const onButtonFormReporterClose = (event: any) => {
    event.preventDefault();
    let returnedtask: TaskModel = project.tasks.filter(item => item.id === id)[0];
    setReporter(returnedtask.reporter);
    setOpenButtonReporter(false);
  }

  const onButtonFormReporterSubmit = (event: any) => {
    event.preventDefault();
    let returnedtask: TaskModel = project.tasks.filter(item => item.id === id)[0];
    returnedtask.reporter = reporter;
    setReporter(reporter);
    setOpenButtonReporter(false);
  }

  const onButtonFormAssigneeClose = (event: any) => {
    event.preventDefault();
    let returnedtask: TaskModel = project.tasks.filter(item => item.id === id)[0];
    setAssignee(returnedtask.asignee);
    setOpenButtonAssignee(false);
  }

  const onButtonFormAssigneeSubmit = (event: any) => {
    event.preventDefault();
    let returnedtask: TaskModel = project.tasks.filter(item => item.id === id)[0];
    returnedtask.asignee = assignee;
    setAssignee(assignee);
    setOpenButtonAssignee(false);
  }

  const saveTask = (event: any) => {
    event.preventDefault();
    let returnedTask: TaskModel = project.tasks.filter(item => item.id === id)[0];
    let taskIndex: number = tasks.indexOf(returnedTask);

    returnedTask.description = description;
    returnedTask.asignee = assignee;
    returnedTask.reporter = reporter;
    returnedTask.estimated = estimate;
    returnedTask.label = label;

    let filteredProject = projects.filter(item => item.id === project.id)[0];
    let projectIndex: number = projects.indexOf(filteredProject);
    projects[projectIndex].tasks.slice(taskIndex, 1);
    projects[projectIndex].tasks.push(returnedTask);

    onClose();
    window.location.reload();
  };

  return (
    <Dialog open={open} onClose={closeAndCleanUp} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
      <Typography variant="h4" className={classes.titleWrapper} classes={{ root: myClasses.titleSize }}>#{id} {title}</Typography>
      <IconButton aria-label="close" className={classes.closeButton} onClick={closeAndCleanUp}>
        <CloseIcon />
      </IconButton>
      <DialogContent className={classes.contentWrapper} >
        <Grid container spacing={4} alignItems='flex-end' classes={{ root: myClasses.gridPadding }}>
          <Grid item xs={7} classes={{ root: myClasses.description }}>
            <Typography variant="h6" className={classes.title}>Description</Typography>
            <TextField
              value={description}
              onChange={(event: any) => setDescription(event.target.value)}
              placeholder="Describe the business logic of the project"
              className={classes.descriptionContentWrapper}
              variant="outlined"
              multiline
              rows={7}
              rowsMax={9}
              color="secondary"
            />
          </Grid>
          <Grid item xs={5}>
            <Box className={myClasses.userBox}>
              <Typography variant="h6" className={classes.title}
                classes={{ h6: myClasses.header, root: myClasses.muiMargin }}>Assignee</Typography>
              <Avatar className={myClasses.avatar} classes={{ root: myClasses.muiAvatar }}>{assignee && <>{assignee[0].toUpperCase()} </>}</Avatar>
              <Button onClick={() => setOpenButtonAssignee(true)}>{assignee}</Button>
              <Dialog disableBackdropClick disableEscapeKeyDown open={openButtonAssignee}
                onClose={() => setOpenButtonAssignee(false)}>
                <DialogContent>
                  <form className={myClasses.formContainer}>
                    <FormControl className={myClasses.formControl}>
                      <InputLabel htmlFor="demo-dialog-native">Assignee</InputLabel>
                      <Select
                        native
                        value={assignee}
                        onChange={(event: any) => setAssignee(event.target.value)}
                      >
                        {project.members.map((item) => (
                          <option key={item} value={item} style={{ color: 'black' }}>
                            {item}
                          </option>
                        ))}
                      </Select>
                    </FormControl>
                  </form>
                </DialogContent>
                <DialogActions>
                  <Button onClick={onButtonFormAssigneeClose} color="primary">
                    Cancel</Button>
                  <Button onClick={onButtonFormAssigneeSubmit} color="primary">
                    Submit</Button>
                </DialogActions>
              </Dialog>
            </Box>
            <Box className={myClasses.userBox}>
              <Typography variant="h6" className={classes.title}
                classes={{ h6: myClasses.header, root: myClasses.muiMargin }}>Reporter</Typography>
              <Avatar className={myClasses.avatar} classes={{ root: myClasses.muiAvatar }}>{reporter && <>{reporter[0].toUpperCase()} </>}</Avatar>
              <Button onClick={() => setOpenButtonReporter(true)}>{reporter}</Button>
              <Dialog disableBackdropClick disableEscapeKeyDown open={openButtonReporter}
                onClose={() => setOpenButtonReporter(false)}>
                <DialogContent>
                  <form className={myClasses.formContainer}>
                    <FormControl className={myClasses.formControl}>
                      <InputLabel htmlFor="demo-dialog-native">Reporter</InputLabel>
                      <Select
                        native
                        value={reporter}
                        onChange={(event: any) => setReporter(event.target.value)}
                      >
                        {project.members.map((item) => (
                          <option key={item} value={item} style={{ color: 'black' }}>
                            {item}
                          </option>
                        ))}
                      </Select>
                    </FormControl>
                  </form>
                </DialogContent>
                <DialogActions>
                  <Button onClick={onButtonFormReporterClose} color="primary">
                    Cancel</Button>
                  <Button onClick={onButtonFormReporterSubmit} color="primary">
                    Submit</Button>
                </DialogActions>
              </Dialog>
            </Box>
            <Box className={myClasses.userBox}>
              <Typography variant="h6" className={classes.title}
                classes={{ h6: myClasses.header, root: myClasses.muiMargin }}>Label</Typography>
              <Button onClick={handleClickOpenLabel} classes={{ root: myClasses.alignLeftLabel }}>{label}</Button>
              <Dialog disableBackdropClick disableEscapeKeyDown open={openButtonLabel} onClose={handleCloseLabel}>
                <DialogContent>
                  <form className={myClasses.formContainer}>
                    <FormControl className={myClasses.formControl}>
                      <InputLabel htmlFor="demo-dialog-native">Label</InputLabel>
                      <Select
                        native
                        value={label}
                        onChange={(event: any) => setLabel(event.target.value)}
                      >
                        {labels.map((item) => (
                          <option key={item} value={item} style={{ color: 'black' }}>
                            {item}
                          </option>
                        ))}
                      </Select>
                    </FormControl>
                  </form>
                </DialogContent>
                <DialogActions>
                  <Button onClick={onButtonFormLabelClose} color="primary">
                    Cancel</Button>
                  <Button onClick={onButtonFormLabelSubmit} color="primary">
                    Submit</Button>
                </DialogActions>
              </Dialog>
            </Box>
            <Box className={myClasses.userBox}>
              <Typography variant="h6" className={classes.title}
                classes={{ h6: myClasses.header, root: myClasses.muiMargin }}>Estimate</Typography>
              <InputBase
                defaultValue={estimate}
                inputProps={{ 'aria-label': 'naked' }}
                classes={{ root: myClasses.alignLeftEstimate }}
                onChange={(event: any) => setEstimate(event.target.value)}
              />
            </Box>
          </Grid>
          <Activities value={value} onChange={handleChange} comments={task.comments} history={task.history} project={project} />
          <Grid item xs={5}>
            <Button onClick={saveTask} variant="contained" size="large" classes={{ root: myClasses.button }}>
              Submit</Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog >
  );
}