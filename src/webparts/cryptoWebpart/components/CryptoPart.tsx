import * as React from 'react';
import Crypto from '../data/crypto';

export default class CryptoPart extends React.Component<{},{cryptoTest: Crypto}> {
    
    constructor(props){
        super(props);
        this.state = {
            cryptoTest: new Crypto()
        };
        this.getCryptoData();
    }
    public getCryptoData() {
        var crypto = new Crypto;
        fetch("https://api.coinmarketcap.com/v2/ticker/1/?convert=EUR&limit=10")
        .then(res => res.json())
        .then(
          (result) => {
            
            crypto.name = result.data.name;
            crypto.dollarPrice = result.data.quotes.USD.price;
            crypto.euroPrice = result.data.quotes.EUR.price;
            crypto.percent_change_1h = result.data.quotes.EUR.percent_change_1h;
            crypto.percent_change_7d = result.data.quotes.EUR.percent_change_7d;
            crypto.percent_change_24h = result.data.quotes.EUR.percent_change_24h;
            crypto.lastUpdated = result.data.last_updated;
            this.setState({
                cryptoTest: crypto
            }); 
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            console.log(error); 
          }
        );
      }
    public componentDidMount() {
        setInterval(() => this.getCryptoData(), 16000);
    }
    public componentWillUnmount() {
    }
    public componentDidUpdate() {
    }
    public render() {
        var positiveStyle = {
            color: 'green'
        };
        var negativeStyle = {
            color: 'red'
        };
        var neutralStyle = {
            color: 'white'
        };
        var icon = {
            width: 50,
            height: 50

        };
        var price = this.state.cryptoTest.euroPrice;
        var cutPrice = Math.floor(price);
        var dollarPrice = this.state.cryptoTest.dollarPrice;
        var cutDollarPrice = Math.floor(dollarPrice);
        var cryptoObject = this.state.cryptoTest;
        var date = new Date(0);
        date.setUTCSeconds(cryptoObject.lastUpdated);
        var dateString = date.toLocaleString();
        let lastUpdated = <p className= "ms-font-mi">Last updated: {dateString}</p>;
        let change1hArea;
        let change24hArea;
        let change7dArea;
        switch(true){
            case(cryptoObject._percent_change_1h > 0):
            change1hArea = <p className="ms-font-m"> Change last hour: <span className="ms-fadeIn100" style={positiveStyle}> {this.state.cryptoTest.percent_change_1h} % </span> <i style={positiveStyle} className="ms-Icon ms-Icon--Market"></i> </p>;
            break;
            case(cryptoObject._percent_change_1h == 0):
            change1hArea = <p className="ms-font-m"> Change last hour: <span className="ms-fadeIn100" style={neutralStyle}> {this.state.cryptoTest.percent_change_1h} % </span></p>;
            break;
            case(cryptoObject._percent_change_1h < 0):
            change1hArea = <p className="ms-font-m"> Change last hour: <span className="ms-fadeIn100" style={negativeStyle}> {this.state.cryptoTest.percent_change_1h} % </span> <i style={negativeStyle} className="ms-Icon ms-Icon--MarketDown"></i> </p>;
            break;
        }
        switch(true){
            case(cryptoObject._percent_change_24h > 0):
            change24hArea = <p className="ms-font-m"> Change last day: <span className="ms-fadeIn100" style={positiveStyle}> {this.state.cryptoTest.percent_change_24h} % </span> <i style={positiveStyle} className="ms-Icon ms-Icon--Market"></i> </p>;
            break;
            case(cryptoObject._percent_change_24h == 0):
            change24hArea = <p className="ms-font-m"> Change last day: <span className="ms-fadeIn100" style={neutralStyle}> {this.state.cryptoTest.percent_change_24h} % </span></p>;
            break;
            case(cryptoObject._percent_change_24h < 0):
            change24hArea = <p className="ms-font-m"> Change last day: <span className="ms-fadeIn100" style={negativeStyle}> {this.state.cryptoTest.percent_change_24h} % </span> <i style={negativeStyle} className="ms-Icon ms-Icon--ArrowDwonRight8"></i> </p>;
            break;
        }
        switch(true){
            case(cryptoObject._percent_change_7d > 0):
            change7dArea = <p className="ms-font-m"> Change this week: <span className="ms-fadeIn100" style={positiveStyle}> {this.state.cryptoTest.percent_change_7d} % </span> <i style={positiveStyle} className="ms-Icon ms-Icon--Market"></i> </p>;
            break;
            case(cryptoObject._percent_change_7d == 0):
            change7dArea = <p className="ms-font-m"> Change this week: <span className="ms-fadeIn100" style={neutralStyle}> {this.state.cryptoTest.percent_change_7d} % </span></p>;
            break;
            case(cryptoObject._percent_change_7d < 0):
            change7dArea = <p className="ms-font-m"> Change this week: <span className="ms-fadeIn100" style={negativeStyle}> {this.state.cryptoTest.percent_change_7d} % </span> <i style={negativeStyle} className="ms-Icon ms-Icon--MarketDown"></i> </p>;
            break;
        }
        return(
          <div>
            <img style={icon} src="https://cdn1.iconfinder.com/data/icons/flat-world-currency-1/432/Flat_Currency_Bitcoin-512.png"></img>
            <h1> {this.state.cryptoTest.name} </h1>
            <p className="ms-fadeIn100"><strong>Price: </strong>{cutPrice} (€)  / {cutDollarPrice} ($) </p>
            {change1hArea}
            {change24hArea}
            {change7dArea}
            {lastUpdated}
          </div>
        );
    }
}