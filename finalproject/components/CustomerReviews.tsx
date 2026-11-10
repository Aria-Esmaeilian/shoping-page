import { cacheLife } from "next/cache";
import ReviewsSlider from "./ReviewsSlider";
import type { Review } from "./ReviewsSlider";

type Comment = {
  id: number;
  body: string;
  likes: number;
  user: {
    id: number;
    username: string;
    fullName: string;
  };
};

type CommentsResponse = {
  comments: Comment[];
};

export default async function CustomerReviews() {
  "use cache";
  cacheLife("hours");

  try {
    const get = await fetch("https://dummyjson.com/comments?limit=10");

    if (!get.ok) {
      throw new Error("Failed to fetch comments");
    }

    const data: CommentsResponse = await get.json();

    const reviews: Review[] = data.comments.map((item) => ({
      id: item.id.toString(),
      reviewerName: item.user.fullName,
      comment: item.body,
      rating: 0,
    }));

    return <ReviewsSlider reviews={reviews} />;
  } catch (error) {
    console.error("Reviews Error:", error);

    return <p>Failed to load customer reviews.</p>;
  }
}
