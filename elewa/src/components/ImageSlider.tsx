import React,{useRef} from 'react'

type ImageSliderProps={
    images:string[]
}

const ImageSlider :React.FC<ImageSliderProps>=({images})=>{
    const scrollRef=useRef<HTMLDivElement>(null)

    const scroll=(scrollOffset :number)=>{
        if(scrollRef.current){
            scrollRef.current.scrollBy({left:scrollOffset,behavior:'smooth'})
        }
    }
    return(
        <div className='flex-items-center'>

<div className='flex overflow-x-scroll space-x-2 hide-scrollbar' ref={scrollRef}>
    {images.map((image,index)=>(
        <img src={image} alt='' key={index} className='object-cover border rounded-3xl h-80 w-30'/>
    ))}
</div><div className=' flex justify-end'><button className='p-2 '
onClick={()=>scroll(-300)}>
Prev
</button>
<button className='p-2 '
onClick={()=>scroll(300)}>Next</button></div>

</div>
    )
}

export default ImageSlider