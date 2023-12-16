'use client';

import { MotionFadeIn } from '@/components/motion-component';
import React from 'react';
import {
  Timeline,
  TimelineBox,
  TimelineCard,
  TimelineCircle,
  TimelineCompany,
  TimelineContent,
  TimelineDate,
  TimelineHeading,
  TimelineImage,
  TimelineMetadata,
  TimelineTag,
  TimelineTitle,
} from '@/components/ui/timeline';
import { Aisia, Hcmus } from '@/public/company';

export const Experience = () => {
  return (
    <>
      <div className="z-30 bg-background">
        <MotionFadeIn delay={0.2} direction="up" duration={0.75} offset={20} type="spring">
          <p className="xs:text-lg md:text-xl uppercase font-bold mb-2">
            <span className="text-text-secondary text-xl mr-2">/</span> What I have done so far
          </p>
          <h1 className="font-bold text-4xl xs:text-[40px] xs:leading-[52px] md:text-[52px] md:leading-[64px] font-jakarta">
            Work Experience.
          </h1>
        </MotionFadeIn>
      </div>
      <div className="md:pt-18 lg:pt-28"></div>
      <Timeline>
        <TimelineCard idx={0}>
          <TimelineMetadata>
            <TimelineDate from="2021" to="Present" />
            <TimelineTitle>Bachelor Degree in Data Science</TimelineTitle>
            <TimelineCompany>University of Science</TimelineCompany>
          </TimelineMetadata>
          <TimelineCircle />
          <TimelineContent>
            <TimelineBox>
              <TimelineTag>education</TimelineTag>
              <TimelineImage image={Hcmus} alt="Hcmus" />
              <TimelineHeading className="mt-2">Data Science</TimelineHeading>
              <p className="text-xs font-light mt-[2px]">Current GPA: 3.24/4</p>
              <p className="mt-4">
                I am currently pursuing a Bachelor Degree in Data Science at University of Science, Ho Chi Minh City. I
                am expected to graduate in 2025.
              </p>
            </TimelineBox>
            <TimelineBox>
              <TimelineHeading>Activites</TimelineHeading>
              <ul className="mt-4 space-y-2 pl-4 list-outside list-disc">
                <li>Core Member (Web Specialist) at HCMUS - Google Developer Student Club (current). </li>
                <li>Former member of the VNU HCMUS Math and Computer Science Academic Club (2021 - 2022).</li>
              </ul>
            </TimelineBox>
          </TimelineContent>
        </TimelineCard>
        <TimelineCard idx={1}>
          <TimelineMetadata>
            <TimelineDate from="Jan 2023" to="Mar 2023" />
            <TimelineTitle>Freelance Frontend Developer</TimelineTitle>
            <TimelineCompany>Aisia Research Lab</TimelineCompany>
          </TimelineMetadata>
          <TimelineCircle />
          <TimelineContent>
            <TimelineBox>
              <TimelineTag>freelancer</TimelineTag>
              <TimelineImage image={Aisia} alt="Aisia" />
              <TimelineHeading className="mt-2">Freelance Frontend Developer</TimelineHeading>
              <p className="mt-4">
                I was hired as a Frontend Developer to build the frontend of a web application for Aisia Research Lab
                using Ruby on Rails template engine.
              </p>
            </TimelineBox>
          </TimelineContent>
        </TimelineCard>
      </Timeline>
      <div className="h-screen"></div>
    </>
  );
};
