import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get<Post[]>("https://api.example.com/posts");
  return response.data;
};

fetchPosts().then((data) => {
  console.log(data[0].title);
});
