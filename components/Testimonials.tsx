import React from 'react';
import TestimonialCard from './TestimonialCard'
import { testimonials } from '../lib/testimonials'

const Testimonials: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center mb-12">
        What our users say
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  )
}

export default Testimonials