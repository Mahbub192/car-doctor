import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="flex my-32 items-center">
            <div className="w-1/2 relative">
                <img className='w-[460px] h-[473px] object-cover mx-auto rounded-xl' src={person} alt="" />
                <img className='w-[327px] h-[332px] object-cover right-16 -bottom-14 absolute border-8 rounded-xl border-white shadow-2xl' src={parts} alt="" />
            </div>
            <div className="w-1/2 space-y-5">
                <p className='text-error'>About Us</p>
                <h1 className='text-5xl w-3/5 leading-tight font-bold'>We are qualified & of experience in this field</h1>
                <p className='leading-7 w-3/4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <p className='leading-7 w-3/4'>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
        </div>
    );
};

export default About;