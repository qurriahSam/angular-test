export interface Rooms {
  availableRooms: number;
  bookedRooms: number;
}

export interface RoomDetails {
  roomType: string;
  amenities: string;
  price: number;
  photo: string;
  checkIn: Date;
  checkOut: Date;
}
