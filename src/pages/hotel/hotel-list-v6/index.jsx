import Header11 from "@/components/header/header-11";
import DefaultFooter from "@/components/footer/default";
import MainFilterSearchBox1 from "@/components/hotel-list/hotel-list-v5/MainFilterSearchBox1";
import Pagination from "@/components/hotel-list/common/Pagination";
import DropdownSelelctBar from "@/components/hotel-list/common/DropdownSelelctBar";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Hotel List v5 || GoTrip - Travel & Tour ReactJs Template",
  description: "GoTrip - Travel & Tour ReactJs Template",
};

const Results = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="header-margin"></div>
      <Header11 />
      <section className="section-bg pt-40 pb-40 relative z-5">
        <div className="section-bg__item col-12">
          <img
            src="/img/misc/bg-1.png"
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h1 className="text-30 fw-600 text-white">
                  Find Your Dream Luxury Hotel
                </h1>
              </div>
              <MainFilterSearchBox1 />
            </div>
          </div>
        </div>
      </section>
      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-20 justify-between items-center">
            <div className="col-auto">
              <div className="row x-gap-20 y-gap-10 items-center">
                <div className="col-auto">
                  <div className="text-18 fw-500">Filter</div>
                </div>

                <div className="col-auto">
                  <div className="row x-gap-15 y-gap-15">
                    <DropdownSelelctBar />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-auto">
              <button className="button -blue-1 h-40 px-20 rounded-100 bg-blue-1-05 text-15 text-blue-1">
                <i className="icon-up-down text-14 mr-10"></i>
                Top picks for your search
              </button>
            </div>

            <div className="border-top-light mt-30 mb-30"></div>

            <h1 className="row y-gap-30">

              Latest Results
            </h1>
            <Pagination />
          </div>
        </div>
      </section>

      <DefaultFooter />
    </>
  );
};

export default Results;
