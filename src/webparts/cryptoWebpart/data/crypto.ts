 class Crypto {
    public _name: string = "";
    public _euroPrice: number;
    public _dollarPrice: number;
    public _percent_change_1h: number;
    public _percent_change_24h: number;
    public _percent_change_7d: number;
    public _lastupdated: number;
    get name():string {
        return this._name;
    }
    set name(name:string) {
        this._name = name; 
    }
    get euroPrice():number {
        return this._euroPrice;
    }
    set euroPrice(price:number) {
        this._euroPrice= price; 
    }
    get dollarPrice():number {
        return this._dollarPrice;
    }
    set dollarPrice(price:number) {
        this._dollarPrice= price; 
    }
    get percent_change_1h():number {
        return this._percent_change_1h;
    }
    set percent_change_1h(percentChange1h:number) {
        this._percent_change_1h = percentChange1h; 
    }
    get percent_change_24h():number {
        return this._percent_change_24h;
    }
    set percent_change_24h(percentChange24h:number) {
        this._percent_change_24h = percentChange24h; 
    }
    get percent_change_7d():number {
        return this._percent_change_7d;
    }
    set percent_change_7d(percentChange7d:number) {
        this._percent_change_7d = percentChange7d; 
    }
    get lastUpdated():number {
        return this._lastupdated;
    }
    set lastUpdated(lastUpdated:number) {
        this._lastupdated = lastUpdated; 
    }
    
}

export default Crypto;