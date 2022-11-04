export interface Rooms {
  totalRooms: number;
  availableRooms: number;
  bookedRooms: number;
}

export interface RoomDetails {
  roomNumber?: string;
  roomType: string;
  amenities: string;
  price: number;
  photos: string;
  checkinTime: string;
  checkoutTime: string;
  rating: number;
}
