import React from 'react'
import Header from './Header'
const About :React.FC=()=>{
return(
    < >
      <div className="bg-cover bg-center h-screen "
      style={{
        backgroundImage:`url('https://res.cloudinary.com/dyl3rncv3/image/upload/v1679650530/elewa-team_digqu3.jpg')`
      }}>
        {/* above styles fpr the background image*/}
        <div className='absolute inset-0 bg-black opacity-30'><Header/></div>
         {/* above styles to have the background image appear darker*/}
      </div>
  
    </>
)
}

export default About