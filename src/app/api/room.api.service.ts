import { Injectable } from '@angular/core';
import { RequestApiService } from './request.api.service';

@Injectable()
export class RoomApiService {

  constructor(
    private request: RequestApiService,
  ) {}

  getAll(placeId) {
    return this.request.runCloudFunction('room_getAll', {placeId});
  }

  create(room, placeId) {
    return this.request.runCloudFunction('room_create', {
      name: room.name,
      picture: room.picture,
      placeId: placeId,
    });
  }

  update(place) {
    return this.request.runCloudFunction('room_update', {
      id: place.id,
      name: place.name,
      picture: place.picture,
    });
  }

  delete({id}) {
    return this.request.runCloudFunction('room_delete', {id});
  }

}
