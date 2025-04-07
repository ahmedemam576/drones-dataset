'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function RoboflowDataset() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Datasets
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-6">Roboflow Drone Datasets</h1>
        
        <div className="grid gap-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="mb-4">
              Roboflow hosts multiple datasets specifically for drone detection, with easy integration through their Python API.
              These datasets can be used to train fine-tuned models for drone detection in images and videos.
            </p>
            <p>
              The datasets can be explored directly in the browser using Roboflow and exported into one of many formats
              for use with various machine learning frameworks.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Multiple datasets available for drone detection</li>
              <li>Supports various export formats (COCO JSON, Pascal VOC XML, YOLO)</li>
              <li>Includes auto-labeling capabilities with Autodistill</li>
              <li>Provides guides for training models using popular architectures</li>
              <li>Python API for easy download and integration</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Integration Example</h2>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code>
{`import roboflow

roboflow.login()

# replace with the drone project you choose
roboflow.download_dataset(
    dataset_url="https://universe.roboflow.com/tracker-qjlj1/drones_new/4",
    model_format="coco"
)`}
              </code>
            </pre>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Training Guides</h2>
            <p className="mb-4">
              Roboflow has written guides on how to train computer vision models with popular architectures. 
              Many guides come with accompanying notebooks you can follow to train a model:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Train a YOLOv8 Object Detection Model</li>
              <li>Train Another Computer Vision Model</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Auto-labeling with Autodistill</h2>
            <p className="mb-4">
              You can use foundation models to automatically label data using Autodistill. This is useful if a dataset 
              you want to use is not already labeled.
            </p>
            <p className="mb-4">
              Autodistill supports using many state-of-the-art models like Grounding DINO and Segment Anything to auto-label data.
              It performs well at identifying common objects, but may struggle with more obscure objects.
            </p>
            <p>
              Recommended approaches include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Grounded SAM for detection and segmentation</li>
              <li>CLIP for classification</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Characteristics for Drone Deployment</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Datasets specifically focused on drone detection</li>
              <li>Variety of drone types and environments depending on the specific dataset</li>
              <li>Easy integration with training pipelines</li>
              <li>Support for multiple model architectures</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Source</h2>
            <p>
              <a href="https://universe.roboflow.com/search?q=class%3Adrone" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Roboflow Universe: https://universe.roboflow.com/search?q=class%3Adrone
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
