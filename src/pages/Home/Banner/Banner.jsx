import banner1 from "../../../assets/images/banner/1.jpg";
import banner2 from "../../../assets/images/banner/2.jpg";
import banner3 from "../../../assets/images/banner/3.jpg";
import banner4 from "../../../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={banner1}
          className="w-full h-screen md:h-[700px] object-cover rounded-xl"
        />
        <div className="absolute rounded-xl h-full flex  items-center  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-5 pl-12 w-1/2">
            <h1 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-5">
              <button className="btn btn-error">Discover More</button>
              <button className="btn btn-outline">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex  justify-end transform -translate-y-1/2 left-5 right-10 gap-5 bottom-7">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={banner2}
          className="w-full h-screen md:h-[700px] object-cover rounded-xl"
        />
        <div className="absolute rounded-xl h-full flex  items-center  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-5 pl-12 w-1/2">
            <h1 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-5">
              <button className="btn btn-error">Discover More</button>
              <button className="btn btn-outline">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex  justify-end transform -translate-y-1/2 left-5 right-10 gap-5 bottom-7">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={banner3}
          className="w-full h-screen md:h-[700px] object-cover rounded-xl"
        />
        <div className="absolute rounded-xl h-full flex  items-center  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-5 pl-12 w-1/2">
            <h1 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-5">
              <button className="btn btn-error">Discover More</button>
              <button className="btn btn-outline">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex  justify-end transform -translate-y-1/2 left-5 right-10 gap-5 bottom-7">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src={banner4}
          className="w-full h-screen md:h-[700px] object-cover rounded-xl"
        />
        <div className="absolute rounded-xl h-full flex  items-center  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-5 pl-12 w-1/2">
            <h1 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-5">
              <button className="btn btn-error">Discover More</button>
              <button className="btn btn-outline">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex  justify-end transform -translate-y-1/2 left-5 right-10 gap-5 bottom-7">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
