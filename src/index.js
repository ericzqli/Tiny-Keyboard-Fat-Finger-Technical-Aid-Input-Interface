import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Layout } from "antd";
import {
  Keyboardzoomin_1,
  Keyboardzoomin_2,
  Keyboardzoomin_3,
  Keyboardzoomin_4,
  Keyboardzoomin_5,
  Keyboardzoomin_6
} from "./App";
const { Header, Footer, Sider } = Layout;
//const key_width = "100px";
const key_width = "40px";
const space_width = "60px";

class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keytype: 0,
      methodtype: 0,
      input: 0,
      area: 4,
      header: "Please type!",
      footer: "You are using the slow typing method!",
      xStart: 0,
      yStart: 0,
      direction: 1
    };
    this.handleClick_0 = this.handleClick_0.bind(this);
    this.handleClick_1 = this.handleClick_1.bind(this);
    this.handleClick_2 = this.handleClick_2.bind(this);
    this.handleClick_3 = this.handleClick_3.bind(this);
    this.handleClick_4 = this.handleClick_4.bind(this);
    this.handleClick_5 = this.handleClick_5.bind(this);
    this.handleClick_6 = this.handleClick_6.bind(this);
    //this.handleMouseover = this.handleMouseover.bind(this);
    // this.handleMousedown = this.handleMousedown.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.handleClick_fast = this.handleClick_fast.bind(this);
  }
  handleClick_0() {
    let x = event.target;
    if (x.id === "space") {
      this.setState({ header: this.state.header + " " });
    } else if (x.id === "enter") {
      this.setState({ header: "" });
    } else if (x.id === "delete") {
      let y = this.state.header.substring(0, this.state.header.length - 1);
      this.setState({ header: y });
    } else if (x.id === "method") {
      const newmethod = this.state.methodtype === 0 ? 1 : 0;
      if (newmethod === 0) {
        this.setState({ footer: "You are using the slow typing method!" });
      } else {
        this.setState({ footer: "You are using the fast typing method!" });
      }
      this.setState({ methodtype: newmethod });
    } else {
      this.setState({ header: this.state.header + x.id });
    }
    this.setState({ keytype: 0 });
  }
  handleClick_1() {
    this.setState({ keytype: 1 });
  }
  handleClick_2() {
    this.setState({ keytype: 2 });
  }
  handleClick_3() {
    this.setState({ keytype: 3 });
  }
  handleClick_4() {
    this.setState({ keytype: 4 });
  }
  handleClick_5() {
    this.setState({ keytype: 5 });
  }
  handleClick_6() {
    this.setState({ keytype: 6 });
  }
  handleClick_fast() {
    if (1) {
      let y = event.target;
      if (
        y.id === "1" ||
        y.id === "q" ||
        y.id === "w" ||
        y.id === "s" ||
        y.id === "e"
      ) {
        this.setState({ header: this.state.header + "s" });
      } else if (
        y.id === "2" ||
        y.id === "r" ||
        y.id === "t" ||
        y.id === "y" ||
        y.id === "f"
      ) {
        this.setState({ header: this.state.header + "g" });
      } else if (
        y.id === "3" ||
        y.id === "u" ||
        y.id === "i" ||
        y.id === "p" ||
        y.id === "o"
      ) {
        let z = this.state.header.substring(0, this.state.header.length - 1);
        this.setState({ header: z });
      } else if (
        y.id === "4" ||
        y.id === "z" ||
        y.id === "a" ||
        y.id === "d" ||
        y.id === "c"
      ) {
        const newmethod = this.state.methodtype === 0 ? 1 : 0;
        if (newmethod === 0) {
          this.setState({ footer: "You are using the slow typing method!" });
        } else {
          this.setState({ footer: "You are using the fast typing method!" });
        }
        this.setState({ methodtype: newmethod });
      } else if (
        y.id === "5" ||
        y.id === "v" ||
        y.id === "h" ||
        y.id === "n" ||
        y.id === "b"
      ) {
        this.setState({ header: this.state.header + " " });
      } else if (
        y.id === "6" ||
        y.id === "j" ||
        y.id === "k" ||
        y.id === "l" ||
        y.id === "m"
      ) {
        this.setState({ header: "" });
      }
      this.setState({ input: 0 });
    }
  }
  handleTouchStart(event) {
    event.preventDefault();
    //获取第一个触点
    var xStart = Number(event.touches[0].pageX); //页面触点X坐标
    var yStart = Number(event.touches[0].pageY); //页面触点Y坐标
    //  this.setState({ input: 1 });
    this.setState({ xStart: xStart });
    this.setState({ yStart: yStart });
    let y = event.target;
    if (y.id === "1") {
      this.setState({ area: 1 });
    } else if (y.id === "2") {
      this.setState({ area: 2 });
    } else if (y.id === "3") {
      this.setState({ area: 3 });
    } else if (y.id === "4") {
      this.setState({ area: 4 });
    } else if (y.id === "5") {
      this.setState({ area: 5 });
    } else if (y.id === "6") {
      this.setState({ area: 6 });
    }
  }

  handleTouchEnd(event) {
    event.preventDefault();

    var xEnd = Number(event.changedTouches[0].pageX); //页面触点X坐标
    var yEnd = Number(event.changedTouches[0].pageY); //页面触点Y坐标
    var xStart = this.state.xStart;
    var yStart = this.state.yStart;
    var xMove = xEnd - xStart;
    var yMove = yEnd - yStart;

    //1, 2, 3, 4 stand for right, left, top, down parts
    if (Math.abs(xMove) > Math.abs(yMove)) {
      if (xMove > 0) {
        this.state.direction = 1;
      }
      if (xMove < 0) {
        this.state.direction = 2;
      }
    }
    if (Math.abs(xMove) < Math.abs(yMove)) {
      if (yMove > 0) {
        this.state.direction = 4;
      }
      if (yMove < 0) {
        this.state.direction = 3;
      }
    }

    if (Math.abs(xMove * yMove) < 10) {
      this.state.direction = 5;
    }

    if (1) {
      const keyarea = this.state.area;
      const direction = this.state.direction;
      let y = event.target;
      if (keyarea === 1) {
        // if (y.id === "q" || y.id === "w" || y.id === "e" || y.id === "x") {
        //   this.setState({ header: this.state.header + y.id });
        // }
        if (direction === 1) {
          this.setState({ header: this.state.header + "e" });
        }
        if (direction === 2) {
          this.setState({ header: this.state.header + "q" });
        }
        if (direction === 3) {
          this.setState({ header: this.state.header + "w" });
        }
        if (direction === 4) {
          this.setState({ header: this.state.header + "x" });
        }
        if (direction === 5) {
          this.setState({ header: this.state.header + "s" });
        }
      }

      // else if (keyarea === 2) {
      //   if (y.id === "r" || y.id === "t" || y.id === "y" || y.id === "f") {
      //     this.setState({ header: this.state.header + y.id });
      //   }
      // } else if (keyarea === 3) {
      //   if (y.id === "u" || y.id === "i" || y.id === "p" || y.id === "o") {
      //     this.setState({ header: this.state.header + y.id });
      //   }
      // } else if (keyarea === 4) {
      //   if (y.id === "z" || y.id === "a" || y.id === "d" || y.id === "c") {
      //     this.setState({ header: this.state.header + y.id });
      //   }
      // } else if (keyarea === 5) {
      //   if (y.id === "v" || y.id === "h" || y.id === "n" || y.id === "b") {
      //     this.setState({ header: this.state.header + y.id });
      //   }
      // } else if (keyarea === 6) {
      //   if (y.id === "j" || y.id === "k" || y.id === "l" || y.id === "m") {
      //     this.setState({ header: this.state.header + y.id });
      //   }
      // }
      if (keyarea === 2) {
        // if (y.id === "q" || y.id === "w" || y.id === "e" || y.id === "x") {
        //   this.setState({ header: this.state.header + y.id });
        // }
        if (direction === 1) {
          this.setState({ header: this.state.header + "y" });
        }
        if (direction === 2) {
          this.setState({ header: this.state.header + "r" });
        }
        if (direction === 3) {
          this.setState({ header: this.state.header + "t" });
        }
        if (direction === 4) {
          this.setState({ header: this.state.header + "f" });
        }
        if (direction === 5) {
          this.setState({ header: this.state.header + "g" });
        }
      }

      if (keyarea === 3) {
        // if (y.id === "q" || y.id === "w" || y.id === "e" || y.id === "x") {
        //   this.setState({ header: this.state.header + y.id });
        // }
        if (direction === 1) {
          this.setState({ header: this.state.header + "p" });
        }
        if (direction === 2) {
          this.setState({ header: this.state.header + "u" });
        }
        if (direction === 3) {
          this.setState({ header: this.state.header + "i" });
        }
        if (direction === 4) {
          this.setState({ header: this.state.header + "o" });
        }
        if (direction === 5) {
          this.setState({
            header: this.state.header.substring(0, this.state.header.length - 1)
          });
        }
      }

      if (keyarea === 4) {
        // if (y.id === "q" || y.id === "w" || y.id === "e" || y.id === "x") {
        //   this.setState({ header: this.state.header + y.id });
        // }
        if (direction === 1) {
          this.setState({ header: this.state.header + "d" });
        }
        if (direction === 2) {
          this.setState({ header: this.state.header + "z" });
        }
        if (direction === 3) {
          this.setState({ header: this.state.header + "a" });
        }
        if (direction === 4) {
          this.setState({ header: this.state.header + "c" });
        }
        if (direction === 5) {
          const newmethod = this.state.methodtype === 0 ? 1 : 0;
          if (newmethod === 0) {
            this.setState({ footer: "You are using the slow typing method!" });
          } else {
            this.setState({ footer: "You are using the fast typing method!" });
          }
          this.setState({ methodtype: newmethod });
        }
      }

      if (keyarea === 5) {
        // if (y.id === "q" || y.id === "w" || y.id === "e" || y.id === "x") {
        //   this.setState({ header: this.state.header + y.id });
        // }
        if (direction === 1) {
          this.setState({ header: this.state.header + "n" });
        }
        if (direction === 2) {
          this.setState({ header: this.state.header + "v" });
        }
        if (direction === 3) {
          this.setState({ header: this.state.header + "h" });
        }
        if (direction === 4) {
          this.setState({ header: this.state.header + "b" });
        }
        if (direction === 5) {
          this.setState({ header: this.state.header + " " });
        }
      }

      if (keyarea === 6) {
        // if (y.id === "q" || y.id === "w" || y.id === "e" || y.id === "x") {
        //   this.setState({ header: this.state.header + y.id });
        // }
        if (direction === 1) {
          this.setState({ header: this.state.header + "l" });
        }
        if (direction === 2) {
          this.setState({ header: this.state.header + "j" });
        }
        if (direction === 3) {
          this.setState({ header: this.state.header + "k" });
        }
        if (direction === 4) {
          this.setState({ header: this.state.header + "m" });
        }
        if (direction === 5) {
          this.setState({ header: " " });
        }
      }

      this.setState({ input: 1 });
    }
  }

  // handleMousedown() {
  //   this.setState({ input: 1 });
  //   let y = event.target;
  //   if (y.id === "1") {
  //     this.setState({ area: 1 });
  //   } else if (y.id === "2") {
  //     this.setState({ area: 2 });
  //   } else if (y.id === "3") {
  //     this.setState({ area: 3 });
  //   } else if (y.id === "4") {
  //     this.setState({ area: 4 });
  //   } else if (y.id === "5") {
  //     this.setState({ area: 5 });
  //   } else if (y.id === "6") {
  //     this.setState({ area: 6 });
  //   }
  // }
  // handleMouseover(event) {
  //   event.preventDefault();
  //   if (this.state.input === 1) {
  //     const keyarea = this.state.area;
  //     let y = event.target;
  //     if (keyarea === 1) {
  //       if (y.id === "q" || y.id === "w" || y.id === "e" || y.id === "x") {
  //         this.setState({ header: this.state.header + y.id });
  //       }
  //     } else if (keyarea === 2) {
  //       if (y.id === "r" || y.id === "t" || y.id === "y" || y.id === "f") {
  //         this.setState({ header: this.state.header + y.id });
  //       }
  //     } else if (keyarea === 3) {
  //       if (y.id === "u" || y.id === "i" || y.id === "p" || y.id === "o") {
  //         this.setState({ header: this.state.header + y.id });
  //       }
  //     } else if (keyarea === 4) {
  //       if (y.id === "z" || y.id === "a" || y.id === "d" || y.id === "c") {
  //         this.setState({ header: this.state.header + y.id });
  //       }
  //     } else if (keyarea === 5) {
  //       if (y.id === "v" || y.id === "h" || y.id === "n" || y.id === "b") {
  //         this.setState({ header: this.state.header + y.id });
  //       }
  //     } else if (keyarea === 6) {
  //       if (y.id === "j" || y.id === "k" || y.id === "l" || y.id === "m") {
  //         this.setState({ header: this.state.header + y.id });
  //       }
  //     }

  //     this.setState({ input: 0 });
  //   }
  // }

  render() {
    if (this.state.methodtype === 0) {
      if (this.state.keytype === 0) {
        return (
          <div>
            <Header>{this.state.header}</Header>
            <Layout>
              <Sider width={space_width}>
                <div id="" class="leftEmpty" />
              </Sider>
              <div>
                <Layout>
                  <Sider
                    width={key_width}
                    align="center"
                    onClick={this.handleClick_1}
                  >
                    <div className="middleCom">
                      <div className="upBorder" />
                      <div className="upLetterB">W</div>

                      <div className="leftLetterB">Q</div>
                      <div className="middleLetterB">S</div>
                      <div className="rightLetterB">E</div>

                      <div className="downLetterB">X</div>
                      <div className="downBorder" />
                    </div>
                  </Sider>

                  <Sider
                    width={key_width}
                    align="center"
                    onClick={this.handleClick_2}
                  >
                    <div className="middleCom">
                      <div className="upBorder" />
                      <div className="upLetterW">T</div>

                      <div className="leftLetterW">R</div>
                      <div className="middleLetterW">G</div>
                      <div className="rightLetterW">Y</div>

                      <div className="downLetterW">F</div>
                      <div className="downBorder" />
                    </div>
                  </Sider>
                  <Sider
                    width={key_width}
                    align="center"
                    onClick={this.handleClick_3}
                  >
                    <div className="middleCom">
                      <div className="upBorder" />
                      <div className="upLetterB">I</div>

                      <div className="leftLetterB">U</div>
                      <div className="middleLetterB2">del</div>
                      <div class="rightLetterB">P</div>

                      <div class="downLetterB">O</div>
                      <div class="downBorder" />
                    </div>
                  </Sider>
                </Layout>

                <Layout>
                  <Sider
                    width={key_width}
                    align="center"
                    onClick={this.handleClick_4}
                  >
                    <div class="middleCom">
                      <div class="upBorder" />
                      <div class="upLetterW">A</div>

                      <div class="leftLetterW">Z</div>
                      <div class="middleLetterW2">mod</div>
                      <div class="rightLetterW">D</div>

                      <div class="downLetterW">C</div>
                      <div class="downBorder" />
                    </div>
                  </Sider>

                  <Sider
                    width={key_width}
                    align="center"
                    onClick={this.handleClick_5}
                  >
                    <div class="middleCom">
                      <div class="upBorder" />
                      <div class="upLetterB">H</div>

                      <div class="leftLetterB">V</div>
                      <div class="middleLetterB2">spa</div>
                      <div class="rightLetterB">N</div>

                      <div class="downLetterB">B</div>
                      <div class="downBorder" />
                    </div>
                  </Sider>
                  <Sider
                    width={key_width}
                    align="center"
                    onClick={this.handleClick_6}
                  >
                    <div class="middleCom">
                      <div class="upBorder" />
                      <div class="upLetterW">K</div>

                      <div class="leftLetterW">J</div>
                      <div class="middleLetterW2">ent</div>
                      <div class="rightLetterW">L</div>

                      <div class="downLetterW">M</div>
                      <div class="downBorder" />
                    </div>
                  </Sider>
                </Layout>
              </div>
              <Sider width={space_width}>
                <div id="" class="rightEmpty" />
              </Sider>
            </Layout>
            <Footer>{this.state.footer}</Footer>
          </div>
        );
      } else if (this.state.keytype === 1) {
        return (
          <div>
            <Header>{this.state.header}</Header>
            <Keyboardzoomin_1 onClick={this.handleClick_0} />
            <Footer>{this.state.footer}</Footer>
          </div>
        );
      } else if (this.state.keytype === 2) {
        return (
          <div>
            <Header>{this.state.header}</Header>
            <Keyboardzoomin_2 onClick={this.handleClick_0} />
            <Footer>{this.state.footer}</Footer>
          </div>
        );
      } else if (this.state.keytype === 3) {
        return (
          <div>
            <Header>{this.state.header}</Header>
            <Keyboardzoomin_3 onClick={this.handleClick_0} />
            <Footer>{this.state.footer}</Footer>
          </div>
        );
      } else if (this.state.keytype === 4) {
        return (
          <div>
            <Header>{this.state.header}</Header>
            <Keyboardzoomin_4 onClick={this.handleClick_0} />
            <Footer>{this.state.footer}</Footer>
          </div>
        );
      } else if (this.state.keytype === 5) {
        return (
          <div>
            <Header>{this.state.header}</Header>
            <Keyboardzoomin_5 onClick={this.handleClick_0} />
            <Footer>{this.state.footer}</Footer>
          </div>
        );
      } else {
        return (
          <div>
            <Header>{this.state.header}</Header>
            <Keyboardzoomin_6 onClick={this.handleClick_0} />
            <Footer>{this.state.footer}</Footer>
          </div>
        );
      }
    } else {
      return (
        <div
          onTouchStart={this.handleTouchStart}
          onTouchEnd={this.handleTouchEnd}
          onClick={this.handleClick_fast}
          //onMouseDown={this.handleMousedown}
        >
          <Header>{this.state.header}</Header>
          <Layout>
            <Sider width={space_width}>
              <div id="" class="leftEmpty" />
            </Sider>
            <div>
              <Layout>
                <Sider width={key_width} align="center" line-height="50">
                  <div onMouseOver={this.handleMouseover} id="q" />
                  <div class="middleCom">
                    <div
                      onMouseOver={this.handleMouseover}
                      id="w"
                      class="upBorder"
                    />
                    <div id="1" class="upLetterB">
                      W
                    </div>

                    <div id="1" class="leftLetterB">
                      Q
                    </div>
                    <div id="1" class="middleLetterB">
                      S
                    </div>
                    <div id="1" class="rightLetterB">
                      E
                    </div>

                    <div id="1" class="downLetterB">
                      X
                    </div>
                    <div
                      onMouseOver={this.handleMouseover}
                      id="x"
                      class="downBorder"
                    />
                  </div>

                  <div onMouseOver={this.handleMouseover} id="e" />
                </Sider>

                <Sider width={key_width} align="center">
                  <div onMouseOver={this.handleMouseover} id="r" />
                  <div class="middleCom">
                    <div
                      onMouseOver={this.handleMouseover}
                      id="t"
                      class="upBorder"
                    />
                    <div id="2" class="upLetterW">
                      T
                    </div>

                    <div id="2" class="leftLetterW">
                      R
                    </div>
                    <div id="2" class="middleLetterW">
                      G
                    </div>
                    <div id="2" class="rightLetterW">
                      Y
                    </div>

                    <div id="2" class="downLetterW">
                      F
                    </div>
                    <div
                      onMouseOver={this.handleMouseover}
                      id="f"
                      class="downBorder"
                    />
                  </div>

                  <div onMouseOver={this.handleMouseover} id="y" />
                </Sider>
                <Sider width={key_width} align="center">
                  <div onMouseOver={this.handleMouseover} id="u" />
                  <div class="middleCom">
                    <div
                      onMouseOver={this.handleMouseover}
                      id="i"
                      class="upBorder"
                    />
                    <div id="3" class="upLetterB">
                      I
                    </div>

                    <div id="3" class="leftLetterB">
                      U
                    </div>
                    <div id="3" class="middleLetterB2">
                      del
                    </div>
                    <div id="3" class="rightLetterB">
                      P
                    </div>

                    <div id="3" class="downLetterB">
                      O
                    </div>
                    <div
                      onMouseOver={this.handleMouseover}
                      id="o"
                      class="downBorder"
                    />
                  </div>

                  <div onMouseOver={this.handleMouseover} id="p" />
                </Sider>
              </Layout>

              <Layout>
                <Sider width={key_width} align="center">
                  <div onMouseOver={this.handleMouseover} id="z" />
                  <div class="middleCom">
                    <div
                      onMouseOver={this.handleMouseover}
                      id="a"
                      class="upBorder"
                    />
                    <div id="4" class="upLetterW">
                      A
                    </div>

                    <div id="4" class="leftLetterW">
                      Z
                    </div>
                    <div id="4" class="middleLetterW2">
                      mod
                    </div>
                    <div id="4" class="rightLetterW">
                      D
                    </div>

                    <div id="4" class="downLetterW">
                      C
                    </div>
                    <div
                      onMouseOver={this.handleMouseover}
                      id="c"
                      class="downBorder"
                    />
                  </div>

                  <div onMouseOver={this.handleMouseover} id="d" />
                </Sider>

                <Sider width={key_width} align="center">
                  <div onMouseOver={this.handleMouseover} id="v" />
                  <div class="middleCom">
                    <div
                      onMouseOver={this.handleMouseover}
                      id="h"
                      class="upBorder"
                    />
                    <div id="5" class="upLetterB">
                      H
                    </div>

                    <div id="5" class="leftLetterB">
                      V
                    </div>
                    <div id="5" class="middleLetterB2">
                      spa
                    </div>
                    <div id="5" class="rightLetterB">
                      N
                    </div>

                    <div id="5" class="downLetterB">
                      B
                    </div>
                    <div
                      onMouseOver={this.handleMouseover}
                      id="b"
                      class="downBorder"
                    />
                  </div>

                  <div onMouseOver={this.handleMouseover} id="n" />
                </Sider>
                <Sider width={key_width} align="center">
                  <div onMouseOver={this.handleMouseover} id="j" />
                  <div class="middleCom">
                    <div
                      onMouseOver={this.handleMouseover}
                      id="k"
                      class="upBorder"
                    />
                    <div id="6" class="upLetterW">
                      K
                    </div>

                    <div id="6" class="leftLetterW">
                      J
                    </div>
                    <div id="6" class="middleLetterW2">
                      ent
                    </div>
                    <div id="6" class="rightLetterW">
                      L
                    </div>

                    <div id="6" class="downLetterW">
                      M
                    </div>
                    <div
                      onMouseOver={this.handleMouseover}
                      id="m"
                      class="downBorder"
                    />
                  </div>

                  <div onMouseOver={this.handleMouseover} id="l" />
                </Sider>
              </Layout>
            </div>
            <Sider width={space_width}>
              <div id="" class="rightEmpty" />
            </Sider>
          </Layout>
          <Footer>{this.state.footer}</Footer>
        </div>
      );
    }
  }
}

ReactDOM.render(<Keyboard />, document.getElementById("root"));
