import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceBlockProps {
    title: string;
    subtitle?: string;
    intro: string;
    href: string;
    image?: string;
    logo?: React.ReactNode;
    featured?: boolean;
}

const ServiceBlock: React.FC<ServiceBlockProps> = ({
    title,
    subtitle,
    intro,
    href,
    image,
    logo,
    featured = false,
}) => {
    return (
        <Link
            to={href}
            // className={`group block bg-white rounded-none border border-gray-200 hover:border-gold-300 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 overflow-hidden ${
            //     featured ? 'ring-2 ring-gold-400' : ''
            // }`}
            className={`group block bg-white rounded-none border border-gray-200 hover:border-gold-300 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 overflow-hidden ${
                featured ? '' : ''
            }`}
        >
            {image && (
                <div className='h-48 overflow-hidden'>
                    <img
                        src={image}
                        alt={title}
                        className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                    />
                </div>
            )}

            <div className='p-6'>
                {logo && <div className='mb-6 flex justify-center'>{logo}</div>}

                <h3 className='text-2xl font-semibold text-gold-800 mb-2 group-hover:text-gold-600 transition-colors leading-7'>
                    {title}
                </h3>

                {subtitle && (
                    <h4 className='text-sm font-medium text-slate-600 mb-3 uppercase tracking-wider'>
                        {subtitle}
                    </h4>
                )}

                <p className='text-gray-700 leading-relaxed mb-5 font-semilight'>
                    {intro}
                </p>

                <div className='flex items-center text-gold-600 font-medium group-hover:text-gold-800 transition-colors'>
                    <span>Meer informatie</span>
                    <ArrowRight className='ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform' />
                </div>
            </div>
        </Link>
    );
};

export default ServiceBlock;
