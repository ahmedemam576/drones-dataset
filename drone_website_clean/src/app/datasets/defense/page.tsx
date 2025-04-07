'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function DefenseDatasets() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Datasets
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-6">Datasets für die Verteidigungsindustrie</h1>
        
        <div className="grid gap-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Überblick</h2>
            <p className="mb-4">
              Die Verteidigungsindustrie nutzt zunehmend Drohnentechnologie für verschiedene Anwendungen, darunter Überwachung, 
              Aufklärung, Grenzschutz und Objekterkennung. Die folgenden Datensätze sind besonders geeignet für 
              Anwendungen in der Verteidigungsindustrie aufgrund ihrer spezifischen Eigenschaften und Inhalte.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Empfohlene Datensätze</h2>
            
            <div className="space-y-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-medium mb-2">DroneDetectionDataset</h3>
                <p className="mb-4">
                  Dieser Datensatz wurde speziell für die Erkennung von Quadcopter-UAVs entwickelt und eignet sich hervorragend 
                  für Anwendungen im Bereich der Drohnenerkennung und -abwehr.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>51.446 Trainingsbilder und 5.375 Testbilder im 640x480 RGB-Format</li>
                  <li>Zeigt Drohnen in verschiedenen Typen, Größen, Maßstäben, Positionen, Umgebungen und Tageszeiten</li>
                  <li>Speziell für Sicherheitsanwendungen wie den Schutz kritischer Infrastruktur konzipiert</li>
                </ul>
                <Link href="/datasets/dronedetection">
                  <Button>Mehr Details</Button>
                </Link>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-medium mb-2">Multi-view Drone Tracking Datasets</h3>
                <p className="mb-4">
                  Diese Datensätze bieten präzise 3D-Flugbahndaten und Aufnahmen aus mehreren Kameraperspektiven, 
                  was sie ideal für fortschrittliche Tracking-Systeme in der Verteidigungsindustrie macht.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Hochgenaue 3D-Drohnen-Trajektoriendaten von einem präzisen Echtzeit-RTK-System</li>
                  <li>Dataset 5 enthält Winterbedingungen mit schneebedecktem Hintergrund und mehreren Drohnen</li>
                  <li>Mehrere Kameraperspektiven ermöglichen robuste Tracking-Algorithmen</li>
                </ul>
                <Link href="/datasets/multiview">
                  <Button>Mehr Details</Button>
                </Link>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-medium mb-2">UAVDT Dataset</h3>
                <p className="mb-4">
                  Dieser Datensatz konzentriert sich auf urbane Umgebungen und ist besonders nützlich für 
                  Überwachungs- und Aufklärungsanwendungen in städtischen Gebieten.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Etwa 80.000 Frames aus 10 Stunden Rohmaterial</li>
                  <li>Fokus auf urbane Bereiche (Plätze, Straßen, Autobahnen, Kreuzungen)</li>
                  <li>Unterstützt Objekterkennung, Einzelobjekt-Tracking und Mehrfachobjekt-Tracking</li>
                </ul>
                <Link href="/datasets/uavdt">
                  <Button>Mehr Details</Button>
                </Link>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Anwendungsbereiche in der Verteidigungsindustrie</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Drohnenerkennung und -abwehr</h3>
                <p>
                  Die Erkennung und Klassifizierung von unbemannten Luftfahrzeugen ist entscheidend für den Schutz 
                  sensibler Bereiche. DroneDetectionDataset bietet umfangreiche Trainingsdaten für solche Systeme.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Grenzüberwachung</h3>
                <p>
                  UAV123 und UAVDT bieten vielfältige Umgebungen und Objekte, die für Grenzüberwachungssysteme 
                  relevant sind, einschließlich Personen, Fahrzeuge und verschiedene Umgebungsbedingungen.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Objektverfolgung in komplexen Umgebungen</h3>
                <p>
                  Multi-view Tracking Datasets ermöglichen die Entwicklung robuster Tracking-Algorithmen, die 
                  auch unter schwierigen Bedingungen wie schlechtem Wetter oder Verdeckungen funktionieren.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Urbane Überwachung</h3>
                <p>
                  UAVDT ist besonders geeignet für Anwendungen in städtischen Umgebungen, wo die Erkennung und 
                  Verfolgung von Fahrzeugen und anderen Objekten von Interesse ist.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Technische Überlegungen</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Datenschutz und Sicherheit:</strong> Bei der Verwendung dieser Datensätze für Verteidigungsanwendungen 
                sollten entsprechende Sicherheitsmaßnahmen getroffen werden.
              </li>
              <li>
                <strong>Modellrobustheit:</strong> Für Verteidigungsanwendungen ist es besonders wichtig, Modelle zu trainieren, 
                die unter verschiedenen Umgebungsbedingungen robust sind.
              </li>
              <li>
                <strong>Echtzeit-Verarbeitung:</strong> UAV123 enthält Szenarien mit schnellen Bewegungen, die für das Training 
                von Echtzeit-Erkennungssystemen nützlich sind.
              </li>
              <li>
                <strong>Multi-Sensor-Fusion:</strong> Die Multi-view Tracking Datasets bieten eine gute Grundlage für 
                die Entwicklung von Multi-Sensor-Fusionsalgorithmen.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}
