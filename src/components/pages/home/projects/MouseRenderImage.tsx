'use client'
import { NextImageResize } from '@/components/shared/ImageResize'
import { MouseImageTrail } from '@/components/shared/MouseImageTrail'
import React from 'react'

const MouseRenderImage = () => {
  return (
    <MouseImageTrail
      renderImageBuffer={50}
      rotationRange={25}
      images={[
        'https://cdn.sanity.io/images/i6rvgdeu/production/4a878910fa0a318a23d7eae2c75409022af97d77-564x953.jpg',
        'https://cdn.sanity.io/images/i6rvgdeu/production/05ca16fc314deb0bda0ef5d52d153a9c938c25c3-564x746.jpg',
        'https://cdn.sanity.io/images/i6rvgdeu/production/45b2097ee41ea6480d220daf1c7f14f79272628a-563x751.jpg',
        'https://cdn.sanity.io/images/i6rvgdeu/production/211472fa90dfcf28cf915f1e745b166a93276919-564x730.jpg',
        'https://cdn.sanity.io/images/i6rvgdeu/production/fb783f8147af80f7a40482e63d7ccf6d3b39f531-563x747.jpg',
        'https://cdn.sanity.io/images/i6rvgdeu/production/300eac77abaede86f1b687cbf8764f01450645ab-564x889.jpg',
        'https://cdn.sanity.io/images/i6rvgdeu/production/d8c1f916d5c15bd8e9b4268213babe9bdf2ab311-564x746.jpg',
        'https://cdn.sanity.io/images/i6rvgdeu/production/f2a9b9cf4c9d058cf8e05196d4dc281dc3980318-563x895.jpg',
        'https://cdn.sanity.io/images/i6rvgdeu/production/328d1bfb7d3b7217650af20aa5e023d9b6c2475d-564x746.jpg',
        'https://cdn.sanity.io/images/i6rvgdeu/production/5083e3d4c845885fb53feb0d72ea090595da4e76-564x930.jpg',
        'https://cdn.sanity.io/images/i6rvgdeu/production/fc58af557254edcd43c4980ceca737f982725ad8-564x1002.jpg',
        'https://cdn.sanity.io/images/i6rvgdeu/production/72272da7de33554ea05dd5ecabcdd3fd18f45fb9-563x1014.jpg',
        'https://cdn.sanity.io/images/i6rvgdeu/production/45b2097ee41ea6480d220daf1c7f14f79272628a-563x751.jpg',
        'https://cdn.sanity.io/images/i6rvgdeu/production/211472fa90dfcf28cf915f1e745b166a93276919-564x730.jpg',
        'https://cdn.sanity.io/images/i6rvgdeu/production/fb783f8147af80f7a40482e63d7ccf6d3b39f531-563x747.jpg',
        'https://cdn.sanity.io/images/i6rvgdeu/production/300eac77abaede86f1b687cbf8764f01450645ab-564x889.jpg',
        'https://cdn.sanity.io/images/i6rvgdeu/production/d8c1f916d5c15bd8e9b4268213babe9bdf2ab311-564x746.jpg',
      ]}
    >
      <div className='h-full w-full place-content-center'>
        <h2 className='text-center hidden md:block  leading-[1] text-color-3 text-[60px] sm:text-[14vw] 2xl:text-[20rem] font-semibold'>
          SELECTED
          <br />
          <span>WORKS</span>
        </h2>
        <div className='block md:hidden'>
          <NextImageResize
            src={'/image/bg-selected.png'}
            alt='Phong Phan'
            className='pt-[56.25%]'
          />
        </div>
      </div>
    </MouseImageTrail>
  )
}

export default MouseRenderImage
