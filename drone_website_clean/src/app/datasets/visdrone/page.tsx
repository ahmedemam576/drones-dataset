'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function VisdroneDataset() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Datasets
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-6">VisDrone Dataset</h1>
        
        <div className="grid gap-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="mb-4">
              VisDrone is a large-scale benchmark dataset collected by the AISKYEYE team at Lab of Machine Learning and Data Mining, 
              Tianjin University, China. It consists of 288 video clips (261,908 frames) and 10,209 static images captured by 
              drone-mounted cameras across 14 different cities in China.
            </p>
            <p>
              The dataset was designed to address various computer vision tasks including object detection in images, 
              object detection in videos, single-object tracking, multi-object tracking, and crowd counting.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Dataset Statistics</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>288 video clips formed by 261,908 frames</li>
              <li>10,209 static images</li>
              <li>Captured by various drone-mounted cameras</li>
              <li>Covers 14 different cities across China</li>
              <li>Includes both urban and country environments</li>
              <li>Contains over 2.6 million bounding box annotations</li>
              <li>Annotated objects include pedestrians, cars, bicycles, and tricycles</li>
              <li>Includes attributes such as scene visibility, object class, and occlusion</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Tasks Supported</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Object Detection in Images</strong> - Detect objects of predefined categories from individual drone images</li>
              <li><strong>Object Detection in Videos</strong> - Detect objects from drone video frames</li>
              <li><strong>Single-Object Tracking</strong> - Estimate the state of a target in video frames</li>
              <li><strong>Multi-Object Tracking</strong> - Recover the trajectories of objects in video frames</li>
              <li><strong>Crowd Counting</strong> - Count persons in each video frame</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Dataset Components</h2>
            
            <h3 className="text-xl font-medium mt-4 mb-2">Object Detection in Images (VisDrone-DET)</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Trainset: 1.44 GB</li>
              <li>Valset: 0.07 GB</li>
              <li>Testset-dev: 0.28 GB (Ground truth available)</li>
              <li>Testset-challenge: 0.28 GB</li>
            </ul>

            <h3 className="text-xl font-medium mt-4 mb-2">Object Detection in Videos (VisDrone-VID)</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Trainset: 7.53 GB</li>
              <li>Valset: 1.49 GB</li>
              <li>Testset-dev: 2.14 GB (Ground truth available)</li>
              <li>Testset-challenge: 2.70 GB</li>
            </ul>

            <h3 className="text-xl font-medium mt-4 mb-2">Single-Object Tracking (VisDrone-SOT)</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Trainset: ~20.37 GB (split into two parts)</li>
              <li>Valset: 1.29 GB</li>
              <li>Testset-dev: 11.27 GB (Ground truth available)</li>
              <li>Testset-challenge: ~34.71 GB (split into two parts)</li>
            </ul>

            <h3 className="text-xl font-medium mt-4 mb-2">Multi-Object Tracking (VisDrone-MOT)</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Trainset: 7.53 GB</li>
              <li>Valset: 1.48 GB</li>
              <li>Testset-dev: 2.14 GB (Ground truth available)</li>
              <li>Testset-challenge: 2.70 GB</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Characteristics for Drone Deployment</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Collected using various drone platforms (different models)</li>
              <li>Captured under various weather and lighting conditions</li>
              <li>Includes sparse and crowded scenes</li>
              <li>Provides annotations for common objects of interest in aerial surveillance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Source</h2>
            <p>
              <a href="https://github.com/VisDrone/VisDrone-Dataset" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                GitHub: https://github.com/VisDrone/VisDrone-Dataset
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
