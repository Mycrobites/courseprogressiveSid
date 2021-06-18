import React from "react";

export default function RightSide() {
  return (
    <div>
      <div>
        <div>
          <h3>Order Details</h3>
          <div className="d-flex justify-content-between mb-4">
            <h5 className="text-muted">Price</h5>
            <p>49,000 Rs</p>
          </div>
          <div>
            <h5 className="d-inline-block mb-4">Promo Code</h5>
            <span className="mx-2">CODE40</span>
            <span className="mx-2">Apply</span>
          </div>
          <div className="d-flex justify-content-between mb-4">
            <h5>Discounted Price</h5>
            <span>4,000 Rs</span>
          </div>
          <div className="d-flex justify-content-between mb-4">
            <h5>GST 18% Applicabe</h5>
            <span>1,800 Rs</span>
          </div>
          <div className="d-flex justify-content-between mb-4">
            <b>--------------------------------------------------</b>
            <b>--------------------------------</b>
          </div>
          <div className="d-flex justify-content-between mb-4">
            <h5>Net Payable Amount</h5>
            <span>46,800 Rs</span>
          </div>
          <button className="btn btn-primary">Proceed To Payment</button>
        </div>
      </div>
    </div>
  );
}
