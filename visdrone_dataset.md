# VisDrone Dataset

## Overview
VisDrone is a large-scale benchmark dataset for drone-based computer vision tasks, including object detection and tracking. The dataset was collected by the AISKYEYE team at Lab of Machine Learning and Data Mining, Tianjin University, China.

## Dataset Statistics
- 288 video clips formed by 261,908 frames
- 10,209 static images
- Captured by various drone-mounted cameras
- Covers 14 different cities across China
- Includes both urban and country environments
- Contains over 2.6 million bounding box annotations
- Annotated objects include pedestrians, cars, bicycles, and tricycles
- Includes attributes such as scene visibility, object class, and occlusion

## Tasks Supported
1. **Object Detection in Images** - Detect objects of predefined categories from individual drone images
2. **Object Detection in Videos** - Detect objects from drone video frames
3. **Single-Object Tracking** - Estimate the state of a target in video frames
4. **Multi-Object Tracking** - Recover the trajectories of objects in video frames
5. **Crowd Counting** - Count persons in each video frame

## Dataset Components
### Object Detection in Images (VisDrone-DET)
- Trainset: 1.44 GB
- Valset: 0.07 GB
- Testset-dev: 0.28 GB (Ground truth available)
- Testset-challenge: 0.28 GB

### Object Detection in Videos (VisDrone-VID)
- Trainset: 7.53 GB
- Valset: 1.49 GB
- Testset-dev: 2.14 GB (Ground truth available)
- Testset-challenge: 2.70 GB

### Single-Object Tracking (VisDrone-SOT)
- Trainset: ~20.37 GB (split into two parts)
- Valset: 1.29 GB
- Testset-dev: 11.27 GB (Ground truth available)
- Testset-challenge: ~34.71 GB (split into two parts)

### Multi-Object Tracking (VisDrone-MOT)
- Trainset: 7.53 GB
- Valset: 1.48 GB
- Testset-dev: 2.14 GB (Ground truth available)
- Testset-challenge: 2.70 GB

## Characteristics for Drone Deployment
- Collected using various drone platforms (different models)
- Captured under various weather and lighting conditions
- Includes sparse and crowded scenes
- Provides annotations for common objects of interest in aerial surveillance

## Source
GitHub: https://github.com/VisDrone/VisDrone-Dataset
