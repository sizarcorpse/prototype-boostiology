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
import { Cover } from "components/Cover";
import { Welcome } from "components/Welcome";
// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  Box,
  Grid,
  CssBaseline,
} from "@material-ui/core";

// #other :

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

const useStyles = makeStyles({
  root: {},
});

const HomePage = (props) => {
  const { classes } = props;
  // const { currentUser } = useAuth();
  // const { publicRuntimeConfig } = getConfig();
  const localClasses = useStyles();

  return (
    <Grid>
      <CssBaseline />
      <Cover />
      <Welcome />
    </Grid>
  );
};
export default withStyles(
  (theme) => ({
    //   ...(theme)
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(HomePage);
