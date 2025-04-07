# Multi-view Drone Tracking Datasets (GitHub)

## Overview
This repository contains datasets where flying drones (hexacopters) are captured with multiple consumer-grade cameras (smartphones, compact cameras, GoPro, etc.) with highly accurate 3D drone trajectory ground truth recorded by a precise real-time RTK system from Fixposition.

## Dataset Components
The repository contains 5 datasets with varying characteristics:

### Dataset 1
- 4 cameras
- Flight duration: ~2 minutes
- Easy dataset with short and slow flight
- 3D trajectory ground truth: Yes
- 2D labels: Yes

### Dataset 2
- 4 cameras
- Flight duration: ~2.5 minutes
- Easy dataset with longer and faster flight
- 3D trajectory ground truth: Yes
- 2D labels: Yes

### Dataset 3
- 6 cameras
- Flight duration: ~9 minutes
- Medium difficulty dataset with more cameras, long flight, various velocities and motion types
- 3D trajectory ground truth: Yes
- Synchronization: Yes
- Camera locations: Yes
- 2D labels: Yes

### Dataset 4
- 7 cameras
- Flight duration: ~7 minutes
- High difficulty dataset with many cameras, fast motion and moving clouds making detection harder
- 3D trajectory ground truth: Yes
- Synchronization: Yes
- 2D labels: Yes

### Dataset 5
- 6 cameras
- 3 drones
- Flight duration: ~10 minutes
- Challenging winter dataset with snow-covered background and multiple drones
- 3D trajectory ground truth: Yes
- Synchronization: Yes
- Camera locations: Yes
- 3D orientation: Yes

## Technical Details
- Calibration parameters and calibration images provided for each camera
- Manual labels of drone locations in all datasets
- Videos split into multiple archives using zip format
- Ground truth drone trajectory in dataset 5 estimated by fusing total station tracking and onboard IMU data

## Characteristics for Drone Deployment
- Multiple camera views provide diverse perspectives for tracking
- Varying difficulty levels from easy to challenging scenarios
- Different environmental conditions (including winter/snow)
- Multiple drones in dataset 5 for multi-object tracking
- Precise ground truth for algorithm evaluation

## Source
GitHub: https://github.com/CenekAlbl/drone-tracking-datasets
