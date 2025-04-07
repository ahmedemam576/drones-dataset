'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function KaggleDataset() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Datasets
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-6">Kaggle Drone Object Detection Dataset</h1>
        
        <div className="grid gap-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="mb-4">
              This dataset was prepared for a 2019 "Amateur Drone Detection and Tracking" project. It contains over 4,000 
              amateur drone pictures, primarily trained with amateur drones like DJI Phantom models.
            </p>
            <p>
              The dataset is specifically designed for drone detection and includes non-drone, drone-like "negative" objects 
              to improve discrimination capabilities of trained models.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Dataset Statistics</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Over 4,000 amateur drone pictures</li>
              <li>Includes non-drone, drone-like "negative" objects for better discrimination</li>
              <li>Formatted for YOLO architecture</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Technical Details</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Used with YOLOv2-tiny and YOLOv3-voc versions</li>
              <li>Generally suitable for working with YOLO architecture and darknet framework</li>
              <li>Includes configuration for YOLO model training</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Characteristics for Drone Deployment</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contains images of consumer drones (like DJI Phantom)</li>
              <li>Includes negative samples to improve detection accuracy</li>
              <li>Prepared specifically for drone detection and tracking applications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Usability</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Rated 9.38/10 for usability</li>
              <li>Licensed under Attribution 4.0 International (CC BY 4.0)</li>
              <li>Monthly update frequency</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Tags</h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-muted px-3 py-1 rounded-full text-sm">Business</span>
              <span className="bg-muted px-3 py-1 rounded-full text-sm">Image</span>
              <span className="bg-muted px-3 py-1 rounded-full text-sm">Intermediate</span>
              <span className="bg-muted px-3 py-1 rounded-full text-sm">Computer Vision</span>
              <span className="bg-muted px-3 py-1 rounded-full text-sm">Deep Learning</span>
              <span className="bg-muted px-3 py-1 rounded-full text-sm">Transfer Learning</span>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Source</h2>
            <p>
              <a href="https://www.kaggle.com/datasets/sshikamaru/drone-yolo-detection" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Kaggle: https://www.kaggle.com/datasets/sshikamaru/drone-yolo-detection
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
