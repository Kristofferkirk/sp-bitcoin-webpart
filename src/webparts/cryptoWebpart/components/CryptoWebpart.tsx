import * as React from 'react';
import styles from './CryptoWebpart.module.scss';
import { ICryptoWebpartProps } from './ICryptoWebpartProps';
import CryptoPart from '../components/CryptoPart';
export default class CryptoWebpart extends React.Component<ICryptoWebpartProps> {
  constructor(props){
    super(props);
  }

  public render(): React.ReactElement<ICryptoWebpartProps> {
    return (
      <div className={ styles.cryptoWebpart }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <CryptoPart></CryptoPart>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

