import React, {PureComponent} from 'react'
import {View, Text, StyleSheet, Image, ScrollView, RefreshControl} from 'react-native'
import color from '../../widget/color'
import NavigationItem from '../../widget/NavigationItem'
import DetailCell from '../../widget/DetailCell'
import SpaceView from '../../widget/SpaceView'
import {Heading1, Paragraph} from '../../widget/Text'
import screen from '../../common/screen'

class MineScene extends PureComponent{

    static navigationOptions = ({navigation})=>({
        headerRight: (
            <View style={{flexDirection: 'row'}}>
                <NavigationItem
                    icon={require('../../img/Mine/icon_navigationItem_set_white2x.png')}
                    onPress={() => {

                    }}
                />
                <NavigationItem
                    icon={require('../../img/Home/icon_navigationItem_message_white.png')}
                    onPress={() => {

                    }}
                />
            </View>
        ),
        headerStyle: {backgroundColor: color.theme},
    })

    state: {
        isRefreshing: boolean
    }

    constructor(props){
        super(props)

        this.state = {
            isRefreshing: false
        }
    }

    onHeaderRefresh(){
        this.setState({isRefreshing: true})

        setTimeout(() => {
            this.setState({isRefreshing: false})
        }, 2000);
    }

    renderCells(){
        let cells = []
        let dataList = this.getDataList()
        for(let i=0; i<dataList.length; i++){
            let sublist = dataList[i]
            for(let j=0; j<sublist.length; j++){
                let data = sublist[j]
                let cell = <DetailCell image={data.image} title={data.title} subtitle={data.subtitle} key={data.title}/>
                cells.push(cell)
            }

            cells.push(<SpaceView key={i}/>)
        }

        return (
            <View style={{flex: 1}}>
                {cells}
            </View>
        )
        
    }

    renderHeader(){
        return(
            <View style={styles.header}>
                <View style={styles.userContainer}>
                    <Image style={styles.avatar} source={require('../../img/Mine/avatar.png')}/>
                    <View>
                        <View style={{flexDirection: 'row'}}>
                            <Heading1 style={{color: 'white'}}>赵小四</Heading1>
                            <Image style={{marginLeft: 4, height:15, width: 15}} source={require('../../img/Mine/beauty_technician_v152x.png')} />
                        </View>

                        <Paragraph style={{color: 'white', marginTop: 4}}>个人信息</Paragraph>
                    </View>
                </View>
            </View>
        )
    }

    render(){
         return(
             <View style={{flex: 1, backgroundColor: color.background}}>
                <View style={{position: 'absolute', width: screen.width, height: screen.height / 2, backgroundColor: color.theme}}/>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={()=>this.onHeaderRefresh()}
                            tintColor='gray'
                        />
                    }
                >
                    {this.renderHeader()}
                    <SpaceView/>
                    {this.renderCells()}
                </ScrollView>
             </View>
         );   
    }

    getDataList(){
         return (
            [
                [
                    { title: '我的钱包', subtitle: '办信用卡', image: require('../../img/Mine/icon_mine_wallet2x.png') },
                    { title: '余额', subtitle: '￥95872385', image: require('../../img/Mine/icon_mine_balance2x.png') },
                    { title: '抵用券', subtitle: '63', image: require('../../img/Mine/icon_mine_voucher2x.png') },
                    { title: '会员卡', subtitle: '2', image: require('../../img/Mine/icon_mine_membercard2x.png') }
                ],
                [
                    { title: '好友去哪', image: require('../../img/Mine/icon_mine_friends2x.png') },
                    { title: '我的评价', image: require('../../img/Mine/icon_mine_comment2x.png') },
                    { title: '我的收藏', image: require('../../img/Mine/icon_mine_collection2x.png') },
                    { title: '会员中心', subtitle: 'v15', image: require('../../img/Mine/icon_mine_membercenter2x.png') },
                    { title: '积分商城', subtitle: '好礼已上线', image: require('../../img/Mine/icon_mine_member2x.png') }
                ],
                [
                    { title: '客服中心', image: require('../../img/Mine/icon_mine_customerService2x.png') },
                    { title: '关于美团', subtitle: '我要合作', image: require('../../img/Mine/icon_mine_aboutmeituan2x.png') }
                ]
            ]
        )
    }
}

const styles = StyleSheet.create({
        header: {
        backgroundColor: color.theme,
        paddingBottom: 20
    },
    icon:{
        width: 27,
        height: 27,
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#51D3C6'
    }
});

export default MineScene;