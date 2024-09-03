import React from 'react'
import Image from "next/image"
import Input from "./ui/Input"
import Button from "./Button"

const Hero: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-center">
      <h1 className="text-5xl font-bold mb-6">
        Your connected workspace for wiki, docs & projects
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Notion is the connected workspace where better, faster work happens.
      </p>
      <div className="flex justify-center mb-8">
        <Input
          className="w-64 mr-2"
          placeholder="Enter your email..."
          type="email"
        />
        <Button className="bg-black text-white hover:bg-gray-800">
          Get Notion free
        </Button>
      </div>
      <p className="text-sm text-gray-500 mb-8">
        For teams & individuals — web, mobile, Mac, Windows
      </p>
      <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
        <Image
          src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/product/super-duper/hero-illo.png"
          alt="Notion workspace illustration"
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-lg"
        />
      </div>
    </section>
  )
}

export default Hero