import { useState, useEffect } from 'react';

interface State {
   time: number;
   seconds: number;
   minutes: number;
   sign: string;
}

export const Timer2 = (props: any) => {
   const [done, setDone] = useState(false);

   const [state, setState] = useState<State>({
      time: props.time,
      seconds: Math.abs(props.time) % 60,
      minutes: Math.floor(Math.abs(props.time) / 60),
      sign: props.time <= 0 ? '-' : ''
   });

   useEffect(() => {
      setTimeout(() => {
         if (state.time <= 0) {
            setDone(true);
         }

         setState({
            time: state.time - 1,
            seconds: Math.abs(state.time - 1) % 60,
            minutes: Math.floor(Math.abs(state.time - 1) / 60),
            sign: state.time <= 0 ? '-' : ''
         });
      }, 1000);
   }, [state.time]);

   return (
      <div className="timer">
         {!done && (
            <div className="timer__undone">
               {state.sign}
               {state.minutes < 10 ? '0' + state.minutes : state.minutes}:
               {state.seconds < 10 ? '0' + state.seconds : state.seconds}
            </div>
         )}

         {done && (
            <div className="timer__done">
               <p>
                  Your time exceeded. Please finish answering the question as
                  soon as possible.
               </p>
               {state.sign}
               {state.minutes < 10 ? '0' + state.minutes : state.minutes}:
               {state.seconds < 10 ? '0' + state.seconds : state.seconds}
            </div>
         )}

         <div className="timer__state">
            {state.time > 120 ? (
               <span style={{ color: '#1d439a' }}>PREPARE</span>
            ) : (
               <span style={{ color: '#ec1c24' }}>SPEAK!</span>
            )}
         </div>
      </div>
   );
};
