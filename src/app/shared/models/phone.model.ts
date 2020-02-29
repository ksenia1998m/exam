export class Phone{
    public name: string;
    public vendor_code: number;
    public price: number;
    public manufacturer: string;
    public year: string;
    public quantity: number;
    public mpx: string;
    public screen: string;
    public id: number;
    constructor (name: string, vendor_code: number, price: number, manufacturer: string, year: string, quantity: number, mpx: string, screen: string, id?: number) {
        this.name = name;
        this.vendor_code = vendor_code;
        this.price = price;
        this.manufacturer = manufacturer;
        this.year = year;
        this.quantity = quantity;
        this.mpx = mpx;
        this.screen = screen;
        this.id = id;
    }
}