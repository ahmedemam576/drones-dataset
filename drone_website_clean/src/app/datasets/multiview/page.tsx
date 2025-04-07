'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function MultiviewDataset() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Datasets
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-6">Multi-view Drone Tracking Datasets</h1>
        
        <div className="grid gap-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="mb-4">
              This repository contains datasets where flying drones (hexacopters) are captured with multiple consumer-grade 
              cameras (smartphones, compact cameras, GoPro, etc.) with highly accurate 3D drone trajectory ground truth 
              recorded by a precise real-time RTK system from Fixposition.
            </p>
            <p>
              The datasets provide a unique multi-perspective view of drone flights with accurate ground truth data,
              making them valuable for developing and testing tracking algorithms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Dataset Components</h2>
            <p className="mb-4">The repository contains 5 datasets with varying characteristics:</p>

            <h3 className="text-xl font-medium mt-4 mb-2">Dataset 1</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>4 cameras</li>
              <li>Flight duration: ~2 minutes</li>
              <li>Easy dataset with short and slow flight</li>
              <li>3D trajectory ground truth: Yes</li>
              <li>2D labels: Yes</li>
            </ul>

            <h3 className="text-xl font-medium mt-4 mb-2">Dataset 2</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>4 cameras</li>
              <li>Flight duration: ~2.5 minutes</li>
              <li>Easy dataset with longer and faster flight</li>
              <li>3D trajectory ground truth: Yes</li>
              <li>2D labels: Yes</li>
            </ul>

            <h3 className="text-xl font-medium mt-4 mb-2">Dataset 3</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>6 cameras</li>
              <li>Flight duration: ~9 minutes</li>
              <li>Medium difficulty dataset with more cameras, long flight, various velocities and motion types</li>
              <li>3D trajectory ground truth: Yes</li>
              <li>Synchronization: Yes</li>
              <li>Camera locations: Yes</li>
              <li>2D labels: Yes</li>
            </ul>

            <h3 className="text-xl font-medium mt-4 mb-2">Dataset 4</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>7 cameras</li>
              <li>Flight duration: ~7 minutes</li>
              <li>High difficulty dataset with many cameras, fast motion and moving clouds making detection harder</li>
              <li>3D trajectory ground truth: Yes</li>
              <li>Synchronization: Yes</li>
              <li>2D labels: Yes</li>
            </ul>

            <h3 className="text-xl font-medium mt-4 mb-2">Dataset 5</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>6 cameras</li>
              <li>3 drones</li>
              <li>Flight duration: ~10 minutes</li>
              <li>Challenging winter dataset with snow-covered background and multiple drones</li>
              <li>3D trajectory ground truth: Yes</li>
              <li>Synchronization: Yes</li>
              <li>Camera locations: Yes</li>
              <li>3D orientation: Yes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Technical Details</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Calibration parameters and calibration images provided for each camera</li>
              <li>Manual labels of drone locations in all datasets</li>
              <li>Videos split into multiple archives using zip format</li>
              <li>Ground truth drone trajectory in dataset 5 estimated by fusing total station tracking and onboard IMU data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Characteristics for Drone Deployment</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Multiple camera views provide diverse perspectives for tracking</li>
              <li>Varying difficulty levels from easy to challenging scenarios</li>
              <li>Different environmental conditions (including winter/snow)</li>
              <li>Multiple drones in dataset 5 for multi-object tracking</li>
              <li>Precise ground truth for algorithm evaluation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Source</h2>
            <p>
              <a href="https://github.com/CenekAlbl/drone-tracking-datasets" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                GitHub: https://github.com/CenekAlbl/drone-tracking-datasets
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
