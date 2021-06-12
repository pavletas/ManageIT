import {
    Avatar, Box, Dialog, DialogContent, Grid, IconButton, makeStyles,
    TextField, Typography, InputBase, FormControl, Select, Button,
    InputLabel, DialogActions, Tab, Tabs, Input
} from "@material-ui/core";
import React, { useState } from "react";
import CloseIcon from '@material-ui/icons/Close';
import { useStyles } from "./CreateProjectForm";
import type { ProjectProps, TaskModel } from "../components/Project";
import useCurrentUser from "../contexts/CurrentUser";

export interface taskFormProps {
    open: boolean;
    onClose: () => void;
    project: ProjectProps;
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
        height: '30px'
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
        fontSize: '1.65rem',
        width: '100%'
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
    }
}));

export default function EditTaskForm({ open, onClose, project }: taskFormProps) {
    const user = useCurrentUser();
    const classes = useStyles();
    const myClasses = useCustomStyles();
    const id: string = Math.floor(Math.random() * (999 - 100 + 1) + 100) + '';
    const reporter: string = user?.username || 'Kristina Ivanova';
    const label: string = 'New';
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [assignee, setAssignee] = useState('');
    const [estimate, setEstimate] = useState('');
    const [openButtonAssignee, setOpenButtonAssignee] = React.useState(false);

    const closeAndCleanUp = () => {

        onClose();
    }

    const onButtonFormAssigneeSubmit = (event: any) => {
        event.preventDefault();
        () => setAssignee(assignee);
        setOpenButtonAssignee(false);
    }

    const saveTask = (event: any) => {

        onClose();
    };

    return (
        <Dialog open={open} onClose={closeAndCleanUp} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
            <Input onChange={(event: any) => setTitle(event.target.value)} className={classes.titleWrapper} classes={{ root: myClasses.titleSize }} placeholder="Enter task name.." inputProps={{ 'aria-label': 'description' }} />
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
                            {assignee && <>
                                <Avatar className={myClasses.avatar} classes={{ root: myClasses.muiAvatar }}>{assignee && <>{assignee[0].toUpperCase()} </>}</Avatar>
                            </>}
                            {!assignee && <><Button variant="outlined" onClick={() => setOpenButtonAssignee(true)}>Add assignee</Button></>}
                            {assignee && <><Button onClick={() => setOpenButtonAssignee(true)}>{assignee}</Button></>}
                            <Dialog disableBackdropClick disableEscapeKeyDown open={openButtonAssignee}
                                onClose={() => setOpenButtonAssignee(false)}>
                                <DialogContent>
                                    <form className={myClasses.formContainer}>
                                        <FormControl className={myClasses.formControl}>
                                            <InputLabel htmlFor="demo-dialog-native">Assignee</InputLabel>
                                            <Select
                                                native
                                                value={assignee}
                                                onChange={(event: any) => setAssignee(event?.target.value)}
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
                                    <Button onClick={onButtonFormAssigneeSubmit} color="primary">
                                        Submit</Button>
                                </DialogActions>
                            </Dialog>
                        </Box>
                        <Box className={myClasses.userBox}>
                            <Typography variant="h6" className={classes.title}
                                classes={{ h6: myClasses.header, root: myClasses.muiMargin }}>Reporter</Typography>
                            <Avatar className={myClasses.avatar} classes={{ root: myClasses.muiAvatar }}>{reporter[0].toUpperCase()}</Avatar>
                            <Button>{reporter}</Button>
                        </Box>
                        <Box className={myClasses.userBox}>
                            <Typography variant="h6" className={classes.title}
                                classes={{ h6: myClasses.header, root: myClasses.muiMargin }}>Label</Typography>
                            <Button classes={{ root: myClasses.alignLeftLabel }}>{label}</Button>
                        </Box>
                        <Box className={myClasses.userBox}>
                            <Typography variant="h6" className={classes.title}
                                classes={{ h6: myClasses.header, root: myClasses.muiMargin }}>Estimate</Typography>
                            <InputBase
                                defaultValue={estimate}
                                placeholder='Enter estimation..'
                                inputProps={{ 'aria-label': 'naked' }}
                                classes={{ root: myClasses.alignLeftEstimate }}
                                onChange={(event: any) => setEstimate(event.target.value)}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={7}></Grid>
                    <Grid item xs={5}>
                        <Button onClick={saveTask} variant="contained" size="large" classes={{ root: myClasses.button }}>
                            Submit</Button>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog >
    );
}