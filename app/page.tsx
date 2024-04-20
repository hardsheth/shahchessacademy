import Image from "next/image";
import Styles from "./page.module.css"
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
export default function Home() {
  return (
    <main>
      <div className={`container-fluid ${Styles.maincontent} sitecolor`}>
        <div className="pt-4 mx-5">
          <div className={`${Styles.textContainerNg} `}>
            <h1 className="text-center pt-4 mb-0">Shah Chess Academy</h1>
          </div>
        </div>
        <div className={`mx-5 ${Styles.textContainerNg}`}>
          <h3 className="pt-3 text-center">Play, Learn and Connect </h3>
          <p className="mt-3 pb-2 text-center flex-wrap px-5">
            Chess Academy where passion meats strategy.<br /> A vibrant community of chess enthusiasts where you have expert coaches for professional guidance.<br /> Learn with Fun.
          </p>
        </div>
        <div className="container px-6">
          <div className="text-center w-100 ">
            <img src='/asset/vrushtiArchievement123.jpg' alt='Image will Come' className={`img-fluid  h-400 borderImage`} />
          </div>
        </div>

              <h3 className="text-center my-2">Our Courses</h3>
        <div className="container px-6">
          <div className={`row row-cols-1 row-cols-lg-4 gap-0 `}>
            <div className="col col-lg-9 mx-0 ">
            <ul className={`list-group list-group-flush mx-0-rem`}>
                <li className="list-group-item conatinerBackgrounds">Level 1 Beginner </li>
                <li className="list-group-item conatinerBackgrounds">Level 2 Intermidiate-1</li>
                <li className="list-group-item conatinerBackgrounds">Level 3 Intermidiate-2</li>
                <li className="list-group-item conatinerBackgrounds">Level 4 Advanced</li>
                <li className="list-group-item conatinerBackgrounds">Extra Perks</li>
              </ul>
            </div>
            <div className="col m-0">
            <img src="/asset/vrushtiCources.jpg" alt='Image will Cource Image' className={`borderImage ${Styles.courceimgcontainer}`} />
            </div>
           
          </div>
          <div className={`row mt-2 row-cols-1 row-cols-lg-4 w-100 ${Styles.containerHeight} text-align-center`}>
            <div className="col  mx-0-rem m-0">
              <img src="/asset/vrushtiCources.jpg" alt='Image will Cource Image' className={`borderImage ${Styles.imagecontainerHeight}`} />
            </div>
            <div className="col col-lg-9 m-0">
              <ul className="list-group list-group-flush conatinerBackgrounds mx-0-rem">
                <li className="list-group-item conatinerBackgrounds">Opening Strategies</li>
                <li className="list-group-item conatinerBackgrounds">Middle Game Mastery</li>
                <li className="list-group-item conatinerBackgrounds">End Game Excellence</li>
                <li className="list-group-item conatinerBackgrounds">Practical Application.</li>
              </ul>
            </div>
          </div>
          <div className={`row w-100 position-relative ${Styles.containerHeight} text-center mx-auto`}>
            <div className="mx-auto">
              <img src='/asset/vrushtiaward.jpg' alt='Image will Come' className={`borderImage img-fluid ${Styles.archivementImg}`} />
            </div>
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
          <div className={`row mb-2 row-cols-1 row-cols-lg-4 ${Styles.containerHeight} gap-0 h-auto`}>
            <div className="col m-0 p-0">
              <img src='/asset/vrushtiimage.png' className="img-fluid borderImage  maxpersonheight" alt='Image will Come' />
            </div>
            <div className={`col col-lg-9 m-0 p-0 ${Styles.textContainerNg}`}>
              <h4 className="text-center my-3">About Vrushti Shah</h4>
              <p className="text-start fs-6">Shah Vrushti, a seasoned chess player with over 15 years of experience and a highest FIDE rating of 1614. Multiple time district and state champion, received bronze medal at JITO Nationals from Bhuvneshwar Kumar. </p>
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
        </div>
        {/* <p className="fs-4 text-center">Let's Improve together!</p> */}
      </div>
    </main>
  );
}
