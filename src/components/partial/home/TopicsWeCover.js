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
            content='Issues related to effective communication including
            misunderstandings, differences in communication styles, and
            difficulty expressing emotions or having difficult
            conversations.'
          />
          <CollapsableButton
            title='Trust'
            color='blue'
            content="Problems related to trust such as infidelity, lying, and
            broken promises. These issues can cause suspicion, jealousy,
            and a lack of dependability."
          />
        </div>
        <div className='d-flex flex-wrap mt-lg-4 justify-content-center'>
          <CollapsableButton
            title='Family and Friends'
            color='orange'
            content="Issues related to family and friends such as differences in
            parenting styles, interference from family and friends, and
            disagreements over values or beliefs."
          />
          <CollapsableButton
            title='Intimacy'
            color='pink'
            content="Issues related to physical and emotional intimacy such as lack
            of physical affection, emotional disconnection, and sexual
            dissatisfaction."
          />
          <CollapsableButton
            title='Personal Growth'
            color='grey'
            content="Issues related to personal growth such as difficulty accepting
            personal flaws or mistakes, feeling stuck or unfulfilled in
            personal life, and changes in personal identity or values over
            time."
          />
        </div>
        <div className='d-flex flex-wrap mt-lg-4 justify-content-center'>
          <CollapsableButton
            title='Commitment'
            color='blue'
            content='Problems related to commitment such as fear of commitment or
            abandonment, differences in level of commitment, and unequal
            distribution of power in the relationship.'
          />
          <CollapsableButton
            title='Money'
            color='orange'
            content='Problems related to finances such as disagreements over
            spending habits or priorities, financial infidelity, and debt
            or financial stress.'
          />
        </div>
        <div className='d-flex flex-wrap mt-lg-4 justify-content-center'>
          <CollapsableButton
            title='Career or Personal Growth Issues'
            color='yellow'
            content='Problems related to work-life balance, differences in career
            aspirations or goals, personal growth and development goals,
            and burnout or stress from work or personal life.'
          />
        </div>
      </div>
    </section>
  )
}

export default React.memo(WhatWeCover)