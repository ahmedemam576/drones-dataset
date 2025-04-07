'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function DroneDetectionDataset() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Datasets
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-6">DroneDetectionDataset (GitHub)</h1>
        
        <div className="grid gap-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="mb-4">
              The Drone Detection Dataset is a real-world object detection dataset specifically created for Quadcopter 
              Unmanned Aerial Vehicle (UAV) detection. It was developed as part of a PhD research on Engineering Applications 
              of Artificial Intelligence at Warsaw University of Technology.
            </p>
            <p>
              This dataset focuses more on drone detection in a range of environments rather than drone tracking, addressing 
              the intrinsic challenge of drone tracking and model overfitting.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Dataset Statistics</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>51,446 training images</li>
              <li>5,375 test images</li>
              <li>All images are 640x480 RGB format</li>
              <li>Shows drones in different types, sizes, scales, positions, environments, and times-of-day</li>
              <li>Includes XML labels prepared for Haar Cascade training (easily modified for ANN training)</li>
              <li>Total dataset size is approximately 5GB</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Dataset Creation</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Frames were automatically extracted from publicly available YouTube videos</li>
              <li>Manually annotated by the author</li>
              <li>Initial labeling was done manually, with subsequent images initially labeled by trained models to reduce annotation time</li>
              <li>Frames were extracted at approximately 50-140 frame intervals</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Technical Details</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Includes trained Haar Cascades and ANN models</li>
              <li>10 best models (sorted by accuracy) referenced in the original paper are available</li>
              <li>Dataset focuses on drone detection rather than tracking</li>
              <li>Designed to avoid model overfitting by including diverse environments</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Characteristics for Drone Deployment</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contains diverse drone types and environments</li>
              <li>Includes different lighting conditions and times of day</li>
              <li>Specifically designed for security applications like protecting critical infrastructure</li>
              <li>Suitable for both traditional computer vision (Haar Cascades) and deep learning approaches</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">License</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Released under MIT License for image tags</li>
              <li>Video sources are from publicly available YouTube videos</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Authors</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Maciej Pawełczyk</li>
              <li>Marek Wojtyra</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Source</h2>
            <p className="mb-2">
              <a href="https://github.com/Maciullo/DroneDetectionDataset" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                GitHub: https://github.com/Maciullo/DroneDetectionDataset
              </a>
            </p>
            <p>
              Paper: M. Ł. Pawełczyk and M. Wojtyra, "Real World Object Detection Dataset for Quadcopter Unmanned Aerial Vehicle Detection," in IEEE Access, vol. 8, pp. 174394-174409, 2020
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
