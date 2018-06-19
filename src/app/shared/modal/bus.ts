import { Busroute } from "src/app/shared/modal/busroute";
import { Seats } from "src/app/shared/modal/seats";

export class Bus {
    id: number;
    name: string;
    busroute: Busroute;
    totalseat: number;
    seats: Seats[];
    showBus?: boolean;
    ratePerSeat : number;
    bookedSeats :Seats[];
    constructor(id: number, name: string, busroute: Busroute, totalseat: number, seats: Seats[], rate:number) {
        this.id = id;
        this.name = name;
        this.busroute = busroute;
        this.totalseat = totalseat;
        this.seats = seats;
        this.showBus = false;
        this.ratePerSeat = rate;
        this.bookedSeats = [];
    }
}
