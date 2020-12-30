import React from "react";
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
      <div className="container flex items-center mx-auto justify-center">
        <Hero data={this.state.data} />
      </div>
    );
  }

  render() {
    return <>{this.state.loaded ? this.content() : null}</>;
  }
}

export default Home;
