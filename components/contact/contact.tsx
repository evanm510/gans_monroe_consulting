import { Link, Text, VStack } from '@chakra-ui/react'
import {
  Section,
  SectionProps,
  SectionTitle,
  SectionTitleProps,
} from 'components/section'

export const Contact: React.FC = (props) => {
  return (
    <Section id="contact">
      <SectionTitle title="Contact" />
      <VStack spacing={4} align="start">
        <Text>
          Interested in learning more about how we can support your lithium
          exploration project? Reach out and we’ll get back to you as soon as
          possible.
        </Text>
        <Text>
          Email us at:{' '}
          <Link
            href="mailto:info@gansmonroeconsulting.com"
            color="blue.500"
            isExternal
          >
            info@gansmonroeconsulting.com
          </Link>
        </Text>
      </VStack>
    </Section>
  )
}
