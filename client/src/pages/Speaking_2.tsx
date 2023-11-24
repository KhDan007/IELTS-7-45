import { useQuery } from '@tanstack/react-query';
// import Axios from 'axios';
import { Timer2 } from '../components/Timer2';

export const Speaking_2 = () => {
   const { data, isLoading } = useQuery({
      queryKey: ['speaking-part-1'],
      queryFn: () => {
         // Axios.get()
         const data = {
            question: 'Describe a new shop that has recently opened in your city/town.'
         };

         return data;
      }
   });

   const refetchData = () => {
      window.location.reload();
   }

   return (
      <div className="speaking">
         <button onClick={refetchData} className='speaking__resetBtn'>Reset the question</button>

         <div className="speaking__explanation">
            This is speaking part 2. You'll have a random question from a real
            current list of questions, that can be asked during the IELTS exam.
            You'll have 1 minute to prepare and then you'll have two minutes to speak. Here is your question:
         </div>
         <div className="speaking__question">
            {data?.question}
         </div>

         <Timer2 time={5} />
      </div>
   );
};
