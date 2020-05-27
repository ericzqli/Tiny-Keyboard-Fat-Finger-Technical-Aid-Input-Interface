import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Layout } from "antd";
import { Icon } from "antd";
const { Sider } = Layout;
// import { Sider2 } from "./index2";
const key_width = "40px";
const space_width = "60px";

class Keyboardzoomin_1 extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Sider width={space_width}>
            <div id="" class="leftEmpty" />
          </Sider>
          <div onClick={this.props.onClick}>
            <Layout>
              <Sider width={key_width} align="center">
                <div id="" class="topEmpty" />
              </Sider>
              <Sider width={key_width} align="center">
                <div id="w" class="topLetter">
                  W
                </div>
              </Sider>
              <Sider width={key_width} align="center">
                <div id="" class="topEmpty" />
              </Sider>
            </Layout>
            <Layout>
              <Sider width={key_width} align="center">
                <div id="q" class="topLetter">
                  Q
                </div>
              </Sider>
              <Sider width={key_width} align="center">
                <div id="s" class="middleLetter">
                  S
                </div>
              </Sider>
              <Sider width={key_width} align="center">
                <div id="e" class="topLetter">
                  E
                </div>
              </Sider>
            </Layout>
            <Layout>
              <Sider width={key_width} align="center">
                <div id="" class="topEmpty" />
              </Sider>
              <Sider width={key_width} align="center">
                <div id="x" class="topLetter">
                  X
                </div>
              </Sider>
              <Sider width={key_width} align="center">
                <div id="" class="topEmpty" />
              </Sider>
            </Layout>
          </div>
          <Sider width={space_width}>
            <div id="" class="rightEmpty" />
          </Sider>
        </Layout>
      </div>
    );
  }
}

class Keyboardzoomin_2 extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Sider width={space_width}>
            <div id="" class="leftEmpty" />
          </Sider>
          <div onClick={this.props.onClick}>
            <Layout>
              <Sider width={key_width} align="center">
                <div id="" class="topEmpty" />
              </Sider>
              <Sider width={key_width} align="center">
                <div id="t" class="topLetter">
                  T
                </div>
              </Sider>
              <Sider width={key_width} align="center">
                <div id="" class="topEmpty" />
              </Sider>
            </Layout>
            <Layout>
              <Sider width={key_width} align="center">
                <div id="r" class="topLetter">
                  R
                </div>
              </Sider>
              <Sider width={key_width} align="center">
                <div id="g" class="middleLetter">
                  G
                </div>
              </Sider>
              <Sider width={key_width} align="center">
                <div id="y" class="topLetter">
                  Y
                </div>
              </Sider>
            </Layout>
            <Layout>
              <Sider width={key_width} align="center">
                <div id="" class="topEmpty" />
              </Sider>
              <Sider width={key_width} align="center">
                <div id="f" class="topLetter">
                  F
                </div>
              </Sider>
              <Sider width={key_width} align="center">
                <div id="" class="topEmpty" />
              </Sider>
            </Layout>
          </div>
          <Sider width={space_width}>
            <div id="" class="rightEmpty" />
          </Sider>
        </Layout>
      </div>
    );
  }
}

class Keyboardzoomin_3 extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Sider width={space_width}>
            <div id="" class="leftEmpty" />
          </Sider>
          <div onClick={this.props.onClick}>
            <Layout>
              <Sider width={key_width} align="center">
                <div id="" class="topEmpty" />
              </Sider>
              <Sider width={key_width} align="center">
                <div id="i" class="topLetter">
                  I
                </div>
              </Sider>
              <Sider width={key_width} align="center">
                <div id="" class="topEmpty" />
              </Sider>
            </Layout>
            <Layout>
              <Sider width={key_width} align="center">
                <div id="u" class="topLetter">
                  U
                </div>
              </Sider>
              <Sider width={key_width} align="center">
                <div id="delete" class="middleLetter">
                  del
                </div>
              </Sider>
              <Sider width={key_width} align="center">
                <div id="p" class="topLetter">
                  P
                </div>
              </Sider>
            </Layout>
            <Layout>
              <Sider width={key_width} align="center">
                <div id="" class="topEmpty" />
              </Sider>
              <Sider width={key_width} align="center">
                <div id="o" class="topLetter">
                  O
                </div>
              </Sider>
              <Sider width={key_width} align="center">
                <div id="" class="topEmpty" />
              </Sider>
            </Layout>
          </div>
          <Sider width={space_width}>
            <div id="" class="rightEmpty" />
          </Sider>
        </Layout>
      </div>
    );
  }
}

