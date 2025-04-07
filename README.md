# Comprehensive Drone Datasets for Object Detection and Tracking

A detailed compilation of datasets specifically designed for training computer vision models for drone applications. This repository contains in-depth research on various drone-related datasets, their characteristics, comparative analysis, and suitability for different applications.

## 🌐 Website

Visit our GitHub Pages website for a user-friendly interface to explore these datasets:
[https://ahmedemam576.github.io/drones-dataset/](https://ahmedemam576.github.io/drones-dataset/) 

## 📊 Detailed Dataset Information

### 1. VisDrone Dataset

**Overview:**
The VisDrone dataset is a large-scale benchmark collected by the AISKYEYE team at Lab of Machine Learning and Data Mining, Tianjin University, China. It consists of 288 video clips (261,908 frames) and 10,209 static images captured by drone-mounted cameras across 14 different cities in China.

**Key Statistics:**
- 288 video clips formed by 261,908 frames
- 10,209 static images
- Captured by various drone-mounted cameras
- Covers 14 different cities across China
- Includes both urban and country environments
- Contains over 2.6 million bounding box annotations
- Annotated objects include pedestrians, cars, bicycles, and tricycles

**Tasks Supported:**
- Object Detection in Images
- Object Detection in Videos
- Single-Object Tracking
- Multi-Object Tracking
- Crowd Counting

**Dataset Components:**
- Object Detection in Images (VisDrone-DET): 1.44 GB (train), 0.07 GB (val), 0.28 GB (test-dev), 0.28 GB (test-challenge)
- Object Detection in Videos (VisDrone-VID): 7.53 GB (train), 1.49 GB (val), 2.14 GB (test-dev), 2.70 GB (test-challenge)
- Single-Object Tracking (VisDrone-SOT): ~20.37 GB (train), 1.29 GB (val), 11.27 GB (test-dev), ~34.71 GB (test-challenge)
- Multi-Object Tracking (VisDrone-MOT): 7.53 GB (train), 1.48 GB (val), 2.14 GB (test-dev), 2.70 GB (test-challenge)

**Link:** [VisDrone Dataset on GitHub](https://github.com/VisDrone/VisDrone-Dataset) 

### 2. Roboflow Drone Datasets

**Overview:**
Roboflow Universe hosts a variety of drone-related datasets contributed by the computer vision community. These datasets are specifically designed for training object detection models to identify drones in various environments and contexts.

**Key Datasets:**
1. **Drone Detection Dataset**
   - 2,042 images across 3 classes
   - Classes: drone, helicopter, airplane
   - Annotations in YOLO format
   - Includes images from various angles and distances

2. **Drone Surveillance**
   - 764 images with drone annotations
   - Focused on security and surveillance applications
   - Includes drones at various distances and lighting conditions

3. **Drone vs Bird Detection**
   - 1,160 images with both drones and birds
   - Designed to help models distinguish between drones and birds
   - Particularly useful for airport security applications

**Integration Features:**
- Python API for easy integration
- Multiple export formats (YOLO, COCO, TFRecord)
- Preprocessing options (resize, auto-orient, augmentation)
- Version control for dataset changes
- Deployment tools for various platforms

**Link:** [Roboflow Drone Datasets](https://universe.roboflow.com/search?q=class%3Adrone) 

### 3. Kaggle Drone Object Detection

**Overview:**
The Kaggle Drone YOLO Detection dataset is a comprehensive collection of drone images specifically designed for training object detection models using the YOLO architecture. It contains over 4,000 amateur drone pictures with annotations for drone detection.

**Key Statistics:**
- Over 4,000 amateur drone pictures
- Includes both positive samples (with drones) and negative samples (without drones)
- Annotations in YOLO format
- Various drone types and models
- Different backgrounds and environments
- Various lighting conditions

**Dataset Structure:**
- images/ - Contains all the drone images
- labels/ - Contains YOLO format annotations for each image
- train.txt - List of training images
- val.txt - List of validation images
- test.txt - List of test images
- classes.txt - List of object classes (drone)

**Annotation Format:**
YOLO format: `<class_id> <x_center> <y_center> <width> <height>`

**Link:** [Kaggle Drone YOLO Detection](https://www.kaggle.com/datasets/sshikamaru/drone-yolo-detection) 

### 4. DroneDetectionDataset

**Overview:**
The DroneDetectionDataset is a real-world object detection dataset specifically designed for detecting quadcopter UAVs (drones). It was created to address the growing need for reliable drone detection systems in various security and surveillance applications.

**Key Statistics:**
- 51,446 training images
- 5,375 test images
- Single class: "drone" (quadcopter UAV)
- Annotations in PASCAL VOC format
- Various lighting conditions (day, dusk, night)
- Multiple environments (urban, rural, indoor)
- Different distances and angles

**Collection Methodology:**
- Controlled drone flights with various models
- Different camera systems (fixed and mobile)
- Various distances from the camera (5m to 100m)
- Multiple flight patterns and maneuvers
- Different backgrounds and environments

**Link:** [DroneDetectionDataset on GitHub](https://github.com/Maciullo/DroneDetectionDataset) 

### 5. Multi-view Drone Tracking Datasets

**Overview:**
The Multi-view Drone Tracking datasets are specialized collections designed for tracking drones using multiple camera views. These datasets are particularly valuable for developing systems that can accurately track drones in 3D space using camera networks.

**Key Datasets:**
1. **MDAT (Multi-view Drone Aerial Tracking)**
   - 4 synchronized camera views
   - Over 30 minutes of footage
   - Accurate 3D trajectory ground truth
   - Various flight patterns and maneuvers
   - Multiple drone models
   - Outdoor environment with challenging backgrounds

2. **CTU-UAS (Czech Technical University UAV Stereo Dataset)**
   - Stereo camera setup (2 synchronized views)
   - Indoor and outdoor scenarios
   - Multiple UAV types
   - Precise camera calibration data
   - 3D position ground truth from motion capture system

3. **AirSim-MAP (Multi-Agent Perception)**
   - Synthetic dataset generated using AirSim simulator
   - Multiple camera viewpoints
   - Perfect 3D ground truth
   - Various weather and lighting conditions
   - Multiple drone types and behaviors

**Technical Specifications:**
- MDAT Dataset: 1920×1080 pixels, 30 FPS, 4 cameras in a square formation, ±10cm ground truth accuracy
- CTU-UAS Dataset: 1280×720 pixels, 25 FPS, 20cm stereo baseline, ±5mm (indoor) / ±5cm (outdoor) ground truth accuracy

**Link:** [Multi-view Drone Tracking Datasets on GitHub](https://github.com/CenekAlbl/drone-tracking-datasets) 

### 6. UAVDT Dataset

**Overview:**
The UAVDT (UAV Detection and Tracking) dataset is a large-scale benchmark specifically designed for object detection and tracking from UAV (drone) perspectives. It consists of approximately 80,000 frames with over 1 million annotated bounding boxes, captured from various urban environments.

**Key Statistics:**
- 100 video sequences with ~80,000 frames
- Over 1 million annotated bounding boxes
- 3 object categories: car, truck, bus
- Captured from various altitudes (15-70 meters)
- Multiple weather conditions (daylight, night, fog)
- Various camera movements (stationary, following, circling)
- Multiple locations (urban roads, highways, intersections)

**Annotation Details:**
Each object is annotated with:
- Bounding box coordinates (x, y, width, height)
- Object category (car, truck, bus)
- Occlusion level (no occlusion, partial occlusion, heavy occlusion)
- Object truncation (whether the object extends beyond the frame)
- Object size (small, medium, large)
- Vehicle orientation (front, rear, side, other)

**Attribute Information:**
Each video sequence is labeled with three high-level attributes:
- Weather condition: daylight, night, fog
- Flying altitude: low-altitude, medium-altitude, high-altitude
- Camera view: front-view, side-view, bird-view

**Link:** [UAVDT Dataset on Papers With Code](https://paperswithcode.com/dataset/uavdt) 

### 7. UAV123 Dataset

**Overview:**
The UAV123 dataset is a benchmark specifically designed for visual object tracking from low-altitude UAVs (drones). It contains 123 video sequences with more than 110,000 frames captured from aerial perspectives, making it one of the most comprehensive datasets for UAV-based tracking.

**Key Statistics:**
- 123 video sequences
- 113,476 annotated frames
- 10 different object classes
- Average sequence length: 915 frames
- Captured using professional-grade UAVs
- Resolution: 1280×720 pixels
- Frame rate: 30 FPS

**Dataset Composition:**
- UAV123: 103 real-world sequences captured using a professional-grade UAV
- UAV20L: 20 long-term tracking sequences (each with 1,500+ frames)
- UAV123@10fps: Same sequences but downsampled to 10 FPS

**Object Categories:**
Person, Car, Truck, Boat, Group (of people), Building, Wakeboard, Bike, Animal, Other

**Tracking Challenges:**
- Aspect Ratio Change (ARC)
- Background Clutter (BC)
- Camera Motion (CM)
- Fast Motion (FM)
- Full Occlusion (FOC)
- Illumination Variation (IV)
- Low Resolution (LR)
- Out-of-View (OV)
- Partial Occlusion (POC)
- Similar Object (SOB)
- Scale Variation (SV)
- Viewpoint Change (VC)

**Link:** [UAV123 Dataset on Dataset Ninja](https://datasetninja.com/uav123) 

### 8. Defense Industry Applications

**Overview:**
Drone detection and tracking datasets have significant applications in the defense industry, where they are used to develop systems for airspace monitoring, counter-drone solutions, and security applications.

**Key Defense Applications:**
1. **Counter-UAS (C-UAS) Systems**
   - Detection, tracking, and neutralization of unauthorized drones
   - Various drone types and models, including military and commercial
   - Different flight patterns and behaviors
   - Long-range detection capabilities
   - Ability to distinguish between drones and other flying objects

2. **Perimeter Security**
   - Early detection of small drones at long distances
   - Classification of drone types and potential threats
   - Tracking of multiple drones simultaneously
   - Integration with other security systems

3. **Battlefield Reconnaissance**
   - Identification of drone models to determine origin
   - Tracking of erratic or evasive flight patterns
   - Operation in challenging environments (dust, smoke, etc.)
   - Low false positive rates to avoid friendly fire incidents

**Specialized Datasets:**
- MIDAS (Military Drone Aerial Surveillance) Dataset
- CUAS-7K Dataset
- NATO Drone Classification Dataset

**Technical Considerations:**
- Real-time Processing
- Robustness to Countermeasures
- Multi-modal Fusion
- Edge Deployment
- Low False Alarm Rate
- Continuous Learning

## 📊 Comparative Analysis

### Size Comparison

| Dataset | Images/Frames | Object Classes | Annotation Type |
|---------|---------------|----------------|-----------------|
| VisDrone | 261,908 frames + 10,209 images | Multiple | Bounding boxes |
| Roboflow | Varies by subset (2,000-10,000) | Varies | Bounding boxes |
| Kaggle Drone | ~4,000 | 1 (drone) | YOLO format |
| DroneDetectionDataset | 56,821 | 1 (drone) | PASCAL VOC |
| Multi-view Tracking | Varies by subset | 1 (drone) | 3D trajectories |
| UAVDT | ~80,000 | 3 (vehicles) | Bounding boxes + attributes |
| UAV123 | 113,476 | 10 | Bounding boxes |

### Task Suitability

| Dataset | Object Detection | Object Tracking | Multi-Object Tracking | 3D Tracking |
|---------|------------------|-----------------|------------------------|------------|
| VisDrone | ★★★★★ | ★★★★☆ | ★★★★★ | ☆☆☆☆☆ |
| Roboflow | ★★★★☆ | ★★☆☆☆ | ★★☆☆☆ | ☆☆☆☆☆ |
| Kaggle Drone | ★★★★☆ | ★☆☆☆☆ | ★☆☆☆☆ | ☆☆☆☆☆ |
| DroneDetectionDataset | ★★★★☆ | ★★☆☆☆ | ★★☆☆☆ | ☆☆☆☆☆ |
| Multi-view Tracking | ★★★☆☆ | ★★★★☆ | ★★★★☆ | ★★★★★ |
| UAVDT | ★★★★★ | ★★★★☆ | ★★★★★ | ☆☆☆☆☆ |
| UAV123 | ★★★☆☆ | ★★★★★ | ★★★☆☆ | ☆☆☆☆☆ |

### Environmental Diversity

| Dataset | Urban | Rural | Indoor | Weather Variations | Lighting Variations |
|---------|-------|-------|--------|-------------------|---------------------|
| VisDrone | ★★★★★ | ★★★☆☆ | ☆☆☆☆☆ | ★★★☆☆ | ★★★☆☆ |
| Roboflow | ★★★★☆ | ★★★☆☆ | ★★★☆☆ | ★★★☆☆ | ★★★☆☆ |
| Kaggle Drone | ★★★☆☆ | ★★★☆☆ | ★★☆☆☆ | ★★☆☆☆ | ★★★☆☆ |
| DroneDetectionDataset | ★★★★☆ | ★★★☆☆ | ★★★☆☆ | ★★★☆☆ | ★★★★☆ |
| Multi-view Tracking | ★★★☆☆ | ★★★★☆ | ★★★☆☆ | ★★☆☆☆ | ★★☆☆☆ |
| UAVDT | ★★★★★ | ★☆☆☆☆ | ☆☆☆☆☆ | ★★★★☆ | ★★★★☆ |
| UAV123 | ★★★☆☆ | ★★★★★ | ☆☆☆☆☆ | ★★★☆☆ | ★★★☆☆ |

### Drone Perspective

| Dataset | Drone-mounted Camera | Ground-based Camera | Multiple Viewpoints |
|---------|----------------------|---------------------|---------------------|
| VisDrone | ★★★★★ | ☆☆☆☆☆ | ☆☆☆☆☆ |
| Roboflow | ★★★☆☆ | ★★★★☆ | ★★☆☆☆ |
| Kaggle Drone | ★★★☆☆ | ★★★★☆ | ★☆☆☆☆ |
| DroneDetectionDataset | ★★☆☆☆ | ★★★★★ | ★★☆☆☆ |
| Multi-view Tracking | ★★☆☆☆ | ★★★★★ | ★★★★★ |
| UAVDT | ★★★★★ | ☆☆☆☆☆ | ☆☆☆☆☆ |
| UAV123 | ★★★★★ | ☆☆☆☆☆ | ☆☆☆☆☆ |

## 🚀 Implementation Strategies

### Data Preprocessing

- **Image Resizing**: Standardize input dimensions based on model requirements
  - YOLO models: 416×416, 608×608, or 640×640
  - Faster R-CNN: Typically 800×800 or 1024×1024
  - SSD: 300×300 or 512×512

- **Augmentation Techniques**:
  - Geometric: Rotation, flipping, scaling, cropping
  - Photometric: Brightness, contrast, saturation, hue adjustments
  - Noise: Gaussian, salt-and-pepper
  - Weather simulation: Rain, fog, snow effects
  - Motion blur: Simulate camera or object motion

- **Class Balancing**:
  - Oversampling minority classes
  - Undersampling majority classes
  - Synthetic data generation for rare classes
  - Weighted loss functions

### Model Selection

- **Object Detection Models**:
  | Model | Speed | Accuracy | Memory Requirements |
  |-------|-------|----------|---------------------|
  | YOLOv5/v8 | ★★★★★ | ★★★★☆ | ★★★☆☆ |
  | Faster R-CNN | ★★☆☆☆ | ★★★★★ | ★★★★☆ |
  | SSD | ★★★★☆ | ★★★☆☆ | ★★★☆☆ |
  | EfficientDet | ★★★☆☆ | ★★★★☆ | ★★★☆☆ |
  | RetinaNet | ★★★☆☆ | ★★★★☆ | ★★★★☆ |

- **Tracking Models**:
  | Model | Speed | Accuracy | Multi-Object Support |
  |-------|-------|----------|---------------------|
  | SORT | ★★★★★ | ★★★☆☆ | ★★★★☆ |
  | DeepSORT | ★★★★☆ | ★★★★☆ | ★★★★☆ |
  | ByteTrack | ★★★★☆ | ★★★★★ | ★★★★★ |
  | StrongSORT | ★★★☆☆ | ★★★★★ | ★★★★★ |
  | OC-SORT | ★★★★☆ | ★★★★☆ | ★★★★★ |

### Training Approaches

1. **Transfer Learning**:
   - Start with models pre-trained on COCO, ImageNet, or similar datasets
   - Fine-tune on drone-specific datasets
   - Freeze early layers, train later layers

2. **Mixed Dataset Training**:
   - Combine multiple drone datasets for greater diversity
   - Use domain adaptation techniques to handle dataset differences
   - Implement curriculum learning (start simple, increase difficulty)

3. **Specialized Training**:
   - Train separate models for different conditions (day/night, urban/rural)
   - Ensemble multiple specialized models
   - Use meta-learning for quick adaptation to new scenarios

### Deployment Considerations

1. **Hardware Optimization**:
   - Model quantization (FP32 → FP16 or INT8)
   - Model pruning to reduce parameters
   - Knowledge distillation to smaller models
   - TensorRT, ONNX Runtime, or TFLite for acceleration

2. **Real-time Processing**:
   - Frame skipping strategies
   - Region of interest processing
   - Adaptive resolution based on computational resources
   - Parallel processing pipelines

3. **Drone-specific Constraints**:
   - Power consumption optimization
   - Weight and size limitations for onboard processing
   - Communication bandwidth for offloaded processing
   - Thermal management for continuous operation

## 📚 Additional Resources

- [Comprehensive Report](drone_datasets/comprehensive_report.md): Detailed analysis of all datasets
- [Dataset Suitability Evaluation](drone_datasets/dataset_suitability_evaluation.md): Assessment of datasets for different drone applications
- [Categorized Datasets](drone_datasets/categorized_datasets.md): Datasets organized by various characteristics

## 🛠️ Website Development

This repository also contains a Next.js website that presents all the dataset information in a user-friendly interface. The website is deployed using GitHub Pages.

To run the website locally:
1. Clone this repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000)  in your browser

## 📄 License

This research compilation is provided for educational and research purposes. All datasets mentioned retain their original licenses and terms of use. Please refer to the original sources for specific licensing information.

## 👤 Author

Created by Ahmed Emam ([@ahmedemam576](https://github.com/ahmedemam576) )

## 🙏 Acknowledgements

Special thanks to all the researchers and organizations who created and maintain the original datasets referenced in this repository.
