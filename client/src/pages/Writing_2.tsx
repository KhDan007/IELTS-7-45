import { useQuery } from '@tanstack/react-query';
// import Axios from 'axios';
import { Timer } from '../components/Timer';
import { useState } from 'react';

export const Writing_2 = () => {
   const [writingText, setWritingText] = useState('');

   const { data, isLoading } = useQuery({
      queryKey: ['writing-part-2'],
      queryFn: () => {
         // Axios.get()
         const data = {
            q1: 'Some people believe that technology has made our lives too complex. To what extent do you agree or disagree?',
            q2: 'In some countries, young people are not only richer but also more independent than in the past. What do you think are the reasons for this, and do you think this is a positive or negative development?',
            q3: 'It is argued that the best way to reduce crime is to give longer prison sentences. Others, however, believe there are better alternative ways of reducing crime. Discuss both views and give your opinion.',
            q4: 'In many countries, the gap between the rich and the poor is widening. What problems does this create, and how could the situation be improved?',
            q5: 'Some people think that the only way to have success in business is to have a unique product. What factors, in your opinion, influence the success of a company?',
            q6: 'In some countries, the use of mobile phones in public places is as annoying as smoking. Do you agree or disagree?',
            q7: 'In many countries, the age at which people are starting to have children is increasing. What are the reasons for this, and what are the effects on society and family life?',
            q8: 'Some people believe that it is better for the environment to live in the countryside, while others believe that it is better to live in the city. Discuss both views and give your opinion.',
            q9: 'In some countries, the government subsidizes the arts (e.g., museums and galleries). Do you think it is a good idea for the government to do so, or should the funding come from other sources?',
            q10: 'In some countries, the elderly are traditionally cared for by their families, whereas in others they are taken care of by the government. Discuss both views and give your opinion.',
            q11: 'It is becoming increasingly popular to have a year off between finishing school and going to university. What are the advantages and disadvantages of this trend?',
            q12: 'In some countries, the government is reducing the retirement age, while in others it is increasing. Discuss the advantages and disadvantages of both approaches and give your opinion.',
            q13: 'Some people argue that air travel should be restricted because it causes environmental problems. Do you agree or disagree?',
            q14: 'In some countries, the government is providing free education for university students, while in others, students must pay for their education. Do you think the government should subsidize education?',
            q15: 'It is often said that the best way to learn about a country is to go to that country. Do you agree or disagree? What other ways are there to learn about a country?',
            q16: 'Some people think that the government should control the design of buildings in big cities. Others believe that it should be left to the architects and builders. Discuss both views and give your opinion.',
            q17: 'In some countries, the government is responsible for providing healthcare, while in others, it is the responsibility of the individual. Discuss both views and give your opinion.',
            q18: 'Some people think that robots are essential for society, while others believe they are dangerous and have negative effects on society. Discuss both views and give your opinion.',
            q19: 'In many countries, the government is spending a large amount of money on improving internet access. Do you think this is a positive or negative development?',
            q20: 'Some people believe that schools should teach children skills that will be valuable in the workplace, while others think that the curriculum should focus on broader academic subjects. Discuss both views and give your opinion.',
            q21: 'In some countries, there is a growing trend of people not wanting to have children. What are the reasons for this trend, and what effects could it have on society?',
            q22: 'Some people think that the government should ban dangerous sports, while others believe that people should have the freedom to do any sport or activity. Discuss both views and give your opinion.',
            q23: 'In many countries, the gap between the rich and the poor is widening. What problems does this create, and how could the situation be improved?',
            q24: 'Some people believe that individuals have the right to carry guns for their own protection. Others think that the government should restrict the use of guns. Discuss both views and give your opinion.',
            q25: 'It is argued that the best way to reduce traffic congestion is to build more roads. Others, however, believe that this is not the solution. Discuss both views and give your opinion.',
            q26: 'Some people think that the government should invest more in public transportation to solve traffic problems. Others believe that building more roads is the solution. Discuss both views and give your opinion.',
            q27: 'In some countries, the government is reducing the retirement age, while in others it is increasing. Discuss the advantages and disadvantages of both approaches and give your opinion.',
            q28: 'Some people believe that technology is increasing the gap between the rich and the poor. Others think it has the opposite effect. Discuss both views and give your opinion.',
            q29: 'In many countries, there is a trend towards the use of alternative forms of medicine. What are the reasons for this trend, and do you think it is a positive or negative development?',
            q30: 'Some people think that the government should regulate the amount of violence in films and on television. Others believe it is the responsibility of parents. Discuss both views and give your opinion.',
            q31: 'In some countries, the government is encouraging people to use bicycles instead of cars. Do you think this is a positive or negative development?',
            q32: 'Some people believe that the government should control the content of the media (including the internet). Others argue that this is a violation of freedom of speech. Discuss both views and give your opinion.',
            q33: 'In many countries, the government is investing in renewable energy sources, such as wind and solar power. Do you think this is a positive or negative development?',
            q34: 'Some people think that the government should provide financial assistance to artists (e.g., musicians and painters). Others believe that artists should be responsible for their own funding. Discuss both views and give your opinion.',
            q35: 'In some countries, the government is providing free healthcare for all citizens. Do you think this is a positive or negative development?',
            q36: 'Some people believe that zoos are inhumane and should be closed down. Others argue that zoos play an essential role in conservation and education. Discuss both views and give your opinion.',
            q37: 'In many countries, there is a trend towards people using online social media to communicate. What are the reasons for this trend, and do you think it is a positive or negative development?',
            q38: 'Some people think that the government should invest more in public transportation to reduce traffic congestion. Others believe that building more roads is the solution. Discuss both views and give your opinion.',
            q39: 'In some countries, the government is providing financial incentives for businesses to move to rural areas. What are the reasons for this trend, and do you think it is a positive or negative development?',
            q40: 'Some people believe that the government should regulate the use of plastic to protect the environment. Others argue that individuals should take responsibility for reducing their plastic waste. Discuss both views and give your opinion.',
            q41: 'In many countries, there is a growing trend of people working from home rather than going to the office. What are the reasons for this trend, and do you think it is a positive or negative development?',
            q42: 'Some people think that the government should provide financial assistance to farmers to ensure food security. Others argue that farmers should be responsible for their own funding. Discuss both views and give your opinion.',
            q43: 'In some countries, the government is encouraging the use of electric vehicles by providing subsidies. Do you think this is a positive or negative development?',
            q44: 'Some people believe that the government should restrict the use of genetically modified (GM) crops. Others argue that GM crops are essential for ensuring food security. Discuss both views and give your opinion.',
            q45: 'In many countries, the government is investing in the development of smart cities. What are the reasons for this trend, and do you think it is a positive or negative development?',
            q46: 'Some people think that the government should ban advertisements for unhealthy foods. Others argue that individuals should be responsible for their own food choices. Discuss both views and give your opinion.',
            q47: 'In some countries, the government is providing financial incentives for companies to reduce their carbon footprint. Do you think this is a positive or negative development?',
            q48: 'Some people believe that the government should control the content of the internet. Others argue that this is a violation of freedom of speech. Discuss both views and give your opinion.',
            q49: 'In many countries, the government is implementing policies to promote gender equality in the workplace. What are the reasons for this trend, and do you think it is a positive or negative development?',
            q50: 'Some people think that the government should regulate the use of artificial intelligence (AI) to protect privacy. Others argue that individuals should be responsible for protecting their own privacy. Discuss both views and give your opinion.'
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
   };

   const submitWriting = () => {
      console.log(writingText);
   };

   return (
      <div className="writing">
         <Timer time={60 * 40} />
         <button onClick={refetchData} className="writing__resetBtn">
            Reset the question
         </button>

         <div className="writing__explanation">
            This is writing task 2. You'll have a random question from the real
            current list of questions, that can be asked during the IELTS exam.
            You'll have 40 minutes to answer. Here is your question:
         </div>
         <div className="writing__question">{data && randomProperty(data)}</div>

         <textarea
            className="writing__text"
            onChange={(e) => setWritingText(e.target.value)}
            placeholder="Write your essay here..."
         ></textarea>
         <button className="writing__submitBtn" onClick={submitWriting}>
            Submit
         </button>
      </div>
   );
};
