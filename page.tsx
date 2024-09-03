import React, { Suspense } from 'react'
import ErrorBoundary from '../components/ErrorBoundary'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'

const Home: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<div>Loading...</div>}>
            <Hero />
            <Features />
            <Testimonials />
            <CallToAction />
          </Suspense>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  )
}

export default Home