import React, { useState } from 'react';
import TimerForm from './components/TimerForm';
import Timer from './components/Timer';

const App = () => {
  const [timers, setTimers] = useState([]);

  const handleAddTimer = (timer) => {
    setTimers([...timers, timer]);
  };

  const handleExpireTimer = (index) => {
    // Remove the timer at the specified index
    setTimers(timers.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1 className="text-2xl font-bold text-center my-4">Countdown Timers</h1>
      <TimerForm onAddTimer={handleAddTimer} />

      <div className="flex flex-wrap justify-center">
        {timers.map((timer, index) => (
          <Timer
            key={index}
            title={timer.title}
            endTime={timer.endTime}
            onExpire={() => handleExpireTimer(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
