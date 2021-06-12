import React, { useState } from 'react';
import { makeStyles, Container, Button } from '@material-ui/core';
import Project, { ProjectProps } from '../components/Project';
import CreateProjectForm from './CreateProjectForm';
import { v4 as uuidv4 } from 'uuid';
import useCurrentUser from '../contexts/CurrentUser';

export let projects: ProjectProps[] = [
  {
    id: uuidv4(),
    title: "Cinema Reservation",
    description: "This is a reservation system that will allow you to make reservations for the newest movies in the cinema. You can register into the system with a valid email and password. Without registration, you can only see the movies and projections.",
    edited: "Last updated 3 min ago",
    img: "data:image/jpeg;base64,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",
    members: ['Alisa Stefanova', 'Mariya Petrova', 'Anastasiya Ninova', 'Petya Dimitrova'],
    tasks: [{
      id: '111',
      title: 'Implement Log in',
      description: 'You have to implement the login page of the application. Please, follow the mockups!',
      asignee: 'Anastasiya Ninova',
      reporter: 'Mariya Petrova',
      label: 'New',
      estimated: '4d',
      comments: ['I cannot find the mockup for login page :('],
      history: []
    }, {
      id: '112',
      title: 'Implement Sign up',
      description: 'You have to implement the login page of the application. Please, follow the mockups!',
      asignee: 'Petya Dimitrova',
      reporter: 'Alisa Stefanova',
      label: 'New',
      estimated: '3d',
      comments: [],
      history: []
    }, {
      id: '113',
      title: 'Error 500 when the user clicks Project tasks',
      description: 'When the user clicks over a project task, an error 500 appears. Look at the log files to see the stack trace of the exception.',
      asignee: 'Anastasiya Ninova',
      reporter: 'Petya Dimitrova',
      label: 'New',
      estimated: '2d 3h',
      comments: [],
      history: []
    }, {
      id: '101',
      title: 'The settings icon does not appear',
      description: 'When going to the service page, there should be an icon that redirects the user to the settings page for the given asset.',
      asignee: 'Mariya Petrova',
      reporter: 'Anastasiya Ninova',
      label: 'Ready For Code Review',
      estimated: '1d 4h',
      comments: [],
      history: []
    }, {
      id: '103',
      title: 'Change the main color of the app',
      description: '',
      asignee: 'Pavleta',
      reporter: '',
      label: 'New',
      estimated: '',
      comments: [],
      history: []
    }, {
      id: '109',
      title: 'The link does not redirect to the rigth url',
      description: '',
      asignee: 'Anni',
      reporter: '',
      label: 'In Testing',
      estimated: '',
      comments: [],
      history: []
    }, {
      id: '104',
      title: 'Refactor the service class',
      description: '',
      asignee: 'Mimi',
      reporter: '',
      label: 'Ready For Testing',
      estimated: '',
      comments: [],
      history: []
    }, {
      id: '105',
      title: 'The username does not change when updating it',
      description: 'When the user edits his username, it does not change. There is no exception that appears.',
      asignee: 'Petya Dimitrova',
      reporter: 'Mariya Petrova',
      label: 'In Progress',
      estimated: '2d',
      comments: [],
      history: []
    }, {
      id: '99',
      title: 'FileNotFoundException by loading the devices catalog',
      description: 'By rendering the devices catalog a FileNotFoundException is thrown. Images are not found. Maybe the path to a given image could be wrong. Check it!',
      asignee: 'Anastasiya Ninova',
      reporter: 'Mariya Petrova',
      label: 'Closed',
      estimated: '4d',
      comments: [],
      history: []
    }]
  },
  {
    id: uuidv4(),
    title: "Dungeons And Pythons",
    description: "This is a simple 2D, turn-based console game filled with dungeons and pythons. There are a hero, enemies, weapons, treasures, and magic! There is an uncomplicated UI where the user can move his hero, take treasures, and fight with the enemies. When he fights all enemies on his path to the end of the dungeon, he will reach the next level or wins the game.",
    edited: "Last updated 1 day ago",
    img: "https://image.api.playstation.com/cdn/EP4365/CUSA07633_00/bEhaJRoN0hdhFTwJEUKh6JmyDVton6JWKDPSXMNoNtZX3EEk90G8XQz0V232d92c.png",
    members: ['Ivan Dimitrov', 'Petar Stoyanov', 'Vasil Hristov'],
    tasks: [{
      id: '212',
      title: 'Change color palette of the application',
      description: 'The colors of the application should be changed. When starting to work on the task, ping Hristo Vasilev - UI Designer.',
      asignee: 'Ivan Dimitrov',
      reporter: 'Vasil Hristov',
      label: 'New',
      estimated: '1d 2h',
      comments: [],
      history: []
    }, {
      id: '213',
      title: 'Refactor the component regarding the opportunity grid',
      description: 'Code for the opportunity grid is out of date. There is no validations for the main processes.',
      asignee: 'Petar Stoyanov',
      reporter: 'Ivan Dimitrov',
      label: 'New',
      estimated: '3d',
      comments: [],
      history: []
    }]
  },
  {
    id: uuidv4(),
    title: "Belote Declarations",
    description: "Belote is one of the most popular games in Bulgaria. That is just a part of its implementation - the possible declarations in the first trick and the scores generated. The program imitates a game of Belote where the scores are generated only from the declarations of the players.",
    edited: "Last updated 2 hours ago",
    img: "https://www.digitain.com/wp-content/uploads/2021/01/Belote_975x597.png",
    members: ['Nelina Vasileva', 'Valeriya Georgieva', 'Alex Todorova', 'Cvetelina Stoyanova'],
    tasks: [{
      id: '311',
      title: 'Add classes for the players and team',
      description: '',
      asignee: 'Nelina Vasileva',
      reporter: 'Valeriya Georgiev',
      label: 'New',
      estimated: '',
      comments: [],
      history: []
    }, {
      id: '312',
      title: 'Add button for starting a game',
      description: '',
      asignee: 'Alex Todorova',
      reporter: 'Cvetelina Stoyanova',
      label: 'New',
      estimated: '',
      comments: [],
      history: []
    }]
  },
  {
    id: uuidv4(),
    title: "What Now",
    description: "Web application for managing tasks of different software projects.",
    edited: "Last updated 10 min ago",
    img: "https://github.com/yyotova/WhatNow/blob/master/whatnow/tasks/static/work.jpg?raw=true",
    members: ['Ivona Nacheva', 'Krasimira Milanova', 'Nikolai Atanasov'],
    tasks: [{
      id: '410',
      title: 'Returns 500 error when user click projects tab',
      description: '',
      asignee: 'Ivona Nacheva',
      reporter: 'Krasimira Milanova',
      label: 'New',
      estimated: '',
      comments: [],
      history: []
    }, {
      id: '442',
      title: 'Edit profile page',
      description: '',
      asignee: 'Ivana',
      reporter: '',
      label: 'New',
      estimated: '',
      comments: [],
      history: []
    }]
  },
  {
    id: uuidv4(),
    title: "BeerShow",
    description: "Beer show is a mobile application where you can find any kind of beer just with one shoot.",
    edited: "Last updated 1 day ago",
    img: "https://media.cheddars.com/en_us/images/product/beer-bottles.jpg",
    members: ['Veronika Maneva', 'Nadya Yotova', 'Katrina Koleva'],
    tasks: [{
      id: '514',
      title: 'Fix authentication pop up',
      description: '',
      asignee: 'Nadya Yotova',
      reporter: 'Veronika Maneva',
      label: 'New',
      estimated: '',
      comments: [],
      history: []
    }, {
      id: '532',
      title: 'Modifyy header',
      description: '',
      asignee: 'Katrina Koleva',
      reporter: 'Nadya Yotova',
      label: 'New',
      estimated: '',
      comments: [],
      history: []
    }]
  }
]

