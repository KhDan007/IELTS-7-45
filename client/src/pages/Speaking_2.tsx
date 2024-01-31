import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';
import { Timer2 } from '../components/Timer2';

export const Speaking_2 = () => {
   const { data, isLoading, refetch } = useQuery({
      queryKey: ['speaking-part-2'],
      queryFn: () => {
        return Axios.get('http://localhost:8080/speaking/part-2').then((res) => res.data);
        //  const data = {
        //     q1: 'Describe a memorable holiday you have had. Please say where you went, who you went with, what you did, and why it was memorable.',
        //     q2: 'Talk about a person you admire. Please say who the person is, how you know them, what qualities they have, and why you admire them.',
        //     q3: 'Describe a book you have recently read that you found interesting. Please say what the book is about, who the main characters are, what you liked about it, and why you found it interesting.',
        //     q4: 'Discuss a hobby or activity you enjoy. Please say what the hobby or activity is, how you started doing it, how often you do it, and why you enjoy it.',
        //     q5: 'Describe an important event in your life. Please say what the event was, when it happened, who was involved, and why it was important to you.',
        //     q6: 'Discuss a place you would like to visit in the future. Please say where the place is, why you want to visit it, what you would like to do there, and who you would like to go with.',
        //     q7: 'Describe a meal you had that you really enjoyed. Please say where you had the meal, what you ate, who you were with, and why you enjoyed it.',
        //     q8: 'Discuss a film or TV show that you recently watched. Please say what the film or TV show is about, who the main characters are, what you liked about it, and why you recommend it.',
        //     q9: 'Describe a piece of technology you find useful. Please say what the technology is, how you use it, how often you use it, and why you find it useful.',
        //     q10: 'Discuss a childhood friend you had. Please say how you met, how long you have known each other, what you used to do together, and whether you are still in touch.',
        //     q11: 'Describe a special gift you received. Please say what the gift was, who gave it to you, when you received it, and why it was special.',
        //     q12: 'Discuss a famous person you would like to meet. Please say who the person is, why you would like to meet them, what you would talk about, and what you hope to learn.',
        //     q13: 'Describe a festival or celebration you enjoy. Please say what the festival is, how it is celebrated, who you celebrate it with, and why you enjoy it.',
        //     q14: 'Discuss a memorable concert or live performance you attended. Please say when and where it took place, who performed, what the atmosphere was like, and why it was memorable.',
        //     q15: 'Describe a place you have lived or stayed in that you liked. Please say where the place is, how long you lived or stayed there, what you liked about it, and why it left a positive impression.',
        //     q16: 'Discuss a decision you made that had a positive impact on your life. Please say what the decision was, when you made it, how it affected you, and why it was positive.',
        //     q17: 'Describe a skill you would like to learn. Please say what the skill is, why you want to learn it, how you would go about learning it, and what benefits it would bring.',
        //     q18: 'Discuss a change in your life that you found challenging. Please say what the change was, how it affected you, how you coped with it, and what you learned from the experience.',
        //     q19: 'Describe a piece of art you like. Please say what the art is, where you saw it, why you like it, and what emotions or thoughts it evokes in you.',
        //     q20: 'Discuss a memorable conversation you had. Please say who you were talking to, what the conversation was about, where it took place, and why it was memorable.',
        //     q21: 'Describe a project or work you were involved in. Please say what the project was, what your role was, who you worked with, and what the outcome was.',
        //     q22: 'Discuss a skill or talent you have. Please say what the skill or talent is, how you developed it, when you use it, and why it is important to you.',
        //     q23: 'Describe a place you visited that was crowded. Please say where the place was, when you visited, why it was crowded, and how you felt about the experience.',
        //     q24: 'Discuss a meal you had at a restaurant. Please say where the restaurant is, what you ate, who you were with, and what you liked about the meal.',
        //     q25: 'Describe a competition or event you would like to participate in. Please say what the competition or event is, why you would like to participate, how you would prepare, and what you hope to achieve.',
        //     q26: 'Discuss a historical event you find interesting. Please say what the event is, when it happened, why it is important, and how it has influenced the world.',
        //     q27: 'Describe a natural beauty spot you have visited. Please say where the spot is, when you visited, what you saw, and how the experience affected you.',
        //     q28: 'Discuss a memorable journey you took. Please say where you went, how you traveled, who you were with, and what made the journey memorable.',
        //     q29: 'Describe a tradition in your country. Please say what the tradition is, when it is celebrated, how people celebrate it, and what it means to you.',
        //     q30: 'Discuss a piece of furniture you have in your home. Please say what the furniture is, where it is located, how you use it, and why it is important to you.',
        //     q31: 'Describe a party or celebration you recently attended. Please say where it was, who organized it, who attended, and what activities or events took place.',
        //     q32: 'Discuss a course or class you enjoyed taking. Please say what the course was, when you took it, how it benefited you, and why you enjoyed it.',
        //     q33: 'Describe a museum or exhibition you visited. Please say where it is located, what you saw, who you went with, and what you learned from the visit.',
        //     q34: 'Discuss a language you would like to learn. Please say what the language is, why you want to learn it, how you would go about learning it, and what benefits it would bring.',
        //     q35: 'Describe a gift you gave to someone. Please say what the gift was, who you gave it to, when you gave it, and why you chose that particular gift.',
        //     q36: 'Discuss a piece of advice you received that was helpful. Please say who gave you the advice, what the advice was, when you received it, and how it helped you.',
        //     q37: 'Describe a time when you faced a challenge at work or in your studies. Please say what the challenge was, how you dealt with it, what you learned, and how it affected you.',
        //     q38: 'Discuss a place in your hometown that you like. Please say where the place is, what you like about it, how often you visit, and why it is special to you.',
        //     q39: 'Describe a popular tourist destination in your country. Please say where it is located, what attractions it has, why it is popular, and how it has changed over time.',
        //     q40: 'Discuss a memorable sporting event you watched or attended. Please say when and where it took place, who was playing, what the outcome was, and why it was memorable.',
        //     q41: 'Describe a social or environmental issue you are concerned about. Please say what the issue is, why it is important, how it affects people, and what can be done to address it.',
        //     q42: 'Discuss a meal from your country that you would recommend to others. Please say what the meal is, how it is prepared, what ingredients are used, and why it is special.',
        //     q43: 'Describe a museum or exhibition you visited that focused on science or technology. Please say where it is located, what exhibits it had, who you went with, and what you learned.',
        //     q44: 'Discuss a musical performance you enjoyed. Please say when and where it took place, who performed, what type of music it was, and why you enjoyed it.',
        //     q45: 'Describe a piece of equipment or machinery you find interesting. Please say what the equipment is, how it is used, where you saw it, and why you find it interesting.',
        //     q46: 'Discuss a decision you made that you would like to change. Please say what the decision was, when you made it, why you would like to change it, and what you have learned from the experience.',
        //     q47: 'Describe a celebration or festival in another country that you find interesting. Please say what the celebration or festival is, when it takes place, how it is celebrated, and why you find it interesting.',
        //     q48: 'Discuss a tradition in your family. Please say what the tradition is, how it started, who participates, and why it is important to your family.',
        //     q49: 'Describe a situation where you had to use your communication skills. Please say what the situation was, who you were communicating with, how you handled it, and what you learned.',
        //     q50: 'Discuss a recent trend or change in your country. Please say what the trend or change is, how it has affected people, what opinions are on it, and how you feel about it.',
        // };
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
         <Timer2 time={60 * 3} />

         <button onClick={refetchData} className='speaking__resetBtn'>Reset the question</button>

         <h4 className='speaking__explanation'>
         This is speaking part 2. You'll have a random question from the real
            current list of questions, that can be asked during the IELTS exam.
            You'll have 1 minute to prepare and then you'll have two minutes to speak. Here is your question:
         </h4>
         <h2 className="speaking__question">
            {data?.question}
         </h2>
      </div>
   );
};
