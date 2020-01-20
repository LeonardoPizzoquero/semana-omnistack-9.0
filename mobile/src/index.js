import React from 'react';
import { YellowBox } from 'react-native';
import Routes from './routes';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket',
  'AsyncStorage has been extracted'
]);

export default function App() {
  return <Routes />
}