const useStyles = makeStyles((theme) => ({
  projects: {
    display: 'grid',
    gap: '10px',
    padding: theme.spacing(2.5, 0),
    gridTemplateColumns: 'repeat(auto-fit, 350px)',
    justifyContent: 'space-evenly',
    marginTop: '30px'
  },
  button: {
    marginLeft: '40px',
    marginTop: '50px',
    backgroundColor: '#dba0be',
    border: '1px solid #AD3E73',
    padding: ' 10px 40px',
    '&:hover': {
      backgroundColor: '#dba0be'
    }
  },
}));

export default function Projects() {
  const classes = useStyles();
  const user = useCurrentUser();
  const [newProject, setNewProject] = useState(false);

  const handleCloseDialog = () => {
    setNewProject(false);
  };

  const handleOpenDialog = () => {
    setNewProject(true);
  };

  return (
    <>
      <Container maxWidth="lg">
        {user?.type === 'sa' && <>
          <Button
            size="large"
            onClick={handleOpenDialog}
            className={classes.button}
          >
            Add new project
                </Button>
          <CreateProjectForm
            open={newProject}
            onClose={handleCloseDialog} /></>
        }
        <div className={classes.projects}>
          {projects && projects.map(project =>
            <Project
              key={project.id}
              project={project}
            />)
          }
        </div>
      </Container>
    </>
  );
}
