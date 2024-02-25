import Image from "next/image";
import Styles from "./page.module.css"
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
export default function Home() {
  return (
    <main>
      <div className={`container-fluid ${Styles.maincontent} sitecolor`}>
        <div>
          <h1 className="text-center ">Shah Chess Academy</h1>
        </div>
        <div >
          <h3 className="mt-5 text-center">Play, Learn and Connect </h3>
          <p className="mt-5 text-center flex-wrap px-5">
            Chess Academy where passion meats strategy.<br/> A vibrant community of chess enthusiasts where you have expert coaches for professional guidance.<br/> Learn with Fun.
          </p>
        </div>
        <div className="text-center">
        <img src='/asset/vrushtiArchievement123.jpg' height={100} width={100} alt='Image will Come' className={Styles.imagefullcontainer} />
        </div>
         
        <div className={`row row-cols-1 row-cols-lg-5 ${Styles.containerHeight}`}>
          <div className="col">
            <h3 className="text-center">Our
              Courses</h3>
          </div>
          <div className="col ">
            <ul className={`list-group list-group-flush `}>
              <li className="list-group-item conatinerBackgrounds">Level 1 Beginner </li>
              <li className="list-group-item conatinerBackgrounds">Level 2 Intermidiate-1</li>
              <li className="list-group-item conatinerBackgrounds">Level 3 Intermidiate-2</li>
              <li className="list-group-item conatinerBackgrounds">Level 4 Advanced</li>
              <li className="list-group-item conatinerBackgrounds">Extra Perks</li>
            </ul>
          </div>
        </div>
        <div className={`row row-cols-1 row-cols-lg-5 ${Styles.containerHeight}`}>
          <div className="col">
            <img src="/asset/vrushtiCources.jpg" alt='Image will Cource Image' className={Styles.imagecontainerHeight} />
          </div>
          <div className="col">
            <ul className="list-group list-group-flush conatinerBackgrounds">
              <li className="list-group-item conatinerBackgrounds">Opening Strategies</li>
              <li className="list-group-item conatinerBackgrounds">Middle Game Mastery</li>
              <li className="list-group-item conatinerBackgrounds">End Game Excellence</li>
              <li className="list-group-item conatinerBackgrounds">Practical Application.</li>
            </ul>
          </div>
        </div>
        <div className={`row position-relative ${Styles.containerHeight} text-center`}>
         
                <img src='/asset/vrushtiaward.jpg' height={100} width={100} alt='Image will Come' className={Styles.archivementImg} />
         <div className="row ">
            <h4 className="text-center">Location</h4>
            <p className="text-center fs-4">Paldi, Ahmedabad</p>
         </div>
        </div>
        <div className={`row mb-3 ${Styles.containerHeight}`}>
          <div className="col col-lg-12">
          <ul className="list-group list-group-flush">
            <li className="list-group-item conatinerBackgrounds">International FIDE rated Chess coaches </li>
            <li className="list-group-item conatinerBackgrounds">Interactive learning online</li>
            <li className="list-group-item conatinerBackgrounds">Practice partner</li>
            <li className="list-group-item conatinerBackgrounds">Regular tournaments</li>
            <li className="list-group-item conatinerBackgrounds">Personal Attention</li>
          </ul>
          </div>
          <div className="col-12 col-lg-4">
          <button className="w-100 btn btn-primary ">Join our Live Chess classes now</button>
          </div>
        </div>
        <div className={`row mb-2 row-cols-1 row-cols-lg-2 ${Styles.containerHeight} `}>
          <div className="col">
            <h3 className="text-center">
              <img src='/asset/vrushtiimage.png' height={100} width={100} alt='Image will Come' />
            </h3>
          </div>
          <div className="col ">
            <h4 className="text-center">About Vrushti Shah</h4>
            <p className=" fs-6">Shah Vrushti, a seasoned chess player with over 15 years of experience and a highest FIDE rating of 1614. Multiple time district and state champion, received bronze medal at JITO Nationals from Bhuvneshwar Kumar. </p>
            <p className="fs-6">
              Received award for chess from Prime Minister Shri Narendra Modi, prestigious awards like Junior Jaydeep singhji Award and Shaktidutt Award.
            </p>
            <p className=" fs-6">
              Played at International level in Thailand as well as participated in many National, Common Wealth, Asian tournaments.</p>
          </div>
        </div>
        <div className={`row row-cols-1 row-cols-lg-3 ${Styles.containerHeight}`}>
          <div className="col">
            <h3 className="text-center">Contact Us</h3>
            <p className="">Ask us anything! We’re here to answer any questions you have.

            </p>
            <p>
              <b>
              Email
              </b>
              : shahschessacademy@gmail.com
            </p>
            <p>
              <b>
              Phone No
              </b>
               : 9558062087
            </p>
          </div>
          <div className="col">
            <h3 className="text-center">Follow Us</h3>
            <div className="text-center">
              <FaInstagram size={40} color="pink " className="mx-3" />
              <FaWhatsapp size={40} color="green" className="mx-2" />
            </div>
          </div>
          <div className="col">
            <h3 className="text-center">​Subscribe for Updates & Offers</h3>
            <div>
              <input type="text" name="" id="" className="form-control" placeholder="Enter Your Email Here." />
              <div className="mb-2"><button className="btn btn-info w-100 mt-3">Subscribe Now</button></div>
              <span className=" fs-6">Thanks for Submitting!</span>
            </div>
          </div>
        </div>
        {/* <p className="fs-4 text-center">Let's Improve together!</p> */}
      </div>
    </main>
  );
}
