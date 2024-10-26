'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Code, Laptop, Smartphone, Globe, Users, MessageSquare, ArrowRight, Mail, UserPlus, Award, Moon, Sun } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ARDevelopersLanding() {
    const [activeSection, setActiveSection] = useState('home')
    const [darkMode, setDarkMode] = useState(false)
    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setActiveSection(sectionId)
        }
    }

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        if (darkMode) {
            document.documentElement.classList.remove('dark')
        } else {
            document.documentElement.classList.add('dark')
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up')
                }
            })
        }, { threshold: 0.1 })

        document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    const testimonials = [
        { quote: "AR Developers transformed our online presence. Their expertise and creativity are unmatched!", author: "Sarah L., CEO" },
        { quote: "Working with AR Developers was a game-changer for our business. Highly recommended!", author: "Mark T., Marketing Director" },
        { quote: "The team at AR Developers is professional, innovative, and delivers results. We couldn't be happier!", author: "Emily R., Startup Founder" },
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
        }, 2000)

        return () => clearInterval(timer)
    }, [testimonials.length])

    return (
        <div className={`min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-inter transition-colors duration-300`}>
            <div className="fixed inset-0 bg-gray-100 dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-50 transition-colors duration-300" style={{
                backgroundImage: `radial-gradient(${darkMode ? '#4a5568' : '#cbd5e0'} 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
            }}></div>
            <div className="relative">
                <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 shadow-sm z-50 backdrop-blur-sm transition-colors duration-300">
                    <nav className="container mx-auto px-6 py-4">
                        <div className="flex justify-between items-center">
                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">AR Developers</div>
                            <div className="hidden md:flex space-x-1">
                                {['home', 'about', 'services', 'team', 'testimonials', 'internship', 'contact'].map((section) => (
                                    <button
                                        key={section}
                                        onClick={() => scrollToSection(section)}
                                        className={`text-sm font-medium transition-all duration-200 px-3 py-2 rounded-md ${
                                            activeSection === section
                                                ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30'
                                                : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                                        }`}
                                    >
                                        {section.charAt(0).toUpperCase() + section.slice(1)}
                                    </button>
                                ))}
                            </div>
                            <Button
                                onClick={toggleDarkMode}
                                className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                            >
                                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                            </Button>
                        </div>
                    </nav>
                </header>

                <main className="pt-20">
                    <section id="home" className="py-20 md:py-32">
                        <div className="container mx-auto px-6 text-center animate-on-scroll">
                            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-gray-600 to-gray-900 dark:from-gray-300 dark:to-gray-100 text-transparent bg-clip-text">
                                Crafting Digital Experiences
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10">Innovative Web Design & Software Development</p>
                            <Button
                                onClick={() => scrollToSection('contact')}
                                className="bg-blue-600 text-white dark:bg-blue-500 dark:text-gray-900 hover:bg-blue-700 dark:hover:bg-blue-400 transition-colors duration-200 text-lg px-8 py-3 rounded-full"
                            >
                                Get Started <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                    </section>

                    <section id="about" className="py-20">
                        <div className="container mx-auto px-6">
                            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200 animate-on-scroll">About Us</h2>
                            <div className="flex flex-col md:flex-row items-center justify-between">
                                <div className="md:w-1/2 mb-10 md:mb-0 animate-on-scroll">
                                    <Image
                                        src="/placeholder.png"
                                        alt="About AR Developers"
                                        width={600}
                                        height={400}
                                        className="rounded-lg shadow-2xl"
                                    />
                                    {/* Image size: 600x400 pixels */}
                                </div>
                                <div className="md:w-1/2 md:pl-12 animate-on-scroll">
                                    <p className="text-lg mb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                                        AR Developers is a cutting-edge web design and software development agency. We combine creativity with
                                        technical expertise to deliver outstanding digital solutions for businesses of all sizes.
                                    </p>
                                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                        Our team of skilled professionals is passionate about creating beautiful, functional, and user-friendly
                                        websites and applications that help our clients succeed in the digital world.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
                        <div className="container mx-auto px-6">
                            <h2 className="text-3xl font-bold text-center mb-16 text-gray-800 dark:text-gray-200 animate-on-scroll">Our Services</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                                {[
                                    { icon: <Globe className="h-12 w-12 text-blue-600 dark:text-blue-400" />, title: 'Web Design', description: 'Create stunning, responsive websites that captivate your audience.' },
                                    { icon: <Code className="h-12 w-12 text-blue-600 dark:text-blue-400" />, title: 'Web Development', description: 'Build robust, scalable web applications using cutting-edge technologies.' },
                                    { icon: <Smartphone className="h-12 w-12 text-blue-600 dark:text-blue-400" />, title: 'Mobile App Development', description: 'Develop innovative mobile apps for iOS and Android platforms.' },
                                    { icon: <Laptop className="h-12 w-12 text-blue-600 dark:text-blue-400" />, title: 'Custom Software', description: 'Tailor-made software solutions to meet your unique business needs.' },
                                    { icon: <Users className="h-12 w-12 text-blue-600 dark:text-blue-400" />, title: 'UI/UX Design', description: 'Create intuitive and engaging user interfaces and experiences.' },
                                    { icon: <MessageSquare className="h-12 w-12 text-blue-600 dark:text-blue-400" />, title: 'Consultation', description: 'Expert advice on digital strategy and technology implementation.' },
                                ].map((service, index) => (
                                    <div key={index} className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 animate-on-scroll">
                                        <div className="flex justify-center mb-6">{service.icon}</div>
                                        <h3 className="text-xl font-semibold text-center mb-4 text-gray-800 dark:text-gray-200">{service.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-center">{service.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section id="team" className="py-20">
                        <div className="container mx-auto px-6">
                            <h2 className="text-3xl font-bold text-center mb-16 text-gray-800 dark:text-gray-200 animate-on-scroll">Our Team</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                                {[
                                    { name: 'John Doe', role: 'Founder & CEO', image: '/rajab.png' },
                                    { name: 'Jane Smith', role: 'Lead Designer', image: '/abdullah.png' },
                                ].map((member, index) => (
                                    <div key={index} className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg text-center transition-all duration-300 hover:scale-105 animate-on-scroll">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            width={300}
                                            height={300}
                                            className="rounded-full mx-auto mb-6 border-4 border-blue-100 dark:border-blue-900"
                                        />
                                        {/* Image size: 300x300 pixels */}
                                        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{member.name}</h3>
                                        <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section id="testimonials" className="py-20 md:py-32">
                        <div className="container mx-auto px-6">
                            <h2 className="text-3xl font-bold text-center mb-16 text-gray-800 dark:text-gray-200 animate-on-scroll">What Our Clients Say</h2>
                            <div className="max-w-4xl mx-auto relative">
                                <div className="flex justify-center mb-4">
                                    {testimonials.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentTestimonial(index)}
                                            className={`h-3 w-3 mx-1 rounded-full transition-all duration-300 ${
                                                index === currentTestimonial ? 'bg-white scale-125' : 'bg-blue-300 scale-100'
                                            }`}
                                            aria-label={`Go to testimonial ${index + 1}`}
                                        />
                                    ))}
                                </div>
                                <div className="overflow-hidden">
                                    <div className="flex transition-all duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                                        {testimonials.map((testimonial, index) => (
                                            <div key={index} className="w-full flex-shrink-0">
                                                <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg animate-on-scroll mx-2">
                                                    <p className="text-lg mb-6 text-gray-600 dark:text-gray-300 italic">{testimonial.quote}</p>
                                                    <p className="font-semibold  text-gray-800 dark:text-gray-200">- {testimonial.author}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="internship" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
                        <div className="container mx-auto px-6">
                            <h2 className="text-3xl font-bold text-center mb-16 text-gray-800 dark:text-gray-200 animate-on-scroll">Internship Program</h2>
                            <div className="max-w-3xl mx-auto text-center">
                                <p className="text-lg mb-10 text-gray-600 dark:text-gray-400 animate-on-scroll">
                                    Join our internship program to gain hands-on experience in web development and design.
                                    Work on real projects, learn from industry experts, and kickstart your career in tech.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                                    {[
                                        { title: 'Frontend Developer', icon: '/frontend-icon.png' },
                                        { title: 'Backend Developer', icon: '/backend-icon.png' },
                                        { title: 'MERN Stack Developer', icon: '/mern-icon.png' },
                                        { title: 'Full Stack Developer', icon: '/fullstack-icon.png' },
                                        { title: 'Python Developer', icon: '/python-icon.png' },
                                        { title: 'WordPress Developer', icon: '/wordpress-icon.png' },
                                    ].map((opportunity, index) => (
                                        <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg animate-on-scroll">
                                            <Image
                                                src={opportunity.icon}
                                                alt={opportunity.title}
                                                width={64}
                                                height={64}
                                                className="mx-auto mb-4"
                                            />
                                            {/* Image size: 64x64 pixels */}
                                            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">{opportunity.title}</h3>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col sm:flex-row justify-center gap-6 animate-on-scroll">
                                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd2PuoiNIiWJfcJXhrzI2og584StRHsDdef8u3Gm8hg5uJFtQ/viewform?usp=sf_link" passHref>
                                        <Button className="bg-blue-600 text-white dark:bg-blue-500 dark:text-gray-900 hover:bg-blue-700 dark:hover:bg-blue-400 transition-colors duration-200 text-lg px-6 py-3 rounded-full">
                                            <UserPlus className="mr-2 h-5 w-5" /> Apply for Internship
                                        </Button>
                                    </Link>
                                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdojeUYELm_wSiDA_dzBFwX78AF-eyvyHZzK9zIMgxRoEqOIg/closedform" passHref>
                                        <Button className="bg-green-600 text-white dark:bg-green-500 dark:text-gray-900 hover:bg-green-700 dark:hover:bg-green-400 transition-colors duration-200 text-lg px-6 py-3 rounded-full">
                                            <Code className="mr-2 h-5 w-5" /> Submit Project
                                        </Button>
                                    </Link>
                                    <Link href="https://ardevelopers.great-site.net/certgen" passHref>
                                        <Button className="bg-yellow-600 text-white dark:bg-yellow-500 dark:text-gray-900 hover:bg-yellow-700 dark:hover:bg-yellow-400 transition-colors duration-200 text-lg px-6 py-3 rounded-full">
                                            <Award className="mr-2 h-5 w-5" /> Get Certificate
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="contact" className="py-20">
                        <div className="container mx-auto px-6">
                            <h2 className="text-3xl font-bold text-center mb-16 text-gray-800 dark:text-gray-200 animate-on-scroll">Contact Us</h2>
                            <div className="max-w-lg mx-auto animate-on-scroll">
                                <form className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Name</label>
                                        <Input id="name" type="text" placeholder="John Doe" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Email</label>
                                        <Input id="email" type="email" placeholder="john@example.com" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                                        <Input id="subject" type="text" placeholder="How can we help you?" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Message</label>
                                        <Textarea id="message" placeholder="Tell us more about your project..." className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" rows={4} />
                                    </div>
                                    <Button type="submit" className="w-full bg-blue-600 text-white dark:bg-blue-500 dark:text-gray-900 hover:bg-blue-700 dark:hover:bg-blue-400 transition-colors duration-200 text-lg py-3 rounded-full flex items-center justify-center">
                                        Send Message <Mail className="ml-2 h-5 w-5" />
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </section>
                </main>

                <footer className="bg-gray-800 dark:bg-gray-900 text-white py-12 transition-colors duration-300">
                    <div className="container mx-auto px-6 text-center">
                        <p className="text-lg mb-4">&copy; 2024 AR Developers. All rights reserved.</p>
                        <div className="flex justify-center space-x-4">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                                Twitter
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                                Facebook
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                                LinkedIn
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                                Instagram
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}
