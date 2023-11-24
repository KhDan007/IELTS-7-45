import { useQuery } from '@tanstack/react-query';
// import Axios from 'axios';
import { Timer } from '../components/Timer';

export const Speaking_1 = () => {
   const { data, isLoading } = useQuery({
      queryKey: ['speaking-part-1'],
      queryFn: () => {
         // Axios.get()
         const data = {
            question: 'What subjects are you studying?'
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
            This is speaking part 1. You'll have a random question from a real
            current list of questions, that can be asked during the IELTS exam.
            You'll have 15 seconds to answer. Here is your question:
         </div>
         <div className="speaking__question">
            {data?.question}
         </div>

         <Timer time={15} />
      </div>
   );
};
