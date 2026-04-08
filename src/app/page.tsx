"use client"
import {useState} from "react";
const footerImage = "/logofooter.png"
const heroLogo = "/herologo.png"
const heroImage = "ex9.webp"
import "./Hero.css"
import { BiSolidQuoteLeft } from "react-icons/bi";




const campaigns = [
    {
        name: "Bolt Ng",
        image: "/bolt.png", // swap with your actual path
    },
    {
        name: "Joeboys 2023 Run",
        image: "/joeboy.png",
    },
    {
        name: "Make Music Lagos",
        image: "/micl.png",
    },
];




const testimonials = [
    {
        text: "lorem ipsum dolor sit amet consectetur adipisicing elit laboris nisi ut aliqua. lorem ipsum" +
            " dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing" +
            " lorem ipsum dolor sit ametlorem ipsum dolor sit amet consectetur adipisicing elit laboris nisi ut" +
            " aliqua. lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet " +
            "consectetur adipisicing" +
            " lorem ipsum dolor sit amet",
        name: "Susan James",
        position: "MTV Studios",
    },
    {
        text: "lorem ipsum dolor sit amet consectetur adipisicing elit laboris nisi ut aliqua." +
            " lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur" +
            " adipisicing lorem ipsum dolor sit amet lorem ipsum dolor sit amet consectetur adipisicing elit laboris" +
            " nisi ut aliqua. lorem ipsum dolor sit amet consectetur adipisicing elit." +
            " lorem ipsum dolor sit amet consectetur adipisicing lorem ipsum dolor sit amet",
        name: "John Doe",
        position: "Nike Global",
    },
    {
        text: "lorem ipsum dolor sit amet consectetur adipisicing elit laboris nisi ut aliqua." +
            " lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit " +
            "amet consectetur adipisicing lorem ipsum dolor sit amet lorem ipsum dolor sit amet" +
            " consectetur adipisicing elit laboris nisi ut aliqua. lorem ipsum dolor sit amet " +
            "consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing" +
            " lorem ipsum dolor sit amet",
        name: "Amara Okafor",
        position: "Spotify Africa",
    },
];







