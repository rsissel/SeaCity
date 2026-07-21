import Hero from './components/hero'
import About from './components/about'
import Rooms from './components/rooms'
import Gallery from './components/gallery'
import Amenities from './components/amenities'
import VideoTour from './components/video-tour'
import Neighborhood from './components/neighborhood'
import LocationMap from './components/location-map'
import Contact from './components/contact'
import Navbar from './components/navbar'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Gallery />
      <Amenities />
      <VideoTour />
      <Neighborhood />
      <LocationMap />
      <Contact />
    </main>
  )
}
