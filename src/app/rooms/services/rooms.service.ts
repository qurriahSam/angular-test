import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';
import { RoomDetails } from '../rooms';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomTypes: RoomDetails[] = [];
  getRooms$ = this.http.get<RoomDetails[]>('/api/rooms').pipe(shareReplay(1));
  constructor(private http: HttpClient) {}

  getRooms() {
    return this.http.get<RoomDetails[]>('/api/rooms');
  }

  addRooms(room: RoomDetails) {
    return this.http.post<RoomDetails[]>('/api/rooms', room);
  }

  editRooms(room: RoomDetails) {
    return this.http.patch<RoomDetails[]>('/api/rooms', room);
  }
}
