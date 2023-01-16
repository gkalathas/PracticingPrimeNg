package com.george.crudappprimeng.service;


import com.george.crudappprimeng.model.Candidate;
import com.george.crudappprimeng.repository.CandidateRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CandidateService {


    private final CandidateRepository candidateRepository;

    public CandidateService(CandidateRepository candidateRepository) {
        this.candidateRepository = candidateRepository;
    }


    public List<Candidate> getALLCandidates() {
        return candidateRepository.findAll();
    }

}


