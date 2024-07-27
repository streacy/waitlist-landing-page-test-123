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
          {`{{tagLine}}`}
        </Typography>
        <Typography className="max-w-2xl" variant="h5">
          {`{{tagLineDescription}}`}
        </Typography>
        <Link href="{{waitlistLink}}" target="_blank">
          <Button size="tiny" variant="ghost">
            {`{{ctaButtonText}}`}
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
            {`{{secondTagLine}}`}
          </Typography>
          <div className="flex md:flex-row flex-col gap-12">
            <Feature
              icon={<Tally1 size={24} />}
              headline="{{feature1Title}}"
              description="{{feature1Description}}"
            />
            <Feature
              icon={<Tally2 size={24} />}
              headline="{{feature2Title}}"
              description="{{feature2Description}}"
            />
            <Feature
              icon={<Tally3 size={24} />}
              headline="{{feature3Title}}"
              description="{{feature3Description}}"
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
            {`{{ctaHeadline}}`}
          </Typography>
          <Typography>{`{{ctaDescription}}`}</Typography>
          <Link href="{{waitlistLink}}" target="_blank">
            <Button size="tiny" variant="ghost">
              {`{{ctaButtonText}}`}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
