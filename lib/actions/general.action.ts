"use server";

import { generateObject } from "ai";
import { google } from "@ai-sdk/google";

import { db } from "@/firebase/admin";
import { feedbackSchema } from "@/constants";

export async function createFeedback(params: CreateFeedbackParams) {
  return { success: true, feedbackId: "mock-feedback-id" };
}

export async function getInterviewById(id: string): Promise<Interview | null> {
  return {
    id: id,
    role: "Software Engineer",
    level: "Mid",
    questions: ["Tell me about yourself"],
    techstack: ["React", "Node.js"],
    createdAt: new Date().toISOString(),
    userId: "mock-user-id",
    type: "interview",
    finalized: true,
  };
}

export async function getFeedbackByInterviewId(
  params: GetFeedbackByInterviewIdParams
): Promise<Feedback | null> {
  return null;
}

export async function getLatestInterviews(
  params: GetLatestInterviewsParams
): Promise<Interview[] | null> {
  return [];
}

export async function getInterviewsByUserId(
  userId: string
): Promise<Interview[] | null> {
  return [];
}
