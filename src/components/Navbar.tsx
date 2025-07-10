import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false); // NEW
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Tharros\nMoed en Zelfvertrouwen', href: '/tharros' },
        {
            name: 'Ferdi Licher\nModerator, Trainer en Coach',
            href: '/ferdi-licher',
        },
        { name: 'Lecture\nOver Ambtelijk Vakmanschap', href: '/lecture' },
        {
            name: 'Comenius\nLeergang Emerging Leaders in de Publieke Sector',
            href: '/comenius',
        },
        {
            name: 'ABR – Algemene Bestuursdienst Rijk\nOefenen met de rol van politiek-ambtelijk adviseur',
            href: '/ABR',
        },
        {
            name: 'Ministerie BZK\nLeergang Groeien in persoonlijk leiderschap',
            href: '/BZK',
        },
        {
            name: 'Workshops\nMaatwerk en moderatie voor teams en organisaties',
            href: '/workshops',
        },
        {
            name: 'Individuele trajecten\nPersoonlijke coaching en mentorschap',
            href: '/coaching',
        },
        { name: 'Contact', href: '/contact' },
    ];

    const isActive = (href: string) => location.pathname === href;

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 bg-white/90 shadow-sm border-b border-gray-200/10 transition-all duration-300
                ${scrolled ? 'py-1' : 'py-2'}`}
            >
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div
                        className={`flex justify-between items-center transition-all duration-300 ${
                            scrolled ? 'h-14' : 'h-20'
                        }`}
                    >
                        <Link to='/' className='flex space-x-3'>
                            <img
                                src='LogoTharros.png'
                                alt='logo Tharros, Training & Coaching'
                                className={`transition-all duration-300 
                                    ${scrolled ? 'w-[168px]' : 'w-[240px] pt-2'}
                                `}
                            />
                        </Link>
                        <button
                            onClick={() => setIsOpen(true)}
                            className='mt-1 p-1 rounded-lg text-gold-950 hover:text-slate-600 transition-colors border-2 border-transparent hover:border-slate-600 hover:border-inset'
                        >
                            <Menu className='h-10 w-10' />
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
                <div className='absolute inset-0 bg-[#04293A] py-3'>
                    <div className='flex justify-end items-center h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
                        <button
                            onClick={() => setIsOpen(false)}
                            className='mt-1 p-1 rounded-lg text-slate-600 hover:text-white  transition-colors border-2 border-transparent hover:border-slate-600 hover:border-inset'
                        >
                            <X className='size-10' />
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
                                            className={`leading-tight pb-2 block text-md md:text-2xl font-semibold transition-all duration-300 hover:text-[#b67716] text-center ${
                                                isActive(item.href)
                                                    ? 'text-slate-800 font-light'
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
                                                    <span className='block font-extralight'>
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
                                        src='TharrosLogoNegatief.png'
                                        alt='logo Tharros, Training & Coaching'
                                        className='max-w-[300px]'
                                    />
                                </Link>
                            </div>
                            <p className='text-lg text-[#b67716] max-w-md mx-auto px-4 font-light max-w-[90%]'>
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
