import React, { useState, useEffect } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';
import { getQuestions } from './helper';
import './style.css';
export default function App() {
  const [questionList, setQuestionList] = useState([]);
  useEffect(() => {
    setQuestionList(getQuestions());
  }, []);

  return (
    <div className="App">
      {questionList.map((data) => {
        return (
          <section className="accordion" key={data.id} id={data.id}>
            <h1 className="title">
              <a href={'#' + data.id}>
                {data.topicName}({data.questions.length})
              </a>
            </h1>
            <div className="content">
              <div className="wrapper">
                <ol className="olcards">
                  {data.questions.map((question, index) => {
                    return (
                      <li style={{ '--cardColor': '#f15f0e' }}>
                        <div className="content">
                          <div className="text">{question.Problem}</div>
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'flex-end',
                              alignItems: 'right',
                              gap: '10px',
                            }}
                          >
                            {question.URL2.length > 0 && (
                              <img
                                src={
                                  'https://i.ibb.co/RcQ5qLs/Coding-Ninjas-logo.jpg'
                                }
                                width="30px"
                                height="25px"
                                alt="icon"
                                style={{ float: 'right', cursor: 'pointer' }}
                                onClick={() => {
                                  window.open(`${question.URL2}`, '_blank');
                                }}
                              />
                            )}

                            <img
                              src={
                                question.URL.includes('geeksforgeeks')
                                  ? 'https://img.icons8.com/color/24/000000/GeeksforGeeks.png'
                                  : 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/000000/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png'
                              }
                              width="30px"
                              height="25px"
                              alt="icon"
                              style={{ float: 'right', cursor: 'pointer' }}
                              onClick={() => {
                                window.open(question.URL, '_blank');
                              }}
                            />
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
