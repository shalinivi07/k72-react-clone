import React from 'react'

function FullScreenNav() {
    return (
        <div className='h-screen overflow-x-hidden text-white py-60 w-full absolute bg-black'>
            <div>
                <div className='link relative border-t-1 border-white'>
                    <h1 className='font-[font2] text-[8vw] uppercase text-center leading-[0.6] pt-10'>Projets</h1>
                    <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50]'>
                        <div className='moveX flex items-center'>
                            <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.6] uppercase'>POUR TOUR VOIR</h2>
                            <img className='h-full rounded-full shrink w-96 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                            <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.6] uppercase'>POUR TOUR VOIR</h2>
                            <img className='h-full rounded-full shrink w-96 object-cover' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
                        </div>
                        <div className='flex items-center'>
                            <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.6] uppercase'>POUR TOUR VOIR</h2>
                            <img className='h-full rounded-full shrink w-96 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                            <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.6] uppercase'>POUR TOUR VOIR</h2>
                            <img className='h-full rounded-full shrink w-96 object-cover' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullScreenNav
