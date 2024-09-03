import React from "react"
import Link from "next/link"
import { AlignLeft } from "lucide-react"
import Button from "./Button"

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b">
      <div className="flex items-center space-x-2">
        <AlignLeft className="w-8 h-8" />
        <span className="text-xl font-semibold">Notion</span>
      </div>
      <nav className="hidden md:flex space-x-6">
        {["Product", "Download", "Solutions", "Resources", "Pricing"].map((item) => (
          <Link key={item} className="text-sm text-gray-600 hover:text-gray-900" href="#">
            {item}
          </Link>
        ))}
      </nav>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="sm" className="text-sm">
          Log in
        </Button>
        <Button size="sm" className="text-sm bg-black text-white hover:bg-gray-800">
          Get Notion free
        </Button>
      </div>
    </header>
  )
}

export default Header