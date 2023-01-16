import {Component, OnInit} from '@angular/core';
import {CandidateInfoService} from "../../services/candidate-info.service";
import {CandidateModel} from "../../models/candidate-model";

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit{

  candidateList: CandidateModel[] = [];

  constructor(private candidateInfoService: CandidateInfoService) {
  }

  ngOnInit(): void {
    // this.getAllCandidates()


  }

  getAllCandidates() {
    this.candidateInfoService.getAllCandidates().subscribe(
      data => {
        this.candidateList = data;
      }
    );
  }


}
