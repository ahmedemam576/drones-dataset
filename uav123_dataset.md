# UAV123 Dataset

## Overview
UAV123 is a benchmark dataset for low altitude UAV target tracking, designed to evaluate the performance of state-of-the-art trackers on aerial sequences. It includes both real-world UAV footage and a photorealistic UAV simulator that can be coupled with tracking methods.

## Dataset Statistics
- 113,476 total images
- 109,866 labeled objects
- 3,610 (3% of total) unlabeled images
- 10 different object classes
- Released in 2016 by King Abdullah University of Science and Technology, Saudi Arabia

## Object Classes
- person
- car
- group
- wakeboard
- boat
- uav
- bike
- building
- truck
- bird

## Dataset Characteristics
- HD video sequences captured from a low-altitude aerial perspective
- Bounding box annotations for objects
- Can be split into 12 tracking perspectives/challenges:
  - scale variation (100,919 images)
  - camera motion (75,025 images)
  - partial occlusion (73,677 images)
  - aspect ratio change (70,737 images)
  - viewpoint change (60,143 images)
  - similar object (43,669 images)
  - low resolution (39,016 images)
  - out of view (33,421 images)
  - illumination variation (32,803 images)
  - full occlusion (30,736 images)
  - fast motion (29,387 images)
  - background clutter (17,942 images)

## Technical Details
- Images marked with "sequence" and "uav20l" tags
- First benchmark to systematically analyze tracker performance on annotated aerial sequences
- Includes specific tracking challenges commonly encountered in low-altitude UAV footage

## Characteristics for Drone Deployment
- Specifically designed for UAV target tracking
- Diverse tracking challenges simulate real-world conditions
- Multiple object classes provide versatility for different applications
- Camera motion and perspective changes reflect actual drone operations

## Source
Dataset Ninja: https://datasetninja.com/uav123
Authors: Matthias Mueller, Neil Smith, Bernard Ghanem
