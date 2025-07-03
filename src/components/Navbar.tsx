import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Lecture', href: '/lecture' },
        {
            name: 'Comenius\nLeergang Emerging Leaders in de Publieke Sector',
            href: '/comenius',
        },
        {
            name: 'ABD\nGroei in Persoonlijk Leiderschap (Incompany)',
            href: '/abd',
        },
        { name: 'BZR\nProgramma Doorgroeien in Leiderschap', href: '/bzr' },
        { name: 'Workshops', href: '/workshops' },
        { name: 'Individuele Coaching en Mentorschap', href: '/coaching' },
        { name: 'Contact', href: '/contact' },
    ];

    const isActive = (href: string) => location.pathname === href;

    return (
        <>
            <nav className='fixed top-0 left-0 right-0 z-50 bg-[#04293A] shadow-sm border-b border-gray-200/10'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex justify-between items-center h-32'>
                        <Link to='/' className='flex items-center space-x-3'>
                            <img
                                src='Logo_tharros_transparent.png'
                                alt='logo Tharros, Training & Coaching'
                                className='w-[200px]'
                            />
                        </Link>

                        <button
                            onClick={() => setIsOpen(true)}
                            className='p-3 rounded-lg text-slate-800 hover:bg-slate-50/65 transition-colors'
                        >
                            <Menu className='h-16 w-16' />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Full-page overlay menu */}
            <div
                className={`fixed inset-0 z-50 transition-transform duration-500 ease-in-out ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className='absolute inset-0 bg-[#04293A]'>
                    <div className='flex justify-end p-8'>
                        <button
                            onClick={() => setIsOpen(false)}
                            className='p-3 rounded-lg text-slate-800 hover:bg-slate-50/65 transition-colors'
                        >
                            <X className='size-12 md:h-16 md:w-16' />
                        </button>
                    </div>

                    <div className='flex flex-col items-center md:justify-center -mt-8 md:-mt-20 justify-start h-full '>
                        <nav className='text-center'>
                            <ul className='space-y-2 md:space-y-8 text-gold-200'>
                                {navigation.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            to={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`leading-tight pb-2 block text-md md:text-3xl font-semibold transition-all duration-300 hover:text-slate-600 text-center ${
                                                isActive(item.href)
                                                    ? 'text-slate-800 font-medium'
                                                    : 'text-gold-50'
                                            }`}
                                        >
                                            {item.name.includes('\n') ? (
                                                <span>
                                                    <span className='block'>
                                                        {
                                                            item.name.split(
                                                                '\n'
                                                            )[0]
                                                        }
                                                    </span>
                                                    <span className='block font-light'>
                                                        {
                                                            item.name.split(
                                                                '\n'
                                                            )[1]
                                                        }
                                                    </span>
                                                </span>
                                            ) : (
                                                item.name
                                            )}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className='md:mt-16 mt-6 text-center'>
                            <div className='flex items-center justify-center space-x-3 mb-6 max-w-[65%] mx-auto'>
                                <Link
                                    to='/'
                                    className='flex items-center space-x-3'
                                >
                                    <img
                                        src='Logo_tharros_transparent.png'
                                        alt='logo Tharros, Training & Coaching'
                                        className='max-w-[300px]'
                                    />
                                </Link>
                            </div>
                            <p className='text-lg text-slate-400 max-w-md mx-auto px-4 font-light max-w-[90%]'>
                                Leiderschap en ambtelijk vakmanschap in de
                                publieke sector
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
