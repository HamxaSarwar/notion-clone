import React from 'react'
import Button from "./Button"

const CallToAction: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl font-semibold mb-4">
        Ready to transform your workflow?
      </h2>
      <p className="text-xl text-gray-600 mb-8">
        Join millions of teams already using Notion to collaborate and get more done.
      </p>
      <Button size="lg" className="text-lg bg-black text-white hover:bg-gray-800">
        Get Started
      </Button>
    </section>
  )
}

export default CallToAction