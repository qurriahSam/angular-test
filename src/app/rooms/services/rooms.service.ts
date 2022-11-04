import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoomDetails } from '../rooms';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomTypes: RoomDetails[] = [];
  constructor(private http: HttpClientModule) {}

  getRooms() {
    return this.roomTypes;
  }
}
