"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function PruebasRed() {
  const [latency, setLatency] = useState<number | null>(null)
  const [downloadSpeed, setDownloadSpeed] = useState<number | null>(null)
  const [uploadSpeed, setUploadSpeed] = useState<number | null>(null)

  const runTests = async () => {
    // Simulación de pruebas
    setLatency(Math.random() * 100)
    setDownloadSpeed(Math.random() * 100)
    setUploadSpeed(Math.random() * 50)

    await saveResults(latency, downloadSpeed, uploadSpeed)
  }

  const saveResults = async (latency: number | null, download: number | null, upload: number | null) => {
    try {
      const response = await fetch("/api/save-results", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ latency, download, upload }),
      })
      if (!response.ok) {
        throw new Error("Failed to save results")
      }
      console.log("Results saved successfully")
    } catch (error) {
      console.error("Error saving results:", error)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Pruebas de Red</h1>
      <Button onClick={runTests} className="mb-4">
        Iniciar Pruebas
      </Button>

      {latency !== null && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Resultados:</h2>
          <p>Latencia: {latency.toFixed(2)} ms</p>
          <p>Velocidad de descarga: {downloadSpeed?.toFixed(2)} Mbps</p>
          <p>Velocidad de subida: {uploadSpeed?.toFixed(2)} Mbps</p>
        </div>
      )}

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Ingrese su ubicación</h2>
        <Input type="text" placeholder="Ciudad, País" className="mb-2" />
        <Button>Guardar Ubicación</Button>
      </div>
    </div>
  )
}

