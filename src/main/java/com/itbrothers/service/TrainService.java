package com.itbrothers.service;

import java.util.List;

import com.itbrothers.dto.Train;


/**
 * 
 * 
 * 
 * 
 */
public interface TrainService {
    public List<Train> getAllTrains();

    public Train getTrainById(Long id);

    public void addTrain(Train train);

    public void deleteTrainById(Long id);

    public void deleteAll();

    public void updateTrain(Train train);
}
