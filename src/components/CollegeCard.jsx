import React from "react";
import ReactStars from "react-rating-stars-component";
import collegeImg from "../images/college_02.jpg";
import { composeNearestArray, formatMoney, parseOffertext } from "../utils";

import "../styles/card.css";

export default function CollegeCard({ collegeData }) {
  const {
    promoted,
    college_name,
    discount,
    original_fees,
    discounted_fees,
    fees_cycle,
    image,
    ranking,
    tags,
    amenties: amenities,
    rating,
    rating_remarks,
    famous_nearest_places,
    nearest_place,
    offertext,
  } = collegeData;

  const parsed_nearest_place = composeNearestArray(famous_nearest_places);

  return (
    <div className={promoted ? "college-card promoted" : "college-card"}>
      {promoted && <div className="card--promoted">PROMOTED</div>}
      <div className="college-card__upper">
        <img className="college-bg" src={collegeImg} alt="" />
        <div className="tint-overlay"></div>
        <div className="college-rating">
          <div className="college-rating__number">
            <span className="bold">{rating}</span>/5
          </div>
          <div className="college-rating__remark">{rating_remarks}</div>
        </div>
        <div className="college-highlight">
          <div className="college-tags">
            {tags.map((tag, index) => (
              <div className="tag" key={"tag" + index}>
                {tag}
              </div>
            ))}
          </div>
          <div className="college-ranking">#{ranking}</div>
        </div>
      </div>
      <div className="college-card__lower">
        <div className="card-main-content">
          <div className="main-details">
            <div className="main-details__row">
              <div className="college-name">{college_name}</div>
              <div className="college-rating--stars">
                {" "}
                <ReactStars
                  count={5}
                  value={rating}
                  // onChange={ratingChanged}
                  size={18}
                  activeColor="#444444"
                  edit={false}
                />
              </div>
            </div>
            <div className="main-details__row">
              <div className="college-nearest">{nearest_place[0]}</div>
              <div className="college-nearest--light">
                {"| " + nearest_place[1]}
              </div>
            </div>
            <div className="main-details__row">
              <div className="college-match-indicator teal-color">
                93% Match :
              </div>
              <div className="college-famous-nearest">
                {parsed_nearest_place.map((near, index) => (
                  <div
                    key={"famous-nearest" + index}
                    className="college-famous-nearest__item"
                  >
                    <span className="bold">{near[0]}</span>
                    {" from " + near[1]}
                    {index !== parsed_nearest_place.length - 1 && (
                      <span className="separator teal-color">,</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="fee-details">
            <div className="fee-details__row">
              <div className="college-original-fee">
                {" "}
                <span className="currency-symbol">₹</span>{" "}
                {formatMoney(original_fees)}
              </div>
              <div className="college-discount-tag">
                <div className="triangle-left"></div>
                <div className="discount-value">
                  <span className="bold">&#8901;</span>
                  {discount}
                </div>
              </div>
            </div>
            <div className="fee-details__row">
              <div className="college-discounted-fee">
                <span className="currency-symbol">₹</span>
                {formatMoney(discounted_fees)}
              </div>
            </div>
            <div className="fee-details__row">
              <div className="college-fee-cycle">{fees_cycle}</div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          {/* <div className="offer">{parseOffertext(offertext)}</div> */}
          <div className="offer">
            Flat Rs <span className="bold teal-color">2,000</span> off + upto Rs{" "}
            <span className="bold teal-color">500</span> wallet! to avail...{" "}
            <button className="login-btn--link">LOGIN</button>
          </div>
          <div className="college-amenities">
            {amenities.map((amenity, index) => (
              <div
                className="college-amenities__item teal-color"
                key={"amenity" + index}
              >
                {amenity}
                {index !== amenities.length - 1 && (
                  <span className="separator">&#8901;</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
