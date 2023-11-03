import React,{useState} from 'react'
import Header from './Header'
import ImageSlider from './ImageSlider'


const About :React.FC=()=>{
    const images=[
        'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679985792/elewa-group-website/elewa-team-members/lemmy_oosngt.jpg',
        'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656820/elewa-group-website/elewa-team-members/jente-elewa_wbqyyi.jpg',
        'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656822/elewa-group-website/elewa-team-members/ken-elewa_ydwzop.jpg',
        'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656822/elewa-group-website/elewa-team-members/peter-elewa_zuzovx.jpg',
        'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679660055/elewa-group-website/elewa-team-members/noella-elewa_g6tquq.jpg',
        'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656821/elewa-group-website/elewa-team-members/ian-elewa_bejey9.jpg',
        'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656821/elewa-group-website/elewa-team-members/jane-elewa_yyybka.jpg',
        'https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,q_90,w_600/v1679657743/elewa-group-website/elewa-team-members/shawn-elewa_tt3iit.jpg',
        'https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,q_90,w_800/v1679984133/elewa-group-website/elewa-team-members/joy_gvbweu.jpg',
        'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656821/elewa-group-website/elewa-team-members/reagan-elewa_bn8xkl.jpg',
        'https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,q_90,w_600/v1679666201/elewa-group-website/elewa-team-members/chesa-elewa_soeb8f.jpg',
        'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679665800/elewa-group-website/elewa-team-members/jeff-elewa_hdupp7.jpg',
        'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656822/elewa-group-website/elewa-team-members/zip-elewa_jksbfg.jpg',
        'https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,h_1000/v1682586211/IMG_9755_vfprhm.jpg',
        'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656820/elewa-group-website/elewa-team-members/frank-elewa_kihn9e.jpg',
       
    ]

    
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
      <div className='mr-12 ml-12 mb-80 flex space-x-8 text-black text-[21px]'>
        <p>We go beyond a simple patch-up but<br/> develop lasting solutions through <br/>holistic design.</p>
        <p>Impact as a direct, or indirect, result.<br/> All our respective organizations have <br/>underlying theories of change.</p>
        <p>Sharing is caring. We share what we<br/> learn. As proof, we've open-sourced all<br/> our internal projects.</p>
      </div>
      <div>
      <p>Team/Management</p>
      </div>
     <div>
     <ImageSlider images={images}/>
     </div>
      
    </>
)
}

export default About