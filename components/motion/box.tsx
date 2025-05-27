import { ChakraProps, HTMLChakraProps, chakra } from '@chakra-ui/react'
import { MotionProps, motion } from 'framer-motion'

import React from 'react'

// Combine Chakra and Framer Motion props for a div element
export type MotionBoxProps = HTMLChakraProps<'div'> & MotionProps

// Create Chakra styled div
const ChakraDiv = chakra('div')

// Name the inner function to satisfy ESLint
const MotionBoxComponent = React.forwardRef<HTMLDivElement, MotionBoxProps>(
  function MotionBoxComponent(props, ref) {
    return <ChakraDiv ref={ref} {...props} />
  },
)

// Wrap with Framer Motion
export const MotionBox = motion(MotionBoxComponent)

MotionBox.displayName = 'MotionBox'
