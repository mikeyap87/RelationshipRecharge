import React from 'react'
import CollapsableButton from '~/components/shared/Buttons/CollapsableButton'

function WhatWeCover() {
  return (
    <section id="what-we-cover" className='pt-5'>
      <h1 className='text-center fw-bold mt-5 pt-5'>Topics We Cover</h1>
      <p className='text-center sub-heading'>Discover Your Relationship’s Potential with Our Wide Range of Engaging Topics</p>
      <div className='content my-5 px-2'>
        <div className='d-flex flex-wrap justify-content-center'>
          <CollapsableButton
            title='Communication'
            color='yellow'
            content='Explore the world and learn about different cultures, societies, and historical events that shape our world.'
          />
          <CollapsableButton
            title='Trust'
            color='blue'
            content="Prepare your child for the real world with lessons on practical life skills, such as time management, financial literacy, and decision-making."
          />
        </div>
        <div className='d-flex flex-wrap mt-lg-4 justify-content-center'>
          <CollapsableButton
            title='Family and Friends'
            color='orange'
            content="Help your child build a strong foundation in mathematics through fun and interactive lessons that cater to their learning style."
          />
          <CollapsableButton
            title='Intimacy'
            color='pink'
            content="Foster a love of language and literature with lessons on reading, writing, and grammar that help your child express themselves with confidence."
          />
          <CollapsableButton
            title='Personal Growth'
            color='grey'
            content="Develop your child's analytical and problem-solving skills through lessons that encourage them to think critically and make informed decisions."
          />
        </div>
        <div className='d-flex flex-wrap mt-lg-4 justify-content-center'>
          <CollapsableButton
            title='Commitment'
            color='blue'
            content='Foster a love of nature and a sense of responsibility for our planet with lessons on environmental issues and conservation.'
          />
          <CollapsableButton
            title='Money'
            color='orange'
            content='Help your child become a global citizen by learning a new language and understanding different cultures and ways of thinking.'
          />
        </div>
        <div className='d-flex flex-wrap mt-lg-4 justify-content-center'>
          <CollapsableButton
            title='Career or Personal Growth Issues'
            color='yellow'
            content=' Introduce your child to the wonders of the natural world through hands-on experiments and engaging content that sparks their curiosity.'
          />
        </div>
      </div>
    </section>
  )
}

export default React.memo(WhatWeCover)