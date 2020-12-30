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
    return fetch("http://localhost:3000/api/cms");
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
            href={`https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400&family=Josefin+Slab&display=swap`}
            rel="stylesheet"
          />
        </Head>

        <Hero data={this.state.data} />
      </>
    );
  }

  render() {
    return <>{this.state.loaded ? this.content() : null}</>;
  }
}

export default Home;
