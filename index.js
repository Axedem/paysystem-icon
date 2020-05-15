import SVG from 'react-inlinesvg';
import React from 'react';

class Icon extends React.Component {

  preProcessor(code) {
    code = code.replace(/fill:/g, '')
    return code.replace(/fill=".*?"/g, '')
  }

  render() {
    const {source, iconName, fill} = this.props
    const iconType = fill ? "mono" : "color";
    if (fill || source) {
      return <SVG 
      src={"/svg/" + iconType + "/" + iconName + ".svg"}
      uniquifyIDs={true}
      style={{
        width: this.props.w,
        height: this.props.h,
        fill: "#f00",
      }}
      preProcessor={this.preProcessor}
      {...this.props} />
    } else {
      return <img
        style={{
          width: this.props.w,
          height: this.props.h,
        }}
        className={this.props.className}
        src={"/svg/color/" + iconName + ".svg"}
        {...this.props}
        ></img>
    }

  }
}

export default Icon;