import React, {PureComponent} from 'react'

import {StyleSheet, TouchableOpacity, View, Image} from 'react-native'
import screen from '../../common/screen'
import color from '../../widget/color' 

import {Heading1, Heading2} from '../../widget/Text'

class HomeGridItem extends PureComponent{
    render() {
        let info = this.props.info
        let title = info.maintitle
        let color = info.typeface_color
        let subtitle = info.deputytitle
        let imageUrl = info.imageurl.replace('w.h', '120.0')

        return(
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                <View>
                    <Heading1 style={{color: color, marginBottom: 10}}>{title}</Heading1>
                    <Heading2>{subtitle}</Heading2>
                </View>
                <Image style={styles.icon} source={{uri: imageUrl}}/>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: screen.width / 2 - screen.onePixel,
        height: screen.width / 4,
        backgroundColor: 'white',
        borderBottomWidth: screen.onePixel,
        borderRightWidth: screen.onePixel,
        borderColor: color.border
    },
    icon: {
        width: screen.width / 5,
        height: screen.width / 5,
    }
});

export default HomeGridItem;