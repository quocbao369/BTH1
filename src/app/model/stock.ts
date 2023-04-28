export class Stock {
    constructor(
        public id     :       string,
        public name   :       string,
        public code   :       string,

        public price  :       number,
        public previousPrice: number,
        public exchange :      string,

        
        public favorite:        boolean,
        ){}
    isPositiveChange(): boolean{
        return this.price>=this.previousPrice;
    }
    getPercentChange() {
        let percent =   (this.price-this.previousPrice) * 100 / this.price;
        return percent.toFixed(2);
    }
    getPriceChange() {
        return this.price - this.previousPrice;
      }

}
