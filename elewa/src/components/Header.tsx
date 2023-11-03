import React from 'react';

const  Header :React.FC=()=>{
    //Header is initialized as type React Function Component
    //Tailwind css is being used
    return (
        <div className='mr-12 ml-12 py-8 border-b' >
{/* above style to render everything inside the div with margin right of 12 with border */}
            <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690297/elewa-group-website/Icons/SVG/_Logo/Logo_White_arvoyx.svg" className=' flex justify-start mt-10 'alt=""/>
            {/* styles above to get image to be to the far left of the web page with a margin top of 12 and padding left of 16*/}
            <div className='flex justify-end space-x-8 -mt-8 text-[12px] text-white'> 
            {/* styles above to get div elements to be to the right of the web page with equal spacing of 2rem,margin top 8 with specified font size*/}
                <p className=''>Home</p>
            <p className=''>About Us</p>
            <p>Social Impact</p>
            <p>Invest</p>
            <p>Venture Labs</p>
            <p>Brands</p>
            <p>Careers</p>
            <p className=''>Contacts </p>
            </div>
            

       </div>
    )
}

export default Header