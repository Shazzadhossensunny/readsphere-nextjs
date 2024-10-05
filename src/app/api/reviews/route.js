import clientPromise from "@/app/utils/mongodb";

// Fetch all reviews (GET)
export async function GET(req) {
    const client = await clientPromise;
    const db = client.db("readSphare");

    try {
        const reviews = await db.collection("reviews").find({}).toArray();
        return new Response(JSON.stringify(reviews), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error("Failed to fetch reviews:", error);
        return new Response(
            JSON.stringify({
                message: "Failed to fetch reviews",
                error: error.message,
            }),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }
}

// Submit a new review (POST)
export async function POST(req) {
    const client = await clientPromise;
    const db = client.db("readSphare");

    try {
        // Parse the request body
        const body = await req.json();

        // Validate required fields
        const { bookId, rating, content } = body;
        if (!bookId || !rating || !content) {
            return new Response(
                JSON.stringify({
                    message: 'Missing required fields: bookId, rating, and content are mandatory.',
                }),
                {
                    status: 400,
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
        }

        // Construct the review object
        const review = {
            bookId,
            rating,
            content,
            createdAt: new Date().toISOString(), // Add createdAt timestamp
        };

        // Insert the review into the database
        const result = await db.collection("reviews").insertOne(review);

        return new Response(
            JSON.stringify({ ...review, _id: result.insertedId }),
            {
                status: 201,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    } catch (error) {
        console.error("Failed to submit review:", error);
        return new Response(
            JSON.stringify({
                message: "Failed to submit review",
                error: error.message,
            }),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }
}
