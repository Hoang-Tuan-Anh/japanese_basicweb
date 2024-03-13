import React from 'react';
import { Link } from 'react-router-dom';

const LessonContainer = ({ lesson }) => {
  return (
    <section className="text-white banner-container-style bg-gradient-to-r from-cyan-500 to-cyan-300">
      <div className="relative z-10 p-4">
        {/* Header */}
        <div className="mb-4">
          <p className="font-bold opacity-80 uppercase tracking-wider text-shadow">
            Bài {lesson.lessonNumber}
          </p>
          <h4 className="text-2xl font-bold sm:text-3xl md:text-4xl text-shadow">{lesson.lessonTitle}</h4>
          <p className="font-bold tracking-wider opacity-80 text-shadow">{lesson.lessonPages}</p>
        </div>

        {/* Content */}
        <ul className="flex flex-col gap-2 sm:text-xl">
          {lesson.lessonUnits.map((unit) => (
            <li key={unit.unitUrl}>
              <Link
                to={`/quiz/lessons/${lesson.lessonUrl}/${unit.unitUrl}`}
                className="exercise-style"
              >
                {unit.unitTitle}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LessonContainer;
