export class Alert {
    id: number;
    name: string;
    type: string;
    receivers: string;
    
    constructor(id: number,name: string,type: string,receivers: string) {
        this.id=id
        this.name=name
        this.type=type
        this.receivers=receivers
    }
}

