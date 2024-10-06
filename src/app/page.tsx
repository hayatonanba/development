import { db } from "@/db";
import { blogsTable } from "@/db/schema";

export default async function Home() {

const result = await db.select().from(blogsTable); 
  return (
    <div>
      {result.map(list => (
        <div>
          <p>{list.title}</p>
        </div>
      ))}
    </div>
  );
}
