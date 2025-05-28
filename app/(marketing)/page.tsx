'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import type { Metadata, NextPage } from 'next'
import Image from 'next/image'
import {
  FiActivity,
  FiArrowRight,
  FiBookOpen,
  FiBox,
  FiCheck,
  FiClock,
  FiCode,
  FiCompass,
  FiCopy,
  FiFlag,
  FiGrid,
  FiImage,
  FiLayers,
  FiLock,
  FiMap,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from 'react-icons/fi'

import * as React from 'react'

import { About } from '#components/about'
import { ButtonLink } from '#components/button-link/button-link'
import { Contact } from '#components/contact'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { ChakraLogo, NextjsLogo } from '#components/logos'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import faq from '#data/faq'
import pricing from '#data/pricing'
import testimonials from '#data/testimonials'

const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />

      {/* <HighlightsSection /> */}

      <AboutUsSection />

      <ServicesSection />

      <TestimonialsSection />

      {/* <PricingSection /> */}

      <FaqSection />

      <ContactSection />
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={<FallInPlace>Gans-Monroe Geologic Consulting</FallInPlace>}
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                We offer strategic guidance and technical expertise in the
                geology and exploration of lithium resources, helping clients
                evaluate prospects, reduce risk, and advance projects in the
                evolving energy transition landscape.
              </FallInPlace>
            }
          >
            {/* <FallInPlace delay={0.8}>
              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="/signup">
                  Sign Up
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="https://demo.saas-ui.dev"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'translate(5px)',
                        },
                      }}
                    />
                  }
                >
                  View demo
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace> */}
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/geologic_map.png"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: 'Actionable Insights',
            icon: FiSmile,
            description:
              'We transform complex geological data into clear, actionable insights for strategic decision-making.',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'Tailored Solutions',
            icon: FiSliders,
            description:
              'Our services are customized to fit your unique project needs, from early exploration to resource definition.',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'Integrated Approach',
            icon: FiGrid,
            description:
              'We combine diverse geological methods for a holistic and comprehensive understanding of your targets.',
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: 'Efficient Exploration',
            icon: FiThumbsUp,
            description:
              'Our streamlined workflows and expertise accelerate your path to viable lithium deposits.',
            iconPosition: 'left',
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  )
}

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard('yarn add @saas-ui/react')

  return (
    <Highlights id="about">
      <HighlightsItem colSpan={[1, null, 2]} title="Core components">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Get started for free with <Em>30+ open source components</Em>.
            Including authentication screens with Clerk, Supabase and Magic.
            Fully functional forms with React Hook Form. Data tables with React
            Table.
          </Text>

          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: 'gray.900' }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                yarn add
              </Text>{' '}
              <Text color="cyan.300" display="inline">
                @saas-ui/react
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Solid foundations">
        <Text color="muted" fontSize="lg">
          We don&apos;t like to re-invent the wheel, neither should you. We
          selected the most productive and established tools in the scene and
          build Saas UI on top of it.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Renata Alink"
        description="Founder"
        avatar="/static/images/avatar.jpg"
        gradient={['pink.200', 'purple.500']}
      >
        “Saas UI helped us set up a beautiful modern UI in no time. It saved us
        hundreds of hours in development time and allowed us to focus on
        business logic for our specific use-case from the start.”
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Start your next idea two steps ahead"
      >
        <Text color="muted" fontSize="lg">
          We took care of all your basic frontend needs, so you can start
          building functionality that makes your product unique.
        </Text>
        <Wrap mt="8">
          {[
            'authentication',
            'navigation',
            'crud',
            'settings',
            'multi-tenancy',
            'layouts',
            'billing',
            'a11y testing',
            'server-side rendering',
            'documentation',
            'onboarding',
            'storybooks',
            'theming',
            'upselling',
            'unit testing',
            'feature flags',
            'responsiveness',
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  )
}

const AboutUsSection = () => {
  return (
    <About
      id="about"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
          About Us
        </Heading>
      }
      description={
        <Stack spacing={4}>
          <div>
            With over 50 years of combined experience and deep expertise in
            structural geology, geologic mapping, petrography, and analytical
            techniques, Gans-Monroe Consulting provides comprehensive geological
            services tailored to lithium exploration and development. Our team
            offers strategic guidance and technical insight to help clients
            evaluate prospects, reduce risk, and advance projects through every
            stage—from early exploration to resource definition.
          </div>
          <div>
            We integrate diverse geological approaches and cutting-edge methods
            to deliver clear, actionable insights and efficient workflows that
            accelerate your path to viable lithium deposits. Our commitment is
            to empower clients with reliable data and expert interpretation,
            ensuring informed decisions in the dynamic energy transition
            landscape.
          </div>
        </Stack>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
    />
  )
}

const ServicesSection = () => {
  return (
    <Features
      id="services"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
          Services
        </Heading>
      }
      description={
        <>
          We provide comprehensive geological services, including geologic
          mapping, analytical procedures, and expert review of existing data, to
          guide successful lithium exploration and development.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: 'Geologic Mapping.',
          icon: FiMap,
          description:
            'Detailed field-based and remote geologic mapping tailored to lithium exploration and structural interpretation.',
          variant: 'inline',
        },
        {
          title: 'U-Pb Geochronology.',
          icon: FiClock,
          description:
            'High-precision dating of zircon and other minerals to constrain the timing of geological processes relevant to lithium systems.',
          variant: 'inline',
        },
        {
          title: 'Isotopic Geochemistry.',
          icon: FiActivity,
          description:
            'Isotopic analysis (Sr, Nd, Pb, etc.) to unravel source characteristics, alteration history, and ore-forming processes.',
          variant: 'inline',
        },
        {
          title: 'Petrography.',
          icon: FiImage,
          description:
            'Detailed mineralogical and textural analysis of rock samples using both optical and electron microscopy.',
          variant: 'inline',
        },
        {
          title: 'Structural Analysis.',
          icon: FiCompass,
          description:
            'Interpretation of deformation features to understand structural controls on mineralization and guide exploration targeting.',
          variant: 'inline',
        },
        {
          title: 'Review of Existing Geological Data.',
          icon: FiLayers,
          description:
            'Comprehensive interpretation of legacy data including reports, logs, and maps to guide exploration strategy.',
          variant: 'inline',
        },
        {
          title: 'Short Courses & Training.',
          icon: FiBookOpen,
          description:
            'Custom workshops and training in structural geology and volcanology, tailored for industry teams and students.',
          variant: 'inline',
        },
      ]}
    />
  )
}

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)

        return columns
      },
      [[], [], []],
    )
  }, [])

  return (
    <Testimonials
      id="testimonials"
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home

const ContactSection = () => {
  return <Contact />
}
