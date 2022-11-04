import { Component, OnInit } from '@angular/core';
import { RoomDetails, Rooms } from './rooms';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'goals-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements OnInit {
  hotelName = 'bismillahi';
  numberOfRooms = 10;
  hideRooms = false;
  rooms: Rooms = {
    availableRooms: 10,
    bookedRooms: 3,
  };
  roomTypes: RoomDetails[] = [];
  selectedRoom!: RoomDetails;

  constructor(private roomsService: RoomsService) {}

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  ngOnInit(): void {
    this.roomTypes = this.roomsService.getRooms();
  }

  showSelected(room: RoomDetails) {
    this.selectedRoom = room;
  }

  addRoom() {
    let newRoom = {
      roomType: 'executive room',
      amenities: 'air conditioner, bathtub, wifi, kitchen',
      price: 5000,
      photo: 'file:///home/qurriahx/Pictures/Wallpapers/kitchen2.jpg',
      checkIn: new Date(),
      checkOut: new Date(),
    };
    this.roomTypes = [...this.roomTypes, newRoom];
  }
}
