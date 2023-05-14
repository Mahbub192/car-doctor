import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const CheckOut = () => {
  const loadDataCheckOut = useLoaderData();
  const {  service_id, title, img, price } = loadDataCheckOut;
  const {user} = useContext(AuthContext)
const handelCheckOut = event => {
    event.preventDefault()
    const form = event.target;
    const fastName = form.fastName.value;
    const date = form.date.value;
    const phoneNumber = form.phoneNumber.value;
    const email = form.email.value;
    const message = form.message.value;
    console.log(fastName, date, phoneNumber, email, message);
    const information = {fastName, date, phoneNumber, email, message,  service_id, title, img, price}

    fetch(`https://car-doctor-server-ebon.vercel.app/bookings`,{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(information)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        if(data.acknowledged){
            alert('order are added !!')
        }
    })
}
  return (
    <div>
      <h2 className="text-4xl text-center mt-5"> Service Name is : {title}</h2>
      <div className="hero my-5 bg-base-200 h-[calc(100vh-200px)] rounded-xl">
        <div className="card flex-shrink-0 w-4/5  ">
          <div className="card-body">
            <form onSubmit={handelCheckOut}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="fastName"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Date</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input
                    type="number"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={user?.email}
                    name="email"
                    placeholder="Email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control col-span-2">
                  <label className="label">
                    <span className="label-text">Your Message</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered textarea-lg  w-full "
                    placeholder="Bio"
                    name="message"
                  ></textarea>
                </div>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary bg-error border-none text-white" type="submit" value="Order Confirm" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
