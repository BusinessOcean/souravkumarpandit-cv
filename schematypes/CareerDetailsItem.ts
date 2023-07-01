import { PortableTextBlock } from 'sanity';
type CareerTimeline = {
    title: string
    designation: string
    from_date: string;
    to_date: string;
}

type WorkReviewFeedback = {
    employee: string
    employeeDesignation: string
    comments: PortableTextBlock[];
}