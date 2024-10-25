import * as React from "react";
import { cn } from "@/lib/utils";

export const timelineData = [
	{
		id: 1,
		title: "First event",
		date: "2022-01-01",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio euismod lacinia at quis risus sed vulputate odio ut. Quam viverra orci sagittis eu volutpat odio facilisis mauris.",
	},
	{
		id: 2,
		title: "Second event",
		date: "2022-02-01",
		description:
			"Aut eius excepturi ex recusandae eius est minima molestiae. Nam dolores iusto ad fugit reprehenderit hic dolorem quisquam et quia omnis non suscipit nihil sit libero distinctio. Ad dolorem tempora sit nostrum voluptatem qui tempora unde? Sit rerum magnam nam ipsam nesciunt aut rerum necessitatibus est quia esse non magni quae.",
	},
	{
		id: 3,
		title: "Third event",
		date: "2022-03-01",
		description:
			"Sit culpa quas ex nulla animi qui deleniti minus rem placeat mollitia. Et enim doloremque et quia sequi ea dolores voluptatem ea rerum vitae. Aut itaque incidunt est aperiam vero sit explicabo fuga id optio quis et molestiae nulla ex quae quam. Ab eius dolores ab tempora dolorum eos beatae soluta At ullam placeat est incidunt cumque.",
	},
];

export type TimelineData = (typeof timelineData)[number];

export interface TimelineElement {
	id: number;
	title: string;
	date: string;
	description: string;
}


export interface TimelineLayoutProps {
	items: TimelineElement[]; // Replace any[] with the actual type of items.
}

const Timeline = React.forwardRef<
	HTMLOListElement,
	React.HTMLAttributes<HTMLOListElement>
>(({ className, ...props }, ref) => (
	<ol ref={ref} className={cn("flex flex-col", className)} {...props} />
));
Timeline.displayName = "Timeline";

const TimelineItem = React.forwardRef<
	HTMLLIElement,
	React.LiHTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
	<li
		ref={ref}
		className={cn("relative flex flex-col p-6 pt-0 [&>*]:mb-3", className)}
		{...props}
	/>
));
TimelineItem.displayName = "TimelineItem";

const TimelineTime = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      // Adicionando flexbox para melhor posicionamento e media queries para responsividade
      "absolute right-0 transform -translate-x-1/2 text-sm font-semibold leading-none text-secondary-foreground",
      "md:right-full md:translate-x-0", // Ajuste em telas médias e maiores
      className
    )}
    {...props}
  />
));
TimelineTime.displayName = "TimelineTime";

const TimelineConnector = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn(
			"absolute top-[5px] left-[30px] -translate-x-1/2 translate-y-2 h-full w-px bg-primary",
			className,
		)}
		{...props}
	/>
));
TimelineConnector.displayName = "TimelineConnector";

const TimelineLastConnector = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn(
			"absolute top-[5px] left-[30px] -translate-x-1/2 translate-y-2 h-full w-px bg-gradient-to-b from-primary to-transparent",
			className,
		)}
		{...props}
	/>
));
TimelineLastConnector.displayName = "TimelineLastConnector";

const TimelineHeader = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("flex items-center gap-4 w-full", className)}
		{...props}
	/>
));
TimelineHeader.displayName = "TimelineHeader";

const TimelineTitle = React.forwardRef<
	HTMLHeadingElement,
	React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
	<h3
		ref={ref}
		className={cn(
			"font-semibold leading-none tracking-tight text-secondary-foreground",
			className,
		)}
		{...props}>
		{children}
	</h3>
));
TimelineTitle.displayName = "CardTitle";

const TimelineIcon = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("flex flex-col size-3 bg-primary rounded-full", className)}
		{...props}
	/>
));
TimelineIcon.displayName = "TimelineIcon";

const TimelineDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<p
		ref={ref}
		className={cn("text-sm text-muted-foreground max-w-sm", className)}
		{...props}
	/>
));
TimelineDescription.displayName = "TimelineDescription";

const TimelineContent = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("flex flex-col items-start p-6 pt-0", className)}
		{...props}
	/>
));
TimelineContent.displayName = "TimelineContent";

export {
	Timeline,
	TimelineItem,
	TimelineConnector,
	TimelineLastConnector,
	TimelineHeader,
	TimelineTitle,
	TimelineIcon,
	TimelineDescription,
	TimelineContent,
	TimelineTime,
};