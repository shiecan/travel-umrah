const instagramPostsContainer = document.getElementById("instagram-posts");
const accessToken =
  "IGQWROQUNwMnBYcFhpUTlLSlF5MVJ6UzI1UGxvdGVOaWZA5T21NdFpGLTNDRGNFTURYS1lQVXd5eWY5Sm1LUXBYUE5RZA05pbFJiUFFieXZAhZA3V5M3YzUFA2akZAoQ3ZALYjVUYXNOd043c3BTNW1GNUF3cUtVT0FuaUkZD"; // Ganti dengan token akses Anda

async function fetchInstagramPosts() {
  try {
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption,thumbnail_url&access_token=${accessToken}`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    const posts = data.data;

    posts.forEach((post) => {
      const imageURL = post.thumbnail_url || post.media_url;
      const postElement = document.createElement("div");
      postElement.classList.add("instagram-post");
      postElement.innerHTML = `<img src="${imageURL}" alt="Instagram Post">`;
      instagramPostsContainer.appendChild(postElement);
    });
  } catch (error) {
    console.error("Error fetching Instagram posts:", error);
  }
}

fetchInstagramPosts();
