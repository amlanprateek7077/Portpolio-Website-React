import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('http://localhost:5000/api/contact/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success(data.message || 'Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                toast.error(data.error || 'Failed to send the message.');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Network error. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-900 text-white'>
            <div className='container mx-auto px-6 py-12'>
                <h1 className='text-center text-4xl font-bold text-emerald-400 mb-8'>Contact Us</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    {/* Contact Form */}
                    <div className='bg-gray-800 p-8 rounded-lg shadow-md'>
                        <h2 className='text-2xl font-bold mb-6 text-center'>Get In Touch</h2>
                        <form onSubmit={handleSubmit} className='space-y-4'>
                            <input
                                type='text'
                                name='name'
                                placeholder='Your Name'
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className='w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400'
                            />
                            <input
                                type='email'
                                name='email'
                                placeholder='Your Email'
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className='w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400'
                            />
                            <textarea
                                name='message'
                                placeholder='Your Message'
                                rows='5'
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className='w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400'
                            ></textarea>
                            <button
                                type='submit'
                                disabled={isSubmitting}
                                className='w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-4 rounded-md transition-all duration-300'
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>

                    {/* Animation */}
                    <div className='flex justify-center items-center'>
                        <DotLottieReact
                            src='https://lottie.host/8d95b353-6ec1-4114-a203-36d851c200d7/2cIvUl23nQ.lottie'
                            loop
                            autoplay
                            style={{ width: '100%', maxWidth: '400px' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
