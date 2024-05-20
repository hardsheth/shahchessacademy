import React from 'react'
import Styles from "../page.module.css"
function page() {
  return (
    <div className='sitecolor min-vh-100'>
    <div className='container-fluid'>
    <div className="d-block mx- mb-0 d-md-none pt-5">
          <img src='/asset/academylogo.jpg' alt='Image will Come' className={`img-fluid borderImage`} />
        </div>
    <div className="py-5">
        <div className={`${Styles.textContainerNg}`}>
        <h1 className="text-center pt-4 mb-0">Shah Chess Academy</h1>
        <h4 className="pt-3 text-center">Play, Learn and Connect </h4>
        <p className="mt-3 pb-2 text-center flex-wrap px-5">
            Chess Academy where passion meets strategy.<br /> A vibrant community of chess enthusiasts where you have expert coaches for professional guidance.<br /> Learn with Fun.
          </p>
        </div>
        <div className={`text-center w-100 `}>
            <img src='/asset/vrushtiArchievement123.jpg' alt='Image will Come' className={`img-fluid ${Styles.archivementImg} borderImage`} />
          </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, quo repudiandae quia corporis inventore voluptates pariatur magni hic consequuntur expedita!</p>
    </div>
    </div>
    </div>
  )
}

export default page