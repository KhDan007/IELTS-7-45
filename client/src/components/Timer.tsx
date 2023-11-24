import { useState, useEffect } from 'react';

interface Props {
   time: number;
}

interface State {
   time: number;
   seconds: number;
   minutes: number;
}

export const Timer = (props: any) => {
   const [done, setDone] = useState(false);

   const [state, setState] = useState<State>({
      time: props.time,
      seconds: props.time - ~~(props.time / 60) * 60,
      minutes: ~~(props.time / 60)
   });

   useEffect(() => {
      setTimeout(() => {
         if (state.time <= 0) {
            setDone(true);
         }

         setState({
            time: state.time - 1,
            minutes: ~~((state.time - 1) / 60),
            seconds: state.time - ~~((state.time - 1) / 60) * 60 - 1
         });
      }, 1000);
   }, [state.time]);

   return (
      <div className="timer">
         {!done && (
            <div className='timer__undone'>
               {state.minutes < 10 ? '0' + state.minutes : state.minutes}:
               {state.seconds < 10 ? '0' + state.seconds : state.seconds}
            </div>
         )}

         {done && (
            <div className='timer__done'>
               <p>Your time exceeded. Please finish answering the question as soon as possible.</p>
               {state.seconds}
            </div>
         )}
      </div>
   );
};
