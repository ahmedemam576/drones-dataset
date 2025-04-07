'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function Uav123Dataset() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Datasets
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-6">UAV123 Dataset</h1>
        
        <div className="grid gap-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="mb-4">
              UAV123 is a benchmark dataset for low altitude UAV target tracking, designed to evaluate the performance 
              of state-of-the-art trackers on aerial sequences. It includes both real-world UAV footage and a photorealistic 
              UAV simulator that can be coupled with tracking methods.
            </p>
            <p>
              The dataset was released in 2016 by King Abdullah University of Science and Technology, Saudi Arabia, and 
              provides the first evaluation of many state-of-the-art and popular trackers on 123 new and fully annotated 
              HD video sequences captured from a low-altitude aerial perspective.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Dataset Statistics</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>113,476 total images</li>
              <li>109,866 labeled objects</li>
              <li>3,610 (3% of total) unlabeled images</li>
              <li>10 different object classes</li>
              <li>Released in 2016 by King Abdullah University of Science and Technology, Saudi Arabia</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Object Classes</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <span className="bg-muted px-3 py-1 rounded-md text-center">person</span>
              <span className="bg-muted px-3 py-1 rounded-md text-center">car</span>
              <span className="bg-muted px-3 py-1 rounded-md text-center">group</span>
              <span className="bg-muted px-3 py-1 rounded-md text-center">wakeboard</span>
              <span className="bg-muted px-3 py-1 rounded-md text-center">boat</span>
              <span className="bg-muted px-3 py-1 rounded-md text-center">uav</span>
              <span className="bg-muted px-3 py-1 rounded-md text-center">bike</span>
              <span className="bg-muted px-3 py-1 rounded-md text-center">building</span>
              <span className="bg-muted px-3 py-1 rounded-md text-center">truck</span>
              <span className="bg-muted px-3 py-1 rounded-md text-center">bird</span>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Dataset Characteristics</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>HD video sequences captured from a low-altitude aerial perspective</li>
              <li>Bounding box annotations for objects</li>
              <li>Can be split into 12 tracking perspectives/challenges:
                <ul className="list-disc pl-6 mt-2">
                  <li>scale variation (100,919 images)</li>
                  <li>camera motion (75,025 images)</li>
                  <li>partial occlusion (73,677 images)</li>
                  <li>aspect ratio change (70,737 images)</li>
                  <li>viewpoint change (60,143 images)</li>
                  <li>similar object (43,669 images)</li>
                  <li>low resolution (39,016 images)</li>
                  <li>out of view (33,421 images)</li>
                  <li>illumination variation (32,803 images)</li>
                  <li>full occlusion (30,736 images)</li>
                  <li>fast motion (29,387 images)</li>
                  <li>background clutter (17,942 images)</li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Technical Details</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Images marked with "sequence" and "uav20l" tags</li>
              <li>First benchmark to systematically analyze tracker performance on annotated aerial sequences</li>
              <li>Includes specific tracking challenges commonly encountered in low-altitude UAV footage</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Characteristics for Drone Deployment</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Specifically designed for UAV target tracking</li>
              <li>Diverse tracking challenges simulate real-world conditions</li>
              <li>Multiple object classes provide versatility for different applications</li>
              <li>Camera motion and perspective changes reflect actual drone operations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Source</h2>
            <p className="mb-2">
              <a href="https://datasetninja.com/uav123" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Dataset Ninja: https://datasetninja.com/uav123
              </a>
            </p>
            <p>
              Authors: Matthias Mueller, Neil Smith, Bernard Ghanem
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
