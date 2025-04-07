# Categorized Drone Datasets

This document organizes drone-related datasets into categories based on various characteristics, making it easier to identify the most suitable dataset for specific applications.

## Categorization by Primary Task

### Object Detection Datasets

Datasets primarily designed for detecting objects in individual frames:

1. **VisDrone-DET**
   - **Description**: Large-scale drone-captured images with bounding box annotations
   - **Size**: 10,209 images with 2.6 million object instances
   - **Classes**: 10 categories including pedestrians, cars, buses, trucks, etc.
   - **Annotation Type**: Bounding boxes with category labels
   - **Link**: [VisDrone-DET](https://github.com/VisDrone/VisDrone-Dataset) 

2. **Roboflow Drone Detection**
   - **Description**: Collection of datasets for detecting drones in images
   - **Size**: Varies by subset (2,000-10,000 images)
   - **Classes**: Primarily drone, sometimes with additional aircraft types
   - **Annotation Type**: Bounding boxes in various formats (YOLO, COCO, etc.)
   - **Link**: [Roboflow Drone Detection](https://universe.roboflow.com/search?q=class%3Adrone) 

3. **Kaggle Drone YOLO Detection**
   - **Description**: Amateur drone pictures with annotations for drone detection
   - **Size**: ~4,000 images
   - **Classes**: Single class (drone)
   - **Annotation Type**: YOLO format bounding boxes
   - **Link**: [Kaggle Drone Detection](https://www.kaggle.com/datasets/sshikamaru/drone-yolo-detection) 

4. **DroneDetectionDataset**
   - **Description**: Real-world dataset for quadcopter UAV detection
   - **Size**: 51,446 training images, 5,375 test images
   - **Classes**: Single class (drone)
   - **Annotation Type**: PASCAL VOC format
   - **Link**: [DroneDetectionDataset](https://github.com/Maciullo/DroneDetectionDataset) 

### Object Tracking Datasets

Datasets designed for tracking objects across video sequences:

1. **VisDrone-SOT**
   - **Description**: Single object tracking from drone perspective
   - **Size**: 167 sequences with 139,275 frames
   - **Classes**: Various objects (cars, pedestrians, etc.)
   - **Annotation Type**: Bounding box trajectories
   - **Link**: [VisDrone-SOT](https://github.com/VisDrone/VisDrone-Dataset) 

2. **UAV123**
   - **Description**: Low-altitude UAV benchmark for visual object tracking
   - **Size**: 123 video sequences with 113,476 frames
   - **Classes**: 10 different object categories
   - **Annotation Type**: Bounding box trajectories
   - **Link**: [UAV123](https://datasetninja.com/uav123) 

3. **Multi-view Drone Tracking**
   - **Description**: Datasets with drones captured from multiple synchronized cameras
   - **Size**: Varies by subset
   - **Classes**: Primarily drones
   - **Annotation Type**: 3D trajectories and multi-view bounding boxes
   - **Link**: [Multi-view Drone Tracking](https://github.com/CenekAlbl/drone-tracking-datasets) 

### Multi-Object Tracking Datasets

Datasets for tracking multiple objects simultaneously:

1. **VisDrone-MOT**
   - **Description**: Multi-object tracking from drone perspective
   - **Size**: 96 video sequences with 40,000+ frames
   - **Classes**: 10 categories (same as VisDrone-DET)
   - **Annotation Type**: Bounding boxes with consistent IDs across frames
   - **Link**: [VisDrone-MOT](https://github.com/VisDrone/VisDrone-Dataset) 

2. **UAVDT**
   - **Description**: UAV detection and tracking benchmark focused on vehicles
   - **Size**: 100 video sequences with ~80,000 frames
   - **Classes**: 3 categories (car, truck, bus)
   - **Annotation Type**: Bounding boxes with attributes and consistent IDs
   - **Link**: [UAVDT](https://paperswithcode.com/dataset/uavdt) 

## Categorization by Camera Perspective

### Drone-mounted Camera Datasets

Datasets captured from cameras mounted on drones (aerial perspective):

1. **VisDrone**
   - **Altitude Range**: 15-180 meters
   - **Camera Movement**: Various (stationary, following, circling)
   - **Environment**: Urban and rural areas across 14 Chinese cities
   - **Link**: [VisDrone](https://github.com/VisDrone/VisDrone-Dataset) 

2. **UAVDT**
   - **Altitude Range**: 15-70 meters
   - **Camera Movement**: Stationary, following, circling
   - **Environment**: Urban roads, highways, intersections
   - **Link**: [UAVDT](https://paperswithcode.com/dataset/uavdt) 

3. **UAV123**
   - **Altitude Range**: Low altitude (10-30 meters)
   - **Camera Movement**: Various patterns including following and circling
   - **Environment**: Primarily rural and natural settings
   - **Link**: [UAV123](https://datasetninja.com/uav123) 

### Ground-based Camera Datasets

Datasets captured from ground-based cameras looking at drones:

1. **DroneDetectionDataset**
   - **Distance Range**: 5-100 meters
   - **Camera Type**: Fixed and mobile ground cameras
   - **Environment**: Urban, rural, and indoor settings
   - **Link**: [DroneDetectionDataset](https://github.com/Maciullo/DroneDetectionDataset) 

2. **Kaggle Drone YOLO Detection**
   - **Distance Range**: Various distances
   - **Camera Type**: Ground-based cameras
   - **Environment**: Mixed environments
   - **Link**: [Kaggle Drone Detection](https://www.kaggle.com/datasets/sshikamaru/drone-yolo-detection) 

### Multi-view Camera Datasets

Datasets with multiple synchronized camera views:

1. **MDAT (Multi-view Drone Aerial Tracking)**
   - **Camera Setup**: 4 synchronized cameras in square formation
   - **Environment**: Outdoor settings
   - **Special Features**: 3D trajectory ground truth
   - **Link**: Part of [Multi-view Drone Tracking](https://github.com/CenekAlbl/drone-tracking-datasets) 

2. **CTU-UAS**
   - **Camera Setup**: Stereo camera setup (2 synchronized views)
   - **Environment**: Indoor and outdoor scenarios
   - **Special Features**: Precise camera calibration data
   - **Link**: Part of [Multi-view Drone Tracking](https://github.com/CenekAlbl/drone-tracking-datasets) 

## Categorization by Environment

### Urban Environment Datasets

Datasets captured primarily in urban settings:

1. **VisDrone (Urban Subset)**
   - **Features**: Dense urban areas, buildings, roads, traffic
   - **Challenges**: Crowded scenes, complex backgrounds, occlusions
   - **Link**: [VisDrone](https://github.com/VisDrone/VisDrone-Dataset) 

2. **UAVDT**
   - **Features**: Exclusively urban with focus on roads and traffic
   - **Challenges**: Various weather conditions, different altitudes
   - **Link**: [UAVDT](https://paperswithcode.com/dataset/uavdt) 

### Rural/Natural Environment Datasets

Datasets captured in rural or natural settings:

1. **UAV123**
   - **Features**: Natural landscapes, beaches, fields, forests
   - **Challenges**: Similar-colored backgrounds, small objects
   - **Link**: [UAV123](https://datasetninja.com/uav123) 

2. **VisDrone (Rural Subset)**
   - **Features**: Less densely populated areas, more natural elements
   - **Challenges**: Varied terrain, fewer but more dispersed objects
   - **Link**: [VisDrone](https://github.com/VisDrone/VisDrone-Dataset) 

### Indoor Environment Datasets

Datasets captured in indoor settings:

1. **DroneDetectionDataset (Indoor Subset)**
   - **Features**: Controlled indoor environments
   - **Challenges**: Limited space, reflective surfaces, artificial lighting
   - **Link**: [DroneDetectionDataset](https://github.com/Maciullo/DroneDetectionDataset) 

2. **CTU-UAS (Indoor Subset)**
   - **Features**: Indoor laboratory environment
   - **Challenges**: Controlled lighting, motion capture ground truth
   - **Link**: Part of [Multi-view Drone Tracking](https://github.com/CenekAlbl/drone-tracking-datasets) 

## Categorization by Size

### Large-scale Datasets (>100K frames)

1. **VisDrone**
   - **Images/Frames**: 261,908 frames + 10,209 images
   - **Annotations**: 2.6 million+ bounding boxes
   - **Storage Requirements**: ~80GB
   - **Link**: [VisDrone](https://github.com/VisDrone/VisDrone-Dataset) 

2. **UAV123**
   - **Images/Frames**: 113,476 frames
   - **Annotations**: 113,476 bounding boxes
   - **Storage Requirements**: ~20GB
   - **Link**: [UAV123](https://datasetninja.com/uav123) 

3. **UAVDT**
   - **Images/Frames**: ~80,000 frames
   - **Annotations**: 1 million+ bounding boxes
   - **Storage Requirements**: ~30GB
   - **Link**: [UAVDT](https://paperswithcode.com/dataset/uavdt) 

### Medium-scale Datasets (10K-100K frames)

1. **DroneDetectionDataset**
   - **Images/Frames**: 56,821 images
   - **Annotations**: 56,821 bounding boxes
   - **Storage Requirements**: ~15GB
   - **Link**: [DroneDetectionDataset](https://github.com/Maciullo/DroneDetectionDataset) 

### Small-scale Datasets (<10K frames)

1. **Kaggle Drone YOLO Detection**
   - **Images/Frames**: ~4,000 images
   - **Annotations**: ~4,000 bounding boxes
   - **Storage Requirements**: ~2GB
   - **Link**: [Kaggle Drone Detection](https://www.kaggle.com/datasets/sshikamaru/drone-yolo-detection) 

2. **Various Roboflow Datasets**
   - **Images/Frames**: Typically 1,000-5,000 images per dataset
   - **Annotations**: Varies by dataset
   - **Storage Requirements**: 1-5GB per dataset
   - **Link**: [Roboflow Universe](https://universe.roboflow.com/search?q=class%3Adrone) 

## Categorization by Annotation Type

### Bounding Box Annotations

1. **VisDrone**
   - **Format**: [x, y, width, height, class, truncation, occlusion, ...]
   - **Classes**: 10 categories
   - **Additional Attributes**: Truncation, occlusion, etc.
   - **Link**: [VisDrone](https://github.com/VisDrone/VisDrone-Dataset) 

2. **UAVDT**
   - **Format**: [x, y, width, height, class, occlusion, ...]
   - **Classes**: 3 categories (vehicles)
   - **Additional Attributes**: Occlusion, vehicle orientation, etc.
   - **Link**: [UAVDT](https://paperswithcode.com/dataset/uavdt) 

### YOLO Format Annotations

1. **Kaggle Drone YOLO Detection**
   - **Format**: [class_id, x_center, y_center, width, height] (normalized)
   - **Classes**: Single class (drone)
   - **Link**: [Kaggle Drone Detection](https://www.kaggle.com/datasets/sshikamaru/drone-yolo-detection) 

2. **Some Roboflow Datasets**
   - **Format**: YOLO format (can be exported in multiple formats)
   - **Classes**: Varies by dataset
   - **Link**: [Roboflow Universe](https://universe.roboflow.com/search?q=class%3Adrone) 

### PASCAL VOC Format Annotations

1. **DroneDetectionDataset**
   - **Format**: XML files with bounding box coordinates
   - **Classes**: Single class (drone)
   - **Link**: [DroneDetectionDataset](https://github.com/Maciullo/DroneDetectionDataset) 

### 3D Trajectory Annotations

1. **Multi-view Drone Tracking Datasets**
   - **Format**: 3D coordinates [x, y, z] over time
   - **Additional Data**: Camera calibration parameters
   - **Link**: [Multi-view Drone Tracking](https://github.com/CenekAlbl/drone-tracking-datasets) 

## Categorization by Application Domain

### Traffic Monitoring

1. **UAVDT**
   - **Focus**: Vehicle detection and tracking in urban traffic
   - **Special Features**: Vehicle attribute annotations
   - **Link**: [UAVDT](https://paperswithcode.com/dataset/uavdt) 

2. **VisDrone (Traffic Subset)**
   - **Focus**: Multi-class traffic monitoring including vehicles and pedestrians
   - **Special Features**: Dense urban traffic scenarios
   - **Link**: [VisDrone](https://github.com/VisDrone/VisDrone-Dataset) 

### Security and Surveillance

1. **DroneDetectionDataset**
   - **Focus**: Detecting unauthorized drones
   - **Special Features**: Various lighting conditions and environments
   - **Link**: [DroneDetectionDataset](https://github.com/Maciullo/DroneDetectionDataset) 

2. **Roboflow Drone Surveillance**
   - **Focus**: Drone detection for security applications
   - **Special Features**: Focus on security and surveillance scenarios
   - **Link**: [Roboflow Universe](https://universe.roboflow.com/search?q=class%3Adrone+surveillance) 

### Drone Racing and Navigation

1. **UAV123 (Selected Sequences)**
   - **Focus**: Fast-moving object tracking relevant to racing
   - **Special Features**: Challenging viewpoint and scale changes
   - **Link**: [UAV123](https://datasetninja.com/uav123) 

### Defense Applications

1. **Counter-UAS Datasets**
   - **Focus**: Detecting and tracking potentially hostile drones
   - **Special Features**: Various drone types and models
   - **Examples**: DroneDetectionDataset, Kaggle Drone Dataset, specialized defense datasets

## Conclusion

This categorization demonstrates the diversity of available drone datasets and helps in selecting the most appropriate dataset based on specific requirements. For many applications, combining datasets from different categories may provide the best results, leveraging the strengths of each dataset.

When selecting datasets, consider:
1. The specific task requirements (detection, tracking, etc.)
2. The deployment environment (urban, rural, indoor)
3. The computational constraints of your drone platform
4. The specific objects or scenarios of interest

By carefully matching dataset characteristics with application requirements, you can develop more effective computer vision systems for drone applications.
