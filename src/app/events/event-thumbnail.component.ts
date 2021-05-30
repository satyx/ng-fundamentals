import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector:'event-thumbnail',
    template: `
    <div [routerLink]="['/events',event.id]" class="well hoverwall thumbnail">
        <h2>{{event.name}}</h2>
        <div>Date:{{event.date}}</div>
        <div [ngClass]="getStartTime()" [ngSwitch]="event?.time">
            Time:{{event.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Mid Start)</span>
            <span *ngSwitchDefault>(Late Start)</span>
        </div>
        <div>Price: \${{event.price}}</div>
        <div *ngIf="event?.location">
            <span>Location: {{event.location.address}}</span>
            <span class="pad-left">{{event.location.city}},{{event.location.country}}</span>
        </div>
        <div *ngIf="event?.onlineUrl">
            Online URL: {{event?.onlineUrl}}
        </div>
    </div>
    `,
    styles:[`
        .bold {font-weight: bold;}
        .green {color: #003300 !important;}
        .thumbnail {min-height: 210px;}
        .pad-left {margin-left: 10px;}
        .well div {color: #bbb;}
    `]
})

export class EventThumbnailComponent{
    @Input() event:any;
    getStartTime(){
        //also works
        // const isEarlyStart = this.event && this.event.time==='8:00 am';
        // return {green:isEarlyStart, bold:isEarlyStart};
        // if(this.event && this.event.time==='8:00 am')
        //     return 'green bold';
        // return '';
        
        if(this.event && this.event.time==='8:00 am')
            return ['green', 'bold'];
        return [];

    }
}