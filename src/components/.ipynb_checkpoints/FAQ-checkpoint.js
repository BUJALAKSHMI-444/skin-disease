// src/components/FAQ.js
import React from "react";
import "./FAQ.css";

function FAQ() {
  return (
    <section className="faq" id="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="question">
        <h4>Is this a real diagnosis?</h4>
        <p>No. This is only a prediction based on AI. Always consult your doctor for medical advice.</p>
      </div>
      <div className="question">
        <h4>Do I need to login?</h4>
        <p>No, login is not required to use DermaDetect. You can upload your image and receive results without creating an account. However, registering allows you to access additional features such as viewing your history, saving results, and receiving future updates.</p>
      </div>
      <div className="question">
        <h4>Can I use this on any skin photo?</h4>
        <p>Ensure the photo is clear, zoomed in, and has good lighting. Only skin area should be visible.</p>
      </div>
    </section>
  );
}

export default FAQ;
