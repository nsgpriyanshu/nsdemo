'use client'
import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal'

const aicontent = [
  {
    title: 'Tailored Learning Experience',
    description:
      'Our AI courses are designed to adapt to your individual learning style, ensuring maximum comprehension and skill development. Whether you are a beginner or an experienced professional, our personalized approach caters to your needs.',
  },
  {
    title: 'Expert Guidance from Industry Leaders',
    description:
      'Benefit from the expertise of seasoned professionals and thought leaders in the AI field. Our instructors bring real-world experience and insights to the classroom, providing invaluable guidance and mentorship.',
  },
  {
    title: 'Hands-On Projects and Real-World Applications',
    description:
      'Gain practical experience through hands-on projects and real-world applications. Our courses emphasize practical skills development, allowing you to apply theoretical knowledge to solve real-world AI challenges.',
  },
  {
    title: 'Cutting-Edge Curriculum',
    description:
      'Stay ahead of the curve with our cutting-edge curriculum that covers the latest advancements and trends in artificial intelligence. Our courses are regularly updated to reflect the rapidly evolving AI landscape.',
  },
  {
    title: 'Interactive Learning Environment',
    description:
      'Immerse yourself in an interactive learning environment where collaboration and engagement are encouraged. Interact with peers, participate in discussions, and receive real-time feedback from instructors.',
  },
  {
    title: 'Flexible Learning Options',
    description:
      'Choose from a variety of flexible learning options, including self-paced courses, live online sessions, and blended learning formats. Our flexible approach allows you to learn at your own pace and on your own schedule.',
  },
]

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={aicontent} />
    </div>
  )
}

export default WhyChooseUs
