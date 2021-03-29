// #next :
// import getConfig from 'next/config';
// import {useRouter} from 'next/router';
// import Link from 'next/link';
// import Image from 'next/image';
// import useSWR, { trigger, mutate } from 'swr';
// #contexts :
// import { useAuth } from 'contexts/AuthContext';
// #hooks :

// #components :
import { SCTypography } from "components/UI";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Grid,
  Box,
  CssBaseline,
} from "@material-ui/core";

// #other :

const useStyles = makeStyles({
  root: {
    backgroundImage: "url('/welcome.jpg')",
    backgroundPosition: "center",
    repeat: "no-repeat",
    backgroundSize: "cover",
  },
});

const Welcome = (props) => {
  const { classes } = props;
  // const { currentUser } = useAuth();
  // const { publicRuntimeConfig } = getConfig();
  const localClasses = useStyles();

  return (
    <Grid container component="main" className={localClasses.root}>
      <CssBaseline />
      <Grid item xs={4}></Grid>
      <Grid item xs={8}>
        <Box
          aria-label="welcome-area"
          width="100%"
          height="100%"
          height={500}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Box aria-label="welcome" my={2}>
            <SCTypography
              aria-label="title-main"
              variant="h2"
              color="secondary"
              fontSize={50}
              color="white"
              fontWeight={700}
              letterSpacing={25}
              color="#1d1d1d"
            >
              WELCOME
            </SCTypography>
          </Box>
          <Box aria-label="separator" my={2}>
            <img src="/separatorBlack.png" />
          </Box>
          <Box
            aria-label="welcome-info"
            my={2}
            width={{
              xs: "100%",
              sm: "90%",
              md: "80%",
              lg: "70%",
              xl: "70%",
            }}
          >
            {" "}
            <SCTypography
              aria-label="title-main"
              variant="h5"
              color="white"
              fontWeight={400}
              whiteSpace="pre-wrap"
              textAlign="center"
              color="#1d1d1d"
            >
              For who thoroughly her boy estimating conviction. Removed demands
              expense account in outward tedious do. Particular way thoroughly
              unaffected projection favourable mrs can projecting own.
            </SCTypography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(Welcome);
