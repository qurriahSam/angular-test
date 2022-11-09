import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoomDetails } from '../rooms';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomTypes: RoomDetails[] = [];
  constructor(private http: HttpClient) {}

  getRooms() {
    return this.http.get<RoomDetails[]>('/api/rooms');
  }

  addRooms(room: RoomDetails) {
    return this.http.post<RoomDetails[]>('/api/rooms', room);
  }
}
