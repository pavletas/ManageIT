import { Button, Dialog, DialogActions, DialogContent, FormControl, Grid, IconButton, makeStyles, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React, { useState } from "react";
import { projects } from './Projects';
import { v4 as uuidv4 } from 'uuid';

export interface formProps {
    open: boolean;
    onClose: () => void;
}

export const useStyles = makeStyles(theme => ({

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
        width: '350px'
    },
    contentWrapper: {
        overflow: 'hidden',
        paddingTop: '20px'
    },
    descriptionWrapper: {
        paddingTop: '0px'
    },
    descriptionContentWrapper: {
        width: '350px'
    },
    addedWrapper: {
        paddingTop: '0px',

    },
    addedContentWrapper: {
        width: '350px'
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

export default function CreateProjectForm({ open, onClose }: formProps) {

    const [projectName, setProjectName] = useState('');
    const [description, setDescription] = useState('');
    const classes = useStyles();
    const [members, setMembers] = useState([]);
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

    const setParamsToEmpty = () => {
        setProjectName('');
        setDescription('');
        setMembers([]);
    }

    const saveProject = (event: any) => {
        event.preventDefault();
        projects.push({
            id: uuidv4(),
            title: projectName,
            description: description,
            edited: "Last updated 2 sec ago",
            img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0PDg0NDQ0NDQ0NDQ8NDQ4NFhEWFhURExMYHSggGBolGxUWITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAJ8BPgMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAAAgEDBAUH/8QAMBABAQACAAIGCAcBAQAAAAAAAAECEQMEEiExQVJxFTJRYWKRobEFExQigZKi0XL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/RAAAAAAAAAADQ0GaNNAZo0oBOjSzQI0adDQOejTpo0Dno0vRoEaNLYCdGlMBg2sAAAAAAAAAAAAAAAAAAAAAayKBjRoDdEipATpulaboE6NLkNAjRpejQIZpemaBGmLsZYCBVTQZWNYAAAAAAAAAAAAAAAAAAAABFJioDWyEVAFSEipAZMVSNkVICZG6Xo0COizTthw7l1SW+UdOLyuWGPSuu3Wu2wHk0yx1sTYDlYyulibAc9JrpU0EJVUgAAAAAAAAAAAAAAAAAAAARcRF4gqKjIuA2RWMZHfg8HLL1cbff3fMESKmL28LkPHf4x/69Mxw4fZjd+7G2/MHi4XKZ5d2p7+p6ceUwx68rvz6ozPj8S+rhZ77La4ZY53rsyvnKD0Zc1hj1YzflNRWN/N4dl7bueV7nk/Ly8N+Vd+U3LZZdWey9oPBcU2PbzXBvStktl6+qb63C8HPwZf1oPNYmx1sRYDlU10sRkDlUrqAAAAAAAAAAAAAAAAAAAAAI6YucdMQXF4oi8Qev8AD5jc9ZSXc6t+17+Z5n8vUmPbOr2Pk8PKyyztllj6nN49PhzOd2sv47wOT4uWeWXSvdNTuis+a6Ns6O9X2uX4d25eUc+P6+XmD0fq/h+p+q+H6rnLY613+3byZTVs9lsB6f1Xw/Vl5v4fq8yuJhcdb75sHa858P1duX43T31a179vn16uQ7MvOfYHg4vrZed+7lXbi+tfO/dxoIrnXSudBzyRV5IoAAAAAAAAAAAAAAAAAAAAEdMXOOmILi8XOLgLj6n4fn0sLhe77V8qPVyXF6OePsv7b/IPXyWHRzzxvc48f18vN75w9Z3L24yXzj5/Mevl5g7Y8zlJrq8+9y2rluF07u+rO2+33PTxOWl7P2/YHPluFu7vZOz316eJw5lOvuVjjJJJ2RoPnc1h0curss3HbkOzLzn2bz+O8Zl7L9Kn8OvVl5wHh4vrXzv3csl8W/uy8793Ogioq7UZA55IXkgAAAAAAAAAAAAAAAAAAAACLiIqAuKiIqA6Sqlc5VSg+7yvE6eGN79avnHh5jDLp5axys32yVz5Tm/y5ZZuXr7dar0+kp4L/YDHmOJJqcPUnw5N/VcXwf5yPSM8H1PSM8F+YN/VcTwf5yZ+q4vg/wA5HpGeC/M9IzwfUE8Tj8TKWXDqvV6uTr+HY2TLcs652zTn6SngvzZ6Tngv9geHi392X/q/dztbnlu2+22otBlTk2poIqVVIAAAAAAAAAAAAAAAAAAAAEVEqBqpUNBcqtucqtguVUrnK3YOkrduezYOmzbn0i0FbZck7ZsG2stZtloFqaUBiWsAAAAAAAAAAAAAAAAAAAAAaxoDWAKakBcptICzaGgrZtIDdm07Ng3bGAAMArG1gAAAAAAAAAAAAAAAAAAAABsAaMAaMAUJAUJAUJAUJAaMAaMAbWAAAAAAAAAAAD//2Q==",
            members: members,
            tasks: []
        });

        setParamsToEmpty();
        onClose();
    };

    const closeAndCleanUp = () => {
        setParamsToEmpty();
        onClose();
    }

    return (
        <Dialog open={open} onClose={closeAndCleanUp} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
            <Typography variant="h4" className={classes.titleWrapper}>Create a new Project</Typography>
            <IconButton aria-label="close" className={classes.closeButton} onClick={closeAndCleanUp}>
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
                            className={classes.textField}
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
                    <Grid item xs={6} className={classes.addedWrapper}>
                        <Typography variant="h6" className={classes.title}>Added</Typography>
                        <FormControl>
                            <Select
                                disabled
                                multiple
                                native
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
