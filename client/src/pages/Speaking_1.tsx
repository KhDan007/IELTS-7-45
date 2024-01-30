import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';
import { Timer } from '../components/Timer';

export const Speaking_1 = () => {
   const { data, isLoading, refetch } = useQuery({
      queryKey: ['speaking-part-1'],
      queryFn: () => {
         return Axios.get('http://localhost:8080/speaking/part-1').then(
            (res) => res.data
         );
      }
   });

   const randomProperty = function (obj: any) {
      var keys = Object.keys(obj);
      return obj[keys[(keys.length * Math.random()) << 0]];
   };

   const refetchData = () => {
      refetch();
   };

   return (
      <div className="speaking">
         <Timer time={15} />
         <button onClick={refetchData} className="speaking__resetBtn">
            Reset the question
         </button>

         <h4 className="speaking__explanation">
            This is speaking part 1. You'll have a random question from the real
            current list of questions, that can be asked during the IELTS exam.
            You'll have 15 seconds to answer. Here is your question:
         </h4>
         <h2 className="speaking__question">{data?.question}</h2>
      </div>
   );
};
