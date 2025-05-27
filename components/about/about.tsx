import {
  Box,
  Circle,
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
import { Section, SectionTitle, SectionTitleProps } from 'components/section'

import * as React from 'react'

import { Testimonial } from '#components/testimonials'

const Revealer = ({ children }: any) => {
  return children
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
      <Testimonial
        name="Phillip Gans, PhD"
        description="Senior Geologist"
        avatar="/static/images/gans_avatar.jpg"
        href=""
        children=<>
          My interests lie in the general fields of structural geology and
          tectonics and are focused on deformational and thermal processes
          within the continental lithosphere. My research is mainly in the field
          of Extensional Tectonics and is focused on exactly how continents rift
          and the relationship between extension and magmatism. I make most of
          my observations and draw much of my scientific inspiration from
          field-based investigations. My research projects generally involve
          detailed geologic mapping of critical areas followed by appropriate
          laboratory measurements (e.g., radiometric dating, geochemical
          analyses) and numerical modeling in order to better understand the
          structural and/or thermal process under study. Recent work has focused
          on the Cenozoic evolution of the Basin and Range province of the
          western U.S. and on the origin of Cretaceous gneiss domes in Arctic
          Alaska and northeast Russia. Current and future studies will expanded
          on these themes and will focus on the evolution of the Mexican Basin
          and Range province and the structural evolution of gneiss domes on the
          Tibetan plateau.
        </>
      />
      <Testimonial
        name="Evan Monroe, PhD"
        description="Geologist"
        avatar="/static/images/monroe_avatar.jpg"
        children=<>
          Late Cretaceous tectonic evolution of the Deep Creek-Kern Mountains,
          eastern Nevada and western Utah: Magmatically induced large-scale
          folding, dynamothermal metamorphism, and ductile strain at mid- to
          upper-crustal levels in the Sevier hinterland
        </>
      />
    </Section>
  )
}
