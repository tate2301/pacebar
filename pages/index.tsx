import Link from 'next/link';

import MarketingLayout from '@/components/marketing/Layout';
import SharedSEO from '@/components/SEO';

export default function Index() {
  return (
    <MarketingLayout>
      <SharedSEO title='Pacebar - Build your tribe' />
      <div className='mx-auto mt-24 max-w-4xl py-24 px-4 text-center lg:mt-0 lg:px-0'>
        <h1 className='text-5xl font-bold lg:text-6xl '>
          Achieve your biggest goals, whatever they may be.{' '}
        </h1>
        <p className='mt-8 text-xl'>
          Capture life’s biggest moments with the smartest, intuitive
          goal-tracking platform that makes your every goal an automated promise
          fulfilling dashboard!
        </p>
        <div className='mx-auto mt-8 flex w-full flex-col justify-center gap-4 md:flex-row lg:gap-8'>
          <button className='rounded-md bg-orange-600 px-8 py-3 font-medium text-white shadow-xl md:mt-8'>
            Start your journey
          </button>
          <button className='rounded-md border border-gray-800 px-8 py-3 font-medium md:mt-8'>
            Start supporting creators
          </button>
        </div>
      </div>
      <div className='my-16 flex flex-col items-center py-16 text-center lg:my-24'>
        <h2 className='px-4 text-3xl font-bold lg:px-0'>
          Build real relationships with your followers
        </h2>
        <p className='mx-auto mt-4 max-w-lg px-4 text-center lg:px-0'>
          You’ll never be alone on this journey because people who follow you
          genuinely care about what’s important to you. With Pacebar, you can
          make those relationships meaningful.
        </p>
        <div className='mx-auto mt-16 h-[70vh] w-full max-w-4xl border-gray-200 bg-gray-200 lg:rounded-xl lg:border' />
      </div>
      <div className='my-12 py-12 px-4 lg:my-16 lg:px-0'>
        <p className='text-sm font-medium text-orange-600'>Features</p>
        <h2 className='my-4 text-3xl font-bold'>
          Forget the critics, just show off
        </h2>
        <p className='max-w-xl'>
          Whether it’s a fitness goal, to lose weight or write a book anyone can
          do what they set their mind to. Pacebar is place where people are
          there from start to finish on every journey, cheering you on in
          public!
        </p>
        <div className='my-4 flex flex-col lg:flex-row lg:flex-wrap'>
          <div className='mt-8 flex w-full flex-col flex-wrap gap-y-4 md:flex-row md:gap-y-0 lg:w-1/2'>
            <div className='p-0 md:w-1/2 md:p-2'>
              <div className='h-full w-full rounded-xl border border-gray-200 bg-white p-8 shadow'>
                <h5 className='text-xl font-medium'>
                  Create a community of
                  <br /> like-minded people
                </h5>
                <p className='mt-4'>
                  It’s all about making progress towards your goal. It’s also
                  about showing the world how far you’ve come at any given
                  moment.
                </p>
              </div>
            </div>
            <div className='p-0 md:w-1/2 md:p-2'>
              <div className='col-span-1 h-full rounded-xl border border-gray-200 bg-white p-8 shadow'>
                <h5 className='text-xl font-medium'>
                  Cheerleaders! At every
                  <br /> step of your journey.{' '}
                </h5>
                <p className='mt-4'>
                  Pacebar is an environment where fans are there from start to
                  finish on every journey, cheering you on in public!
                </p>
              </div>
            </div>
            <div className='p-0 md:w-1/2 md:p-2'>
              <div className='col-span-1 h-full rounded-xl border border-gray-200 bg-white p-8 shadow'>
                <h5 className='text-xl font-medium'>
                  Grow with sponsors
                  <br /> and scholarship.{' '}
                </h5>
                <p className='mt-4'>
                  Gain access to hundreds of resources and sponsorship from
                  followers to grow your career.
                </p>
              </div>
            </div>
            <div className='p-0 md:w-1/2 md:p-2'>
              <div className='col-span-1 h-full rounded-xl border border-gray-200 bg-white p-8 shadow'>
                <h5 className='text-xl font-medium'>
                  Don’t keep that kind of
                  <br /> energy bottled up{' '}
                </h5>
                <p className='mt-4'>
                  Whether it’s a fitness goal write a book we&#39;ll help you do
                  what you set their mind to.
                </p>
              </div>
            </div>
          </div>
          <div className='mt-8 w-full lg:mt-0 lg:w-1/2 lg:p-8'>
            <div className='h-[40vh] w-full rounded-xl bg-gray-200' />
          </div>
        </div>
      </div>

      <div className='my-16 py-16 lg:my-24'>
        <p className='px-4 text-sm font-medium text-purple-600 lg:px-0'>
          Perks
        </p>
        <h2 className='my-4 px-4 text-3xl font-bold lg:px-0'>
          10x your growth with Pacebar Scholarship{' '}
        </h2>
        <p className='px-4 lg:max-w-xl lg:px-0'>
          Get access to hundreds of deals on the most popular growth tools and
          save thousands while growing your career and business. Pacebar is
          built to help you become the next Forbes icon.
        </p>
        <div className='my-4 flex flex-col items-center gap-8 lg:flex-row'>
          <div className='mt-8 flex w-full flex-col gap-8 px-4 lg:w-1/2 lg:px-0'>
            <div className='w-full rounded-xl'>
              <h5 className='text-xl font-medium'>Cloud & Web Hosting</h5>
              <p className='mt-4'>
                Get your next product of the ground using $5k in AWS Activate
                Credits or launch your digital garden on Webflow. Save thousands
                in infrastructure with these deals.
              </p>
              <p className='mt-4'>
                <Link href='/scholarship?cat=infrastructure'>
                  <a className='font-medium text-purple-600'>Learn more</a>
                </Link>
              </p>
            </div>
            <div className='w-full rounded-xl'>
              <h5 className='text-xl font-medium'>Project Management</h5>
              <p className='mt-4'>
                Whether you have a team of 10 or you are an indie hacker, you
                will need some way to manage your projects. Pacebar Scholarship
                gives $1k in Notion credits, $3k in ClickUp credits and so much
                more.
              </p>
              <p className='mt-4'>
                <Link href='/scholarship?cat=productivity'>
                  <a className='font-medium text-purple-600'>Learn more</a>
                </Link>
              </p>
            </div>
            <div className='w-full rounded-xl'>
              <h5 className='text-xl font-medium'>Startup Growth Assistance</h5>
              <p className='mt-4'>
                Get mentors to assist you in bringing your ideas to life. You
                will have access to the Microsoft for Startups giving you up to
                $120,000 in Azure Cloud Credits.
              </p>
              <p className='mt-4'>
                <Link href='/scholarship?cat=startup'>
                  <a className='font-medium text-purple-600'>Learn more</a>
                </Link>
              </p>
            </div>
          </div>
          <div className='my-auto w-full lg:w-1/2 lg:p-8'>
            <div className='h-[60vh] w-full bg-gray-200 lg:rounded-xl' />
          </div>
        </div>
      </div>

      <div className='my-12 mt-24 '>
        <div className='flex flex-col items-center gap-4 border-gray-200 bg-gray-100 px-12 py-16 lg:rounded-xl lg:border'>
          <p className='mx-auto max-w-3xl text-center text-3xl font-bold text-gray-900'>
            Start your journey
          </p>
          <p className='mt-2 text-center'>
            Join over 4,000+ people already growing with Pacebar.
          </p>
          <button className='mt-8 rounded-xl bg-orange-600 py-3 px-8 font-medium text-white'>
            Get started now
          </button>
        </div>
      </div>
    </MarketingLayout>
  );
}
