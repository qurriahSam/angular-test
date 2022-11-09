import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { RoomDetails } from '../rooms';

@Component({
  selector: 'hinv-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css'],
})
export class RoomListComponent implements OnInit, OnChanges {
  constructor() {}

  @Input() rooms: RoomDetails[] | null = [];
  @Output() selectedRoom = new EventEmitter<RoomDetails>();

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  selectRoom(room: RoomDetails) {
    this.selectedRoom.emit(room);
  }
}
