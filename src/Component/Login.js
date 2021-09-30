import React from "react";
import { Grid, Typography,TextField,Box } from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import logo from '../Images/logo.svg';


const useStyles = makeStyles((theme) => ({
  body: {
    display: "flex",
    justifyContent: "center",
    height:"100%",
    backgroundColor :"black",
  },
  itemcontainer: {
    justifyContent: "center",
    flexDirection: "coloumn",
    height: "100%"
  },
  header : {
     margin: "75px 0px 0px 0px"
  },
  title:{
    fontSize: "24px",
    fontWeight: "bold",
    fontFamily: "Mulish",
    lineHeight : "30px",
  },
  subTitle:{
    fontSize: "12px",
    lineHeight:"20px",
    fontFamily: "Mulish",
    margin: "13px 0px 0px 0px"
  },
  form:{
   margin: "20px 0px 0px 0px",
  }
}));

const Login = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.body}>
      <Grid container className={classes.itemcontainer}>
        <Grid
          item
          style={{ width: "365px", height: "582px", backgroundColor: "white",margin:"82px",padding:"28px"}}
        >   
        <div className={classes.header}>
               <Typography align="center">
                    <img src={logo} alt="tejimandi logo"></img>
                </Typography>
                <Box margin="41px">
                <Typography className={classes.title} variant="inherit">
                 Log in to Admin CMS
                </Typography>
                <Typography className={classes.subTitle} >
                Enter your email and password below
                </Typography>
                </Box>
         </div>
         <form className="form">
          <Grid container>
              <Grid item  xs={12} sm={12} md={12} lg={12}>
                  <Typography>
                      Email
                  </Typography>
                  </Grid>
               
             <Grid item >
             <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth/>
                  </Grid>
          </Grid>
     <Grid container spacing={9}>
         <Grid item>
             <Typography>
                Password
             </Typography>
             </Grid>
             <Grid item>
                 <Typography>
                     Forget password
                 </Typography>
                 </Grid>
     </Grid>

         </form>
            
        </Grid>

      </Grid>
    </Grid>
  );
};

export default Login;
