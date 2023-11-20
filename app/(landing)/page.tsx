import Image from 'next/image'
import React from 'react'
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { randomUUID } from 'crypto';
import { ArrowRight, Database, LayoutDashboard, Flag } from "lucide-react"

import Banner from '../../public/banner.png';

import CustomCard from './_components/custom-card'
import TitleSection from './_components/title-section'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CardDescription, CardTitle } from '@/components/ui/card';
import { CLIENTS, USERS, CARDS } from '@/lib/constants';
import { LearnMoreCard } from './_components/learn-more-card';
import { CaseStudies } from './_components/case-studies';
import { LandingHero } from './_components/landing-hero';
import Link from 'next/link';
import Card from './_components/card/card';
//import { useScroll } from 'framer-motion';
//import { useRef } from 'react';

const LandingPage = () => {

/*   const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

   */

  return (
    <>
      <section
        className=" overflow-hidden
      px-4
      sm:px-6 mt-36
      sm:flex
      sm:flex-col
      gap-4
      md:justify-center
      md:items-center"
      >
        <div className="absolute inset-x-0 top-28 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-yellow-100 to-green-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
            clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            }}
            />
        </div>
        
        <div className="mx-auto max-w-4xl text-center">
              <LandingHero/>
        </div>
        <div
          className="md:mt-[-90px]
          sm:w-full
          w-[750px]
          flex
          justify-center
          items-center
          mt-[-40px]
          relative
          sm:ml-0
          ml-[-50px]
        "
        >
          <Image
            src={Banner}
            alt="Application Banner"
            width={400}
          />
          <div
            className="bottom-0
            top-[50%]
            bg-gradient-to-t
            dark:from-background
            left-0
            right-0
            absolute
            z-10
          "
          ></div>
        </div>
      </section>
      <section className="relative">
        <div
          className="overflow-hidden
          flex
          after:content['']
          after:dark:from-brand-dark
          after:to-transparent
          after:from-background
          after:bg-gradient-to-l
          after:right-0
          after:bottom-0
          after:top-0
          after:w-20
          after:z-10
          after:absolute

          before:content['']
          before:dark:from-brand-dark
          before:to-transparent
          before:from-background
          before:bg-gradient-to-r
          before:left-0
          before:top-0
          before:bottom-0
          before:w-20
          before:z-10
          before:absolute
        "
        >
          {[...Array(2)].map((arr) => (
            <div
              key={arr}
              className="flex
                flex-nowrap
                animate-slide
          "
            >
              {CLIENTS.map((client) => (
                <div
                  key={client.alt}
                  className=" relative
                    w-[200px]
                    m-20
                    shrink-0
                    flex
                    items-center
                  "
                >
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    width={200}
                    className="object-contain max-w-none"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section className='bg-green-100 dark:bg-gray-300'>
        <div className='flex flex-col max-w-4xl mx-auto py-10'>
            <div className='flex flex-col lg:flex-row'>
                <div className='flex flex-col items-center gap-5 mx-10 my-5'>
                    <div className='rounded-full h-32 w-32 bg-gradient-to-r from-yellow-200 to-green-500 '>
                        <Database className=' h-20 w-20 translate-x-6
                        translate-y-5 text-white'/>
                    </div>
                    <h2 className='font-bold text-2xl my-2 text-primary-blue-500'>Monetize</h2>
                    <p className='text-lg font-light text-center text-primary-blue-500'>Drive marketing conversions and branded activations that enhance the fan experience</p>
                </div>
                <div className='flex flex-col items-center gap-5 mx-10 my-5 '>
                    <div className='rounded-full h-32 w-32 bg-gradient-to-r from-yellow-200 to-green-500 items-center'>
                        <LayoutDashboard className=' h-20 w-20 translate-x-6
                        translate-y-5  text-white item-center'/>
                    </div>
                    <h2 className='font-bold text-2xl my-2 text-primary-blue-500'>Personalize</h2>
                    <p className='text-lg font-light text-center text-primary-blue-500'>Unlock true 1 to 1 potential with content connected to data sources</p>
                </div>
                <div className='flex flex-col items-center gap-5 mx-10 my-5 '>
                    <div className='rounded-full h-32 w-32 bg-gradient-to-r from-yellow-200 to-green-500 items-center'>
                        <Flag className=' h-20 w-20 translate-x-6
                        translate-y-5  text-white'/>
                    </div>
                    <h2 className='font-bold text-2xl my-2 text-primary-blue-500'>Engage</h2>
                    <p className='text-lg font-light text-center text-primary-blue-500'>Deliver brilliant fan experiences to the right fan, at the right time</p>
                </div>
            </div>
            <h3 className='max-w-4xl mx-auto font-bold text-4xl text-center my-10 text-primary-blue-500'><span className='bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text text-primary-blue-500'>Take ownership</span> over your app&apos;s fan experience with a library of templates and a flexible experience studio.</h3>
            <div className='text-center mb-20'>
            <Link href={"/chat"}>
                <Button variant="default" className="md:text-lg p-4 md:p-6 mt-7 rounded-full font-semibold transition transform active:scale-95 duration-200">
                    Book a Demo
                    <ArrowRight className='h-6 w-6'/>
                </Button>
            </Link>
            </div>
        </div>
      </section>
      {/* <section ref={container} className='my-[50vh]'>
        {
        CARDS.map( (card, i) => {
          const targetScale = 1 - ( (CARDS.length - i) * 0.05);
          return <Card key={`p_${i}`} {...card} i={i}/>
        })
        }
      </section> */}
      <section className='group'>
        <div className='relative flex flex-row justify-between items-center shadow-xl rounded-xl mx-5 lg:max-w-5xl lg:mx-auto my-10 bg-gradient-to-t from-gray-500 to-green-950 dark:from-gray-300 dark:to-gray-600 px-20 transition overflow-hidden h-[400px]
            group-hover:scale-[1.04]'>
            <h1 className='text-white text-md lg:text-5xl font-bold leading-relaxed'><span className='bg-gradient-to-r from-yellow-300 to-green-600 text-transparent bg-clip-text'>Effortlessly</span> create personalized experiences for your fans with no developer time or app updates.</h1>
            <Image
            src="/card1.png"
            alt="card1"
            className='ml-10 bottom-0'
            width={300}
            height={800}
            />
        </div>
      </section>
      <section className="relative">
        <div
          className="w-full
          blur-[120px]
          rounded-full
          h-32
          absolute
          bg-green-200
          -z-100
          top-56
        "
        />
        <div
          className="mt-20
          px-4
          sm:px-6 
          flex
          flex-col
          overflow-x-hidden
          overflow-visible
        "
        >
          <TitleSection
            title="Trusted by all!"
            subheading="Join thousands of satisfied clients who rely on our platform for their personal and professional productivity needs."
            pill="Testimonials"
          />
          {[...Array(2)].map((arr, index) => (
            <div
              key={randomUUID()}
              className={twMerge(
                clsx('mt-10 flex flex-nowrap gap-6 self-start', {
                  'flex-row-reverse': index === 1,
                  'animate-[slide_250s_linear_infinite]': true,
                  'animate-[slide_250s_linear_infinite_reverse]': index === 1,
                  'ml-[100vw]': index === 1,
                }),
                'hover:paused'
              )}
            >
              {USERS.map((testimonial, index) => (
                <CustomCard
                  key={testimonial.name}
                  className="w-[500px]
                  shrink-0s
                  rounded-xl
                  dark:bg-gradient-to-t
                  dark:from-border dark:to-background
                "
                  cardHeader={
                    <div
                      className="flex
                      items-center
                      gap-4
                  "
                    >
                      <Avatar>
                        <AvatarImage src={`/avatars/${index + 1}.png`} />
                        <AvatarFallback>AV</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-foreground">
                          {testimonial.name}
                        </CardTitle>
                        <CardDescription className="dark:text-washed-purple-800">
                          {testimonial.name.toLocaleLowerCase()}
                        </CardDescription>
                      </div>
                    </div>
                  }
                  cardContent={
                    <p className="dark:text-washed-purple-800">
                      {testimonial.message}
                    </p>
                  }
                ></CustomCard>
              ))}
            </div>
          ))}
        </div>
      </section> 
      <section>
        <CaseStudies/>
      </section>
      <section>
        <LearnMoreCard/>
      </section>
    </>
  )
}

export default LandingPage