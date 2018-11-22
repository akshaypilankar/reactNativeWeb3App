/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import './shim.js'
// ...the rest of your code
import crypto from 'crypto'
// use crypto
var a = crypto.randomBytes(32).toString('hex')

const Web3 = require('web3');

const web3 = new Web3(
  new Web3.providers.HttpProvider('https://mainnet.infura.io/'),
);

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: a +
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      privateKey:''
    }
  }

  componentDidMount(){
   var data =  web3.eth.accounts.create()
   this.setState({address:data.address,privateKey:data.privateKey})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>this is your new Address</Text>
        <Text style={styles.instructions}>{this.state.address}</Text>
        <Text style={styles.instructions}>{this.state.privateKey}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
