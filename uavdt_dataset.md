# UAVDT Dataset

## Overview
UAVDT (Unmanned Aerial Vehicle Benchmark: Object Detection and Tracking) is a large-scale challenging UAV detection and tracking benchmark designed for three important fundamental tasks: object detection (DET), single object tracking (SOT), and multiple object tracking (MOT).

## Dataset Statistics
- Approximately 80,000 representative frames from 10 hours of raw videos
- 100 video sequences selected from various locations in urban areas
- Videos recorded at 30 frames per second (fps)
- JPEG image resolution of 1080 × 540 pixels
- Manually annotated with bounding boxes and useful attributes

## Dataset Characteristics
- Captured by UAVs in various complex scenarios
- Objects of interest are primarily vehicles
- Annotations include vehicle category and occlusion information
- Represents various common scenes including:
  - Squares
  - Arterial streets
  - Toll stations
  - Highways
  - Crossings
  - T-junctions

## Tasks Supported
1. **Object Detection (DET)** - Detecting vehicles from aerial imagery
2. **Single Object Tracking (SOT)** - Tracking a single vehicle across frames
3. **Multiple Object Tracking (MOT)** - Tracking multiple vehicles simultaneously

## Characteristics for Drone Deployment
- Specifically designed for UAV-based computer vision
- Diverse urban environments provide realistic training scenarios
- Varying altitudes and perspectives simulate real-world drone operations
- Focus on vehicle tracking makes it suitable for traffic monitoring applications

## License
Custom (research-only)

## Source
Paper: "The Unmanned Aerial Vehicle Benchmark: Object Detection and Tracking"
Authors: Du et al.
