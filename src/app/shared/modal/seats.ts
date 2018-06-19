export class Seats {
    seatId: number;
    userId: number;
    selectSeat ?: boolean;
    busId ?: number;
    constructor(seatId: number, userId: number, busId : number, selectSeat:boolean) {
        this.seatId = seatId;
        this.userId = userId;
        this.busId = busId;
        this.selectSeat = selectSeat;
    }
}
