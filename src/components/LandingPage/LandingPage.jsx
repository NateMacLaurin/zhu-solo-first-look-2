import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

import { makeStyles } from '@material-ui/core/styles';

import { Button } from '@material-ui/core';
import { VpnKey } from  '@material-ui/icons';
//import Button from '@material-ui/core/button

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

//pass object of styles we want class name is the key (material-ui only)
const useStyles = makeStyles({
  //make root class
  root : {
    //styles applied to the root class
    height: '48px',
    padding: '0 30px',
    //css border-radius 
    borderRadius: 3,
    background: 'linear-Gradient(45deg, #3FEB8B 30%, #FF8E53 90%)',
  }
});

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();
  const classes = useStyles();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            id felis metus. Vestibulum et pulvinar tortor. Morbi pharetra lacus
            ut ex molestie blandit. Etiam et turpis sit amet risus mollis
            interdum. Suspendisse et justo vitae metus bibendum fringilla sed
            sed justo. Aliquam sollicitudin dapibus lectus, vitae consequat odio
            elementum eget. Praesent efficitur eros vitae nunc interdum, eu
            interdum justo facilisis. Sed pulvinar nulla ac dignissim efficitur.
            Quisque eget eros metus. Vestibulum bibendum fringilla nibh a
            luctus. Duis a sapien metus.
          </p>

          <p>
            Praesent consectetur orci dui, id elementum eros facilisis id. Sed
            id dolor in augue porttitor faucibus eget sit amet ante. Nunc
            consectetur placerat pharetra. Aenean gravida ex ut erat commodo, ut
            finibus metus facilisis. Nullam eget lectus non urna rhoncus
            accumsan quis id massa. Curabitur sit amet dolor nisl. Proin
            euismod, augue at condimentum rhoncus, massa lorem semper lacus, sed
            lobortis augue mi vel felis. Duis ultrices sapien at est convallis
            congue.
          </p>

          <p>
            Fusce porta diam ac tortor elementum, ut imperdiet metus volutpat.
            Suspendisse posuere dapibus maximus. Aliquam vitae felis libero. In
            vehicula sapien at semper ultrices. Vivamus sed feugiat libero. Sed
            sagittis neque id diam euismod, ut egestas felis ultricies. Nullam
            non fermentum mauris. Sed in enim ac turpis faucibus pretium in sit
            amet nisi.
          </p>
        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <Button 
              variant="outlined" 
              color="secondary"
              className={classes.root} 
              startIcon={<VpnKey />}
              onClick={onLogin}
            >
              Login
            </Button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
