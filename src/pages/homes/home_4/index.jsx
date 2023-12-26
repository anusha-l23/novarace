import DefaultFooter from "@/components/footer/default";
import Header4 from "@/components/header/header-4";
import Hero4 from "@/components/hero/hero-4";
import BlockGuide from "@/components/block/BlockGuide";
import CallToActions from "@/components/home/home-4/CallToActions";
import Testimonial from "@/components/home/home-4/Testimonial";
//import Blog4 from "@/components/blog/Blog4";
import Brand from "@/components/brand/Brand";
// import Counter2 from "@/components/counter/Counter2";
// import Counter from "@/components/counter/Counter";
import ParallaxBanner from "@/components/banner/ParallaxBanner";
//import Hotels3 from "@/components/hotels/Hotels3";
import FilterHotels2 from "@/components/hotels/FilterHotels2";
import { Link } from "react-router-dom";
//import Travellers from "@/components/home/home-4/Travellers";
import FilterHotels4 from "@/components/hotels/FilterHotels4";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Home-4 || GoTrip - Travel & Tour ReactJs Template",
  description: "GoTrip - Travel & Tour ReactJs Template",
};

const Home_4 = () => {


  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}

      <Header4 />
      {/* End Header 4 */}

      <Hero4 />
      {/* End Hero 4 */}
{/* 
      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Destinations Travellers Love
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
       
          </div>
   

          <div className="relative pt-40 ">
            <Travellers />
          </div>
        </div>
      </section> */}
      {/* End Travellers Section */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Upcoming Events</h2>
                {/* <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p> */}
              </div>
            </div>
          </div>

          <FilterHotels4 />
        </div>

      </section>
    

      {/* <ParallaxBanner /> */}
      {/* End Parallax banner Section */}

      {/* <section className="pt-50 pb-40 border-bottom-light">
        <div className="container">
          <div className="row justify-center text-center">
            <Counter />
          </div>
        </div>
      </section> */}
      {/* End counter up Section */}

      {/* <section className="layout-pt-lg layout-pb-md"> */}
      <section className="layout-pb-md">
      
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Why Choose Us</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
    
          </div>
          <div className="row y-gap-40 justify-between pt-50">
            <BlockGuide />
          </div>
      
        </div>
     
      </section> 
  

      {/* <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-10 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Best Seller</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>


            <div className="col-auto tabs -pills-2 ">
              <div className="tabs__controls row x-gap-10 justify-center js-tabs-controls"></div>
            </div>
     
          </div>
 

          <div className="relative  pt-40 sm:pt-20">
            <div className="row y-gap-30">
              <Hotels3 />
            </div>
          </div>
         
        </div>
      </section> */}
     

      {/* <section className="section-bg layout-pt-lg layout-pb-lg">
        <div className="section-bg__item -mx-20 bg-light-2" />
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Overheard from Travelers
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div>
   

          <div className="relative mt-80 md:mt-40  position-relative">
            <Testimonial />
          </div>
        

          <div className="row y-gap-30 items-center pt-40 sm:pt-20">
            <div className="col-xl-4">
              <Counter2 />
            </div>
          

            <div className="col-xl-8">
              <div className="row y-gap-30 justify-between items-center">
                <Brand />
              </div>
            </div>
           
          </div>
    
        </div>
  
      </section> */}
    

      {/* <section className="layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Get inspiration for your next trip
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames
                </p>
              </div>
            </div>
          </div>
     
          <div className="row y-gap-30 pt-40">
             <Blog4 />
          </div>

        </div>
  
      </section> */}


      {/* <CallToActions /> */}
 

      <DefaultFooter />

    </>
  );
};

export default Home_4;
