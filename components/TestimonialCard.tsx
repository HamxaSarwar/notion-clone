import React from 'react';
import Image from 'next/image';
import { Testimonial } from '../lib/types';

const TestimonialCard: React.FC<Testimonial> = ({ name, role, content, image }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <Image src={image} alt={name} width={50} height={50} className="rounded-full mr-4" />
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default TestimonialCard;