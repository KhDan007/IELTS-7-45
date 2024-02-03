import { useRef } from 'react';
import useForm from './components/UseForm';

const FORM_ENDPOINT = 'http://localhost:8080/contacts'; // TODO - update to the correct endpoint

const Form = () => {
   const formElement = useRef(null);
   const additionalData = {
      sent: new Date().toISOString()
   };

   const { handleSubmit, status, message } = useForm({
      additionalData
   });

   if (status === 'success') {
      return (
         <>
            <div>Thank you!</div>
            <div>{message}</div>
         </>
      );
   }

   if (status === 'error') {
      return (
         <>
            <div>Something bad happened!</div>
            <div>{message}</div>
         </>
      );
   }

   return (
      <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST">
         <div className="pt-0 mb-3">
            <input type="text" placeholder="Your name" name="name" required />
         </div>
         <div className="pt-0 mb-3">
            <input type="email" placeholder="Email" name="email" required />
         </div>
         <div className="pt-0 mb-3">
            <textarea placeholder="Your message" name="message" required />
         </div>
         {status !== 'loading' && (
            <div className="pt-0 mb-3">
               <button type="submit">Send a message</button>
            </div>
         )}
      </form>
   );
};

export default Form;
