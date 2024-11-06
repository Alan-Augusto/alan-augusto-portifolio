"use client";

import React from "react";
import { Timeline, TimelineConnector, TimelineContent, TimelineDescription, TimelineHeader, TimelineIcon, TimelineItem, TimelineLastConnector, TimelineTime, TimelineTitle } from "./ui/timeline";
import { experiences } from "@/data/experiences.data";
import { Label } from "@radix-ui/react-menubar";


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
							{index != items.length-1 && <TimelineConnector />}
							{index == items.length-1 && <TimelineLastConnector />}
							<TimelineHeader>
								<TimelineTime>{item.startdate}</TimelineTime>
								<TimelineIcon />
								<TimelineTitle>
									{item.position}
									<Label className="font-normmediumal text-xs text-muted-foreground">{item.title}</Label>
									</TimelineTitle>
							</TimelineHeader>
							<TimelineContent>
								<TimelineDescription>
									{item.description}
									</TimelineDescription>
							</TimelineContent>
						</TimelineItem>	
					))}
				</Timeline>
			</div>
		</section>
	);
};