export default function Home() {



    const [active, setActive] = useState(0);
    const [fade, setFade] = useState(true);

    const handleSwitch = (index: number) => {
        if (index === active) return;
        setFade(false);
        setTimeout(() => {
            setActive(index);
            setFade(true);
        }, 300);
    };

    const services = [
        "Brand Strategy & Positioning360",
        "Campaign Development & Execution",
        "Digital Marketing Cultural Marketing",
        "Influencer Marketing",
        "Community Activation",
        "Creative Direction & Content Production",
    ];

    const stats = [
        { value: "400k+", label: "Culturally Active Community" },
        { value: "360", label: "Strategy to Execution" },
        { value: "10", label: "years of experience" },
        { value: "1", label: "Singular Edge: Proximity" },
    ];

    return (
        <div className="main">

            {/* ── HERO ── */}
            <section
                className="px-6 py-6 lg:px-16 lg:py-8"
                style={{
                    background: "linear-gradient(135deg, #f0ece8 0%, #e8e4f0 40%, #ddb8d8 75%, #c9a0d0 100%)",
                }}
            >
                <div className="flex justify-between min-h-[30vh] lg:h-screen gap-4">

                    {/* Left column */}
                    <div className="w-1/2 flex flex-col gap-20 lg:gap-85">
                        <figure className="w-20 lg:w-32">
                            <img src={heroLogo} alt="logo" className="w-full" />
                        </figure>
                        <div className="flex flex-col gap-4">
                            <h2 className="text-xs sm:text-3xl lg:text-6xl font-bold leading-tight">
                                we connect brands to culture, authentically
                            </h2>
                            <div className="flex gap-2 flex-wrap">
                                <button className="bg-[#8F2987] text-white px-3 py-2 lg:px-7 lg:py-4 rounded-l text-[0.4rem] lg:text-base">
                                    CONTACT US
                                </button>
                                <button className="border-[#8F2987] border-1 lg:border-2 px-3 py-2 lg:px-7 lg:py-4 rounded-l text-[0.4rem] lg:text-base">
                                    OUR SERVICES
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right column */}
                    <div className="w-1/2 flex flex-col gap-5 min-h-full lg:h-full justify-between">
                        <div className="flex flex-col lg:py-16 gap-3 lg:w-full mt-auto">
                            <p className="text-[0.5rem] sm:text-sm lg:text-base">
                                The Glowstick Agency is a culture-driven marketing and creative agency for brands that want to connect with the audiences that actually matter. We don&apos;t work from the outside looking in. We&apos;re already inside.
                            </p>
                            <p className="text-[0.5rem] sm:text-sm lg:text-base">
                                We also work with global brands who want to activate campaigns to connect with younger audiences in Nigeria.
                            </p>
                        </div>
                    </div>

                </div>
            </section>            {/* ── STATS + QUOTE ── */}
            <section className="px-6 py-8 lg:px-12 lg:py-8 bg-[#261420] flex justify-center items-center">
                <div className="flex flex-col gap-16 lg:gap-40 w-full lg:w-3/4">
                    {/* Stats */}
                    <div className="text-white grid grid-cols-2 gap-4 lg:flex lg:gap-16 lg:justify-center lg:items-center">
                        {stats.map((stat) => (
                            <div key={stat.value} className="flex flex-col gap-1 lg:gap-2 justify-center items-center">
                                <h3 className="text-xl lg:text-5xl font-semibold">{stat.value}</h3>
                                <p className="text-[0.5rem] uppercase text-center">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                    {/* Quote */}
                    <div className="flex w-full">
                        <div className="w-full lg:w-8/12 lg:ml-auto">
                            <p className="text-white text-l lg:text-3xl">
                                <BiSolidQuoteLeft />
                            </p>
                            <p className="text-white text-l lg:text-2xl px-2 lg:px-5 font-bold">
                                Our work sits at the intersection of strategy, culture, and execution; ensuring brands are not just seen, but have cultural impact
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SERVICES ── */}
            <section className="px-6 py-6 lg:px-16 lg:py-4">
                <div className="flex flex-col gap-6 py-6">
                    <p className="text-xl lg:text-2xl tracking-[.2em] font-light">
                        OUR SERVICES
                    </p>
                    <div className="flex flex-col gap-1 lg:gap-2 w-full lg:w-1/2">
                        {services.map((service, i) => (
                            <p
                                key={i}
                                className={`text-l lg:text-4xl font-semibold py-4 ${i !== services.length - 1 ? "border-b border-[#261420]" : ""}`}
                            >
                                {service}
                            </p>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CAMPAIGNS ── */}
            <section className="px-6 py-6 lg:px-16 lg:py-4 bg-[#FFDEFC]">
                <div className="flex flex-col py-6 gap-10 lg:gap-16">
                    <h2 className="text-center text-2xl lg:text-4xl font-semibold leading-tight">
                        Campaigns That Moved People
                    </h2>

                    {/* Campaign cards — horizontal scroll on mobile */}
                    <div className="flex gap-6 overflow-x-auto pb-4 lg:overflow-visible lg:justify-center lg:items-center snap-x snap-mandatory">
                        {campaigns.map(({ name, image }) => (
                            <figure
                                key={name}
                                className="h-64 w-64 flex-shrink-0 snap-start lg:h-[20em] lg:w-[20em]"
                            >
                                <div className="bg-white w-full h-full flex flex-col">
                                    <div className="flex-1 overflow-hidden">
                                        <img
                                            src={image}
                                            alt={name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <p className="p-3 text-sm lg:text-base">{name}</p>
                                </div>
                            </figure>
                        ))}
                    </div>

                    <div className="w-full flex justify-center items-center">
                        <p className="w-full lg:w-2/3 text-xs lg:text-xl text-left font-semibold">
                            We have direct access to an active, culturally engaged community of over 400,000 young people.
                            This gives us something most agencies cant manufacture: real-time insight into audience behaviour,
                            emerging trends, and cultural shifts before they become mainstream.
                        </p>
                    </div>
                </div>
            </section>
            {/* ── TESTIMONIALS ── */}
            <section className="px-6 py-8 lg:px-16 lg:py-8 bg-[#261420]">
                <div className="flex flex-col gap-6 py-6 justify-center items-center">
                    <h2 className="text-center text-3xl lg:text-4xl font-semibold leading-tight text-white">
                        Testimonials
                    </h2>
                    <div className="bg-white px-6 py-8 lg:px-16 lg:py-10 rounded-xl w-full lg:w-2/3">
                        <div
                            className="flex flex-col gap-5 justify-center items-center transition-all duration-300"
                            style={{ opacity: fade ? 1 : 0, transform: fade ? "translateY(0)" : "translateY(8px)" }}
                        >
                            <p className="text-center text-[0.5rem] lg:text-base">{testimonials[active].text}</p>
                            <div className="flex gap-2 flex-wrap justify-center">
                                <p className="font-semibold">{testimonials[active].name}</p>
                                <p className="text-gray-500">— {testimonials[active].position}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => handleSwitch(i)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    i === active ? "bg-white scale-125" : "bg-white/30"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── VENN DIAGRAM ── */}
            <section id="venn-section">
                <div id="venn-container">
                    <div id="venn-scaler">
                        <div id="venn-diagram">
                            <div id="venn-culture">CULTURE</div>
                            <div id="venn-young">YOUNG PEOPLE</div>
                            <div id="venn-brands">BRANDS</div>
                            <div id="venn-center">
                                <span id="venn-label">GLOWSTICK</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="px-6 py-8 lg:px-16 lg:py-8">
                <div className="flex items-center py-6 justify-center">
                    <div className="flex flex-col gap-2 lg:gap-5 py-6 px-4 lg:py-10 lg:px-8 border-[#261420] border rounded-xl justify-center items-center w-full lg:w-auto">
                        <div className="w-full lg:w-2/3">
                            <p className="text-l lg:text-2xl text-center font-semibold leading-tight">
                                Want to connect with global audiences who are actually engaged, let&apos;s talk.
                            </p>
                        </div>
                        <div>
                            <p className="text-[0.5rem] lg:text-base text-center">
                                We help brands stand out by embedding them authentically within culture.
                            </p>
                        </div>
                        <div className="flex gap-1 lg:gap-3 flex-wrap justify-center">
                            <button className="bg-[#8F2987] text-white px-4 py-2 lg:px-7 lg:py-4 rounded text-[0.6rem] lg:text-base">
                                CONTACT US
                            </button>
                            <button className="border-[#8F2987] border-1 lg:border-2 px-4 py-2 lg:px-7 lg:py-4 rounded text-[0.6rem] lg:text-base">
                                OUR SERVICES
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FOOTER ── */}
            <section className="w-full">
                <img className="w-full" src={footerImage} alt="footer"/>
            </section>

        </div>
    );
}