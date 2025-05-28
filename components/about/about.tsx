import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  CardProps,
  Circle,
  Flex,
  Heading,
  Icon,
  ResponsiveValue,
  SimpleGrid,
  Stack,
  SystemProps,
  Text,
  ThemingProps,
  VStack,
  useMultiStyleConfig,
} from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { Section, SectionTitle, SectionTitleProps } from 'components/section'
import { FaTwitter } from 'react-icons/fa'

import * as React from 'react'

import { Testimonial } from '#components/testimonials'

const Revealer = ({ children }: any) => {
  return children
}

export interface ProfileProps extends CardProps {
  name: string
  description: React.ReactNode
  avatar: string
  href?: string
  children?: React.ReactNode
}

export const Profile = ({
  name,
  description,
  avatar,
  href,
  children,
  ...rest
}: ProfileProps) => {
  return (
    <Card position="relative" {...rest} p="6">
      <Flex direction={['column', 'row']} align="flex-start" gap="6">
        <Avatar
          name={name}
          src={avatar}
          size="2xl"
          bg="transparent"
          boxSize="150px"
          flexShrink={0}
        />
        <Box>
          <Heading size="md" mb="1">
            {name}
          </Heading>
          <Text fontSize="sm" color="gray.500" mb="4">
            {description}
          </Text>
          <Text>{children}</Text>
        </Box>
      </Flex>

      {href && (
        <Link href={href} position="absolute" top="4" right="4">
          <FaTwitter />
        </Link>
      )}
    </Card>
  )
}

export interface AboutProps
  extends Omit<SectionTitleProps, 'title' | 'variant'>,
    ThemingProps<'Features'> {
  title?: React.ReactNode
  description?: React.ReactNode
  columns?: ResponsiveValue<number>
  spacing?: string | number
  aside?: React.ReactChild
  reveal?: React.FC<any>
  iconSize?: SystemProps['boxSize']
  innerWidth?: SystemProps['maxW']
}

export interface AboutProps {
  title?: React.ReactNode
  description?: React.ReactNode
  icon?: any
  iconPosition?: 'left' | 'top'
  iconSize?: SystemProps['boxSize']
  ip?: 'left' | 'top'
  variant?: string
  delay?: number
}

export const About: React.FC<AboutProps> = (props) => {
  const {
    title,
    description,
    columns = [1, 2, 3],
    spacing = 8,
    align: alignProp = 'center',
    iconSize = 8,
    aside,
    reveal: Wrap = Revealer,
    ...rest
  } = props

  const align = !!aside ? 'left' : alignProp

  const ip = align === 'left' ? 'left' : 'top'

  return (
    <Section {...rest}>
      <Stack direction="row" height="full" align="flex-start">
        <VStack flex="1" spacing={[4, null, 8]} alignItems="stretch">
          {(title || description) && (
            <Wrap>
              <SectionTitle
                title={title}
                description={description}
                align={align}
              />
            </Wrap>
          )}
        </VStack>
        {aside && (
          <Box flex="1" p="8">
            {aside}
          </Box>
        )}
      </Stack>
      <Stack spacing={8}>
        <Profile
          name="Phillip Gans, PhD"
          description="Chief Geologist"
          avatar="/static/images/gans_avatar.jpg"
          href=""
        >
          Lorem ipsum dolor sit amet, ut mea ipsum mollis disputando, ei amet
          dicit admodum duo, mel facer noluisse id. Sit eu nibh iisque eruditi,
          prompta veritus democritum in sed, ea ridens mediocritatem duo. In
          blandit gloriatur mnesarchum vim, ex tacimates constituam eos. Suas
          utinam mel at, no eos oportere electram. Vim sumo persecuti no. Qui at
          velit soleat mnesarchum, iusto noluisse eos te, at eos omnis
          quaerendum. Mea eu vitae hendrerit theophrastus, vis ne velit facilisi
          legendos, neglegentur voluptatibus sit ut. Facete tibique mnesarchum
          et cum. Eu eam suas unum nobis, rebum petentium quo et. Id his fugit
          graece, augue phaedrum efficiantur an quo. Ad sea illud efficiendi,
          nobis periculis efficiantur cu ius. Eu sed natum movet.
        </Profile>
        <Profile
          name="Evan Monroe, PhD"
          description="Geologist"
          avatar="/static/images/monroe_avatar.jpg"
        >
          Lorem ipsum dolor sit amet, ut mea ipsum mollis disputando, ei amet
          dicit admodum duo, mel facer noluisse id. Sit eu nibh iisque eruditi,
          prompta veritus democritum in sed, ea ridens mediocritatem duo. In
          blandit gloriatur mnesarchum vim, ex tacimates constituam eos. Suas
          utinam mel at, no eos oportere electram. Vim sumo persecuti no. Qui at
          velit soleat mnesarchum, iusto noluisse eos te, at eos omnis
          quaerendum. Mea eu vitae hendrerit theophrastus, vis ne velit facilisi
          legendos, neglegentur voluptatibus sit ut. Facete tibique mnesarchum
          et cum. Eu eam suas unum nobis, rebum petentium quo et. Id his fugit
          graece, augue phaedrum efficiantur an quo. Ad sea illud efficiendi,
          nobis periculis efficiantur cu ius. Eu sed natum movet.
        </Profile>
      </Stack>
    </Section>
  )
}
