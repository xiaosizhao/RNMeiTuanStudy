import React, {PureComponent} from 'react'

import {StyleSheet, TouchableOpacity, Image} from 'react-native'
import screen from '../../common/screen'
import {Heading2} from '../../widget/Text'

class HomeMenuItem extends PureComponent{
    render(){
        return (
                <TouchableOpacity style={styles.container}
                    onPress={this.props.onPress}>
                    <Image source={this.props.icon} resizeMode='contain' style={styles.icon}/>
                    <Heading2>
                        {this.props.title}
                    </Heading2>

                </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: screen.width /5,
        height: screen.width /5,
    },
    icon: {
        width: screen.width / 9,
        height: screen.width / 9,
        margin: 5,
    }
});

export default HomeMenuItem;