import { Component } from "@angular/core";

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr/>
        <event-thumbnail #thumbnail [event]="event1" ></event-thumbnail>
        <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log Foo</button>
        <h3>{{thumbnail.someProperty}}</h3>
    </div>
    `
})
export class EventsListComponent{
    event1 = {
        id:1,
        name:'Satyam Sharma',
        date:'26/05/2021',
        time:'20:33',
        price: '399.99',
        imageUrl:'/assets/images/angularconnect-shield.png',
        location: {
            address: 'abc',
            city: 'def',
            country: 'Ghi'
        }
    }
}