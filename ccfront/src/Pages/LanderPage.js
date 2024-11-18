import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/logo.png';
import { ReactTyped } from 'react-typed';
import P1 from './images/p1.jpg';
import p3 from './images/p3.webp';
import p4 from './images/p4.webp';
import p5 from './images/p5.webp';
import p6 from './images/srisyn.png';
import { BeakerIcon, ShieldCheck, TrendingUp, Users } from 'lucide-react';

const LanderPage = () => {
    return (
        <>
            <div className='bg-white p-5 text-lg sm w-full fixed z-auto font-serif'>
                <div className='flex justify-between'>
                    <ul className='flex space-x-6'>
                        <li><Link to="/">Discover</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register Now</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/about">Download App</Link></li>
                    </ul>
                    <h1 className='flex'>CCBOND<img src={Logo} alt="logo" className='h-8 w-8' /></h1>
                </div>
            </div>
            <div className="flex items-center justify-center pt-72">
                <h1 className="text-5xl font-serif">
                    Your Chemical Solutions,
                    <ReactTyped
                        strings={['Delivered..', 'Concluded..', 'Decided..', 'Settled..']}
                        typeSpeed={40}
                        backSpeed={30}
                        loop
                    />
                </h1>
            </div>
            <p className='text-2xl text-gray-500 flex justify-center font-serif text-center p-4'>
                Find the Perfect Chemicals for Your <br />Business Needs..
            </p>
            <div className='flex justify-center text-center space-x-6 '>
                <Link to='/register' className='bg-black text-white p-2 b-2 rounded'> Register Now</Link>
                <Link to='/login' className='text-black bg-gray-300 p-2 b-2 rounded'>Login Now</Link>
            </div>
            <div className='grid grid-cols-2 gap-10 p-10 mt-72'>
                <p><img src={P1} alt='pic1' /></p>
                <div className='p-10 font-inter'>
                    <h2 className='text-6xl'>Tired of scanning multiple vendors for the right chemicals? <br />We get it!</h2>
                    <h4 className='flex items-center mt-4 text-2xl text-gray-500'>With just a few clicks, you can find <br />the exact chemicals you need, all <br /> conveniently offered by various<br /> trusted companies.</h4>
                    <div className='pt-2 space-x-4'>
                        <button className='bg-black text-white p-2 b-2 rounded'>Get Started</button>
                        <button className='text-black bg-gray-300 p-2 b-2 rounded'>Learn More</button>
                    </div>
                </div>

                <div className='p-10 font-inter'>
                    <h2 className='text-6xl'>Find the Best Deal with Our Site <br />We get it!</h2>
                    <h4 className='flex items-center mt-4 text-2xl text-gray-500'>With just a few clicks, you can find <br />the exact chemicals you need, all <br /> conveniently offered by various<br /> trusted companies.</h4>
                    <div className='pt-2 space-x-4'>
                        <button className='bg-black text-white p-2 b-2 rounded'>Get Started</button>
                        <button className='text-black bg-gray-300 p-2 b-2 rounded'>Learn More</button>
                    </div>
                </div>
                <p><img src={P1} alt='pic2' /></p>
            </div>

            {/**Y CHOOSE STATEMENT */}
            <div className='bg-white mb-10'></div>
            <div className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">Why Choose CCBOND?</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: ShieldCheck,
                                title: 'Verified Suppliers',
                                description: 'All suppliers are thoroughly vetted and verified for quality assurance'
                            },
                            {
                                icon: BeakerIcon,
                                title: 'Quality Products',
                                description: 'Access to high-quality pharmaceutical grade raw materials'
                            },
                            {
                                icon: Users,
                                title: 'Global Network',
                                description: 'Connect with buyers and suppliers from around the world'
                            },
                            {
                                icon: TrendingUp,
                                title: 'Market Insights',
                                description: 'Stay updated with latest market trends and pricing'
                            }
                        ].map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                                <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* CARDS FOR LANDING PAGE */}
            <div className='flex items-center justify-center font-inter mt-20 space-x-20 '>
                <div>
                    <div className='bg-white shadow-2xl text-black w-[300px] h-[510px] p-4 hover:scale-110 rounded-xl'>
                        <img src={p3} alt='e' />
                        <h1 className='text-2xl p-5'>Enquiries</h1>
                        <p className='text-gray-600 p-2 text-lg'>Post an enquiry to buy <br />something, specifying your needs.</p>
                        <button className='bg-black hover:bg-white hover:text-black p-2 rounded-xl text-white font-inter'>Get Started</button>
                    </div>
                </div>

                <div>
                    <div className='bg-white shadow-2xl text-black w-[300px] h-[510px] p-4 hover:scale-110 rounded-xl'>
                        <img src={p4} alt='e' />
                        <h1 className='text-2xl p-5'>Sales</h1>
                        <p className='text-gray-600 p-2 text-lg'>Sell your stuff by posting a quick<br /> sales message.</p>
                        <button className='bg-black hover:bg-white hover:text-black p-2 rounded-xl text-white font-inter'>Get Started</button>
                    </div>
                </div>

                <div>
                    <div className='bg-white shadow-2xl text-black w-[300px] h-[510px] p-4 hover:scale-110 rounded-xl'>
                        <img className="w-[300px]" src={p5} alt='e' />
                        <h1 className='text-2xl p-5'>Products</h1>
                        <p className='text-gray-600 p-2 text-lg'>Buy and sell products on this platform.</p>
                        <button className='bg-black hover:bg-white hover:text-black p-2 rounded-xl text-white font-inter'>Get Started</button>
                    </div>
                </div>
            </div>

            {/* BOTTOM OF LANDING PAGE.. */}
            <div className='flex items-center justify-center pt-32 font-serif text-4xl'>
                <h1>Trusted by</h1>
            </div>
            <div className='flex items-center justify-center'>
                <img src={p6} alt='trusted company' className='w-[500px] h-[400px]' />
            </div>

            <div className="flex flex-col items-center justify-center font-inter font-bold mt-28 mb-10">
                <p className="text-center font-bold text-6xl">Sign up today and enhance your chemical</p>
                <p className="text-center font-bold text-6xl">procurement experience.</p>
                <div className='flex items-center justify-center space-x-6 mt-10'>
                    <button className='bg-black text-white p-2 b-2 rounded'>Register Now</button>
                    <button className='text-black bg-gray-300 p-2 b-2 rounded'>Login Now</button>
                </div>
            </div>

        </>
    );

};

export default LanderPage;
