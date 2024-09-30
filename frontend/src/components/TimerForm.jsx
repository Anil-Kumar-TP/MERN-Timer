// TimerForm.js
import React, { useState } from 'react';

const TimerForm = ({ onAddTimer }) => {
    const [title, setTitle] = useState('');
    const [endTime, setEndTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Convert endTime to a Date object and call onAddTimer
        onAddTimer({ title, endTime: new Date(endTime) });
        // Reset the form fields
        setTitle('');
        setEndTime('');
    };

    return (
        <div className="fixed top-4 right-4 bg-white shadow-lg rounded-md p-4 w-64">
            <form onSubmit={handleSubmit} className="flex flex-col">
                <h2 className="text-lg font-semibold mb-2">Add Timer</h2>
                <input
                    type="text"
                    placeholder="Timer Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border border-gray-300 rounded mb-2 p-1"
                    required
                />
                <input
                    type="datetime-local"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="border border-gray-300 rounded mb-2 p-1"
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white rounded hover:bg-blue-600 p-2 transition-colors"
                >
                    Add Timer
                </button>
            </form>
        </div>
    );
};

export default TimerForm;
