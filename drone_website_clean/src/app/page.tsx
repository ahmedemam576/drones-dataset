'use client'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function Home() {
  const datasets = [
    {
      id: 'visdrone',
      name: 'VisDrone',
      description: 'A large-scale benchmark with 288 video clips and 10,209 static images for drone-based detection and tracking.',
      type: 'Detection & Tracking',
      size: '261,908 frames + 10,209 images'
    },
    {
      id: 'roboflow',
      name: 'Roboflow Drone Datasets',
      description: 'Multiple datasets available for drone detection with easy integration through Python API.',
      type: 'Detection',
      size: 'Various'
    },
    {
      id: 'kaggle',
      name: 'Kaggle Drone Object Detection',
      description: 'Over 4,000 amateur drone pictures with negative samples for better discrimination.',
      type: 'Detection',
      size: '4,000+ images'
    },
    {
      id: 'dronedetection',
      name: 'DroneDetectionDataset',
      description: 'Real-world object detection dataset for quadcopter UAV with 51,446 training and 5,375 test images.',
      type: 'Detection',
      size: '56,821 images'
    },
    {
      id: 'multiview',
      name: 'Multi-view Drone Tracking',
      description: 'Datasets with flying drones captured with multiple cameras and accurate 3D trajectory ground truth.',
      type: 'Tracking',
      size: '5 datasets with varying sizes'
    },
    {
      id: 'uavdt',
      name: 'UAVDT',
      description: 'Large-scale UAV detection and tracking benchmark with ~80,000 frames from urban environments.',
      type: 'Detection & Tracking',
      size: '~80,000 frames'
    },
    {
      id: 'uav123',
      name: 'UAV123',
      description: 'Benchmark for low altitude UAV target tracking with 113,476 images and 10 different object classes.',
      type: 'Tracking',
      size: '113,476 images'
    }
  ]

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Drone Datasets for Object Detection and Tracking</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive collection of datasets for training computer vision models for drone applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {datasets.map((dataset) => (
            <Card key={dataset.id} className="flex flex-col">
              <CardHeader>
                <CardTitle>{dataset.name}</CardTitle>
                <CardDescription>{dataset.type}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>{dataset.description}</p>
                <p className="mt-2 text-sm text-muted-foreground">Size: {dataset.size}</p>
              </CardContent>
              <CardFooter>
                <Link href={`/datasets/${dataset.id}`} className="w-full">
                  <Button className="w-full">View Details</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mb-12">
          <Card className="bg-primary/10">
            <CardHeader>
              <CardTitle>Spezielle Anwendungsbereiche</CardTitle>
              <CardDescription>Datensätze für spezifische Industriezweige</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Entdecken Sie kuratierte Sammlungen von Drohnen-Datensätzen, die für spezifische Anwendungsbereiche optimiert sind.
              </p>
            </CardContent>
            <CardFooter className="flex justify-start">
              <Link href="/datasets/defense">
                <Button variant="outline" className="mr-2">Verteidigungsindustrie</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">About This Website</h2>
          <p className="mb-4">
            This website provides information about datasets that can be used to train object detection and tracking models 
            specifically for drone deployment. The datasets vary in size, focus, annotation quality, and suitability for 
            different deployment scenarios.
          </p>
          <p>
            For each dataset, we provide detailed information about its characteristics, technical details, and suitability 
            for various drone applications. Use the cards above to explore individual datasets.
          </p>
        </div>
      </div>
    </main>
  )
}
