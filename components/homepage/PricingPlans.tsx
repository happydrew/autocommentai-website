// components/PricingPlans.jsx
import React, { useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { RoughNotation } from "react-rough-notation";

const packages = [
    {
        package_id: "start_eng",
        name: "Starter",
        description: "Ideal for first-time users and light comment generation needs.",
        price: "5",
        currency: "USD",// 货币符号, CNY, USD, HKD, etc.
        credits: 250,
        features: [
            "Get 250 credits",
            "Generate about 250 comments",
            "Credits never expire",
            "Supports smart page extraction",
            "Supports bulk comment generation",
            "Supports auto-fill comments",
            "Supports link management",
            "Standard support"
        ],
        popular: false,
    },
    {
        package_id: "standard_eng",
        name: "Standard",
        description: "Suitable for most users, with a fair price.",
        price: "10",
        currency: "USD",// 货币符号, CNY, USD, HKD, etc.
        credits: 550,
        features: [
            "Get 500 credits + 50 credits",
            "Generate about 550 comments",
            "Credits never expire",
            "Supports smart page extraction",
            "Supports bulk comment generation",
            "Supports auto-fill comments",
            "Supports link management",
            "Standard support"
        ],
        popular: false,
    },
    {
        package_id: "pro_eng",
        name: "Professional",
        description: "Ideal for advanced users, with a premium price.",
        price: "30",
        currency: "USD",
        credits: 1800,
        features: [
            "Get 1500 credits + 300 credits",
            "Generate about 1800 comments",
            "Credits never expire",
            "Supports smart page extraction",
            "Supports bulk comment generation",
            "Supports auto-fill comments",
            "Supports link management",
            "Priority support"
        ],
        popular: true,
    }
];

const PricingPlans = () => {



    return (
        <div className="w-full px-16 py-16">
            <div className="text-center space-y-4 mb-4">
                <h2 className="text-center text-white text-4xl sm:text-6xl font-sans font-bold tracking-tight">
                    <RoughNotation type="highlight" show={true} color="#2563EB">
                        Pricing
                    </RoughNotation>
                </h2>
                <p className="text-lg leading-7 text-[#71717a]">
                    Choose the perfect plan for your needs. All plans include our core features.
                </p>
            </div>

            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-[6rem]">
                {packages.map((plan) => (
                    <PricingCard key={plan.package_id} {...plan} />
                ))}
            </div>
        </div>
    );
};

const PricingCard = ({
    name,
    description,
    price,
    currency,
    credits,
    features,
    popular
}) => {

    const handlePurchase = async () => {
        window.open("https://chromewebstore.google.com/detail/autocommentai/lnnbcbhcffnggkibgmhhjjgadjiainhd", '_blank');
    };

    return (
        <div className={`relative rounded-xl p-8 transition-all hover:shadow-lg h-full max-w-[20rem] flex flex-col ${popular ? 'border-2 border-amber-500' : 'border-2 border-zinc-100 dark:border-zinc-800'}`}>

            {/* Popular Badge */}
            {popular && (
                <div className="absolute -top-3 right-4">
                    <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-medium px-3 py-1 rounded-full shadow-sm">
                        Popular 🔥🔥
                    </div>
                </div>
            )}

            {/* Main content wrapper */}
            <div className="flex-1">
                {/* Header */}
                <div className="text-center space-y-2 mb-6 pt-4"> {/* 增加上边距，为badge腾出空间 */}
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{name}</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{description}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                    <div className="flex items-center justify-center">
                        <span className="text-5xl font-bold text-gray-900 dark:text-gray-300">{currency === "CNY" ? "￥" : currency === "USD" ? "$" : currency === "HKD" ? "HK$" : currency}{price}</span>
                        <span className='text-gray-500 dark:text-gray-400 ml-1 text-lg'>/</span>
                        {/* {credits_before_discount &&
                            <span className='line-through text-gray-400 ml-1 text-sm'>{credits_before_discount}</span>
                        } */}
                        <span className='text-gray-500 dark:text-gray-400 ml-1 text-lg'> {credits} Credits</span>
                    </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-6">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                            <CheckCircleIcon
                                className="text-green-500 flex-shrink-0"
                                style={{ fontSize: '1.25rem' }}
                            />
                            <span className="text-gray-600 dark:text-gray-400 text-sm">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* QR Code Purchase Section */}
            {/* <div className="mt-[8px] text-center"> 
                <h3 className="text-md font-semibold text-gray-700 mb-3">扫码添加微信购买</h3>
                <div className="inline-block p-2 bg-gray-50 rounded-lg shadow-md">
                    <img src={chrome.runtime.getURL('assets/weixin_qrcode.jpg')} alt="weixin QR Code" className="w-24 h-24" />
                </div>
            </div> */}

            <div className="mt-4 text-center">
                <button
                    className={`w-full text-[16px] p-[8px] text-white rounded-[6px] bg-amber-600 hover:bg-amber-700 transition font-medium`}
                    onClick={handlePurchase}
                >
                    <div className="flex items-center justify-center">
                        Get Started
                    </div>
                </button>
            </div>
        </div>
    );
};

export default PricingPlans;