import { Button, Dialog, DialogActions, DialogContent, FormControl, Grid, IconButton, makeStyles, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React, { useState } from "react";
import { projects } from './Projects';
import type { ProjectProps } from 'src/components/Project';

export interface editFormProps {
    open: boolean;
    onClose: () => void;
    project: ProjectProps;
}

const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        paddingBottom: '10px',
        position: 'absolute'
    },
    titleWrapper: {
        fontWeight: 'bold',
        marginTop: 0,
        textAlign: 'center',
        backgroundColor: '#ffcc66',
        padding: '10px'
    },
    textField: {
        width: '19rem'
    },
    contentWrapper: {
        overflow: 'hidden',
        paddingTop: '20px'
    },
    descriptionWrapper: {
        paddingTop: '0px'
    },
    descriptionContentWrapper: {
        width: '21rem'
    },
    addedWrapper: {
        paddingTop: '0px',

    },
    textFieldPadding: {
        padding: '10px'
    },
    title: {
        fontWeight: 'bold'
    },
    button: {
        margin: theme.spacing(3),
        backgroundColor: '#dba0be',
        left: '-80px',
        border: '1px solid #AD3E73',
        '&:hover': {
            backgroundColor: '#dba0be'
          }
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    }
}));

export default function EditProjectForm({ open, onClose, project }: editFormProps) {

    const [projectName, setProjectName] = useState(project.title);
    const [description, setDescription] = useState(project.description);
    const [members, setMembers] = useState(project.members);
    const classes = useStyles();
    const defaultOptions = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder'
    ];

    const saveProject = (event: any) => {
        event.preventDefault();
        let returnedProject: ProjectProps = projects.filter(item => item.id === project.id)[0];
        returnedProject.title = projectName;
        returnedProject.description = description;
        returnedProject.members = members;
        onClose();
    };

    const onEditClose = (event: any) => {
        event.preventDefault();
        let returnedProject: ProjectProps = projects.filter(item => item.id === project.id)[0];
        setProjectName(returnedProject.title);
        setDescription(returnedProject.description);
        setMembers(returnedProject.members);
        onClose();
    }

    return (
        <Dialog open={open} onClose={onEditClose} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
            <Typography variant="h4" className={classes.titleWrapper}>Edit Project</Typography>
            <IconButton aria-label="close" className={classes.closeButton} onClick={onEditClose}>
                <CloseIcon />
            </IconButton>
            <DialogContent className={classes.contentWrapper}>
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <Typography variant="h6" className={classes.title}>Project name</Typography>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            value={projectName}
                            onChange={(event: any) => setProjectName(event.target.value)}
                            variant="outlined"
                            type="text"
                            classes={{ root: classes.descriptionContentWrapper }}
                            placeholder='Enter project name'
                            color="secondary"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6" className={classes.title}>Team members</Typography>
                        <FormControl>
                            <Select
                                label='select-members'
                                id="members"
                                multiple
                                value={members}
                                classes={{ root: classes.textField }}
                                onChange={(event: any) => setMembers(event.target.value)}
                            >
                                {defaultOptions.map((name) => (
                                    <MenuItem key={name} value={name}>
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} className={classes.descriptionWrapper}>
                        <Typography variant="h6" className={classes.title}>Description</Typography>
                        <TextField
                            value={description}
                            onChange={(event: any) => setDescription(event.target.value)}
                            placeholder="Describe the business logic of the project"
                            className={classes.descriptionContentWrapper}
                            variant="outlined"
                            multiline
                            rows={4}
                            rowsMax={8}
                            color="secondary"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6" className={classes.title}>Added</Typography>
                        <FormControl>
                            <Select
                                disabled
                                multiple
                                native
                                classes={{ root: classes.textField }}
                                inputProps={{
                                    id: 'select-multiple-native',
                                }}
                            >
                                {members.map((name) => (
                                    <option key={name} value={name}>
                                        {name}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" size="large" className={classes.button} onClick={saveProject}>
                    Submit
        </Button>
            </DialogActions>
        </Dialog>
    );
}
