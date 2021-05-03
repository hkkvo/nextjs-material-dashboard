import Head from "next/head";

//Component Import

import CommonLayout from "../layouts/CommonLayout";
import MediaCard from "../components/card/MediaCard";

//Material UI Import
import {
  Typography,
  Grid,
  Container,
  Paper,
  makeStyles,
  Button,
  Card,
  CardMedia,
} from "@material-ui/core";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  slider: {
    position: "relative",
    width: "100%",
    height: "400px",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid container>
        <Paper className={classes.slider}> This is going to be slider</Paper>
      </Grid>
      <Grid container style={{ marginTop: "30px", marginBottom: "50px" }}>
        <Grid item xs={12} sm={6}>
          <div style={{ marginLeft: "8px", marginBottom: "10px" }}>
            <Typography variant='h3'>Who We Are</Typography>
          </div>
          <div
            style={{
              marginRight: "8px",
              marginLeft: "8px",

              borderLeft: "5px solid #ff575d",
              paddingLeft: "8px",
            }}
          >
            <Typography align='justify'>
              National Informatics Centre (NIC) was established in 1976, and has
              since emerged as a “prime builder” of e-Government / e-Governance
              applications up to the grassroots level as well as a promoter of
              digital opportunities for sustainable development. NIC, through
              its ICT Network, “NICNET”, has institutional linkages with all the
              Ministries /Departments of the Central Government, 35 State
              Governments/ Union Territories, and about 718 District
              administrations of India. NIC has been instrumental in steering
              e-Government/e-Governance applications in government
              ministries/departments at the Center, States, Districts and
              Blocks, facilitating improvement in government services, wider
              transparency, promoting decentralized planning and management,
              resulting in better efficiency and accountability to the people of
              India.
            </Typography>
          </div>
          <div style={{ marginLeft: "8px", marginTop: "10px" }}>
            <Button style={{ fontWeight: 600, color: "#ff575d" }}>
              Know More
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div
            style={{
              marginRight: "8px",
              marginLeft: "8px",

              backgroundColor: "gray",
              overflow: "hidden",
            }}
          >
            <Card
              style={{
                overflow: "hidden",
                paddingLeft: "20%",
                paddingTop: "10%",
              }}
            >
              <CardMedia>
                <Image
                  src='/index/nic_building.jpeg'
                  width={400}
                  height={200}
                />
              </CardMedia>
            </Card>
          </div>
        </Grid>
      </Grid>
      <Grid container item xs={12}>
        <div style={{ marginLeft: "8px", marginBottom: "40px" }}>
          <Typography variant='h3'>What we do</Typography>
        </div>
      </Grid>
      <Grid
        container
        justify='space-around'
        container
        style={{ marginBottom: "50px" }}
      >
        <Grid item xs={12} sm={3}>
          <MediaCard />
        </Grid>
        <Grid item xs={12} sm={3}>
          <MediaCard />
        </Grid>
        <Grid item xs={12} sm={3}>
          <MediaCard />
        </Grid>
      </Grid>
    </Grid>
  );
}

Home.Layout = CommonLayout;
