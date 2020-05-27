import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Layout } from "antd";
import { Icon } from "antd";
import { Keyboardzoomin_1 } from "./App1";
const { Header, Footer, Sider, Content } = Layout;
const key_width = "100px";

class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: "good" };
    this.handleevent = this.handleevent.bind(this);
  }
  handleevent() {
    const newMood = this.state.mood == "good" ? "bad" : "good";
    this.setState({ mood: newMood });
  }
  render() {
    return (
      <div>
        <Layout>
          <Header>This is the header</Header>
          <Layout>
            <Sider width={key_width} align="center">
              <div style={{ background: "#070707", color: "#fff" }}>W</div>
              <div
                style={{
                  background: "#070707",
                  color: "#fff"
                }}
              >
                Q S E
              </div>
              <div style={{ background: "#070707", color: "#fff" }}>X</div>
            </Sider>
            <Sider width={key_width} align="center">
              <div style={{ background: "#fff", color: "#070707" }}>T</div>
              <div
                style={{
                  background: "#fff",
                  color: "#070707"
                }}
              >
                R G Y
              </div>
              <div style={{ background: "#fff", color: "#070707" }}>F</div>
            </Sider>
            <Sider width={key_width} align="center">
              <div style={{ background: "#070707", color: "#fff" }}>I</div>
              <div
                style={{
                  background: "#070707",
                  color: "#fff"
                }}
              >
                U <Icon type="swap-left" /> P
              </div>
              <div style={{ background: "#070707", color: "#fff" }}>O</div>
            </Sider>
          </Layout>
          <Layout>
            <Sider width={key_width} align="center">
              <div style={{ background: "#fff", color: "#070707" }}>A</div>
              <div
                style={{
                  background: "#fff",
                  color: "#070707"
                }}
              >
                Z <Icon type="dribbble" /> D
              </div>
              <div style={{ background: "#fff", color: "#070707" }}>C</div>
            </Sider>

            <Sider width={key_width} align="center">
              <div style={{ background: "#070707", color: "#fff" }}>H</div>
              <div
                style={{
                  background: "#070707",
                  color: "#fff",
                  fontsize: "10px"
                }}
              >
                V <Icon type="vertical-align-bottom" /> N
              </div>
              <div style={{ background: "#070707", color: "#fff" }}>B</div>
            </Sider>

            <Sider
              width={key_width}
              align="center"
              onClick={Keyboardzoomin_1.render()}
            >
              <div style={{ background: "#fff", color: "#070707" }}>K</div>
              <div
                style={{
                  background: "#fff",
                  color: "#070707"
                }}
              >
                J <Icon type="enter" /> L
              </div>
              <div style={{ background: "#fff", color: "#070707" }}>M</div>
            </Sider>
          </Layout>
        </Layout>
        <Footer>This is the Footer</Footer>
      </div>
    );
  }
}

ReactDOM.render(<Keyboard />, document.getElementById("root"));
