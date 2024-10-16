"use client";

import React from "react";
import { Timeline, TimelineConnector, TimelineContent, TimelineDescription, TimelineHeader, TimelineIcon, TimelineItem, TimelineLayoutProps, TimelineTime, TimelineTitle } from "./ui/timeline";
import { experiences } from "@/data/experiences.data";


export const Experiences = () => {

	const items = experiences;

	return (
		<section id="about-me" className="p-4">
			<div className="flex flex-col items-center justify-center space-y-4">
				<div className="space-y-1 w-full items-left">
					<h2 className="text-2xl font-bold md:-translate-x-[4rem] translate-x-0">Conheça um pouco da minha trajetória</h2>
					{/* <h3 className="text-xl font-normal"></h3> */}
				</div>

				<Timeline>
					{items.map((item, index) => (
						<TimelineItem key={index}>
							<TimelineConnector />
							<TimelineHeader>
								<TimelineTime>{item.startdate}</TimelineTime>
								<TimelineIcon />
								<TimelineTitle>{item.title}</TimelineTitle>
							</TimelineHeader>
							<TimelineContent>
								<TimelineDescription>{item.description}</TimelineDescription>
							</TimelineContent>
						</TimelineItem>	
					))}
				</Timeline>
			</div>
		</section>
	);
};