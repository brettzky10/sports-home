import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import React from 'react'
import { ArrowRight } from "lucide-react"

import { CASE_CARDS } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';


export const CaseStudies = () => {
  return (
    <div className='grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 mt-10 max-w-4xl mx-10 md:mx-auto'>
        
        {CASE_CARDS.map((client) => (
                <Card
                  key={client.title}
                  className="
                    w-[200px]
                    my-10
                    shrink-0 col-auto
                    rounded-xl 
                    hover:cursor-pointer
                  "
                >
                  <Image
                    src={client.image}
                    alt={client.title}
                    width={200}
                    height={100}
                    className="object-contain fill rounded-t-xl"
                  />
                  <h1 key={client.title} className='text-lg font-medium flex-wrap justify-start my-2 mx-3'>
                    {client.title}
                  </h1>
                  <Button variant="ghost" className='bottom-0'>
                    Read More
                    <ArrowRight className='h-6 w-6'/>
                  </Button>
                </Card>
              ))}
        
    </div>
  )
}