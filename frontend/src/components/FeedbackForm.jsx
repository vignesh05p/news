import { useState } from 'react';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch('http://localhost:3001/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, message }),
    });

    setSubmitted(true);
    setName('');
    setMessage('');
  };

  if (submitted) return <p>✅ Thank you for your feedback!</p>;

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
      <h3>💬 Feedback</h3>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <br />
      <textarea
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
