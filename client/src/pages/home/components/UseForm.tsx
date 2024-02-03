import React, { useState, FormEvent } from 'react';

interface FormProps {
   additionalData: any;
}

function useForm({ additionalData }: FormProps) {
   const [status, setStatus] = useState<string>('');
   const [message, setMessage] = useState<string>('');

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setStatus('loading');
      setMessage('');

      const finalFormEndpoint = (e.target as HTMLFormElement).action;
      const data = Array.from((e.target as HTMLFormElement).elements)
         .filter((input) => (input as HTMLInputElement).name)
         .reduce(
            (obj, input) =>
               Object.assign(obj, {
                  [(input as HTMLInputElement).name]: (
                     input as HTMLInputElement
                  ).value
               }),
            {}
         );

      if (additionalData) {
         Object.assign(data, additionalData);
      }

      fetch(finalFormEndpoint, {
         method: 'POST',
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
      })
         .then((response) => {
            if (response.status !== 200) {
               throw new Error(response.statusText);
            }

            return response.json();
         })
         .then(() => {
            setMessage("We'll be in touch soon.");
            setStatus('success');
         })
         .catch((err) => {
            setMessage(err.toString());
            setStatus('error');
         });
   };

   return { handleSubmit, status, message };
}

export default useForm;
