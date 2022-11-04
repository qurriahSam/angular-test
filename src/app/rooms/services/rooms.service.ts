import { Injectable } from '@angular/core';
import { RoomDetails } from '../rooms';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomTypes: RoomDetails[] = [
    {
      roomType: 'private room',
      amenities: 'air conditioner, bathtub, wifi, kitchen',
      price: 5000,
      photo: 'file:///home/qurriahx/Pictures/Wallpapers/kitchen2.jpg',
      checkIn: new Date(),
      checkOut: new Date(),
    },
    {
      roomType: 'deluxe room',
      amenities: 'air conditioner, hot shower, wifi',
      price: 3000,
      photo: 'file:///home/qurriahx/Pictures/Wallpapers/kitchen1.jpg',
      checkIn: new Date(),
      checkOut: new Date(),
    },
    {
      roomType: 'budget room',
      amenities: 'air conditioner, shower',
      price: 1000,
      photo: 'file:///home/qurriahx/Pictures/Wallpapers/kitchen2.jpg',
      checkIn: new Date(),
      checkOut: new Date(),
    },
  ];
  constructor() {}

  getRooms() {
    return this.roomTypes;
  }
}
