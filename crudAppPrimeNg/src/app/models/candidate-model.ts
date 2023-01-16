import {FavouriteModel} from "./favourite-model";

export class CandidateModel {

  id: number = 0;

  name: string = '';

  dob?: Date;

  gender: string = '';

  favouriteCollection: FavouriteModel[] = [];
}
