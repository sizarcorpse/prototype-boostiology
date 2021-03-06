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
  Typography,
  CssBaseline,
} from "@material-ui/core";

// #other :
import { Parallax, Background } from "react-parallax";

const useStyles = makeStyles({
  parallaxBackground: {
    position: "relative",
    backgroundPosition: "center",
  },
  coverInfo: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  span: {
    fontSize: 50,
    fontWeight: 200,
    fontStyle: "normal",
    fontVariant: "normal",
    lineHeight: "1em",
    letterSpacing: 1,
    wordSpacing: 0,
  },
});

const Cover = (props) => {
  const { classes } = props;
  // const { currentUser } = useAuth();
  // const { publicRuntimeConfig } = getConfig();
  const localClasses = useStyles();

  return (
    <Grid container component="main">
      <CssBaseline />
      <Grid item xs={12}>
        <Box aria-label="cover-area" width="100%">
          <Parallax bgImage="/cover.jpg" strength={500}>
            <Box
              height={640}
              width="100%"
              className={localClasses.parallaxBackground}
            >
              <Box aria-label="cover-info" className={localClasses.coverInfo}>
                <Box aria-label="we-are" my={1}>
                  <SCTypography
                    color="secondary"
                    fontSize={14}
                    color="white"
                    fontWeight={700}
                  >
                    HI, WE ARE
                  </SCTypography>
                </Box>

                <Box aria-label="boostiology" my={1.5}>
                  <SCTypography
                    aria-label="title-main"
                    variant="h2"
                    color="secondary"
                    fontSize={50}
                    color="white"
                    fontWeight={700}
                  >
                    Boostiology <span className={localClasses.span}>Web</span>
                  </SCTypography>
                </Box>
                <Box aria-label="separator" my={1.5}>
                  <img src="/separatorWhite.png" />
                </Box>
                <Box
                  aria-label="boostiology"
                  my={1.5}
                  width={{
                    xs: "100%",
                    sm: "70%",
                    md: "50%",
                    lg: "40%",
                    xl: "30%",
                  }}
                >
                  <SCTypography
                    aria-label="title-main"
                    variant="h5"
                    color="white"
                    fontWeight={400}
                    whiteSpace="pre-wrap"
                    textAlign="center"
                  >
                    Eat imagine you chiefly few end ferrars compass. Be visitor
                    females am ferrars inquiry. Latter law remark two lively
                    thrown. Spot set they know rest its.
                  </SCTypography>
                </Box>
              </Box>
            </Box>
          </Parallax>
        </Box>
        <Box aria-label="info-area" width="100%">
          <Parallax bgImage="/info.jpg" strength={500}>
            <Box height={320} width="100%">
              <Box
                aria-label="cover-info"
                width="100%"
                height="100%"
                px="50px"
                display="flex"
                alignItems="flex-start"
                justifyContent="center"
                flexDirection="column"
              >
                <Box aria-label="name" my={1}>
                  <SCTypography
                    color="secondary"
                    fontSize={30}
                    color="white"
                    fontWeight={700}
                    textTransform="uppercase"
                    letterSpacing={12}
                  >
                    Boostiology
                  </SCTypography>
                </Box>
                <Box aria-label="separator" my={1.5}>
                  <img src="/lineSeparatorWhite.png" />
                </Box>
                <Box
                  aria-label="boostiology"
                  my={1.5}
                  width={{
                    xs: "100%",
                    sm: "80%",
                    md: "70%",
                    lg: "60%",
                    xl: "50%",
                  }}
                >
                  <SCTypography
                    aria-label="info"
                    className={localClasses.title3}
                    variant="h5"
                    color="white"
                    fontWeight={400}
                    whiteSpace="pre-wrap"
                  >
                    Moments its musical age explain. But extremity sex now
                    education concluded earnestly her continual. Oh furniture
                    acuteness suspected continual ye something frankness. Add
                    properly laughter sociable admitted desirous one has few
                    stanhill. Opinion regular in perhaps another enjoyed no
                    engaged he at.
                  </SCTypography>
                </Box>
              </Box>
            </Box>
          </Parallax>
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
)(Cover);
