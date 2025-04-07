'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function UavdtDataset() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Datasets
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-6">UAVDT Dataset</h1>
        
        <div className="grid gap-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="mb-4">
              UAVDT (Unmanned Aerial Vehicle Benchmark: Object Detection and Tracking) is a large-scale challenging UAV detection 
              and tracking benchmark designed for three important fundamental tasks: object detection (DET), single object 
              tracking (SOT), and multiple object tracking (MOT).
            </p>
            <p>
              The dataset is captured by UAVs in various complex scenarios, with vehicles being the primary objects of interest.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Dataset Statistics</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Approximately 80,000 representative frames from 10 hours of raw videos</li>
              <li>100 video sequences selected from various locations in urban areas</li>
              <li>Videos recorded at 30 frames per second (fps)</li>
              <li>JPEG image resolution of 1080 × 540 pixels</li>
              <li>Manually annotated with bounding boxes and useful attributes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Dataset Characteristics</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Captured by UAVs in various complex scenarios</li>
              <li>Objects of interest are primarily vehicles</li>
              <li>Annotations include vehicle category and occlusion information</li>
              <li>Represents various common scenes including:
                <ul className="list-disc pl-6 mt-2">
                  <li>Squares</li>
                  <li>Arterial streets</li>
                  <li>Toll stations</li>
                  <li>Highways</li>
                  <li>Crossings</li>
                  <li>T-junctions</li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Tasks Supported</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Object Detection (DET)</strong> - Detecting vehicles from aerial imagery</li>
              <li><strong>Single Object Tracking (SOT)</strong> - Tracking a single vehicle across frames</li>
              <li><strong>Multiple Object Tracking (MOT)</strong> - Tracking multiple vehicles simultaneously</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Characteristics for Drone Deployment</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Specifically designed for UAV-based computer vision</li>
              <li>Diverse urban environments provide realistic training scenarios</li>
              <li>Varying altitudes and perspectives simulate real-world drone operations</li>
              <li>Focus on vehicle tracking makes it suitable for traffic monitoring applications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">License</h2>
            <p>Custom (research-only)</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Source</h2>
            <p className="mb-2">
              <a href="https://paperswithcode.com/dataset/uavdt" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Papers With Code: https://paperswithcode.com/dataset/uavdt
              </a>
            </p>
            <p>
              Paper: "The Unmanned Aerial Vehicle Benchmark: Object Detection and Tracking" by Du et al.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
