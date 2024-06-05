'use client'
import Styles from "./page.module.css"
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
export default function Home() {
  return (
    <main>
      <div className={`container-fluid ${Styles.maincontent} sitecolor`}>

        <div className="pt-4 mx-5 position-relative">
          <div className="d-block my-4 mb-0 d-md-none">
            <img src='/asset/academylogo.jpg' alt='Image will Come' className={`img-fluid borderImage`} />
          </div>
          <img src='/asset/academylogo.jpg' alt='Image will Come' className={`weblogo borderImage`} />
          <div className={`${Styles.textContainerNg} `}>
            <h1 className="text-center pt-4 mb-0">Shah Chess Academy</h1>
          </div>
        </div>
        <div className={`mx-5 ${Styles.textContainerNg}`}>
          <h4 className="pt-3 text-center">Play, Learn and Connect </h4>
          <p className="mt-3 pb-2 text-center flex-wrap px-5">
            Chess Academy where passion meets strategy.<br /> A vibrant community of chess enthusiasts where you have expert coaches for professional guidance.<br /> Learn with Fun.
          </p>
        </div>

        <div className="container">
          <div className="text-center w-100 ">
            <img src='/asset/vrushtiArchievement123.jpg' alt='Image will Come' className={`img-fluid ${Styles.siteimg}  h-400 borderImage`} />
          </div>
          <h3 className="text-center my-2">Our Courses</h3>
          <div className={`row row-cols-1 row-cols-lg-4 gap-0 align-items-end`}>
            <div className="col col-lg-9 pe-md-0">
              <ul className={`list-group list-group-flush `}>
                <li className="list-group-item conatinerBackgrounds">Level 1 Beginner </li>
                <li className="list-group-item conatinerBackgrounds">Level 2 Intermidiate-1</li>
                <li className="list-group-item conatinerBackgrounds">Level 3 Intermidiate-2</li>
                <li className="list-group-item conatinerBackgrounds">Level 4 Advanced</li>
                <li className="list-group-item conatinerBackgrounds">Extra Perks</li>
              </ul>
            </div>
            <div className="col ps-md-0 pe-4">
              <img src="/asset/vrushtiCourses.jpg" alt='Image will Cource Image' className={`borderImage ${Styles.courceimgcontainer}`} />
            </div>

          </div>
          <div className={`row my-3 row-cols-1 row-cols-lg-4 w-100 ${Styles.containerHeight} text-align-center gap-0`}>
            <div className="col m-md-0 pe-md-0">
              <img src="/asset/vrushtiCourses.png" alt='Image will Cource Image' className={`borderImage ${Styles.offer}`} />
            </div>
            <div className="col col-lg-9 pt-3 pt-md-0 p-md-0">
              <ul className="list-group list-group-flush conatinerBackgrounds p-0 m-0">
                <li className="list-group-item conatinerBackgrounds text-end">Opening Strategies</li>
                <li className="list-group-item conatinerBackgrounds text-end">Middle Game Mastery</li>
                <li className="list-group-item conatinerBackgrounds text-end">End Game Excellence</li>
                <li className="list-group-item conatinerBackgrounds text-end">Practical Application.</li>
                <li className="list-group-item conatinerBackgrounds text-end">Personal Attention.</li>
              </ul>
            </div>
          </div>
          <h3 className="text-center my-4">What We Offer</h3>
          <div className={`row mt-2 mt-md-0 mb-3 ${Styles.containerHeight}`}>
            <div className="col col-lg-12">
              <ul className="list-group list-group-flush">
                <li className="list-group-item conatinerBackgrounds">International FIDE rated Chess coaches </li>
                <li className="list-group-item conatinerBackgrounds">Interactive learning online</li>
                <li className="list-group-item conatinerBackgrounds">Practice partner</li>
                <li className="list-group-item conatinerBackgrounds">Regular tournaments</li>
                <li className="list-group-item conatinerBackgrounds">Personal Attention</li>
              </ul>
            </div>

          </div>
          <div className={`row mb-2 ms-1 row-cols-1 row-cols-lg-4 ${Styles.containerHeight} gap-0 h-auto bg-primary`}>
            <div className="col m-md-0 p-0">
              <img src='/asset/vrushtiimage.jpg' className={`img-fluid ${Styles.borderPerson} maxpersonheight`} alt='Image will Come' />
            </div>
            <div className={`col col-lg-9 m-md-0 p-0 pe-4 ${Styles.textContainerNg}`}>
              <h4 className="text-center my-3">Vrushti Shah</h4>
              <p className="text-start fs-6 ps-3">Shah Vrushti, a seasoned chess player with over 15 years of experience and a FIDE rating of 1650. Multiple time district and state champion, received bronze medal at JITO Nationals from Bhuvneshwar Kumar. </p>
              <p className="fs-6 ps-3">
                Received award for chess from Prime Minister Shri Narendra Modi, prestigious awards like Junior Jaydeep singhji Award and Shaktidutt Award.
              </p>
              <p className=" fs-6  ps-3">
                Played at International level in Thailand as well as participated in many National, Common Wealth, Asian tournaments.</p>
            </div>
          </div>
          <div className={`row mb-2 ms-1 row-cols-1 row-cols-lg-4 ${Styles.containerHeight} gap-0 h-auto bg-primary`}>
            <div className="d-block d-md-none col m-md-0 p-0">
              <img src='/asset/BinoyShah.jpg' className={`img-fluid binoyWidth maxpersonheight`} alt='Image will Come' />
            </div>
            <div className={`col col-lg-9 m-md-0 p-0 pe-4 pe-lg-2 ${Styles.textContainerNg}`}>
              <h4 className="text-center my-3">Binoy Shah</h4>
              <p className="text-start fs-6 ps-3">(International chess player and FIDE Arbiter)</p>
              <p className="text-start fs-6 ps-3">Binoy Shah is an international chess player with FIDE rating of 2124. Numerous times State champion.  </p>
              <p className="fs-6 ps-3">
                International rated chess player who has played many international tournaments. One of the best coaches and chess enthusiast.

              </p>
              <p className=" fs-6  ps-3">
                FIDE Arbiter in chess and was Deputy Chief arbiter in asians and Arbiter in World Youth at South Africa. Taken team to All India interuniversity tournament as chess coach and manager.
              </p>
            </div>
            <div className="d-none d-md-block col m-md-0 p-0">
              <img src='/asset/BinoyShah.jpg' className={`img-fluid   maxpersonheight`} alt='Image will Come' />
            </div>

          </div>
          <div className="col-12 col-lg-4 mx-auto my-3 ">
            <button className="w-100 btn btn-primary ">Join our Live Chess classes now</button>
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



          <div className="mx-auto text-center mt-3">
            <button type="button" className="btn btn-primary ">Book A Free Demo</button>
          </div>
          <div className={`mt-5 row row-cols-1 row-cols-lg-3 ${Styles.containerHeight} ${Styles.textContainerNg} pt-1`}>
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
                <span className="fs-6">Thanks for Submitting!</span>
              </div>
            </div>
          </div>
        </div>


        {/* <p className="fs-4 text-center">Let's Improve together!</p> */}
      </div>
    </main>
  );
}
