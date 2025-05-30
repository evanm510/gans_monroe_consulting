import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'

import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'Gans-Monroe Consulting',
    description:
      'Expert geological services for successful lithium exploration and development',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'about',
        label: 'About Us',
        href: '',
      },
      {
        id: 'services',
        label: 'Services',
        href: '',
      },
      {
        id: 'testimonials',
        label: 'Testimonials',
        href: '',
      },
      {
        id: 'faq',
        label: 'FAQ',
        href: '',
      },
      {
        id: 'contact',
        label: 'Contact',
        href: '',
      },
    ],
  },
  footer: {
    copyright: <></>,
    links: [],
  },
  signup: {
    title: 'Start building with Saas UI',
    features: [
      {
        icon: FiCheck,
        title: 'Actionable Insights',
        description:
          'We transform complex geological data into clear, actionable insights for strategic decision-making.',
      },
      {
        icon: FiCheck,
        title: 'Tailored Solutions',
        description:
          'Our services are customized to fit your unique project needs, from early exploration to resource definition.',
      },
      {
        icon: FiCheck,
        title: 'Integrated Approach',
        description:
          'We combine diverse geological methods for a holistic and comprehensive understanding of your targets.',
      },
      {
        icon: FiCheck,
        title: 'Efficient Exploration',
        description:
          'Our streamlined workflows and expertise accelerate your path to viable lithium deposits.',
      },
    ],
  },
}

export default siteConfig
