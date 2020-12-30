import React from "react";
import Head from "next/head";
import Hero from "../components/Hero";

class Home extends React.Component<{}, { data: any; loaded: boolean }> {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      loaded: false,
    };
  }

  getData = () => {
    return fetch("./api/cms");
  };

  async componentDidMount() {
    await this.getData()
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          data: data,
          loaded: true,
        })
      );
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
