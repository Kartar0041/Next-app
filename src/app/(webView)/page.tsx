import Image from "next/image";
import Poster from "@/assets/images/sunglasses.jpg";

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Welcome to Our Blog</h1>
        <p>Discover the latest insights, stories, and tips.</p>
        <a href="#" className="cta-button">Start Exploring</a>
      </section>

      <section className="featured-posts">
        <h2>Featured Posts</h2>
        <div className="blog-wrapper">
          <div className="blog-card">
            <div className="blog-thumbnail">
              <Image
                src={Poster}
                alt="Blog Thumbnail"
                height={300}
                width={200}
              />
            </div>
            <div className="blog-content">
              <h3 className="blog-title">Title of the Blog Post Goes Here</h3>
              <p className="blog-excerpt">A brief excerpt or summary of the blog post content. It should provide enough information to entice the reader to click and read more.</p>
              <a href="#" className="read-more">Read More</a>
            </div>
          </div>

          <div className="blog-card">
            <div className="blog-thumbnail">
              <Image
                src={Poster}
                alt="Blog Thumbnail"
                height={300}
                width={200}
              />
            </div>
            <div className="blog-content">
              <h3 className="blog-title">Title of the Blog Post Goes Here</h3>
              <p className="blog-excerpt">A brief excerpt or summary of the blog post content. It should provide enough information to entice the reader to click and read more.</p>
              <a href="#" className="read-more">Read More</a>
            </div>
          </div>

          <div className="blog-card">
            <div className="blog-thumbnail">
              <Image
                src={Poster}
                alt="Blog Thumbnail"
                height={300}
                width={200}
              />
            </div>
            <div className="blog-content">
              <h3 className="blog-title">Title of the Blog Post Goes Here</h3>
              <p className="blog-excerpt">A brief excerpt or summary of the blog post content. It should provide enough information to entice the reader to click and read more.</p>
              <a href="#" className="read-more">Read More</a>
            </div>
          </div>

          <div className="blog-card">
            <div className="blog-thumbnail">
              <Image
                src={Poster}
                alt="Blog Thumbnail"
                height={300}
                width={200}
              />
            </div>
            <div className="blog-content">
              <h3 className="blog-title">Title of the Blog Post Goes Here</h3>
              <p className="blog-excerpt">A brief excerpt or summary of the blog post content. It should provide enough information to entice the reader to click and read more.</p>
              <a href="#" className="read-more">Read More</a>
            </div>
          </div>

          <div className="blog-card">
            <div className="blog-thumbnail">
              <Image
                src={Poster}
                alt="Blog Thumbnail"
                height={300}
                width={200}
              />
            </div>
            <div className="blog-content">
              <h3 className="blog-title">Title of the Blog Post Goes Here</h3>
              <p className="blog-excerpt">A brief excerpt or summary of the blog post content. It should provide enough information to entice the reader to click and read more.</p>
              <a href="#" className="read-more">Read More</a>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <h2>About Us</h2>
        <p>Learn more about our mission and team.</p>
      </section>

      <section className="latest-posts">
        <h2>Latest Posts</h2>
      </section>
    </>
  );
}
