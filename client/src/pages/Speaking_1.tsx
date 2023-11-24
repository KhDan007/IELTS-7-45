import { useQuery } from '@tanstack/react-query';
// import Axios from 'axios';
import { Timer } from '../components/Timer';

export const Speaking_1 = () => {
   const { data, isLoading } = useQuery({
      queryKey: ['speaking-part-1'],
      queryFn: () => {
         // Axios.get()
         const data = {
            q1: 'Can you tell me your full name?',
            q2: 'Where are you from?',
            q3: 'Do you work or are you a student?',
            q4: 'What is your job or what do you study?',
            q5: 'Do you enjoy your job or your studies? Why or why not?',
            q6: 'What kind of activities do you enjoy doing in your free time?',
            q7: 'Are you a morning person or a night owl?',
            q8: 'What is your favorite season? Why?',
            q9: 'Do you prefer to spend time indoors or outdoors?',
            q10: 'How often do you use the internet?',
            q11: 'What kind of music do you like?',
            q12: 'Do you enjoy reading? What kind of books do you like?',
            q13: 'Do you like to travel? Where would you like to go next?',
            q14: 'What is your favorite type of food?',
            q15: 'Do you enjoy cooking? Why or why not?',
            q16: 'How often do you exercise? What kind of exercise do you do?',
            q17: 'What is your favorite way to relax?',
            q18: 'Do you like to watch movies or TV shows? What kind do you enjoy?',
            q19: 'What is your favorite subject in school or college?',
            q20: 'Do you like to take photographs? What kind of photos do you enjoy taking?',
            q21: 'How do you usually celebrate your birthday?',
            q22: 'Do you prefer to live in a city or in the countryside?',
            q23: 'What is your favorite color?',
            q24: 'Do you enjoy spending time with friends? What do you like to do together?',
            q25: 'How often do you use social media?',
            q26: 'Do you like to try new things or do you prefer routine?',
            q27: 'What is your favorite holiday or festival? How do you celebrate it?',
            q28: 'Do you enjoy shopping? Where do you like to shop?',
            q29: 'What is your favorite type of weather?',
            q30: 'Do you like to listen to the radio? What kind of programs do you enjoy?',
            q31: 'What is your favorite sport? Do you play it or just watch?',
            q32: 'Do you like animals? Do you have any pets?',
            q33: 'What is your favorite form of transportation?',
            q34: 'Do you enjoy art? What kind of art do you like?',
            q35: 'What is your favorite type of restaurant or cuisine?',
            q36: 'Do you enjoy studying languages? Which ones?',
            q37: 'What kind of job did you dream of having when you were a child?',
            q38: 'Do you enjoy gardening or taking care of plants?',
            q39: 'What is your favorite room in your house or apartment?',
            q40: 'Do you enjoy attending live performances (concerts, theater, etc.)?',
            q41: 'What is your favorite piece of clothing?',
            q42: 'Do you like to cook traditional dishes from your country?',
            q43: 'What is your favorite type of technology or gadget?',
            q44: 'Do you like to attend festivals or events in your community?',
            q45: 'What is your favorite mode of communication (phone calls, texting, email, etc.)?',
            q46: 'Do you enjoy doing DIY (do it yourself) projects?',
            q47: 'What is your favorite childhood memory?',
            q48: 'Do you enjoy outdoor activities like hiking or camping?',
            q49: 'What is your favorite form of entertainment (movies, TV, books, etc.)?',
            q50: 'Do you like to cook traditional dishes from your country?',
        };

         return data;
      }
   });

   const randomProperty = function (obj: any) {
      var keys = Object.keys(obj);
      return obj[keys[(keys.length * Math.random()) << 0]];
   };

   const refetchData = () => {
      window.location.reload();
   }

   return (
      <div className="speaking">
         <Timer time={15} />
         <button onClick={refetchData} className='speaking__resetBtn'>Reset the question</button>

         <div className="speaking__explanation">
            This is speaking part 1. You'll have a random question from the real
            current list of questions, that can be asked during the IELTS exam.
            You'll have 15 seconds to answer. Here is your question:
         </div>
         <div className="speaking__question">
            {data && randomProperty(data)}
         </div>
      </div>
   );
};
