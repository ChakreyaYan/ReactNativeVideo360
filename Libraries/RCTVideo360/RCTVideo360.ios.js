import React, {
  Component,
  StyleSheet,
  requireNativeComponent,
  PropTypes,
  NativeModules,
  Text,
  View,
} from 'react-native'

const styles = StyleSheet.create({
  base: {
    overflow: 'hidden',
  },
})

export default class Video360 extends Component {

  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <RCTVideo360 />
    )
  }
}

Video360.propTypes = {
  // uri: PropTypes.string,
}

const RCTVideo360 = requireNativeComponent('RCTVideo360', Video360)
