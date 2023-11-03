import React from 'react'
import Header from './Header'
const About :React.FC=()=>{
return(
    < >
      <div className="bg-cover bg-center h-screen mb-20 "
      style={{
        backgroundImage:`url('https://res.cloudinary.com/dyl3rncv3/image/upload/v1679650530/elewa-team_digqu3.jpg')`
      }}>
        {/* above styles fpr the background image*/}
        <div className='absolute inset-0 bg-black opacity-30'>
         {/* above styles to have the background image appear darker*/}
            <Header/>
            <div className='mr-12 ml-12 pt-24 opacity-100 text-white '>
            <div className=' mb-12  '>
                <p className='uppercase'>How to recognize an elewa member</p>
                <p className='text-[55px]'>Dependable,Creative,Supportive ,<br/>Open Minded and Fun*</p>
            </div>
            <div className='-mb-10'>
                <p className='uppercase'>*serious when it matters</p>
            </div>
            </div>
          
            </div>

        
      </div>
      <div className='mr-12 ml-12 pt-2 opacity-100 text-black mb-20 '>
        <p className='text-[50px] pb-5'>We Care!</p>
        <div className='flex space-x-32 text-[24px]'>{/* to align items horizontally*/}
            <p>Elewa is a mission-driven organization. We <br/> make use of our cooperative and shared <br/>culture to drive the needle for the <br/>development of people and environment. We <br/>care about our growth, but also care deeply <br/>about the context surrounding us.</p>
            <p>Our investments are therefore not limited to<br/>  internal ones, but contribute heavily to our <br/> community and environment. From training<br/>  the next scout leaders on sustainable<br/>  practices, to bridging the employment gap for <br/> junior software developers.</p>
        </div>
      </div>
      <div className='flex space-x-40 w-1/2 h-1/2 mr-12 ml-12 mb-7'>{/* added images horizontally */}
        <img src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1680180166/elewa-group-website/Icons/PNG/Holistic_118_ylipr0.png'  alt=''/>
        <img src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/coorperative_kzlzrg.png' alt=''/>
        <img src='https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690299/elewa-group-website/Icons/PNG/Opendata_fe7h3j.png' alt=''/>

      </div>
      <div className='mr-12 ml-12 flex space-x-52 text-black text-[32px]'>
        <p>Holistic Solutions</p>
        <p>Impact</p>
        <p>Open Data</p>
      </div>
      <div className='mr-12 ml-12 flex space-x-8 text-black text-[21px]'>
        <p>We go beyond a simple patch-up but<br/> develop lasting solutions through <br/>holistic design.</p>
        <p>Impact as a direct, or indirect, result.<br/> All our respective organizations have <br/>underlying theories of change.</p>
        <p>Sharing is caring. We share what we<br/> learn. As proof, we've open-sourced all<br/> our internal projects.</p>
      </div>
    </>
)
}

export default About