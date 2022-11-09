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
    totalRooms: 13,
  };
  roomTypes: RoomDetails[] = [];
  selectedRoom!: RoomDetails;
  rooms$ = this.roomsService.getRooms$;

  constructor(private roomsService: RoomsService) {}

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  ngOnInit(): void {
    /*     this.roomsService.getRooms$.subscribe((roomlist) => {
      this.roomTypes = roomlist;
    }); */
  }

  showSelected(room: RoomDetails) {
    this.selectedRoom = room;
  }

  addRoom() {
    let newRoom: RoomDetails = {
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1000,
      photos:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      checkinTime: Date(),
      checkoutTime: Date(),
      rating: 3.45654,
    };
    // this.roomTypes = [...this.roomTypes, newRoom];
    this.roomsService.addRooms(newRoom).subscribe((data) => {
      this.roomTypes = data;
    });
  }

  editRoom() {
    let newRoom: RoomDetails = {
      roomNumber: '3',
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1000,
      photos:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      checkinTime: Date(),
      checkoutTime: Date(),
      rating: 3.45654,
    };
    // this.roomTypes = [...this.roomTypes, newRoom];
    this.roomsService.editRooms(newRoom).subscribe((data) => {
      this.roomTypes = data;
    });
  }
}
