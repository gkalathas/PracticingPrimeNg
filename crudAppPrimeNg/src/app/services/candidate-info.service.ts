import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CandidateModel} from "../models/candidate-model";

@Injectable({
  providedIn: 'root'
})
export class CandidateInfoService {

  baseUrl: string = 'http://localhost/8080/candidates/getAll';
  constructor(private httpClient: HttpClient) { }



  getAllCandidates() {
    return this.httpClient.get<CandidateModel[]>(this.baseUrl);
  }
}
