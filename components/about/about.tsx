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
    </Section>
  )
}
