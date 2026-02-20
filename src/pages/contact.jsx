import Header from '../components/Header';
import { useState, useEffect } from 'react';
import Logo from '../components/logo'

export default function Bottom() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        projectDetails: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const [pageLoaded, setPageLoaded] = useState(false);

    useEffect(() => {
        setPageLoaded(true);
    }, []);

    // Replace this with your actual Google Form ID
    // Get it from your Google Form URL: https://docs.google.com/forms/d/e/[FORM_ID]/formResponse
    const GOOGLE_FORM_ID = '1FAIpQLSdIg6Ybe_HP6W0mEonpbD1aDe1mA4EZHNtF2w9eh6LchCg7Jg';

    // Replace these with your actual Google Form entry IDs
    // To find them: submit a test form and check the spreadsheet column headers
    const ENTRY_IDS = {
        firstName: 'entry.665258351',    // Replace with your actual entry ID
        lastName: 'entry.804667590',     // Replace with your actual entry ID
        phone: 'entry.623876857',        // Replace with your actual entry ID
        email: 'entry.1899017098',        // Replace with your actual entry ID
        projectDetails: 'entry.621813638' // Replace with your actual entry ID
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        try {
            // Create FormData object for Google Forms
            const formDataToSubmit = new FormData();

            // Map form fields to Google Forms entry IDs
            formDataToSubmit.append(ENTRY_IDS.firstName, formData.firstName);
            formDataToSubmit.append(ENTRY_IDS.lastName, formData.lastName);
            formDataToSubmit.append(ENTRY_IDS.phone, formData.phone);
            formDataToSubmit.append(ENTRY_IDS.email, formData.email);
            formDataToSubmit.append(ENTRY_IDS.projectDetails, formData.projectDetails);

            // Add timestamp for tracking
            formDataToSubmit.append('entry.timestamp', new Date().toISOString());

            // Submit to Google Forms
            const response = await fetch(
                `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`,
                {
                    method: 'POST',
                    mode: 'no-cors', // Important: Google Forms doesn't support CORS
                    body: formDataToSubmit,
                    redirect: 'follow'
                }
            );

            // Since we use no-cors mode, we won't get a response back
            // But the submission will still work
            setSubmitMessage('Thank you! Your request has been submitted successfully.');

            // Reset form
            setFormData({
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
                projectDetails: ''
            });

        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitMessage('Error: Failed to submit form. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Alternative method using hidden iframe (works better for some browsers)
    const handleSubmitAlternative = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        // Create a hidden iframe to handle the response
        const iframe = document.createElement('iframe');
        iframe.name = 'hidden_iframe';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);

        // Create a hidden form
        const hiddenForm = document.createElement('form');
        hiddenForm.style.display = 'none';
        hiddenForm.method = 'POST';
        hiddenForm.action = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`;
        hiddenForm.target = 'hidden_iframe';

        // Add form fields
        const addField = (name, value) => {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = name;
            input.value = value;
            hiddenForm.appendChild(input);
        };

        addField(ENTRY_IDS.firstName, formData.firstName);
        addField(ENTRY_IDS.lastName, formData.lastName);
        addField(ENTRY_IDS.phone, formData.phone);
        addField(ENTRY_IDS.email, formData.email);
        addField(ENTRY_IDS.projectDetails, formData.projectDetails);
        addField('entry.timestamp', new Date().toISOString());

        document.body.appendChild(hiddenForm);
        hiddenForm.submit();

        // Clean up and show message
        setTimeout(() => {
            setSubmitMessage('Thank you! Your request has been submitted successfully.');
            setFormData({
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
                projectDetails: ''
            });
            setIsSubmitting(false);

            // Clean up DOM
            document.body.removeChild(hiddenForm);
            document.body.removeChild(iframe);
        }, 1000);
    };

    return (
        <div>
            <Header />
            <div className='bar'></div>
            <div className={`bottom ${pageLoaded ? 'fade-in' : ''}`}>

                <section className="contact-section" id="contact" aria-label="Contact us">
                    <div className="contact-container">
                        <div className="contact-form-wrapper">
                            <h3>Get in touch with us</h3>

                            {submitMessage && (
                                <div className={`submit-message ${submitMessage.includes('Thank you') ? 'success' : 'error'}`}>
                                    {submitMessage}
                                </div>
                            )}

                            <form
                                className="contact-form"
                                onSubmit={handleSubmit}
                            // If fetch doesn't work, use onSubmit={handleSubmitAlternative}
                            >
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                        required
                                        aria-label="First name"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        required
                                        aria-label="Last name"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number"
                                        required
                                        aria-label="Phone number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        required
                                        aria-label="Email address"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        name="projectDetails"
                                        placeholder="Message"
                                        rows="4"
                                        aria-label="Project details"
                                        required
                                        value={formData.projectDetails}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-submit"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Submit'}
                                </button>
                            </form>

                            <div class="link">
                                <a href="tel:+971507315523" target='block'><svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.0212 21.6664L23.8806 17.5258C23.3029 16.9481 22.5967 16.6592 21.7622 16.6592C20.9276 16.6592 20.1894 16.9481 19.5474 17.5258L17.9105 19.1628C15.9846 18.0715 14.4279 16.932 13.2403 15.7444C12.0527 14.5568 10.9132 13.0001 9.82189 11.0742L11.4589 9.43726C12.0366 8.8595 12.3415 8.13731 12.3736 7.27068C12.4057 6.40404 12.1329 5.68185 11.5552 5.10409L7.31829 0.963514C6.74053 0.385759 6.03439 0.0968819 5.19985 0.0968819C4.36532 0.0968819 3.65917 0.385759 3.08142 0.963514C2.63205 1.28449 2.18269 1.76595 1.73332 2.4079C1.02717 3.49922 0.513615 4.71892 0.19264 6.06702C-0.256726 8.37804 0.0963471 10.7212 1.25186 13.0964C2.40737 15.4716 4.5579 18.1999 7.70346 21.2812C10.6564 24.2984 13.7378 26.4168 16.9475 27.6365C18.8734 28.4069 20.6388 28.7921 22.2436 28.7921H22.8214C24.2337 28.5995 25.4213 28.2143 26.3842 27.6365C26.8978 27.2514 27.4434 26.7057 28.0212 25.9996C28.5989 25.2934 28.8878 24.5391 28.8878 23.7367C28.8878 22.9343 28.5989 22.2442 28.0212 21.6664ZM26.6731 24.8441C26.1595 25.486 25.7102 25.9354 25.325 26.1922C24.6188 26.6415 23.7201 26.9304 22.6288 27.0588H22.2436C20.7671 27.0588 19.1623 26.7057 17.429 25.9996C14.5402 24.8441 11.6835 22.854 8.85897 20.0294C6.03439 17.2049 4.07644 14.7333 2.98512 12.6149C1.89381 10.4965 1.54074 8.44224 1.92591 6.45219C2.18269 5.29668 2.63205 4.26956 3.274 3.37083C3.59498 2.92146 3.88385 2.56839 4.14063 2.31161L4.23693 2.21532C4.49371 1.95854 4.79863 1.83015 5.15171 1.83015C5.50478 1.83015 5.8097 1.95854 6.06648 2.21532L10.2071 6.3559C10.4638 6.61268 10.5922 6.9176 10.5922 7.27068C10.5922 7.62375 10.4638 7.92867 10.2071 8.18546L8.28121 10.015C8.08863 10.2718 7.97629 10.5607 7.94419 10.8816C7.91209 11.2026 7.99234 11.4915 8.18492 11.7483C8.69848 12.7754 9.17994 13.5778 9.62931 14.1556C10.3355 15.1827 11.1218 16.1296 11.9885 16.9962C12.8551 17.8629 13.802 18.6492 14.8291 19.3554C15.4069 19.8048 16.2093 20.2862 17.2364 20.7998C17.4932 20.9282 17.75 20.9924 18.0068 20.9924C18.4561 20.9924 18.8092 20.8319 19.066 20.5109L20.7992 18.7776C21.056 18.5209 21.361 18.3925 21.714 18.3925C22.0671 18.3925 22.372 18.5209 22.6288 18.7776L26.7694 22.9182C27.0262 23.175 27.1385 23.4799 27.1064 23.833C27.0743 24.1861 26.9299 24.5231 26.6731 24.8441ZM17.5253 4.43005C18.2956 4.55844 19.0981 4.83126 19.9326 5.24853C20.7671 5.6658 21.5054 6.19541 22.1473 6.83736C22.7893 7.47931 23.3189 8.21755 23.7362 9.05209C24.1534 9.88662 24.3942 10.6891 24.4584 11.4594C24.5226 11.7162 24.6349 11.9248 24.7954 12.0853C24.9559 12.2458 25.1645 12.326 25.4213 12.326H25.5176C25.7744 12.2618 25.9669 12.1334 26.0953 11.9409C26.2237 11.7483 26.2879 11.5236 26.2879 11.2668C26.1595 10.3039 25.8386 9.30887 25.325 8.28175C24.8114 7.25463 24.1695 6.3559 23.3991 5.58556C22.6288 4.81522 21.7301 4.17327 20.703 3.65971C19.6758 3.14614 18.6808 2.82517 17.7179 2.69678C17.4611 2.63259 17.2364 2.68073 17.0438 2.84122C16.8513 3.00171 16.7389 3.21034 16.7068 3.46712C16.6747 3.7239 16.7389 3.94858 16.8994 4.14117C17.0599 4.33375 17.2685 4.43005 17.5253 4.43005ZM16.6587 8.18546C17.108 8.24965 17.5895 8.42619 18.1031 8.71507C18.6166 9.00394 19.0499 9.32492 19.403 9.67799C19.7561 10.0311 20.0771 10.4804 20.3659 11.0261C20.6548 11.5717 20.8313 12.0372 20.8955 12.4223C20.8955 12.6791 20.9918 12.8877 21.1844 13.0482C21.377 13.2087 21.5696 13.289 21.7622 13.289H21.8585C22.1152 13.2248 22.3239 13.0964 22.4844 12.9038C22.6449 12.7112 22.693 12.4865 22.6288 12.2297C22.5646 11.5878 22.3399 10.9137 21.9548 10.2076C21.5696 9.50145 21.1363 8.90765 20.6548 8.42619C20.1733 7.94472 19.5956 7.51141 18.9215 7.12624C18.2475 6.74107 17.5574 6.51638 16.8513 6.45219C16.5945 6.38799 16.3698 6.43614 16.1772 6.59663C15.9846 6.75712 15.8723 6.96575 15.8402 7.22253C15.8081 7.47931 15.8723 7.70399 16.0328 7.89658C16.1933 8.08916 16.4019 8.18546 16.6587 8.18546Z" fill="white" />
                                </svg>
                                    <span><h4>Phone Number</h4>+971507315523</span>
                                </a>
                                <a target='block' href="https://maps.app.goo.gl/djHaaPNaMRXfARtv9"><svg height="80" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.1663 12.0837C24.1663 19.9378 14.4997 26.5837 14.4997 26.5837C14.4997 26.5837 4.83301 19.9378 4.83301 12.0837C4.83301 9.5199 5.85146 7.06114 7.66431 5.24829C9.47716 3.43544 11.9359 2.41699 14.4997 2.41699C17.0634 2.41699 19.5222 3.43544 21.335 5.24829C23.1479 7.06114 24.1663 9.5199 24.1663 12.0837Z" stroke="white" stroke-width="2" />
                                    <path d="M18.125 12.084C18.125 13.0454 17.7431 13.9674 17.0633 14.6472C16.3834 15.3271 15.4614 15.709 14.5 15.709C13.5386 15.709 12.6166 15.3271 11.9367 14.6472C11.2569 13.9674 10.875 13.0454 10.875 12.084C10.875 11.1226 11.2569 10.2005 11.9367 9.52072C12.6166 8.8409 13.5386 8.45898 14.5 8.45898C15.4614 8.45898 16.3834 8.8409 17.0633 9.52072C17.7431 10.2005 18.125 11.1226 18.125 12.084Z" stroke="white" stroke-width="2" />
                                </svg>
                                    <span><h4>Office Location</h4> M44, B-11, Musaffah, Icad 2,<br /> Abu Dhabi.
                                    </span>
                                </a>
                                <a target='block' href="mailto:info@curtlab.ae"><svg width="29" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.7915 8.08869L24.5546 5.10362V0.866745C24.5546 0.609964 24.4744 0.401331 24.3139 0.240843C24.1534 0.0803566 23.9768 0.000112534 23.7843 0.000112534H5.48867C5.23189 0.000112534 5.03931 0.0803566 4.91092 0.240843C4.78253 0.401331 4.68624 0.609964 4.62204 0.866745V5.10362L0.288878 8.08869C0.0962925 8.21708 0 8.40966 0 8.66644V24.3621C0 24.6189 0.0802438 24.8275 0.240731 24.988C0.401219 25.1485 0.609853 25.2288 0.866633 25.2288H28.4063C28.7273 25.2288 28.8878 24.9399 28.8878 24.3621V8.57015C28.8878 8.31337 28.8557 8.15288 28.7915 8.08869ZM24.5546 6.74059L27.4434 8.66644L24.5546 10.8812V6.74059ZM5.97014 1.34821H23.2065V11.8441L14.6365 18.392L5.97014 11.8441V1.34821ZM4.62204 6.74059V10.8812L1.82956 8.66644L4.62204 6.74059ZM1.3481 10.0145L10.5922 17.1402L1.3481 23.3992V10.0145ZM2.88878 23.8807L11.7477 18.0068L14.155 19.7401C14.2834 19.8685 14.4118 19.9327 14.5402 19.9327C14.6686 19.9327 14.7649 19.9006 14.8291 19.8364L17.3327 17.8142L26.2879 23.8807H2.88878ZM27.5397 23.1103L18.4882 17.0439L27.5397 10.0145V23.1103ZM9.34038 5.68137H12.3254C12.4538 5.68137 12.5822 5.61718 12.7106 5.48879C12.839 5.3604 12.9032 5.19991 12.9032 5.00732C12.9032 4.81474 12.839 4.65425 12.7106 4.52586C12.5822 4.39747 12.4538 4.33328 12.3254 4.33328H9.34038C9.14779 4.33328 8.9873 4.39747 8.85891 4.52586C8.73052 4.65425 8.66633 4.81474 8.66633 5.00732C8.66633 5.19991 8.73052 5.3604 8.85891 5.48879C8.9873 5.61718 9.14779 5.68137 9.34038 5.68137ZM9.34038 8.66644H19.9326C20.1251 8.66644 20.2856 8.60225 20.414 8.47386C20.5424 8.34547 20.6066 8.18498 20.6066 7.99239C20.6066 7.79981 20.5424 7.63932 20.414 7.51093C20.2856 7.38254 20.1251 7.31835 19.9326 7.31835H9.34038C9.14779 7.31835 8.9873 7.38254 8.85891 7.51093C8.73052 7.63932 8.66633 7.79981 8.66633 7.99239C8.66633 8.18498 8.73052 8.34547 8.85891 8.47386C8.9873 8.60225 9.14779 8.66644 9.34038 8.66644ZM20.6066 10.9775C20.6066 10.7849 20.5424 10.6244 20.414 10.496C20.2856 10.3676 20.1251 10.3034 19.9326 10.3034H9.34038C9.14779 10.3034 8.9873 10.3676 8.85891 10.496C8.73052 10.6244 8.66633 10.7849 8.66633 10.9775C8.66633 11.17 8.73052 11.3305 8.85891 11.4589C8.9873 11.5873 9.14779 11.6515 9.34038 11.6515H19.9326C20.1251 11.6515 20.2856 11.5873 20.414 11.4589C20.5424 11.3305 20.6066 11.17 20.6066 10.9775Z" fill="white" />
                                </svg>
                                    <span><h4>Email Address</h4>info@curtlab.ae</span>
                                </a>
                            </div>
                        </div>

                        <div className="contact-info">
                            <img src="/images/contact.jpg" alt="" />
                        </div>
                    </div>
                </section >

                <div className="footer" aria-label="Footer">
                    <Logo />
                    <div className='media-footer'>
                        <a href="https://www.facebook.com/people/Curtlab/61585109090249/" target='block'>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.99982 0C4.0294 0 0 4.04428 0 9.03306C0 13.2692 2.90586 16.8239 6.82582 17.8002V11.7936H4.97006V9.03306H6.82582V7.84359C6.82582 4.76909 8.21216 3.34404 11.2195 3.34404C11.7898 3.34404 12.7736 3.45641 13.1761 3.56842V6.07058C12.9637 6.04818 12.5947 6.03698 12.1364 6.03698C10.6608 6.03698 10.0906 6.59811 10.0906 8.05677V9.03306H13.0303L12.5252 11.7936H10.0906V18C14.5469 17.4598 18 13.6515 18 9.03306C17.9996 4.04428 13.9702 0 8.99982 0Z" fill="#BFBFBF" />
                            </svg>
                        </a>
                        <a href="https://wa.me/+971507315523" target="_blank">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 18L1.27129 13.3778C0.486812 12.0247 0.0746044 10.491 0.075358 8.91825C0.0776187 4.00125 4.09797 0 9.03768 0C11.4348 0.00075 13.685 0.93 15.3775 2.616C17.0693 4.302 18.0008 6.543 18 8.9265C17.9977 13.8443 13.9774 17.8455 9.03768 17.8455C7.53805 17.8448 6.06029 17.4705 4.75132 16.7595L0 18ZM4.97136 15.1448C6.23436 15.891 7.44009 16.338 9.03466 16.3387C13.1402 16.3387 16.4846 13.0133 16.4868 8.925C16.4883 4.8285 13.1598 1.5075 9.04069 1.506C4.93218 1.506 1.59005 4.8315 1.58855 8.919C1.58779 10.5878 2.07913 11.8372 2.9043 13.1445L2.15147 15.8805L4.97136 15.1448ZM13.5524 11.0468C13.4966 10.9537 13.3474 10.8982 13.1228 10.7865C12.899 10.6748 11.798 10.1355 11.5923 10.0612C11.3873 9.987 11.2381 9.9495 11.0882 10.173C10.939 10.3958 10.5094 10.8982 10.379 11.0468C10.2487 11.1953 10.1176 11.214 9.89374 11.1023C9.66993 10.9905 8.948 10.7557 8.09269 9.996C7.42728 9.405 6.97739 8.67525 6.84702 8.45175C6.71665 8.229 6.83346 8.10825 6.94499 7.99725C7.04597 7.8975 7.1688 7.737 7.28108 7.6065C7.39487 7.4775 7.4318 7.3845 7.50716 7.23525C7.58176 7.08675 7.54484 6.95625 7.48832 6.8445C7.4318 6.7335 6.98417 5.63625 6.79804 5.19C6.61567 4.75575 6.43105 4.81425 6.2939 4.8075L5.86436 4.8C5.71515 4.8 5.47249 4.8555 5.26752 5.079C5.06255 5.3025 4.4838 5.841 4.4838 6.93825C4.4838 8.0355 5.28636 9.09525 5.39789 9.24375C5.51017 9.39225 6.97664 11.6438 9.22306 12.609C9.75735 12.8385 10.1748 12.9757 10.4996 13.0785C11.0362 13.248 11.5245 13.224 11.9103 13.167C12.3406 13.1032 13.2351 12.6277 13.422 12.1073C13.6089 11.586 13.6089 11.1398 13.5524 11.0468Z" fill="#BFBFBF" />
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/curtlab?igsh=MWR1b2owamUyaDI1ag%3D%3D&utm_source=qr" target='block'>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2136_262)">
                                    <path d="M9 1.6207C11.4047 1.6207 11.6895 1.63125 12.6352 1.67344C13.5141 1.71211 13.9887 1.85977 14.3051 1.98281C14.7234 2.14453 15.0258 2.34141 15.3387 2.6543C15.6551 2.9707 15.8484 3.26953 16.0102 3.68789C16.1332 4.0043 16.2809 4.48242 16.3195 5.35781C16.3617 6.30703 16.3723 6.5918 16.3723 8.99297C16.3723 11.3977 16.3617 11.6824 16.3195 12.6281C16.2809 13.507 16.1332 13.9816 16.0102 14.298C15.8484 14.7164 15.6516 15.0188 15.3387 15.3316C15.0223 15.648 14.7234 15.8414 14.3051 16.0031C13.9887 16.1262 13.5105 16.2738 12.6352 16.3125C11.6859 16.3547 11.4012 16.3652 9 16.3652C6.59531 16.3652 6.31055 16.3547 5.36484 16.3125C4.48594 16.2738 4.01133 16.1262 3.69492 16.0031C3.27656 15.8414 2.97422 15.6445 2.66133 15.3316C2.34492 15.0152 2.15156 14.7164 1.98984 14.298C1.8668 13.9816 1.71914 13.5035 1.68047 12.6281C1.63828 11.6789 1.62773 11.3941 1.62773 8.99297C1.62773 6.58828 1.63828 6.30352 1.68047 5.35781C1.71914 4.47891 1.8668 4.0043 1.98984 3.68789C2.15156 3.26953 2.34844 2.96719 2.66133 2.6543C2.97773 2.33789 3.27656 2.14453 3.69492 1.98281C4.01133 1.85977 4.48945 1.71211 5.36484 1.67344C6.31055 1.63125 6.59531 1.6207 9 1.6207ZM9 0C6.55664 0 6.25078 0.0105469 5.29102 0.0527344C4.33477 0.0949219 3.67734 0.249609 3.10781 0.471094C2.51367 0.703125 2.01094 1.00898 1.51172 1.51172C1.00898 2.01094 0.703125 2.51367 0.471094 3.1043C0.249609 3.67734 0.0949219 4.33125 0.0527344 5.2875C0.0105469 6.25078 0 6.55664 0 9C0 11.4434 0.0105469 11.7492 0.0527344 12.709C0.0949219 13.6652 0.249609 14.3227 0.471094 14.8922C0.703125 15.4863 1.00898 15.9891 1.51172 16.4883C2.01094 16.9875 2.51367 17.2969 3.1043 17.5254C3.67734 17.7469 4.33125 17.9016 5.2875 17.9438C6.24727 17.9859 6.55313 17.9965 8.99648 17.9965C11.4398 17.9965 11.7457 17.9859 12.7055 17.9438C13.6617 17.9016 14.3191 17.7469 14.8887 17.5254C15.4793 17.2969 15.982 16.9875 16.4813 16.4883C16.9805 15.9891 17.2898 15.4863 17.5184 14.8957C17.7398 14.3227 17.8945 13.6688 17.9367 12.7125C17.9789 11.7527 17.9895 11.4469 17.9895 9.00352C17.9895 6.56016 17.9789 6.2543 17.9367 5.29453C17.8945 4.33828 17.7398 3.68086 17.5184 3.11133C17.2969 2.51367 16.991 2.01094 16.4883 1.51172C15.9891 1.0125 15.4863 0.703125 14.8957 0.474609C14.3227 0.253125 13.6688 0.0984375 12.7125 0.05625C11.7492 0.0105469 11.4434 0 9 0Z" fill="#BFBFBF" />
                                    <path d="M9 4.37695C6.44766 4.37695 4.37695 6.44766 4.37695 9C4.37695 11.5523 6.44766 13.623 9 13.623C11.5523 13.623 13.623 11.5523 13.623 9C13.623 6.44766 11.5523 4.37695 9 4.37695ZM9 11.9988C7.34414 11.9988 6.00117 10.6559 6.00117 9C6.00117 7.34414 7.34414 6.00117 9 6.00117C10.6559 6.00117 11.9988 7.34414 11.9988 9C11.9988 10.6559 10.6559 11.9988 9 11.9988Z" fill="#BFBFBF" />
                                    <path d="M14.8852 4.19404C14.8852 4.7917 14.4 5.27334 13.8059 5.27334C13.2082 5.27334 12.7266 4.78819 12.7266 4.19404C12.7266 3.59639 13.2117 3.11475 13.8059 3.11475C14.4 3.11475 14.8852 3.5999 14.8852 4.19404Z" fill="#BFBFBF" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2136_262">
                                        <rect width="18" height="18" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </a>
                    </div>
                    <h6>All rights reserved to CurtLab</h6>
                </div>
            </div>
        </div >
    );
};