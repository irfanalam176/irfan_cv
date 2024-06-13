import React, { useRef, useState } from 'react';
import HomeCard from './HomeCard'
import Image from 'next/image'
import Link from 'next/link'
import emailjs from '@emailjs/browser';
import AlertMessage from './AlertMessage';
const Contact = () => {
  
  const [spinner, setSpinner] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSpinner(true)
    if (form.current != null) {
      emailjs
        .sendForm(String(process.env.NEXT_PUBLIC_SID), String(process.env.NEXT_PUBLIC_TID), form.current, {
          publicKey: String(process.env.NEXT_PUBLIC_PK),
        })
        .then(
          () => {
            setSpinner(false)
            setSending(true)
            setSent(true)
            setTimeout(() => {
              setSending(false)
            }, 5000);
          },
          (error) => {
            console.log(error);
            
            setSpinner(false)
            setSending(true)
            setSent(false)
            setTimeout(() => {
              setSending(false)
            }, 5000);
          },
        );
    }
  };
  return (
    <div>
      <h1 className="mainHeading" >Contact <span></span></h1>
      <div className="grid md:grid-cols-2 gap-8">
        <HomeCard>
          <Link href="https://wa.me/+923102875176" target="_blank" className='block h-full'>
            <header>
              <Image src={"/assets/img/contactPhone.svg"} alt='' width={24} height={24} />
              Phone:
            </header>
            <p className='mt-4 mb-14'>
              +923102875176
            </p>
          </Link>
        </HomeCard>
        <HomeCard>
          <Link href='mailto:irfancs176@gmail.com' target="_blank" className='block h-full'>
            <header>
              <Image src={"/assets/img/contactEmail.svg"} alt='' width={24} height={24} />
              Email:
            </header>
            <p className='mt-4 mb-14'>
              irfancs176@gmail.com
            </p>
          </Link>
        </HomeCard>
      </div>

      {spinner && <div className="spinner"></div>}

      <form className='contactForm' ref={form} onSubmit={sendEmail}>
        {
          sending && <>
            {
              sent ? <AlertMessage className="sent" title="Success!" message="Your email has been sent successfully!!" />
                : <AlertMessage className="error" title="Oops" message="An error occurred while sending the email; please try again." />
            }
          </>
        }
        <p className='mb-5'>
          I am always open to discussing <b>new projects, opportunities in tech world,</b>
          <b>partnerships</b> and more so <b>mentorship</b>.
        </p>

        <div className="input">
          <label htmlFor="to_name">Name</label>
          <input type="text" id="to_name" name='to_name' />
        </div>
        <div className="input">
          <label htmlFor="from_name">Email</label>
          <input type="email" id="from_name" name='from_name' />
        </div>
        <div className="input">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" >

          </textarea>
        </div>
        <button className='mainBtn outlined' type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact