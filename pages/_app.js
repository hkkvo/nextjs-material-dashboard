import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../styles/theme";
import Router from "next/router";
import { parseCookies } from "nookies";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  // React.useEffect(() => {
  //   // Remove the server-side injected CSS.
  //   const jssStyles = document.querySelector("#jss-server-side");
  //   if (jssStyles) {
  //     jssStyles.parentElement.removeChild(jssStyles);
  //   }
  // }, []);

  const Layout = Component.Layout || EmptyLayout;

  return (
    <React.Fragment>
      <Head>
        <title>Syb</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </React.Fragment>
  );
}

const EmptyLayout = ({ children }) => <>{children} </>;

function redirectUser(ctx, location) {
  console.log("------Redirect user called----------");
  if (ctx.req) {
    console.log("we are inside redirect method");
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  } else {
    console.log("we are inside redirect router");
    Router.push(location);
  }
}

// MyApp.getInitialProps = async (ctx) => {
//   console.log("we are in getinital prop method");

//   const jwt = false;

//   if (!jwt) {
//     console.log("------Inside jwt check----------");
//     if (ctx.ctx.pathname === "/dashboard") {
//       console.log("------Inside path check----------");
//       redirectUser(ctx, "/login");
//     }
//   }

//   return {
//     props: {},
//   };
// };

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
