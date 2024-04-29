'use client'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'

const aitestimonialcards = [
  {
    quote:
      'Enrolling in this AI program revolutionized my understanding of artificial intelligence and empowered me to innovate with confidence. The instructors are truly exceptional!',
    name: 'Azure',
    title: 'AI Enthusiast',
  },
  {
    quote:
      "The community and mentorship provided by this platform are unparalleled. I've not only expanded my AI skills but also gained insights into real-world applications.",
    name: 'Pro Game 18',
    title: 'AI Developer',
  },
  {
    quote:
      'This AI education platform equipped me with the knowledge and tools to elevate my understanding of machine learning. The personalized guidance has been invaluable.',
    name: 'Vixey',
    title: 'Machine Learning Engineer',
  },
  {
    quote:
      'As an AI researcher, finding resources tailored to my needs can be challenging. This platform connected me with mentors who deeply understand the complexities of AI.',
    name: 'Mnemos',
    title: 'AI Researcher',
  },
  {
    quote:
      'The courses on AI ethics and governance provided me with critical insights into the ethical implications of AI. Highly recommend for anyone working in the field!',
    name: 'Isla',
    title: 'AI Ethicist',
  },
]

function Aitestimonialcards() {
  return (
    <div className="h-[35rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Intelligence Amplified: Voices of our Experts
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={aitestimonialcards}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  )
}

export default Aitestimonialcards
