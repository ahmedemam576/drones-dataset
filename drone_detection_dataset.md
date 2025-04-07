# DroneDetectionDataset (GitHub)

## Overview
The Drone Detection Dataset is a real-world object detection dataset specifically created for Quadcopter Unmanned Aerial Vehicle (UAV) detection. It was developed as part of a PhD research on Engineering Applications of Artificial Intelligence at Warsaw University of Technology.

## Dataset Statistics
- 51,446 training images
- 5,375 test images
- All images are 640x480 RGB format
- Shows drones in different types, sizes, scales, positions, environments, and times-of-day
- Includes XML labels prepared for Haar Cascade training (easily modified for ANN training)
- Total dataset size is approximately 5GB

## Dataset Creation
- Frames were automatically extracted from publicly available YouTube videos
- Manually annotated by the author
- Initial labeling was done manually, with subsequent images initially labeled by trained models to reduce annotation time
- Frames were extracted at approximately 50-140 frame intervals

## Technical Details
- Includes trained Haar Cascades and ANN models
- 10 best models (sorted by accuracy) referenced in the original paper are available
- Dataset focuses on drone detection rather than tracking
- Designed to avoid model overfitting by including diverse environments

## Characteristics for Drone Deployment
- Contains diverse drone types and environments
- Includes different lighting conditions and times of day
- Specifically designed for security applications like protecting critical infrastructure
- Suitable for both traditional computer vision (Haar Cascades) and deep learning approaches

## License
- Released under MIT License for image tags
- Video sources are from publicly available YouTube videos

## Authors
- Maciej Pawełczyk
- Marek Wojtyra

## Source
GitHub: https://github.com/Maciullo/DroneDetectionDataset
Paper: M. Ł. Pawełczyk and M. Wojtyra, "Real World Object Detection Dataset for Quadcopter Unmanned Aerial Vehicle Detection," in IEEE Access, vol. 8, pp. 174394-174409, 2020
