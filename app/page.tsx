import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Cables de Red: Guía Completa</h1>

      <nav className="mb-8">
        <ul className="flex space-x-4">
          <li>
            <Link href="#introduccion" className="text-blue-500 hover:underline">
              Introducción
            </Link>
          </li>
          <li>
            <Link href="#tipos-cables" className="text-blue-500 hover:underline">
              Tipos de Cables
            </Link>
          </li>
          <li>
            <Link href="#conceptos-basicos" className="text-blue-500 hover:underline">
              Conceptos Básicos
            </Link>
          </li>
          <li>
            <Link href="#pruebas-red" className="text-blue-500 hover:underline">
              Pruebas de Red
            </Link>
          </li>
        </ul>
      </nav>

      <section id="introduccion" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introducción</h2>
        <p>
          Los cables de red son fundamentales en la infraestructura de comunicaciones modernas. Esta guía proporciona
          información detallada sobre los diferentes tipos de cables, sus usos y conceptos básicos relacionados.
        </p>
      </section>

      <section id="tipos-cables" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tipos de Cables de Red</h2>
        <ul className="list-disc pl-5">
          <li>Cable Coaxial</li>
          <li>Cable de Par Trenzado (UTP, STP)</li>
          <li>Fibra Óptica</li>
        </ul>
      </section>

      <section id="conceptos-basicos" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Conceptos Básicos</h2>
        <ul className="list-disc pl-5">
          <li>Ancho de banda</li>
          <li>Atenuación</li>
          <li>Interferencia electromagnética</li>
          <li>Categorías de cables (Cat5, Cat6, etc.)</li>
        </ul>
      </section>

      <section id="pruebas-red" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Pruebas de Red</h2>
        <p>
          En esta sección, puedes realizar pruebas de conexión y velocidad de red. Los resultados se guardarán en
          nuestra base de datos para análisis futuros.
        </p>
        <Link href="/pruebas" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Realizar Pruebas de Red
        </Link>
      </section>
    </div>
  )
}

