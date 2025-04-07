# Drone Datasets Categorization

## By Primary Purpose

### Object Detection Focused
- **Kaggle Drone Object Detection Dataset**: Specialized for amateur drone detection
- **DroneDetectionDataset (GitHub)**: Focused on quadcopter UAV detection
- **Roboflow Drone Datasets**: Various datasets specifically for drone detection

### Tracking Focused
- **Multi-view Drone Tracking Datasets**: Specialized for tracking with multiple camera views
- **UAV123**: Designed specifically for low-altitude UAV target tracking

### Comprehensive (Detection & Tracking)
- **VisDrone**: Complete benchmark for detection, tracking, and counting
- **UAVDT**: Supports detection, single-object tracking, and multi-object tracking

## By Dataset Size

### Large (100,000+ images/frames)
- **VisDrone**: 261,908 frames + 10,209 static images
- **UAV123**: 113,476 images

### Medium (10,000-100,000 images/frames)
- **UAVDT**: ~80,000 frames
- **DroneDetectionDataset**: 56,821 images (51,446 training + 5,375 test)

### Small (<10,000 images/frames)
- **Kaggle Drone Object Detection**: ~4,000 images
- **Multi-view Drone Tracking Datasets**: 5 datasets with varying sizes (minutes of video each)

## By Environment Type

### Urban Environments
- **UAVDT**: Focused on urban areas (squares, streets, highways, crossings)
- **VisDrone**: Includes urban environments across 14 different cities

### Natural/Rural Environments
- **VisDrone**: Includes country environments
- **UAV123**: Includes various outdoor environments

### Mixed Environments
- **DroneDetectionDataset**: Various environments from YouTube videos
- **Multi-view Drone Tracking**: Includes winter/snow conditions in dataset 5

## By Annotation Type

### Bounding Box Annotations
- **VisDrone**: 2.6+ million bounding boxes
- **UAVDT**: Bounding boxes with vehicle category and occlusion
- **UAV123**: Bounding box annotations for 10 different object classes
- **DroneDetectionDataset**: XML labels for bounding boxes

### Trajectory Annotations
- **Multi-view Drone Tracking**: 3D trajectory ground truth from RTK system
- **UAVDT**: Trajectory information for tracking tasks
- **VisDrone**: Trajectory information for tracking tasks

### Additional Metadata
- **VisDrone**: Scene visibility, object class, occlusion
- **UAVDT**: Vehicle category, occlusion information
- **Multi-view Drone Tracking**: Camera calibration, synchronization data

## By Object Classes

### Drone-Only Detection
- **Kaggle Drone Object Detection**: Focused only on drone detection
- **DroneDetectionDataset**: Specialized for drone detection
- **Roboflow Drone Datasets**: Primarily for drone detection

### Vehicle-Focused
- **UAVDT**: Primarily focused on vehicles in urban environments

### Multi-Class
- **VisDrone**: Pedestrians, cars, bicycles, tricycles, etc.
- **UAV123**: 10 classes including person, car, group, boat, uav, bike, etc.

## By Technical Challenges

### Occlusion Handling
- **UAVDT**: Includes occlusion information
- **UAV123**: Includes partial occlusion (73,677 images) and full occlusion (30,736 images)
- **VisDrone**: Includes occlusion attributes

### Scale Variation
- **UAV123**: Scale variation (100,919 images)
- **VisDrone**: Various altitudes and perspectives

### Lighting/Weather Conditions
- **VisDrone**: Various weather and lighting conditions
- **UAV123**: Illumination variation (32,803 images)
- **Multi-view Drone Tracking**: Winter/snow conditions in dataset 5

### Camera Motion
- **UAV123**: Camera motion (75,025 images)
- **Multi-view Drone Tracking**: Multiple camera perspectives

## By Accessibility and Licensing

### Open License
- **Kaggle Drone Object Detection**: CC BY 4.0
- **DroneDetectionDataset**: MIT License for image tags

### Research-Only
- **UAVDT**: Custom (research-only)

### Not Clearly Specified
- **VisDrone**: License not clearly specified
- **UAV123**: License not clearly specified
- **Multi-view Drone Tracking**: License not clearly specified
- **Roboflow Drone Datasets**: Various licenses depending on dataset
