import SVG from 'react-inlinesvg';
import React from 'react';

class Icon extends React.Component {

  preProcessor(code) {
    code = code.replace(/fill:/g, '')
    return code.replace(/fill=".*?"/g, '')
  }

  render() {
    const {source, iconName, fill, w, h, className} = this.props
    const iconType = fill ? "mono" : "color";
    if (fill || source) {
      return <SVG 
      src={"../svg/" + iconType + "/" + iconName + ".svg"}
      uniquifyIDs={true}
      style={{
        width: w,
        height: h,
        fill: fill,
      }}
      preProcessor={this.preProcessor}
      {...this.props} />
    } else {
      return <img
        style={{
          width: w,
          height: h,
        }}
        className={className}
        src={"../svg/color/" + iconName + ".svg"}
        {...this.props}
        ></img>
    }

  }
}

export default Icon;