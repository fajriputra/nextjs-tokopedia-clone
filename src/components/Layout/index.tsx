import React from "react";
import Head from "next/head";
import Header from "components/Header";
import { Box, Container } from "@mui/material";

interface LayoutProps {
  children: React.ReactNode;
  metaType?: string;
  metaDescription?: string;
  metaTitle?: string;
  metaKeyword?: string;
  metaOgUrl?: string;
  metaOgDescription?: string;
  metaOgImage?: string;
}

export default function Layout(props: Partial<LayoutProps>) {
  const {
    children,
    metaType,
    metaDescription,
    metaTitle,
    metaKeyword,
    metaOgUrl,
    metaOgDescription,
    metaOgImage,
  } = props;

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:type" content={metaType} />
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta name="keywords" content={metaKeyword} />
        <meta property="og:url" content={metaOgUrl} />
        <meta property="og:description" content={metaOgDescription} />
        <meta property="og:image" content={metaOgImage} />
      </Head>
      <Box
        sx={{
          boxShadow: "0 4px 6px -1px rgb(0 0 0 / 7%)",
          marginBottom: "1.5rem",
        }}
      >
        <Container maxWidth="xl" sx={{ bgcolor: "#fff" }}>
          <Header />
        </Container>
      </Box>
      <Container
        maxWidth="xl"
        sx={{
          bgcolor: "#fff",
          "&.MuiContainer-root": {
            paddingLeft: 0,
            paddingRight: 0,
          },
        }}
        component="main"
      >
        {children}
      </Container>
    </>
  );
}
