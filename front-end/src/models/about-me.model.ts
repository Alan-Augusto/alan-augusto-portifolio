import { Stack } from "./stack.model";

export interface AboutMeModel {
    title: string;
    role: string;
    description: string;
    image: string;
    objective: ObjectiveModel;
}

export interface ObjectiveModel {
    title: string;
    description: string;
    items: ObjectiveItemModel[];
}

export interface ObjectiveItemModel {
    stack: Stack;
    complete: boolean;
    url?: string;
}