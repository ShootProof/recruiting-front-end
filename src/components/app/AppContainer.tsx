/* Node Module */
import React from 'react';
/* Data */
import testJSON from '../../data/testData.json';
/* Component */
import NavContainer from '../nav';
/* Component Content */
import AppState from './App.state';
import {
  TAppProps,
  TAppState,
} from './App.type';
/* Module */
import { transformNavJSON } from '../../modules/helper.module';
/* Type */
import { TJsonObject } from '../../types/general.type';

class AppContainer extends React.Component<TAppProps, TAppState> {
  state = AppState;

  componentDidMount() {
    this.setState({
      navigation: transformNavJSON(testJSON),
    });
  }

  render() {
    const { navigation } = this.state;

    return (
      <>
        <header>
          <div>Anselm's Node Navigation</div>
        </header>
        <div className="container-fluid" data-testid="app-view">
          {navigation.map((el: TJsonObject): JSX.Element => (
            <NavContainer key={el.id} navContent={el} />
          ))}
        </div>
      </>
    );
  }
}

export default AppContainer;
