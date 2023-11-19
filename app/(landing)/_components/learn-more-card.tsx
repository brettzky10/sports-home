import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import React from 'react'
import { ArrowRight } from "lucide-react"

export const LearnMoreCard = () => {
  return (
    <div>
        <Card className='flex flex-col rounded-xl bg-gradient-to-tr from-green-200 to-green-400 lg:text-3xl text-xl shadow-xl lg:max-w-3xl mx-5 lg:mx-auto my-20 p-20 text-center items-center font-bold text-primary-blue-500'>
            Learn more about how the Rover platform can transform your mobile strategy!
            <Button
            variant="default"
            className="
            z-100
            my-4
          "
          >
            Book a Demo
            <ArrowRight className='w-4 h-4 mx-1' />
          </Button>
        </Card>
    </div>
  )
}
