import React from "react";
import Image from "next/image";
import ButtonPrimary from "../components/ButtonPrimary";

class Hero extends React.Component<{}, { data: any; loaded: boolean }> {
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
    let { header, content, cta, src } = this.state.data;

    return (
      <div className="flex">
        <div>
          <h2 className="text-red-500">{header}</h2>
          <h4>{content}</h4>
          <ButtonPrimary slug={"/slug"} cta={cta} />
          <p>{src}</p>
        </div>
        <div className="">
          <Image src={src} width="792" height="373" />
        </div>
      </div>
    );
  }

  render() {
    return <>{this.state.loaded ? this.content() : null}</>;
  }
}

export default Hero;
