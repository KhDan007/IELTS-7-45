import { useQuery } from '@tanstack/react-query';
import loadedImage from '../img/IELTS-Writing-Task-1-Academic-Flood-Diagram.gif';
// import Axios from 'axios';
import { Timer } from '../components/Timer';
import { useState, useEffect } from 'react';

export const Writing_1 = () => {
   const [writingText, setWritingText] = useState('');
   const [questionText, setQuestionText] = useState('');

   const randomProperty = function (obj: any) {
      var keys = Object.keys(obj);
      return obj[keys[(keys.length * Math.random()) << 0]];
   };

   const { data, isLoading } = useQuery({
      queryKey: ['writing-part-1'],
      queryFn: () => {
         // Axios.get()
         const data = {
            q1: 'The line graph below shows the changes in the percentage of elderly people in three countries between 1940 and 2020. Summarize the information and make comparisons where appropriate. Write at least 150 words.',
            q2: 'The bar chart illustrates the amount of plastic waste generated by five countries in 2021. Summarize the data and make comparisons where necessary. Write at least 150 words.',
            q3: 'The table provides information about the average monthly income and expenses of a group of people in 2020. Summarize the data and make comparisons where relevant. Write at least 150 words.',
            q4: 'The pie chart depicts the distribution of energy sources in a particular country in 2019. Summarize the information and make comparisons where applicable. Write at least 150 words.',
            q5: "The map below shows the changes in a city's infrastructure from 2000 to 2020. Summarize the information and make comparisons where necessary. Write at least 150 words.",
            q6: 'The bar graph illustrates the number of cars sold in a particular region each month in 2021. Summarize the data and make comparisons where relevant. Write at least 150 words.',
            q7: 'The table provides information about the percentage of people using different modes of transportation in a city in 2018. Summarize the data and make comparisons where necessary. Write at least 150 words.',
            q8: 'The line graph below shows the fluctuation in temperatures in a city over a 12-month period. Summarize the information and make comparisons where relevant. Write at least 150 words.',
            q9: 'The bar chart illustrates the consumption of fast food in three different countries in 2020. Summarize the data and make comparisons where necessary. Write at least 150 words.',
            q10: 'The pie chart depicts the distribution of household expenses in a family in 2019. Summarize the information and make comparisons where applicable. Write at least 150 words.',
            q11: "The map below illustrates the changes in a city's layout from 2005 to 2025. Summarize the information and make comparisons where necessary. Write at least 150 words.",
            q12: 'The table provides information about the number of hours people spend on various activities in a week. Summarize the data and make comparisons where relevant. Write at least 150 words.',
            q13: 'The line graph below shows the changes in the number of tourists visiting a city from 2010 to 2020. Summarize the information and make comparisons where appropriate. Write at least 150 words.',
            q14: 'The bar chart illustrates the percentage of income spent on different categories by a group of people in 2021. Summarize the data and make comparisons where necessary. Write at least 150 words.',
            q15: 'The pie chart depicts the distribution of students in a university based on their majors in 2019. Summarize the information and make comparisons where applicable. Write at least 150 words.',
            q16: 'The map below shows the development of a city center over the past century. Summarize the information and make comparisons where necessary. Write at least 150 words.',
            q17: 'The table provides information about the types of books borrowed from a library in a month. Summarize the data and make comparisons where relevant. Write at least 150 words.',
            q18: 'The line graph below shows the changes in the production of a factory over a five-year period. Summarize the information and make comparisons where appropriate. Write at least 150 words.',
            q19: 'The bar chart illustrates the percentage of renewable energy sources in a country in 2020. Summarize the data and make comparisons where necessary. Write at least 150 words.',
            q20: 'The pie chart depicts the distribution of leisure activities among different age groups in 2019. Summarize the information and make comparisons where applicable. Write at least 150 words.',
            q21: "The map below shows the changes in a city's transportation system from 2000 to 2020. Summarize the information and make comparisons where necessary. Write at least 150 words.",
            q22: 'The table provides information about the average monthly expenses of a group of people in 2021. Summarize the data and make comparisons where relevant. Write at least 150 words.',
            q23: 'The line graph below shows the changes in the unemployment rate in a country from 2010 to 2020. Summarize the information and make comparisons where appropriate. Write at least 150 words.',
            q24: 'The bar chart illustrates the sales of electronic devices in five different countries in 2021. Summarize the data and make comparisons where necessary. Write at least 150 words.',
            q25: 'The pie chart depicts the distribution of income among different age groups in 2019. Summarize the information and make comparisons where applicable. Write at least 150 words.',
            q26: "The map below illustrates the changes in a city's population density from 2005 to 2025. Summarize the information and make comparisons where necessary. Write at least 150 words.",
            q27: 'The table provides information about the number of hours people spend on various sports in a week. Summarize the data and make comparisons where relevant. Write at least 150 words.',
            q28: 'The line graph below shows the changes in the number of visitors to a museum from 2010 to 2020. Summarize the information and make comparisons where appropriate. Write at least 150 words.',
            q29: 'The bar chart illustrates the percentage of household income spent on different categories in 2021. Summarize the data and make comparisons where necessary. Write at least 150 words.',
            q30: 'The pie chart depicts the distribution of students in a school based on their extracurricular activities in 2019. Summarize the information and make comparisons where applicable. Write at least 150 words.',
            q31: "The map below shows the changes in a city's industrial areas from 2000 to 2020. Summarize the information and make comparisons where necessary. Write at least 150 words.",
            q32: 'The table provides information about the types of movies watched by a group of people in a month. Summarize the data and make comparisons where relevant. Write at least 150 words.',
            q33: 'The line graph below shows the changes in the price of a commodity over a five-year period. Summarize the information and make comparisons where appropriate. Write at least 150 words.',
            q34: 'The bar chart illustrates the percentage of urban and rural population in five different countries in 2021. Summarize the data and make comparisons where necessary. Write at least 150 words.',
            q35: 'The pie chart depicts the distribution of time spent on different social media platforms in 2019. Summarize the information and make comparisons where applicable. Write at least 150 words.',
            q36: "The map below illustrates the changes in a city's education facilities from 2005 to 2025. Summarize the information and make comparisons where necessary. Write at least 150 words.",
            q37: 'The table provides information about the number of hours people spend on various cultural activities in a week. Summarize the data and make comparisons where relevant. Write at least 150 words.',
            q38: 'The line graph below shows the changes in the production of a crop over a five-year period. Summarize the information and make comparisons where appropriate. Write at least 150 words.',
            q39: 'The bar chart illustrates the percentage of budget allocated to different sectors by a government in 2021. Summarize the data and make comparisons where necessary. Write at least 150 words.',
            q40: 'The pie chart depicts the distribution of vacation preferences among different age groups in 2019. Summarize the information and make comparisons where applicable. Write at least 150 words.',
            q41: "The map below shows the changes in a city's residential areas from 2000 to 2020. Summarize the information and make comparisons where necessary. Write at least 150 words.",
            q42: 'The table provides information about the average monthly income and expenses of a group of people in 2022. Summarize the data and make comparisons where relevant. Write at least 150 words.',
            q43: 'The line graph below shows the changes in the percentage of students studying abroad in a country from 2010 to 2020. Summarize the information and make comparisons where appropriate. Write at least 150 words.',
            q44: 'The bar chart illustrates the number of smartphones sold by different companies in 2021. Summarize the data and make comparisons where necessary. Write at least 150 words.',
            q45: 'The pie chart depicts the distribution of expenses in a household in 2019. Summarize the information and make comparisons where applicable. Write at least 150 words.',
            q46: "The map below illustrates the changes in a city's recreational areas from 2005 to 2025. Summarize the information and make comparisons where necessary. Write at least 150 words.",
            q47: 'The table provides information about the number of hours people spend on various hobbies in a week. Summarize the data and make comparisons where relevant. Write at least 150 words.',
            q48: 'The line graph below shows the changes in the number of flights at an airport from 2010 to 2020. Summarize the information and make comparisons where appropriate. Write at least 150 words.',
            q49: 'The bar chart illustrates the percentage of population with access to the internet in five different countries in 2021. Summarize the data and make comparisons where necessary. Write at least 150 words.',
            q50: 'The pie chart depicts the distribution of career choices among different age groups in 2019. Summarize the information and make comparisons where applicable. Write at least 150 words.'
         };

         return data;
      }
   });

   useEffect(() => {
      setQuestionText(isLoading ? "Loading..." : randomProperty(data));
   }, [data, isLoading]);

   const refetchData = () => {
      window.location.reload();
   };

   const submitWriting = () => {
      // Send to server
      console.log(writingText);
   };

   return (
      <div className="writing">
         <Timer time={60 * 20} />
         <button onClick={refetchData} className="writing__resetBtn">
            Reset the question
         </button>

         <div className="writing__explanation">
            This is writing task 1. You'll have a random question from the real
            current list of questions, that can be asked during the IELTS exam.
            You'll have 20 minutes to answer. Here is your question:
         </div>
         <div className="writing__image">
            <img src={loadedImage} alt="" />
         </div>
         <div className="writing__question">{questionText}</div>

         <textarea
            className="writing__text"
            onChange={(e) => setWritingText(e.target.value)}
            placeholder="Write your response here..."
         ></textarea>
         <button className="writing__submitBtn" onClick={submitWriting}>
            Submit
         </button>
      </div>
   );
};
