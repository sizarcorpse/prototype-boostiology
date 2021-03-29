import PropTypes from "prop-types";
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

// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import {
  withStyles,
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Box,
  Container,
} from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

// #other :

const useStyles = makeStyles({
  root: {
    background: "transparent",
    height: 100,
    maxHeight: 100,
    color: "red",
    display: "flex",
    justifyContent: "center",
    padding: "0px 40px",
  },
  scroll: {
    background: "#333",
    height: 73,
    maxHeight: 73,
    display: "flex",
    justifyContent: "center",
    padding: "0px 40px",
  },
  toolbar: {
    width: "100%",
  },
  menu: {
    cursor: "pointer",
  },
  item: {
    color: "#777",
    "&:hover": {
      color: "white",
    },
  },
});

const Navigation = (props) => {
  const { classes } = props;
  const localClasses = useStyles();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  return (
    <AppBar
      elevation={0}
      className={trigger ? localClasses.scroll : localClasses.root}
    >
      <Toolbar className={localClasses.toolbar}>
        <Box aria-label="navigation-area" width="100%" display="flex">
          <Box aria-label="website-logo" display="flex" flexGrow={1}>
            <Typography variant="h4">BOOSTIOLOGY</Typography>
          </Box>
          <Box aria-label="navigation-menu" display="flex">
            {["Home", "About", "Portfolio", "Team", "Services", "Contact"].map(
              (item, i) => (
                <Box key={i} mx={3} className={localClasses.menu}>
                  <Typography variant="h6" className={localClasses.item}>
                    {item}
                  </Typography>
                </Box>
              )
            )}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default withStyles(
  (theme) => ({
    //   ...(theme)
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(Navigation);
