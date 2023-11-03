import React from 'react';

const  Header :React.FC=()=>{
    //Header is initialized as type React Function Component
    return (
        <div >

            <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690297/elewa-group-website/Icons/SVG/_Logo/Logo_White_arvoyx.svg" className=' flex justify-start mt-12 pl-16 filter grayscale brightness-0'alt=""/>
            
            <div className='flex justify-end -mt-8 text-[12px]'> 
                <p className='text-red-500 pl-15'>Home</p>
            <p className='text-blue-500 ml-10'>About Us</p>
            <p>Social Impact</p>
            <p>Invest</p>
            <p>Venture Labs</p>
            <p>Brands</p>
            <p>Careers</p>
            <p className='-pr-100'>Contacts </p>
            </div>
            

       </div>
    )
}

export default Header