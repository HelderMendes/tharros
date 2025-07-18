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
            className={`group block transform overflow-hidden rounded-none border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-slate-600 hover:shadow-lg ${
                featured ? 'ring-2 ring-gold-900' : ''
            }`}
        >
            {image && (
                <div className="h-64 overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
            )}

            <div className="p-6">
                {logo && <div className="mb-6 flex justify-center">{logo}</div>}

                <h3 className="mb-2 text-2xl font-semibold leading-7 text-gold-800 transition-colors group-hover:text-slate-800">
                    {title}
                </h3>

                {subtitle && (
                    <h4 className="mb-3 text-lg font-medium leading-snug tracking-wide text-slate-600 transition-colors">
                        {subtitle}
                    </h4>
                )}

                <p className="font-semilight mb-5 leading-relaxed text-gray-700">
                    {intro}
                </p>

                <div className="flex items-center font-medium text-gold-600 transition-colors group-hover:text-slate-800">
                    <span>Meer informatie</span>
                    <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                </div>
            </div>
        </Link>
    );
};

export default ServiceBlock;
