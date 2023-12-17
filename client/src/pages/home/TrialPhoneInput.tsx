import { useState } from 'react';

export const TrialPhoneInput = () => {
   const [phoneNumber, setPhoneNumber] = useState('');

   const handlePhoneNumberInput = (e: any) => {
      // Remove non-numeric characters from the input
      const cleanedInput = e.target.value.replace(/[^\d+]/g, '');
      setPhoneNumber(cleanedInput);
   };

   return (
      <input
         name="phone"
         type="tel"
         placeholder="+7 (999) 999-99-99"
         className="form-control input"
         onChange={handlePhoneNumberInput}
         value={phoneNumber}
      />
   );
};
