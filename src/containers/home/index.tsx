import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {Button, Card, Input, Text} from '@ui-kitten/components';

import {StyleSheet} from 'react-native';

import HomeStore from '../../stores/home.store';

interface Props {
  homeStore: HomeStore;
}

@inject('homeStore')
@observer
export default class Home extends Component<Props> {
  render() {
    const {
      ethanol,
      gasoline,
      result,
      calculate,
      handleForm,
    } = this.props.homeStore;

    return (
      <>
        <Card>
          <Text>Etanol:</Text>
          <Input
            value={ethanol.toString()}
            onChangeText={ethanol => handleForm({ethanol})}
          />
          <Text>Gasolina:</Text>
          <Input
            value={gasoline.toString()}
            onChangeText={gasoline => handleForm({gasoline})}
          />
          <Button onPress={() => calculate()}>Calcular</Button>
          <Text style={styles.paragraph}>{result}</Text>
        </Card>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: '10',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
