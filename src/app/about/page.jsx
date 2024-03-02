import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import signature from '@/images/Transparent-cyan.png'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I&apos;m Taylor Covington. I live in Salt Lake City, where I build apps for a better future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I&apos;m Taylor Covington. I live in Salt Lake City, where I build
            apps for a better future.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;ve loved business for as long as I can remember, and
              started selling things when I was 12 years old. Soon after I was
              at business conferences at the age of 16.
            </p>
            <p>
              The only thing I loved more than building things was health and
              nutrition. When I was in middle school, you would typically find
              me in my room lifting weights and doing push ups. I was always a
              skinny kid though and I picked up boxing in 7th grade.
            </p>
            <p>
              As I grew older I found myself more and more interested in
              building business. I hated my 9-5 job at the time as a Stock
              Trader so I started looking into side hustles. In 2018 I decided
              to learn how to code because I wanted to make my own software and
              from there I fell in love with it.
            </p>
            <p>
              I&apos;ve been exploring different business ideas for the last 6
              years. I don&apos;t have much to show for it at this point,
              besides many failures and a lot of learnings. In 2024 that all
              changes tho and I&apos;m documenting the journey.
            </p>
            <p>
              Today, I&apos;m building exploring different businuess to see what
              sticks. I&apos;m currenly working on MacroFlex, where we&apos;re
              working on making it easier for nutrition coaches to get their
              clients results using a data driven approach to nutrition and
              health. I&apos;m also a certified Nutrition Coach helping people
              get in the best shape of their lives.
            </p>
            <p>
              I&apos;m also exploring other business opportunities through
              acquisition. My latest venture is a vending machine business!{' '}
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="www.twitter.com/buildwithtaylor"
              icon={TwitterIcon}
            >
              Follow on Twitter (X)
            </SocialLink>
            <SocialLink
              href="www.github.com/taylorcovington"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="www.linkedin.com/taylorcovington"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="www.indiepa.ge/taylorcovington"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow my projects
            </SocialLink>
            <SocialLink
              href="mailto:tcovingtondev@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              tcovingtondev@gmail.com
            </SocialLink>
          </ul>
        </div>
        <Image src={signature} alt="signature" width={150} />
      </div>
    </Container>
  )
}