class Keyboardzoomin_4 extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Sider width={space_width}>
            <div id="" class="leftEmpty" />
          </Sider>
          <div onClick={this.props.onClick}>
            <Layout>
              <Sider width={key_width} align="center">
                <div id="" class="topEmpty" />
              </Sider>
              <Sider width={key_width} align="center">
                <div id="a" class="topLetter">
                  A
                </div>
              </Sider>
              <Sider width={key_width} align="center">
                <div id="" class="topEmpty" />
              </Sider>
            </Layout>
            <Layout>
              <Sider width={key_width} align="center">
                <div id="z" class="topLetter">
                  Z
                </div>
              </Sider>
              <Sider width={key_width} align="center">
                <div id="method" class="middleLetter">
                  mod
                </div>
              </Sider>
              <Sider width={key_width} align="center">
                <div id="d" class="topLetter">
                  D
                </div>
              </Sider>
            </Layout>
            <Layout>
              <Sider width={key_width} align="center">
                <div id="" class="topEmpty" />
              </Sider>
              <Sider width={key_width} align="center">
                <div id="c" class="topLetter">
                  C
                </div>
              </Sider>
              <Sider width={key_width} align="center">
                <div id="" class="topEmpty" />
              </Sider>
            </Layout>
          </div>
          <Sider width={space_width}>
            <div id="" class="rightEmpty" />
          </Sider>
        </Layout>
      </div>
    );
  }
}

class Keyboardzoomin_5 extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Sider width={space_width}>
            <div id="" class="leftEmpty" />
          </Sider>
          <div onClick={this.props.onClick}>
            <Layout>
              <Sider width={key_width} align="center">
                <div id="" class="topEmpty" />
              </Sider>
              <Sider width={key_width} align="center">
                <div id="h" class="topLetter">
                  H
                </div>
              </Sider>
              <Sider width={key_width} align="center">
                <div id="" class="topEmpty" />
              </Sider>
            </Layout>
            <Layout>
              <Sider width={key_width} align="center">
                <div id="v" class="topLetter">
                  V
                </div>
              </Sider>
              <Sider width={key_width} align="center">
                <div id="space" class="middleLetter">
                  spa
                </div>
              </Sider>
              <Sider width={key_width} align="center">
                <div id="n" class="topLetter">
                  N
                </div>
              </Sider>
            </Layout>
            <Layout>
              <Sider width={key_width} align="center">
                <div id="" class="topEmpty" />
              </Sider>
              <Sider width={key_width} align="center">
                <div id="b" class="topLetter">
                  B
                </div>
              </Sider>
              <Sider width={key_width} align="center">
                <div id="" class="topEmpty" />
              </Sider>
            </Layout>
          </div>
          <Sider width={space_width}>
            <div id="" class="rightEmpty" />
          </Sider>
        </Layout>
      </div>
    );
  }
}

class Keyboardzoomin_6 extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Sider width={space_width}>
            <div id="" class="leftEmpty" />
          </Sider>
          <div onClick={this.props.onClick}>
            <Layout>
              <Sider width={key_width} align="center">
                <div id="" class="topEmpty" />
              </Sider>
              <Sider width={key_width} align="center">
                <div id="k" class="topLetter">
                  K
                </div>
              </Sider>
              <Sider width={key_width} align="center">
                <div id="" class="topEmpty" />
              </Sider>
            </Layout>
            <Layout>
              <Sider width={key_width} align="center">
                <div id="j" class="topLetter">
                  J
                </div>
              </Sider>
              <Sider width={key_width} align="center">
                <div id="enter" class="middleLetter">
                  ent
                </div>
              </Sider>
              <Sider width={key_width} align="center">
                <div id="l" class="topLetter">
                  L
                </div>
              </Sider>
            </Layout>
            <Layout>
              <Sider width={key_width} align="center">
                <div id="" class="topEmpty" />
              </Sider>
              <Sider width={key_width} align="center">
                <div id="m" class="topLetter">
                  M
                </div>
              </Sider>
              <Sider width={key_width} align="center">
                <div id="" class="topEmpty" />
              </Sider>
            </Layout>
          </div>
          <Sider width={space_width}>
            <div id="" class="rightEmpty" />
          </Sider>
        </Layout>
      </div>
    );
  }
}

export {
  Keyboardzoomin_1,
  Keyboardzoomin_2,
  Keyboardzoomin_3,
  Keyboardzoomin_4,
  Keyboardzoomin_5,
  Keyboardzoomin_6
};
