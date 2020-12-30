import React from "react";
import Head from "next/head";
import Hero from "../components/Hero";

export async function getServerSideProps(context) {
  let host = context.req.headers.host;
  let protocol = "";

  if (host === "localhost:3000") {
    protocol = "http://";
  } else {
    protocol = "https://"
  }

  const res = await fetch(protocol + context.req.headers.host + "/api/cms");
  const data = await res.json();

  return { props: { data } };
};

class Home extends React.Component<{ data }, { data: any; loaded: boolean }> {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      loaded: false,
    };
  }

  componentDidMount() {
    this.setState({
      data: this.props.data,
      loaded: true
    })
  }

  content() {
    return (
      <>
        <Head>
          <link rel="preconnect" href={`https://fonts.gstatic.com`} />
          <link
            href={`https://fonts.googleapis.com/css2?family=Cabin+Condensed:wght@700&family=Oxygen:wght@700&display=swap`}
            rel="stylesheet"
          />
        </Head>

        <Hero
          header={this.state.data.header}
          content={this.state.data.content}
          cta={this.state.data.cta}
          src={this.state.data.src}
        />
      </>
    );
  }

  render() {
    return <>{this.state.loaded ? this.content() : null}</>;
  }
}

export default Home;
