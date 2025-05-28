import {
  Box,
  BoxProps,
  Container,
  Flex,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { Link, LinkProps } from '@saas-ui/react'

import siteConfig from '#data/config'

export interface FooterProps extends BoxProps {
  columns?: number
}

// export const Footer: React.FC<FooterProps> = (props) => {
//   const { columns = 2, ...rest } = props
//   return (
//     <Box bg="white" _dark={{ bg: 'gray.900' }} {...rest}>
//       <Container maxW="container.2xl" px="8" py="8">
//         <SimpleGrid columns={columns}>
//           <Stack spacing="8">
//             <Stack alignItems="flex-start">
//               <Flex>
//                 <Box as={siteConfig.logo} flex="1" height="32px" />
//               </Flex>
//               <Text fontSize="md" color="muted">
//                 {siteConfig.seo.description}
//               </Text>
//             </Stack>
//             <Copyright>{siteConfig.footer.copyright}</Copyright>
//           </Stack>
//           <HStack justify="flex-end" spacing="4" alignSelf="flex-end">
//             {siteConfig.footer?.links?.map(({ href, label }) => (
//               <FooterLink key={href} href={href}>
//                 {label}
//               </FooterLink>
//             ))}
//           </HStack>
//         </SimpleGrid>
//       </Container>
//     </Box>
//   )
// }

export const Footer: React.FC<FooterProps> = (props) => {
  const { ...rest } = props

  return (
    <Box bg="gray.50" _dark={{ bg: 'gray.900' }} {...rest}>
      <Container
        maxW="container.2xl"
        px={{ base: 4, md: 8 }}
        py={{ base: 10, md: 12 }}
      >
        <Stack spacing={4} align="center" textAlign="center">
          <Box as={siteConfig.logo} height="32px" />
          <Text fontSize="xs" color="gray.500" _dark={{ color: 'gray.600' }}>
            &copy; {new Date().getFullYear()} Gans-Monroe Consulting. All rights
            reserved.
          </Text>
        </Stack>
      </Container>
    </Box>
  )
}

export interface CopyrightProps {
  title?: React.ReactNode
  children: React.ReactNode
}

export const Copyright: React.FC<CopyrightProps> = ({
  title,
  children,
}: CopyrightProps) => {
  let content
  if (title && !children) {
    content = `&copy; ${new Date().getFullYear()} - ${title}`
  }
  return (
    <Text color="muted" fontSize="sm">
      {content || children}
    </Text>
  )
}

export const FooterLink: React.FC<LinkProps> = (props) => {
  const { children, ...rest } = props
  return (
    <Link
      color="muted"
      fontSize="sm"
      textDecoration="none"
      _hover={{
        color: 'white',
        transition: 'color .2s ease-in',
      }}
      {...rest}
    >
      {children}
    </Link>
  )
}
