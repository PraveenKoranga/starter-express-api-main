import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useDispatch, useSelector } from "react-redux";
import { postReview } from "../../../action/reviewAction";
import { useHistory } from "react-router";
import Loader from "../../../shared/Loader";
import Message from "../../../shared/Message";

const reviewDate = new Date().toDateString();

const Reviews = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [review, setReview] = useState("");

  const user = JSON.parse(localStorage.getItem("profile"));

  const reviews = useSelector((state) => state.reviews);
  const { loading, error, Reviews } = reviews;

  useEffect(() => {
    if (user) {
      setName(user.user.name || user.user.username);
      setImage(
        user.user.image || user.user.username || user.user.name.imageUrl
      );
      setEmail(user.user.email);
      setDate(reviewDate);
    }
  }, [user]);

  const reviewPost = () => {
    dispatch(postReview(name, image, email, date, review));
    history.push("/");
  };
  const redirect = () => {
    history.push("/login");
  };
  const addElipsis = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + "..." : str;
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger" />
      ) : (
        <>
          <Container className="review-container">
            <h1 className="students-reviews">
              <span className="students-heading">Students</span> Says About Us
            </h1>

            {Reviews ? (
              <div>
                <AliceCarousel autoPlay autoPlayInterval="3000">
                  {Reviews.map((review) => (
                    <div className="review-box">
                      <div className="review-user-image">
                        <img
                          src="https://tse2.mm.bing.net/th?id=OIP.rz_yiPxDQENe_QOrsJCp8QHaEK&pid=Api&P=0&w=328&h=186"
                          alt=""
                        />
                        <p className="review-username">{review.name}</p>
                      </div>
                      <div className="review-text">
                        <p>{addElipsis(review.review, 150)}</p>
                        <p className="review-username-mobile">{review.name}</p>
                        <p>{review.date}</p>
                      </div>
                    </div>
                  ))}
                </AliceCarousel>
              </div>
            ) : (
              ""
            )}
          </Container>
          <Container>
            <h1 className="reviews-text-box">Write your review</h1>
            <Container style={{ display: "flex" }}>
              <textarea
                name="reviewTest"
                id="write-review"
                rows="3"
                placeholder="Write Your Review"
                className="reviews-textarea"
                onChange={(e) => setReview(e.target.value)}
              ></textarea>
              {user ? (
                <Button
                  className="review-post-button"
                  onClick={() => reviewPost()}
                >
                  Post
                </Button>
              ) : (
                <Button
                  className="review-post-button"
                  onClick={() => redirect()}
                >
                  Post
                </Button>
              )}
            </Container>
          </Container>
        </>
      )}
    </>
  );
};

export default Reviews;
