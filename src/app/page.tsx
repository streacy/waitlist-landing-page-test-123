import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import Feature from './feature'
import { Tally1, Tally2, Tally3 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div
      className="flex flex-col h-full md:py-36 md:px-32 pt-11 pb-24 px-8
        w-full items-center text-center gap-12"
    >
      <div className="flex flex-col gap-6 items-center">
        <Typography className="max-w-2xl" variant="h1">
          {`GoLaunch - Launch your SaaS. Fast.`}
        </Typography>
        <Typography className="max-w-2xl" variant="h5">
          {`Explore & Launch customizable SaaS boilerplate templates for your next project.`}
        </Typography>
        <Link href="https://google.com" target="_blank">
          <Button size="tiny" variant="ghost">
            {`Join the waitlist :)`}
          </Button>
        </Link>
        <Image
          width={1024}
          height={632}
          alt="Hero image"
          src="/hero1.png"
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col md:pt-24 md:gap-36 gap-24 items-center">
        <div className="flex flex-col gap-12 items-center">
          <Typography className="max-w-2xl" variant="h1">
            {`Launch quicker, validate faster`}
          </Typography>
          <div className="flex md:flex-row flex-col gap-12">
            <Feature
              icon={<Tally1 size={24} />}
              headline="Pick your boilerplate"
              description="Choose from a variety of vetted boilerplates to build your code from"
            />
            <Feature
              icon={<Tally2 size={24} />}
              headline="Customize your data"
              description="Use our UI to input things like the name of your SaaS, your logo, and more. It'll automatically update the boilerplate code with it"
            />
            <Feature
              icon={<Tally3 size={24} />}
              headline="Deploy your SaaS"
              description="Automatically clone the customized repo, and instantly deploy it"
            />
          </div>
        </div>
        {/* <div className="flex flex-col gap-6 max-w-2xl items-center">
          <Typography className="max-w-2xl" variant="h1">
            Choose your boilerplate
          </Typography>
          <Typography className="max-w-2xl" variant="p">
            Quickly link new on-call tickets to similar past
            incidents and their solutions. All directly in
            Slack the moment an incident happens.
          </Typography>
        </div> */}
        <div className="flex flex-col gap-6 items-center">
          <Typography className="max-w-2xl" variant="h1">
            {`Get early access`}
          </Typography>
          <Typography>{`We're launching soon! Sign up to be one of our first users.`}</Typography>
          <Link href="https://google.com" target="_blank">
            <Button size="tiny" variant="ghost">
              {`Join the waitlist :)`}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
