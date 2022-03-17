import React from 'react';

import Link from 'next/link';

type ICourseSelectorProps = {
  courses: [string, string][];
  selected: string;
};

export default function CourseSelector({ courses }: ICourseSelectorProps) {
  return (
    <div className="_course-selector-wrapper pt-9 relative w-fit">
      <div className="_course-selector bg-day-200 dark:bg-night-200 h-full w-60 border-y border-l border-day-300 dark:border-night-300">
        <div className="_course-selector-header px-3 py-3">
          <p className="float-left text-day-700 dark:text-night-700 ml-2 mt-1">
            Your Courses
          </p>
          <Link href="/dashboard">
            <a>
              <div className="h-8 w-8 bg-red-400 rounded-md float-right"></div>
            </a>
          </Link>
        </div>
        <div className="_course-selector-courses pt-10">
          {courses.map((course, idx) => {
            return (
              <div
                className="_course-selector-course-item py-2 pl-5 bg-day-200 dark:bg-night-200 hover:bg-theme-100 dark:hover:bg-theme-200 hover:text-theme-200 dark:hover:text-theme-100"
                key={idx}
              >
                {course[0]}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}